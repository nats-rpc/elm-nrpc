port module Generate exposing (main)

{-| -}

import Base64.Decode
import Base64.Encode
import Elm
import Elm.Annotation as Type
import Gen.CodeGen.Generate as Generate
import Google.Protobuf
import Proto.Google.Protobuf.Compiler
import Proto.Google.Protobuf.Compiler.CodeGeneratorResponse
import Protobuf.Decode
import Protobuf.Encode
import Protobuf.Types.Int64 as Int64


port onSuccessSend : String -> Cmd msg


type alias Flags =
    { request : String }


main : Program Flags () ()
main =
    Platform.worker
        { init = init
        , update =
            \_ model ->
                ( model, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }


parseRequest : String -> Result Generate.Error Proto.Google.Protobuf.Compiler.CodeGeneratorRequest
parseRequest s =
    case
        Base64.Decode.decode Base64.Decode.bytes s
    of
        Err err ->
            Err <|
                { title = "base64 decode"
                , description =
                    case err of
                        Base64.Decode.ValidationError ->
                            "ValidationError"

                        Base64.Decode.InvalidByteSequence ->
                            "Base64.Decode.InvalidByteSequence"
                }

        Ok bReq ->
            case Protobuf.Decode.decode Proto.Google.Protobuf.Compiler.decodeCodeGeneratorRequest bReq of
                Just api ->
                    Ok api

                Nothing ->
                    Err
                        { title = "protobuf decode"
                        , description = "failed to decode a protobuf api"
                        }


handleRequest :
    Proto.Google.Protobuf.Compiler.CodeGeneratorRequest
    -> Result String (List Proto.Google.Protobuf.Compiler.CodeGeneratorResponse.File)
handleRequest request =
    Err "not (yet) implemented"


init : Flags -> ( (), Cmd () )
init flags =
    case
        parseRequest flags.request
    of
        Ok request ->
            case handleRequest request of
                Ok fileList ->
                    ( ()
                    , { error = ""
                      , supportedFeatures = Int64.fromInts 0 0
                      , file = fileList
                      }
                        |> Proto.Google.Protobuf.Compiler.encodeCodeGeneratorResponse
                        |> Protobuf.Encode.encode
                        |> Base64.Encode.bytes
                        |> Base64.Encode.encode
                        |> onSuccessSend
                    )

                Err err ->
                    ( ()
                    , { error = err
                      , supportedFeatures = Int64.fromInts 0 0
                      , file = []
                      }
                        |> Proto.Google.Protobuf.Compiler.encodeCodeGeneratorResponse
                        |> Protobuf.Encode.encode
                        |> Base64.Encode.bytes
                        |> Base64.Encode.encode
                        |> onSuccessSend
                    )

        Err err ->
            ( ()
            , Generate.error
                [ err
                ]
            )


file : Elm.File
file =
    Elm.file [ "HelloWorld" ]
        [ Elm.declaration "hello"
            (Elm.string "World!")
        ]
