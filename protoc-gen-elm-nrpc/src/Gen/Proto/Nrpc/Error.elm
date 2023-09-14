module Gen.Proto.Nrpc.Error exposing (annotation_, call_, caseOf_, decodeType, defaultType, encodeType, fieldNumbersType, fromInternalType, make_, moduleName_, toInternalType, values_)

{-| 
@docs moduleName_, decodeType, encodeType, fromInternalType, toInternalType, defaultType, fieldNumbersType, annotation_, make_, caseOf_, call_, values_
-}


import Elm
import Elm.Annotation as Type
import Elm.Case


{-| The name of this module. -}
moduleName_ : List String
moduleName_ =
    [ "Proto", "Nrpc", "Error" ]


{-| {-| Declares how to decode a `Type` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeType: Protobuf.Decode.Decoder Type
-}
decodeType : Elm.Expression
decodeType =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Error" ]
        , name = "decodeType"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Type" [] ]
                )
        }


{-| {-| Declares how to encode a `Type` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeType: Type -> Protobuf.Encode.Encoder
-}
encodeType : Elm.Expression -> Elm.Expression
encodeType encodeTypeArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "encodeType"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Type" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeTypeArg ]


{-| {-| Convert the internal type `Proto__Nrpc__Error__Type` into a `Type`.


Using two different types is necessary to avoid recursive module references while having readable constructor names.


-}

fromInternalType: Proto.Nrpc.Internals_.Proto__Nrpc__Error__Type -> Type
-}
fromInternalType : Elm.Expression -> Elm.Expression
fromInternalType fromInternalTypeArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "fromInternalType"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Proto", "Nrpc", "Internals_" ]
                            "Proto__Nrpc__Error__Type"
                            []
                        ]
                        (Type.namedWith [] "Type" [])
                    )
            }
        )
        [ fromInternalTypeArg ]


{-| {-| Convert a `Type` into its internal representation `Proto__Nrpc__Error__Type`.


Using two different types is necessary to avoid recursive module references while having readable constructor names.


-}

toInternalType: Type -> Proto.Nrpc.Internals_.Proto__Nrpc__Error__Type
-}
toInternalType : Elm.Expression -> Elm.Expression
toInternalType toInternalTypeArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "toInternalType"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Type" [] ]
                        (Type.namedWith
                            [ "Proto", "Nrpc", "Internals_" ]
                            "Proto__Nrpc__Error__Type"
                            []
                        )
                    )
            }
        )
        [ toInternalTypeArg ]


{-| {-| Default for Type. Should only be used for 'required' decoders as an initial value.


-}

defaultType: Type
-}
defaultType : Elm.Expression
defaultType =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Error" ]
        , name = "defaultType"
        , annotation = Just (Type.namedWith [] "Type" [])
        }


{-| {-| The field numbers for the fields of `Type`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersType: Type -> Int
-}
fieldNumbersType : Elm.Expression -> Elm.Expression
fieldNumbersType fieldNumbersTypeArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "fieldNumbersType"
            , annotation =
                Just (Type.function [ Type.namedWith [] "Type" [] ] Type.int)
            }
        )
        [ fieldNumbersTypeArg ]


annotation_ : { type_ : Type.Annotation }
annotation_ =
    { type_ = Type.namedWith [ "Proto", "Nrpc", "Error" ] "Type" [] }


make_ :
    { cLIENT : Elm.Expression
    , sERVER : Elm.Expression
    , eOS : Elm.Expression
    , sERVERTOOBUSY : Elm.Expression
    , typeUnrecognized_ : Elm.Expression -> Elm.Expression
    }
make_ =
    { cLIENT =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "CLIENT"
            , annotation = Just (Type.namedWith [] "Type" [])
            }
    , sERVER =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "SERVER"
            , annotation = Just (Type.namedWith [] "Type" [])
            }
    , eOS =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "EOS"
            , annotation = Just (Type.namedWith [] "Type" [])
            }
    , sERVERTOOBUSY =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "SERVERTOOBUSY"
            , annotation = Just (Type.namedWith [] "Type" [])
            }
    , typeUnrecognized_ =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Error" ]
                    , name = "TypeUnrecognized_"
                    , annotation = Just (Type.namedWith [] "Type" [])
                    }
                )
                [ ar0 ]
    }


caseOf_ :
    { type_ :
        Elm.Expression
        -> { typeTags_0_0
            | cLIENT : Elm.Expression
            , sERVER : Elm.Expression
            , eOS : Elm.Expression
            , sERVERTOOBUSY : Elm.Expression
            , typeUnrecognized_ : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    }
caseOf_ =
    { type_ =
        \typeExpression typeTags ->
            Elm.Case.custom
                typeExpression
                (Type.namedWith [ "Proto", "Nrpc", "Error" ] "Type" [])
                [ Elm.Case.branch0 "CLIENT" typeTags.cLIENT
                , Elm.Case.branch0 "SERVER" typeTags.sERVER
                , Elm.Case.branch0 "EOS" typeTags.eOS
                , Elm.Case.branch0 "SERVERTOOBUSY" typeTags.sERVERTOOBUSY
                , Elm.Case.branch1
                    "TypeUnrecognized_"
                    ( "basics.Int", Type.int )
                    typeTags.typeUnrecognized_
                ]
    }


call_ :
    { encodeType : Elm.Expression -> Elm.Expression
    , fromInternalType : Elm.Expression -> Elm.Expression
    , toInternalType : Elm.Expression -> Elm.Expression
    , fieldNumbersType : Elm.Expression -> Elm.Expression
    }
call_ =
    { encodeType =
        \encodeTypeArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Error" ]
                    , name = "encodeType"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Type" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeTypeArg ]
    , fromInternalType =
        \fromInternalTypeArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Error" ]
                    , name = "fromInternalType"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Proto", "Nrpc", "Internals_" ]
                                    "Proto__Nrpc__Error__Type"
                                    []
                                ]
                                (Type.namedWith [] "Type" [])
                            )
                    }
                )
                [ fromInternalTypeArg ]
    , toInternalType =
        \toInternalTypeArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Error" ]
                    , name = "toInternalType"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Type" [] ]
                                (Type.namedWith
                                    [ "Proto", "Nrpc", "Internals_" ]
                                    "Proto__Nrpc__Error__Type"
                                    []
                                )
                            )
                    }
                )
                [ toInternalTypeArg ]
    , fieldNumbersType =
        \fieldNumbersTypeArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Error" ]
                    , name = "fieldNumbersType"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Type" [] ]
                                Type.int
                            )
                    }
                )
                [ fieldNumbersTypeArg ]
    }


values_ :
    { decodeType : Elm.Expression
    , encodeType : Elm.Expression
    , fromInternalType : Elm.Expression
    , toInternalType : Elm.Expression
    , defaultType : Elm.Expression
    , fieldNumbersType : Elm.Expression
    }
values_ =
    { decodeType =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "decodeType"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Type" [] ]
                    )
            }
    , encodeType =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "encodeType"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Type" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , fromInternalType =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "fromInternalType"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Proto", "Nrpc", "Internals_" ]
                            "Proto__Nrpc__Error__Type"
                            []
                        ]
                        (Type.namedWith [] "Type" [])
                    )
            }
    , toInternalType =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "toInternalType"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Type" [] ]
                        (Type.namedWith
                            [ "Proto", "Nrpc", "Internals_" ]
                            "Proto__Nrpc__Error__Type"
                            []
                        )
                    )
            }
    , defaultType =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "defaultType"
            , annotation = Just (Type.namedWith [] "Type" [])
            }
    , fieldNumbersType =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Error" ]
            , name = "fieldNumbersType"
            , annotation =
                Just (Type.function [ Type.namedWith [] "Type" [] ] Type.int)
            }
    }