module Generate exposing (Error, errToString, generate)

{-| -}

import Dict exposing (Dict)
import Elm
import Elm.Annotation as Type
import Gen.Nrpc
import Gen.Result
import Gen.String
import List.Extra as List
import Proto.Google.Protobuf as Protobuf
import Proto.Google.Protobuf.Compiler as Compiler
import Proto.Google.Protobuf.Compiler.CodeGeneratorResponse as CodeGeneratorResponse
import Proto.Nrpc
import String.Extra as String


type alias Error =
    { title : String
    , description : String
    }


errToString : Error -> String
errToString err =
    err.title ++ ": " ++ err.description


elmFileToResponseFile : Elm.File -> CodeGeneratorResponse.File
elmFileToResponseFile file =
    { name = file.path
    , insertionPoint = ""
    , content = file.contents
    , generatedCodeInfo = Nothing
    }


generate :
    Compiler.CodeGeneratorRequest
    -> Result String (List CodeGeneratorResponse.File)
generate request =
    let
        pbTypes =
            buildPbTypes request.protoFile
    in
    request.fileToGenerate
        |> List.foldl
            (\name res ->
                Result.map2
                    (++)
                    (generateFile pbTypes name request.protoFile
                        |> Result.map (List.map elmFileToResponseFile)
                    )
                    res
            )
            (Ok [])


moduleName : String -> String
moduleName name =
    String.toUpper (String.left 1 name)
        ++ String.dropLeft 1 name


type alias FileOptions =
    { nrpcPackageSubject : String
    , nrpcPackageSubjectParams : List String
    , nrpcServiceSubjectRule : Proto.Nrpc.SubjectRule
    , nrpcMethodSubjectRule : Proto.Nrpc.SubjectRule
    }


fileOptions :
    Protobuf.FileDescriptorProto
    -> FileOptions
fileOptions file =
    file.options
        |> Maybe.map
            (\options ->
                { nrpcPackageSubject =
                    if options.nrpcPackageSubject == "" then
                        file.package

                    else
                        options.nrpcPackageSubject
                , nrpcPackageSubjectParams = options.nrpcPackageSubjectParams
                , nrpcServiceSubjectRule = options.nrpcServiceSubjectRule
                , nrpcMethodSubjectRule = options.nrpcMethodSubjectRule
                }
            )
        |> Maybe.withDefault
            { nrpcPackageSubject = file.package
            , nrpcPackageSubjectParams = []
            , nrpcServiceSubjectRule = Proto.Nrpc.defaultSubjectRule
            , nrpcMethodSubjectRule = Proto.Nrpc.defaultSubjectRule
            }


type alias PbTypes =
    { types : Dict String Type.Annotation
    , encoders : Dict String Elm.Expression
    , decoders : Dict String Elm.Expression
    }


emptyPbTypes : PbTypes
emptyPbTypes =
    { types = Dict.empty
    , encoders = Dict.empty
    , decoders = Dict.empty
    }


mergePbTypes : PbTypes -> PbTypes -> PbTypes
mergePbTypes src target =
    { types = Dict.union src.types target.types
    , encoders = Dict.union src.encoders target.encoders
    , decoders = Dict.union src.decoders target.decoders
    }


messagePbType :
    List String
    -> Protobuf.DescriptorProto
    -> ( String, Type.Annotation )
messagePbType importFrom desc =
    ( desc.name
    , Type.named importFrom
        desc.name
    )


buildFilePbTypes : PbTypes -> Protobuf.FileDescriptorProto -> PbTypes
buildFilePbTypes types file =
    List.foldl
        (\t output ->
            let
                importFrom =
                    "Proto"
                        :: (file.package
                                |> String.split "."
                                |> List.map String.toSentenceCase
                           )

                ( name, type_ ) =
                    messagePbType importFrom t
            in
            { output
                | types = Dict.insert ("." ++ file.package ++ "." ++ name) type_ output.types
                , encoders =
                    Dict.insert ("." ++ file.package ++ "." ++ name)
                        (Elm.value
                            { importFrom = importFrom
                            , name = "encode" ++ name
                            , annotation =
                                Just <|
                                    Type.function [ type_ ] <|
                                        Type.named [ "Protobuf", "Encode" ] "Encoder"
                            }
                        )
                        output.encoders
                , decoders =
                    Dict.insert ("." ++ file.package ++ "." ++ name)
                        (Elm.value
                            { importFrom = importFrom
                            , name = "decode" ++ name
                            , annotation =
                                Just <|
                                    Type.namedWith [ "Protobuf", "Decode" ] "Decoder" [ type_ ]
                            }
                        )
                        output.decoders
            }
        )
        types
        file.messageType


buildPbTypes : List Protobuf.FileDescriptorProto -> PbTypes
buildPbTypes =
    List.foldl
        (\f t ->
            mergePbTypes (buildFilePbTypes t f) t
        )
        emptyPbTypes


type alias FileAPI =
    { module_path : List String
    , subject : Elm.Expression
    , subjectParams :
        Maybe
            { params : List String
            , annotation : Type.Annotation
            , datatype : Type.Annotation
            }
    }


generateFile :
    PbTypes
    -> String
    -> List Protobuf.FileDescriptorProto
    -> Result String (List Elm.File)
generateFile pbTypes name files =
    files
        |> List.filter (.name >> (==) name)
        |> List.head
        |> Result.fromMaybe ("no description for file " ++ name)
        |> Result.andThen
            (\file ->
                let
                    module_path =
                        "Nrpc"
                            :: String.split "." file.package
                            |> List.map moduleName

                    options =
                        fileOptions file

                    subjectParamsAnnotation =
                        options.nrpcPackageSubjectParams
                            |> List.map (\p -> ( p, Type.string ))
                            |> Type.record

                    fileAPI : FileAPI
                    fileAPI =
                        { module_path = module_path
                        , subject =
                            Elm.value
                                { importFrom = module_path
                                , name = "subject"
                                , annotation =
                                    case options.nrpcPackageSubjectParams of
                                        [] ->
                                            Just Type.string

                                        _ ->
                                            Just <|
                                                Type.function
                                                    [ Type.alias module_path "SubjectParams" [] subjectParamsAnnotation
                                                    ]
                                                    Type.string
                                }
                        , subjectParams =
                            case options.nrpcPackageSubjectParams of
                                [] ->
                                    Nothing

                                params ->
                                    Just
                                        { params = params
                                        , annotation = subjectParamsAnnotation
                                        , datatype =
                                            Type.alias module_path
                                                "SubjectParams"
                                                []
                                                subjectParamsAnnotation
                                        }
                        }
                in
                Elm.file module_path
                    (case fileAPI.subjectParams of
                        Nothing ->
                            [ Elm.declaration "subject"
                                (options.nrpcPackageSubject |> Elm.string)
                            ]

                        Just subjectParams ->
                            [ Elm.alias "SubjectParams" subjectParams.annotation
                            , Elm.declaration "subject"
                                (Elm.fn
                                    ( "params"
                                    , Just <|
                                        Type.alias []
                                            "SubjectParams"
                                            []
                                            subjectParams.annotation
                                    )
                                    (\p ->
                                        Gen.String.join (Elm.string ".") <|
                                            Elm.list <|
                                                Elm.string options.nrpcPackageSubject
                                                    :: (subjectParams.params |> List.map (\pname -> Elm.get pname p))
                                    )
                                )
                            ]
                    )
                    :: (file.service
                            |> List.map (generateServiceFile pbTypes file options fileAPI)
                       )
                    |> Ok
            )


type alias ServiceOptions =
    { subject : String
    , subjectParams : List String
    }


type alias ServiceAPI =
    { subject : Elm.Expression
    , subjectParams :
        Maybe
            { params : List String
            , annotation : Type.Annotation
            , datatype : Type.Annotation
            }
    }


serviceOptions : FileOptions -> Protobuf.ServiceDescriptorProto -> ServiceOptions
serviceOptions fOptions service =
    let
        default =
            case fOptions.nrpcServiceSubjectRule of
                Proto.Nrpc.COPY ->
                    service.name

                Proto.Nrpc.TOLOWER ->
                    service.name |> String.toLower

                Proto.Nrpc.SubjectRuleUnrecognized_ _ ->
                    service.name
    in
    service.options
        |> Maybe.map
            (\options ->
                { subject =
                    if options.nrpcServiceSubject == "" then
                        default

                    else
                        options.nrpcServiceSubject
                , subjectParams = options.nrpcServiceSubjectParams
                }
            )
        |> Maybe.withDefault
            { subject = default
            , subjectParams = []
            }


generateServiceFile :
    PbTypes
    -> Protobuf.FileDescriptorProto
    -> FileOptions
    -> FileAPI
    -> Protobuf.ServiceDescriptorProto
    -> Elm.File
generateServiceFile pbTypes file fOptions fAPI service =
    let
        options =
            serviceOptions fOptions service

        module_path =
            fAPI.module_path ++ [ service.name ]

        subjectParams =
            case options.subjectParams of
                [] ->
                    Nothing

                params ->
                    let
                        annotation =
                            params
                                |> List.map (\p -> ( p, Type.string ))
                                |> Type.record
                    in
                    Just
                        { params = params
                        , annotation = annotation
                        , datatype =
                            Type.alias []
                                "SubjectParams"
                                []
                                annotation
                        }

        subjectArgs =
            List.filterMap identity
                [ fAPI.subjectParams
                    |> Maybe.map
                        (\params ->
                            ( "packageParams", Just params.datatype )
                        )
                , subjectParams
                    |> Maybe.map
                        (\params ->
                            ( "params", Just params.datatype )
                        )
                ]

        serviceAPI : ServiceAPI
        serviceAPI =
            { subject =
                Elm.value
                    { importFrom = []
                    , name = "subject"
                    , annotation =
                        case subjectArgs of
                            [] ->
                                Just Type.string

                            params ->
                                Just (Type.function (params |> List.filterMap Tuple.second) Type.string)
                    }
            , subjectParams = subjectParams
            }
    in
    Elm.file module_path <|
        (case ( fAPI.subjectParams, subjectParams ) of
            ( Nothing, Nothing ) ->
                [ Elm.declaration "subject"
                    (Gen.String.join (Elm.string ".") <|
                        Elm.list
                            [ fAPI.subject
                            , Elm.string options.subject
                            ]
                    )
                ]

            ( Nothing, Just params ) ->
                [ Elm.alias "SubjectParams" params.annotation
                , Elm.declaration "subject"
                    (Elm.fn ( "params", Just params.datatype )
                        (\p ->
                            Gen.String.join (Elm.string ".") <|
                                Elm.list <|
                                    fAPI.subject
                                        :: Elm.string options.subject
                                        :: (params.params |> List.map (\pname -> Elm.get pname p))
                        )
                    )
                ]

            ( Just pSubjectParams, Nothing ) ->
                [ Elm.declaration "subject"
                    (Elm.fn ( "packageParams", Just pSubjectParams.datatype )
                        (\p ->
                            Gen.String.join (Elm.string ".") <|
                                Elm.list <|
                                    [ Elm.apply fAPI.subject [ p ]
                                    , Elm.string options.subject
                                    ]
                        )
                    )
                ]

            ( Just pSubjectParams, Just params ) ->
                [ Elm.alias "SubjectParams" params.annotation
                , Elm.declaration "subject"
                    (Elm.fn2 ( "packageParams", Just pSubjectParams.datatype )
                        ( "params", Just params.datatype )
                        (\p s ->
                            Gen.String.join (Elm.string ".") <|
                                Elm.list <|
                                    Elm.apply fAPI.subject [ p ]
                                        :: Elm.string options.subject
                                        :: (params.params |> List.map (\pname -> Elm.get pname s))
                        )
                    )
                ]
        )
            ++ (service.method
                    |> List.concatMap (generateMethodDeclaration pbTypes fOptions fAPI options serviceAPI)
               )


type alias MethodOptions =
    { subject : String
    , subjectParams : List String
    , streamedReply : Bool
    , noRequest : Bool
    , noReply : Bool
    }


methodOptions : FileOptions -> Protobuf.MethodDescriptorProto -> MethodOptions
methodOptions fOptions method =
    let
        defaultSubject =
            case fOptions.nrpcServiceSubjectRule of
                Proto.Nrpc.COPY ->
                    method.name

                Proto.Nrpc.TOLOWER ->
                    method.name |> String.toLower

                Proto.Nrpc.SubjectRuleUnrecognized_ _ ->
                    method.name
    in
    method.options
        |> Maybe.map
            (\options ->
                { subject =
                    if options.nrpcMethodSubject == "" then
                        defaultSubject

                    else
                        options.nrpcMethodSubject
                , subjectParams = options.nrpcMethodSubjectParams
                , streamedReply = options.nrpcStreamedReply
                , noRequest = method.inputType == ".nrpc.NoRequest"
                , noReply = method.outputType == ".nrpc.NoReply"
                }
            )
        |> Maybe.withDefault
            { subject = defaultSubject
            , subjectParams = []
            , streamedReply = False
            , noRequest = method.inputType == "nrpc.NoRequest"
            , noReply = method.outputType == ".nrpc.NoReply"
            }


generateMethodDeclaration :
    PbTypes
    -> FileOptions
    -> FileAPI
    -> ServiceOptions
    -> ServiceAPI
    -> Protobuf.MethodDescriptorProto
    -> List Elm.Declaration
generateMethodDeclaration pbTypes fOptions fAPI sOptions sAPI method =
    let
        options =
            methodOptions fOptions method

        fnName =
            String.decapitalize method.name

        subjectFnName =
            fnName ++ "__Subject"

        subjectParams =
            case options.subjectParams of
                [] ->
                    Nothing

                params ->
                    let
                        typename =
                            String.toSentenceCase method.name ++ "__SubjectParams"

                        annotation =
                            params
                                |> List.map (\p -> ( p, Type.string ))
                                |> Type.record
                    in
                    Just
                        { params = params
                        , annotation = annotation
                        , typename = typename
                        , datatype =
                            Type.alias []
                                typename
                                []
                                annotation
                        }

        subjectArgs =
            List.filterMap identity
                [ fAPI.subjectParams
                    |> Maybe.map
                        (\params ->
                            ( "packageParams", Just params.datatype )
                        )
                , sAPI.subjectParams
                    |> Maybe.map
                        (\params ->
                            ( "serviceParams", Just params.datatype )
                        )
                , subjectParams
                    |> Maybe.map
                        (\params ->
                            ( "params", Just params.datatype )
                        )
                ]

        subjectFn =
            Elm.value
                { importFrom = []
                , name = subjectFnName
                , annotation =
                    Just
                        (Type.function
                            (subjectArgs |> List.filterMap Tuple.second)
                            Type.string
                        )
                }
    in
        (case subjectParams of
            Nothing ->
                []

            Just params ->
                [ Elm.alias params.typename params.annotation ]
        )
            ++ [ Elm.declaration subjectFnName
                    (Elm.function subjectArgs
                        (\args ->
                            Gen.String.join
                                (Elm.string ".")
                            <|
                                Elm.list <|
                                    Elm.apply sAPI.subject
                                        (case subjectParams of
                                            Nothing ->
                                                args

                                            _ ->
                                                List.take (List.length args - 1) args
                                        )
                                        :: Elm.string options.subject
                                        :: (case options.subjectParams of
                                                [] ->
                                                    []

                                                params ->
                                                    case List.last args of
                                                        Nothing ->
                                                            []

                                                        Just p ->
                                                            params |> List.map (\n -> Elm.get n p)
                                           )
                        )
                    )
               , if not options.noRequest && not options.noReply then
                   Elm.declaration fnName
                        (let
                            onResponseType =
                                Dict.get method.outputType pbTypes.types
                                    |> Maybe.withDefault Type.bool
                                    |> (\t ->
                                            Type.function
                                                [ Type.namedWith
                                                    [ "Result" ]
                                                    "Result"
                                                    [ Type.named [ "Nrpc" ] "Error"
                                                    , t
                                                    ]
                                                ]
                                            <|
                                                Type.var "msg"
                                       )
                         in
                         Elm.function
                            (subjectArgs
                                ++ [ ( "onResponse", Just onResponseType ) ]
                                ++ (Dict.get method.inputType pbTypes.types
                                        |> Maybe.map (\t -> [ ( "input", Just t ) ])
                                        |> Maybe.withDefault []
                                   )
                            )
                            (\args ->
                                let
                                    sArgs =
                                        List.take (List.length subjectArgs) args
                                in
                                case List.drop (List.length subjectArgs) args of
                                    [ rArg, iArg ] ->
                                        (if options.streamedReply then
                                            Gen.Nrpc.call_.streamRequest
                                        else
                                            Gen.Nrpc.call_.request
                                            )

                                            (Dict.get method.inputType pbTypes.encoders
                                                |> Maybe.withDefault (Elm.fn ( "i", Just Type.bool ) (\_ -> Elm.bool False))
                                            )
                                            (Dict.get method.outputType pbTypes.decoders
                                                |> Maybe.withDefault (Elm.bool False)
                                            )
                                            (Elm.apply subjectFn (List.take (List.length subjectArgs) args))
                                            iArg
                                            rArg

                                    _ ->
                                        Elm.value
                                            { importFrom = [ "Nats", "Effect" ]
                                            , name = "none"
                                            , annotation =
                                                Just <|
                                                    Type.namedWith [ "Nats" ]
                                                        "Effect"
                                                        [ Type.named [ "Bytes" ] "Bytes"
                                                        , Type.var "msg"
                                                        ]
                                            }
                            )
                        )
                else if options.noRequest then
                    Elm.declaration fnName
                        (let
                            onResponseType =
                                Dict.get method.outputType pbTypes.types
                                    |> Maybe.withDefault Type.bool
                                    |> (\t ->
                                            Type.function
                                                [ Type.namedWith
                                                    [ "Result" ]
                                                    "Result"
                                                    [ Type.named [ "Nrpc" ] "Error"
                                                    , t
                                                    ]
                                                ]
                                            <|
                                                Type.var "msg"
                                       )

                                in
                                Elm.function
                                (subjectArgs ++ [("onResponse", Just onResponseType)])
                                    (\args ->
                                        let
                                            sArgs =
                                                List.take (List.length subjectArgs) args
                                        in
                                        case List.drop (List.length subjectArgs) args of
                                            [ rArg ] ->
                                                Gen.Nrpc.call_.subscribeToNoRequestMethod 
                                                    (Elm.apply subjectFn (List.take (List.length subjectArgs) args))

                                                    (Dict.get method.outputType pbTypes.decoders
                                                        |> Maybe.withDefault (Elm.bool False)
                                                    )
                                                    rArg

                                            _ ->
                                                Elm.value
                                                    { importFrom = [ "Nats", "Effect" ]
                                                    , name = "none"
                                                    , annotation =
                                                        Just <|
                                                            Type.namedWith [ "Nats" ]
                                                                "Effect"
                                                                [ Type.named [ "Bytes" ] "Bytes"
                                                                , Type.var "msg"
                                                                ]
                                                    }
                                                )
                            )
                else
                   Elm.declaration fnName
                        (
                         Elm.function
                            (subjectArgs
                                ++ (Dict.get method.inputType pbTypes.types
                                        |> Maybe.map (\t -> [ ( "input", Just t ) ])
                                        |> Maybe.withDefault []
                                   )
                            )
                            (\args ->
                                let
                                    sArgs =
                                        List.take (List.length subjectArgs) args
                                in
                                case List.drop (List.length subjectArgs) args of
                                    [ iArg ] ->
                                        Gen.Nrpc.call_.requestNoReply
                                            (Dict.get method.inputType pbTypes.encoders
                                                |> Maybe.withDefault (Elm.fn ( "i", Just Type.bool ) (\_ -> Elm.bool False))
                                            )
                                            (Elm.apply subjectFn (List.take (List.length subjectArgs) args))
                                            iArg

                                    _ ->
                                        Elm.value
                                            { importFrom = [ "Nats", "Effect" ]
                                            , name = "none"
                                            , annotation =
                                                Just <|
                                                    Type.namedWith [ "Nats" ]
                                                        "Effect"
                                                        [ Type.named [ "Bytes" ] "Bytes"
                                                        , Type.var "msg"
                                                        ]
                                            }
                            )
                        )
               ]

