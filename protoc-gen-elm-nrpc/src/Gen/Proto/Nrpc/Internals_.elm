module Gen.Proto.Nrpc.Internals_ exposing (annotation_, call_, caseOf_, decodeProto__Nrpc__Error, decodeProto__Nrpc__Error__Type, decodeProto__Nrpc__HeartBeat, decodeProto__Nrpc__NoReply, decodeProto__Nrpc__NoRequest, decodeProto__Nrpc__SubjectRule, decodeProto__Nrpc__Void, defaultProto__Nrpc__Error, defaultProto__Nrpc__Error__Type, defaultProto__Nrpc__HeartBeat, defaultProto__Nrpc__NoReply, defaultProto__Nrpc__NoRequest, defaultProto__Nrpc__SubjectRule, defaultProto__Nrpc__Void, encodeProto__Nrpc__Error, encodeProto__Nrpc__Error__Type, encodeProto__Nrpc__HeartBeat, encodeProto__Nrpc__NoReply, encodeProto__Nrpc__NoRequest, encodeProto__Nrpc__SubjectRule, encodeProto__Nrpc__Void, fieldNumbersProto__Nrpc__Error, fieldNumbersProto__Nrpc__HeartBeat, fieldNumbersProto__Nrpc__NoReply, fieldNumbersProto__Nrpc__NoRequest, fieldNumbersProto__Nrpc__Void, make_, moduleName_, values_)

{-| 
@docs moduleName_, decodeProto__Nrpc__SubjectRule, encodeProto__Nrpc__SubjectRule, defaultProto__Nrpc__SubjectRule, decodeProto__Nrpc__Error__Type, encodeProto__Nrpc__Error__Type, defaultProto__Nrpc__Error__Type, encodeProto__Nrpc__Error, decodeProto__Nrpc__Error, defaultProto__Nrpc__Error, fieldNumbersProto__Nrpc__Error, encodeProto__Nrpc__Void, decodeProto__Nrpc__Void, defaultProto__Nrpc__Void, fieldNumbersProto__Nrpc__Void, encodeProto__Nrpc__NoRequest, decodeProto__Nrpc__NoRequest, defaultProto__Nrpc__NoRequest, fieldNumbersProto__Nrpc__NoRequest, encodeProto__Nrpc__NoReply, decodeProto__Nrpc__NoReply, defaultProto__Nrpc__NoReply, fieldNumbersProto__Nrpc__NoReply, encodeProto__Nrpc__HeartBeat, decodeProto__Nrpc__HeartBeat, defaultProto__Nrpc__HeartBeat, fieldNumbersProto__Nrpc__HeartBeat, annotation_, make_, caseOf_, call_, values_
-}


import Elm
import Elm.Annotation as Type
import Elm.Case


{-| The name of this module. -}
moduleName_ : List String
moduleName_ =
    [ "Proto", "Nrpc", "Internals_" ]


{-| {-| Declares how to decode a `Proto__Nrpc__SubjectRule` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeProto__Nrpc__SubjectRule: Protobuf.Decode.Decoder Proto__Nrpc__SubjectRule
-}
decodeProto__Nrpc__SubjectRule : Elm.Expression
decodeProto__Nrpc__SubjectRule =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "decodeProto__Nrpc__SubjectRule"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Proto__Nrpc__SubjectRule" [] ]
                )
        }


{-| {-| Declares how to encode a `Proto__Nrpc__SubjectRule` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeProto__Nrpc__SubjectRule: Proto__Nrpc__SubjectRule -> Protobuf.Encode.Encoder
-}
encodeProto__Nrpc__SubjectRule : Elm.Expression -> Elm.Expression
encodeProto__Nrpc__SubjectRule encodeProto__Nrpc__SubjectRuleArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__SubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__SubjectRule" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeProto__Nrpc__SubjectRuleArg ]


{-| {-| Default for Proto__Nrpc__SubjectRule. Should only be used for 'required' decoders as an initial value.


-}

defaultProto__Nrpc__SubjectRule: Proto__Nrpc__SubjectRule
-}
defaultProto__Nrpc__SubjectRule : Elm.Expression
defaultProto__Nrpc__SubjectRule =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "defaultProto__Nrpc__SubjectRule"
        , annotation = Just (Type.namedWith [] "Proto__Nrpc__SubjectRule" [])
        }


{-| {-| Declares how to decode a `Proto__Nrpc__Error__Type` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeProto__Nrpc__Error__Type: Protobuf.Decode.Decoder Proto__Nrpc__Error__Type
-}
decodeProto__Nrpc__Error__Type : Elm.Expression
decodeProto__Nrpc__Error__Type =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "decodeProto__Nrpc__Error__Type"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Proto__Nrpc__Error__Type" [] ]
                )
        }


{-| {-| Declares how to encode a `Proto__Nrpc__Error__Type` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeProto__Nrpc__Error__Type: Proto__Nrpc__Error__Type -> Protobuf.Encode.Encoder
-}
encodeProto__Nrpc__Error__Type : Elm.Expression -> Elm.Expression
encodeProto__Nrpc__Error__Type encodeProto__Nrpc__Error__TypeArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__Error__Type"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__Error__Type" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeProto__Nrpc__Error__TypeArg ]


{-| {-| Default for Proto__Nrpc__Error__Type. Should only be used for 'required' decoders as an initial value.


-}

defaultProto__Nrpc__Error__Type: Proto__Nrpc__Error__Type
-}
defaultProto__Nrpc__Error__Type : Elm.Expression
defaultProto__Nrpc__Error__Type =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "defaultProto__Nrpc__Error__Type"
        , annotation = Just (Type.namedWith [] "Proto__Nrpc__Error__Type" [])
        }


{-| {-| Declares how to encode a `Proto__Nrpc__Error` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeProto__Nrpc__Error: Proto__Nrpc__Error -> Protobuf.Encode.Encoder
-}
encodeProto__Nrpc__Error : Elm.Expression -> Elm.Expression
encodeProto__Nrpc__Error encodeProto__Nrpc__ErrorArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__Error"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__Error" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeProto__Nrpc__ErrorArg ]


{-| {-| Declares how to decode a `Proto__Nrpc__Error` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeProto__Nrpc__Error: Protobuf.Decode.Decoder Proto__Nrpc__Error
-}
decodeProto__Nrpc__Error : Elm.Expression
decodeProto__Nrpc__Error =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "decodeProto__Nrpc__Error"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Proto__Nrpc__Error" [] ]
                )
        }


{-| {-| Default for Proto__Nrpc__Error. Should only be used for 'required' decoders as an initial value.


-}

defaultProto__Nrpc__Error: Proto__Nrpc__Error
-}
defaultProto__Nrpc__Error : Elm.Expression
defaultProto__Nrpc__Error =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "defaultProto__Nrpc__Error"
        , annotation = Just (Type.namedWith [] "Proto__Nrpc__Error" [])
        }


{-| {-| The field numbers for the fields of `Proto__Nrpc__Error`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersProto__Nrpc__Error: { type_ : Int, message : Int, msgCount : Int }
-}
fieldNumbersProto__Nrpc__Error : Elm.Expression
fieldNumbersProto__Nrpc__Error =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "fieldNumbersProto__Nrpc__Error"
        , annotation =
            Just
                (Type.record
                    [ ( "type_", Type.int )
                    , ( "message", Type.int )
                    , ( "msgCount", Type.int )
                    ]
                )
        }


{-| {-| Declares how to encode a `Proto__Nrpc__Void` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeProto__Nrpc__Void: Proto__Nrpc__Void -> Protobuf.Encode.Encoder
-}
encodeProto__Nrpc__Void : Elm.Expression -> Elm.Expression
encodeProto__Nrpc__Void encodeProto__Nrpc__VoidArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__Void"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__Void" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeProto__Nrpc__VoidArg ]


{-| {-| Declares how to decode a `Proto__Nrpc__Void` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeProto__Nrpc__Void: Protobuf.Decode.Decoder Proto__Nrpc__Void
-}
decodeProto__Nrpc__Void : Elm.Expression
decodeProto__Nrpc__Void =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "decodeProto__Nrpc__Void"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Proto__Nrpc__Void" [] ]
                )
        }


{-| {-| Default for Proto__Nrpc__Void. Should only be used for 'required' decoders as an initial value.


-}

defaultProto__Nrpc__Void: Proto__Nrpc__Void
-}
defaultProto__Nrpc__Void : Elm.Expression
defaultProto__Nrpc__Void =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "defaultProto__Nrpc__Void"
        , annotation = Just (Type.namedWith [] "Proto__Nrpc__Void" [])
        }


{-| {-| The field numbers for the fields of `Proto__Nrpc__Void`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersProto__Nrpc__Void: {}
-}
fieldNumbersProto__Nrpc__Void : Elm.Expression
fieldNumbersProto__Nrpc__Void =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "fieldNumbersProto__Nrpc__Void"
        , annotation = Just (Type.record [])
        }


{-| {-| Declares how to encode a `Proto__Nrpc__NoRequest` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeProto__Nrpc__NoRequest: Proto__Nrpc__NoRequest -> Protobuf.Encode.Encoder
-}
encodeProto__Nrpc__NoRequest : Elm.Expression -> Elm.Expression
encodeProto__Nrpc__NoRequest encodeProto__Nrpc__NoRequestArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__NoRequest"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__NoRequest" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeProto__Nrpc__NoRequestArg ]


{-| {-| Declares how to decode a `Proto__Nrpc__NoRequest` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeProto__Nrpc__NoRequest: Protobuf.Decode.Decoder Proto__Nrpc__NoRequest
-}
decodeProto__Nrpc__NoRequest : Elm.Expression
decodeProto__Nrpc__NoRequest =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "decodeProto__Nrpc__NoRequest"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Proto__Nrpc__NoRequest" [] ]
                )
        }


{-| {-| Default for Proto__Nrpc__NoRequest. Should only be used for 'required' decoders as an initial value.


-}

defaultProto__Nrpc__NoRequest: Proto__Nrpc__NoRequest
-}
defaultProto__Nrpc__NoRequest : Elm.Expression
defaultProto__Nrpc__NoRequest =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "defaultProto__Nrpc__NoRequest"
        , annotation = Just (Type.namedWith [] "Proto__Nrpc__NoRequest" [])
        }


{-| {-| The field numbers for the fields of `Proto__Nrpc__NoRequest`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersProto__Nrpc__NoRequest: {}
-}
fieldNumbersProto__Nrpc__NoRequest : Elm.Expression
fieldNumbersProto__Nrpc__NoRequest =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "fieldNumbersProto__Nrpc__NoRequest"
        , annotation = Just (Type.record [])
        }


{-| {-| Declares how to encode a `Proto__Nrpc__NoReply` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeProto__Nrpc__NoReply: Proto__Nrpc__NoReply -> Protobuf.Encode.Encoder
-}
encodeProto__Nrpc__NoReply : Elm.Expression -> Elm.Expression
encodeProto__Nrpc__NoReply encodeProto__Nrpc__NoReplyArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__NoReply"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__NoReply" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeProto__Nrpc__NoReplyArg ]


{-| {-| Declares how to decode a `Proto__Nrpc__NoReply` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeProto__Nrpc__NoReply: Protobuf.Decode.Decoder Proto__Nrpc__NoReply
-}
decodeProto__Nrpc__NoReply : Elm.Expression
decodeProto__Nrpc__NoReply =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "decodeProto__Nrpc__NoReply"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Proto__Nrpc__NoReply" [] ]
                )
        }


{-| {-| Default for Proto__Nrpc__NoReply. Should only be used for 'required' decoders as an initial value.


-}

defaultProto__Nrpc__NoReply: Proto__Nrpc__NoReply
-}
defaultProto__Nrpc__NoReply : Elm.Expression
defaultProto__Nrpc__NoReply =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "defaultProto__Nrpc__NoReply"
        , annotation = Just (Type.namedWith [] "Proto__Nrpc__NoReply" [])
        }


{-| {-| The field numbers for the fields of `Proto__Nrpc__NoReply`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersProto__Nrpc__NoReply: {}
-}
fieldNumbersProto__Nrpc__NoReply : Elm.Expression
fieldNumbersProto__Nrpc__NoReply =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "fieldNumbersProto__Nrpc__NoReply"
        , annotation = Just (Type.record [])
        }


{-| {-| Declares how to encode a `Proto__Nrpc__HeartBeat` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeProto__Nrpc__HeartBeat: Proto__Nrpc__HeartBeat -> Protobuf.Encode.Encoder
-}
encodeProto__Nrpc__HeartBeat : Elm.Expression -> Elm.Expression
encodeProto__Nrpc__HeartBeat encodeProto__Nrpc__HeartBeatArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__HeartBeat"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__HeartBeat" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeProto__Nrpc__HeartBeatArg ]


{-| {-| Declares how to decode a `Proto__Nrpc__HeartBeat` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeProto__Nrpc__HeartBeat: Protobuf.Decode.Decoder Proto__Nrpc__HeartBeat
-}
decodeProto__Nrpc__HeartBeat : Elm.Expression
decodeProto__Nrpc__HeartBeat =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "decodeProto__Nrpc__HeartBeat"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Proto__Nrpc__HeartBeat" [] ]
                )
        }


{-| {-| Default for Proto__Nrpc__HeartBeat. Should only be used for 'required' decoders as an initial value.


-}

defaultProto__Nrpc__HeartBeat: Proto__Nrpc__HeartBeat
-}
defaultProto__Nrpc__HeartBeat : Elm.Expression
defaultProto__Nrpc__HeartBeat =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "defaultProto__Nrpc__HeartBeat"
        , annotation = Just (Type.namedWith [] "Proto__Nrpc__HeartBeat" [])
        }


{-| {-| The field numbers for the fields of `Proto__Nrpc__HeartBeat`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersProto__Nrpc__HeartBeat: { lastbeat : Int }
-}
fieldNumbersProto__Nrpc__HeartBeat : Elm.Expression
fieldNumbersProto__Nrpc__HeartBeat =
    Elm.value
        { importFrom = [ "Proto", "Nrpc", "Internals_" ]
        , name = "fieldNumbersProto__Nrpc__HeartBeat"
        , annotation = Just (Type.record [ ( "lastbeat", Type.int ) ])
        }


annotation_ :
    { proto__Nrpc__Error : Type.Annotation
    , proto__Nrpc__Void : Type.Annotation
    , proto__Nrpc__NoRequest : Type.Annotation
    , proto__Nrpc__NoReply : Type.Annotation
    , proto__Nrpc__HeartBeat : Type.Annotation
    , proto__Nrpc__SubjectRule : Type.Annotation
    , proto__Nrpc__Error__Type : Type.Annotation
    }
annotation_ =
    { proto__Nrpc__Error =
        Type.alias
            moduleName_
            "Proto__Nrpc__Error"
            []
            (Type.record
                [ ( "type_", Type.namedWith [] "Proto__Nrpc__Error__Type" [] )
                , ( "message", Type.string )
                , ( "msgCount", Type.int )
                ]
            )
    , proto__Nrpc__Void =
        Type.alias moduleName_ "Proto__Nrpc__Void" [] (Type.record [])
    , proto__Nrpc__NoRequest =
        Type.alias moduleName_ "Proto__Nrpc__NoRequest" [] (Type.record [])
    , proto__Nrpc__NoReply =
        Type.alias moduleName_ "Proto__Nrpc__NoReply" [] (Type.record [])
    , proto__Nrpc__HeartBeat =
        Type.alias
            moduleName_
            "Proto__Nrpc__HeartBeat"
            []
            (Type.record [ ( "lastbeat", Type.bool ) ])
    , proto__Nrpc__SubjectRule =
        Type.namedWith
            [ "Proto", "Nrpc", "Internals_" ]
            "Proto__Nrpc__SubjectRule"
            []
    , proto__Nrpc__Error__Type =
        Type.namedWith
            [ "Proto", "Nrpc", "Internals_" ]
            "Proto__Nrpc__Error__Type"
            []
    }


make_ :
    { proto__Nrpc__Error :
        { type_ : Elm.Expression
        , message : Elm.Expression
        , msgCount : Elm.Expression
        }
        -> Elm.Expression
    , proto__Nrpc__Void : proto -> Elm.Expression
    , proto__Nrpc__NoRequest : proto -> Elm.Expression
    , proto__Nrpc__NoReply : proto -> Elm.Expression
    , proto__Nrpc__HeartBeat : { lastbeat : Elm.Expression } -> Elm.Expression
    , proto__Nrpc__COPY : Elm.Expression
    , proto__Nrpc__TOLOWER : Elm.Expression
    , proto__Nrpc__SubjectRuleUnrecognized_ : Elm.Expression -> Elm.Expression
    , proto__Nrpc__Error__CLIENT : Elm.Expression
    , proto__Nrpc__Error__SERVER : Elm.Expression
    , proto__Nrpc__Error__EOS : Elm.Expression
    , proto__Nrpc__Error__SERVERTOOBUSY : Elm.Expression
    , proto__Nrpc__Error__TypeUnrecognized_ : Elm.Expression -> Elm.Expression
    }
make_ =
    { proto__Nrpc__Error =
        \proto__Nrpc__Error_args ->
            Elm.withType
                (Type.alias
                    [ "Proto", "Nrpc", "Internals_" ]
                    "Proto__Nrpc__Error"
                    []
                    (Type.record
                        [ ( "type_"
                          , Type.namedWith [] "Proto__Nrpc__Error__Type" []
                          )
                        , ( "message", Type.string )
                        , ( "msgCount", Type.int )
                        ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "type_" proto__Nrpc__Error_args.type_
                    , Tuple.pair "message" proto__Nrpc__Error_args.message
                    , Tuple.pair "msgCount" proto__Nrpc__Error_args.msgCount
                    ]
                )
    , proto__Nrpc__Void =
        \proto__Nrpc__Void_args ->
            Elm.withType
                (Type.alias
                    [ "Proto", "Nrpc", "Internals_" ]
                    "Proto__Nrpc__Void"
                    []
                    (Type.record [])
                )
                (Elm.record [])
    , proto__Nrpc__NoRequest =
        \proto__Nrpc__NoRequest_args ->
            Elm.withType
                (Type.alias
                    [ "Proto", "Nrpc", "Internals_" ]
                    "Proto__Nrpc__NoRequest"
                    []
                    (Type.record [])
                )
                (Elm.record [])
    , proto__Nrpc__NoReply =
        \proto__Nrpc__NoReply_args ->
            Elm.withType
                (Type.alias
                    [ "Proto", "Nrpc", "Internals_" ]
                    "Proto__Nrpc__NoReply"
                    []
                    (Type.record [])
                )
                (Elm.record [])
    , proto__Nrpc__HeartBeat =
        \proto__Nrpc__HeartBeat_args ->
            Elm.withType
                (Type.alias
                    [ "Proto", "Nrpc", "Internals_" ]
                    "Proto__Nrpc__HeartBeat"
                    []
                    (Type.record [ ( "lastbeat", Type.bool ) ])
                )
                (Elm.record
                    [ Tuple.pair "lastbeat" proto__Nrpc__HeartBeat_args.lastbeat
                    ]
                )
    , proto__Nrpc__COPY =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "Proto__Nrpc__COPY"
            , annotation =
                Just (Type.namedWith [] "Proto__Nrpc__SubjectRule" [])
            }
    , proto__Nrpc__TOLOWER =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "Proto__Nrpc__TOLOWER"
            , annotation =
                Just (Type.namedWith [] "Proto__Nrpc__SubjectRule" [])
            }
    , proto__Nrpc__SubjectRuleUnrecognized_ =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Internals_" ]
                    , name = "Proto__Nrpc__SubjectRuleUnrecognized_"
                    , annotation =
                        Just (Type.namedWith [] "Proto__Nrpc__SubjectRule" [])
                    }
                )
                [ ar0 ]
    , proto__Nrpc__Error__CLIENT =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "Proto__Nrpc__Error__CLIENT"
            , annotation =
                Just (Type.namedWith [] "Proto__Nrpc__Error__Type" [])
            }
    , proto__Nrpc__Error__SERVER =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "Proto__Nrpc__Error__SERVER"
            , annotation =
                Just (Type.namedWith [] "Proto__Nrpc__Error__Type" [])
            }
    , proto__Nrpc__Error__EOS =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "Proto__Nrpc__Error__EOS"
            , annotation =
                Just (Type.namedWith [] "Proto__Nrpc__Error__Type" [])
            }
    , proto__Nrpc__Error__SERVERTOOBUSY =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "Proto__Nrpc__Error__SERVERTOOBUSY"
            , annotation =
                Just (Type.namedWith [] "Proto__Nrpc__Error__Type" [])
            }
    , proto__Nrpc__Error__TypeUnrecognized_ =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Internals_" ]
                    , name = "Proto__Nrpc__Error__TypeUnrecognized_"
                    , annotation =
                        Just (Type.namedWith [] "Proto__Nrpc__Error__Type" [])
                    }
                )
                [ ar0 ]
    }


caseOf_ :
    { proto__Nrpc__SubjectRule :
        Elm.Expression
        -> { proto__Nrpc__SubjectRuleTags_0_0
            | proto__Nrpc__COPY : Elm.Expression
            , proto__Nrpc__TOLOWER : Elm.Expression
            , proto__Nrpc__SubjectRuleUnrecognized_ :
                Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    , proto__Nrpc__Error__Type :
        Elm.Expression
        -> { proto__Nrpc__Error__TypeTags_1_0
            | proto__Nrpc__Error__CLIENT : Elm.Expression
            , proto__Nrpc__Error__SERVER : Elm.Expression
            , proto__Nrpc__Error__EOS : Elm.Expression
            , proto__Nrpc__Error__SERVERTOOBUSY : Elm.Expression
            , proto__Nrpc__Error__TypeUnrecognized_ :
                Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    }
caseOf_ =
    { proto__Nrpc__SubjectRule =
        \proto__Nrpc__SubjectRuleExpression proto__Nrpc__SubjectRuleTags ->
            Elm.Case.custom
                proto__Nrpc__SubjectRuleExpression
                (Type.namedWith
                    [ "Proto", "Nrpc", "Internals_" ]
                    "Proto__Nrpc__SubjectRule"
                    []
                )
                [ Elm.Case.branch0
                    "Proto__Nrpc__COPY"
                    proto__Nrpc__SubjectRuleTags.proto__Nrpc__COPY
                , Elm.Case.branch0
                    "Proto__Nrpc__TOLOWER"
                    proto__Nrpc__SubjectRuleTags.proto__Nrpc__TOLOWER
                , Elm.Case.branch1
                    "Proto__Nrpc__SubjectRuleUnrecognized_"
                    ( "basics.Int", Type.int )
                    proto__Nrpc__SubjectRuleTags.proto__Nrpc__SubjectRuleUnrecognized_
                ]
    , proto__Nrpc__Error__Type =
        \proto__Nrpc__Error__TypeExpression proto__Nrpc__Error__TypeTags ->
            Elm.Case.custom
                proto__Nrpc__Error__TypeExpression
                (Type.namedWith
                    [ "Proto", "Nrpc", "Internals_" ]
                    "Proto__Nrpc__Error__Type"
                    []
                )
                [ Elm.Case.branch0
                    "Proto__Nrpc__Error__CLIENT"
                    proto__Nrpc__Error__TypeTags.proto__Nrpc__Error__CLIENT
                , Elm.Case.branch0
                    "Proto__Nrpc__Error__SERVER"
                    proto__Nrpc__Error__TypeTags.proto__Nrpc__Error__SERVER
                , Elm.Case.branch0
                    "Proto__Nrpc__Error__EOS"
                    proto__Nrpc__Error__TypeTags.proto__Nrpc__Error__EOS
                , Elm.Case.branch0
                    "Proto__Nrpc__Error__SERVERTOOBUSY"
                    proto__Nrpc__Error__TypeTags.proto__Nrpc__Error__SERVERTOOBUSY
                , Elm.Case.branch1
                    "Proto__Nrpc__Error__TypeUnrecognized_"
                    ( "basics.Int", Type.int )
                    proto__Nrpc__Error__TypeTags.proto__Nrpc__Error__TypeUnrecognized_
                ]
    }


call_ :
    { encodeProto__Nrpc__SubjectRule : Elm.Expression -> Elm.Expression
    , encodeProto__Nrpc__Error__Type : Elm.Expression -> Elm.Expression
    , encodeProto__Nrpc__Error : Elm.Expression -> Elm.Expression
    , encodeProto__Nrpc__Void : Elm.Expression -> Elm.Expression
    , encodeProto__Nrpc__NoRequest : Elm.Expression -> Elm.Expression
    , encodeProto__Nrpc__NoReply : Elm.Expression -> Elm.Expression
    , encodeProto__Nrpc__HeartBeat : Elm.Expression -> Elm.Expression
    }
call_ =
    { encodeProto__Nrpc__SubjectRule =
        \encodeProto__Nrpc__SubjectRuleArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Internals_" ]
                    , name = "encodeProto__Nrpc__SubjectRule"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    []
                                    "Proto__Nrpc__SubjectRule"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeProto__Nrpc__SubjectRuleArg ]
    , encodeProto__Nrpc__Error__Type =
        \encodeProto__Nrpc__Error__TypeArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Internals_" ]
                    , name = "encodeProto__Nrpc__Error__Type"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    []
                                    "Proto__Nrpc__Error__Type"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeProto__Nrpc__Error__TypeArg ]
    , encodeProto__Nrpc__Error =
        \encodeProto__Nrpc__ErrorArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Internals_" ]
                    , name = "encodeProto__Nrpc__Error"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Proto__Nrpc__Error" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeProto__Nrpc__ErrorArg ]
    , encodeProto__Nrpc__Void =
        \encodeProto__Nrpc__VoidArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Internals_" ]
                    , name = "encodeProto__Nrpc__Void"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Proto__Nrpc__Void" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeProto__Nrpc__VoidArg ]
    , encodeProto__Nrpc__NoRequest =
        \encodeProto__Nrpc__NoRequestArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Internals_" ]
                    , name = "encodeProto__Nrpc__NoRequest"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Proto__Nrpc__NoRequest" []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeProto__Nrpc__NoRequestArg ]
    , encodeProto__Nrpc__NoReply =
        \encodeProto__Nrpc__NoReplyArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Internals_" ]
                    , name = "encodeProto__Nrpc__NoReply"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Proto__Nrpc__NoReply" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeProto__Nrpc__NoReplyArg ]
    , encodeProto__Nrpc__HeartBeat =
        \encodeProto__Nrpc__HeartBeatArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc", "Internals_" ]
                    , name = "encodeProto__Nrpc__HeartBeat"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Proto__Nrpc__HeartBeat" []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeProto__Nrpc__HeartBeatArg ]
    }


values_ :
    { decodeProto__Nrpc__SubjectRule : Elm.Expression
    , encodeProto__Nrpc__SubjectRule : Elm.Expression
    , defaultProto__Nrpc__SubjectRule : Elm.Expression
    , decodeProto__Nrpc__Error__Type : Elm.Expression
    , encodeProto__Nrpc__Error__Type : Elm.Expression
    , defaultProto__Nrpc__Error__Type : Elm.Expression
    , encodeProto__Nrpc__Error : Elm.Expression
    , decodeProto__Nrpc__Error : Elm.Expression
    , defaultProto__Nrpc__Error : Elm.Expression
    , fieldNumbersProto__Nrpc__Error : Elm.Expression
    , encodeProto__Nrpc__Void : Elm.Expression
    , decodeProto__Nrpc__Void : Elm.Expression
    , defaultProto__Nrpc__Void : Elm.Expression
    , fieldNumbersProto__Nrpc__Void : Elm.Expression
    , encodeProto__Nrpc__NoRequest : Elm.Expression
    , decodeProto__Nrpc__NoRequest : Elm.Expression
    , defaultProto__Nrpc__NoRequest : Elm.Expression
    , fieldNumbersProto__Nrpc__NoRequest : Elm.Expression
    , encodeProto__Nrpc__NoReply : Elm.Expression
    , decodeProto__Nrpc__NoReply : Elm.Expression
    , defaultProto__Nrpc__NoReply : Elm.Expression
    , fieldNumbersProto__Nrpc__NoReply : Elm.Expression
    , encodeProto__Nrpc__HeartBeat : Elm.Expression
    , decodeProto__Nrpc__HeartBeat : Elm.Expression
    , defaultProto__Nrpc__HeartBeat : Elm.Expression
    , fieldNumbersProto__Nrpc__HeartBeat : Elm.Expression
    }
values_ =
    { decodeProto__Nrpc__SubjectRule =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "decodeProto__Nrpc__SubjectRule"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Proto__Nrpc__SubjectRule" [] ]
                    )
            }
    , encodeProto__Nrpc__SubjectRule =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__SubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__SubjectRule" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , defaultProto__Nrpc__SubjectRule =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "defaultProto__Nrpc__SubjectRule"
            , annotation =
                Just (Type.namedWith [] "Proto__Nrpc__SubjectRule" [])
            }
    , decodeProto__Nrpc__Error__Type =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "decodeProto__Nrpc__Error__Type"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Proto__Nrpc__Error__Type" [] ]
                    )
            }
    , encodeProto__Nrpc__Error__Type =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__Error__Type"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__Error__Type" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , defaultProto__Nrpc__Error__Type =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "defaultProto__Nrpc__Error__Type"
            , annotation =
                Just (Type.namedWith [] "Proto__Nrpc__Error__Type" [])
            }
    , encodeProto__Nrpc__Error =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__Error"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__Error" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeProto__Nrpc__Error =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "decodeProto__Nrpc__Error"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Proto__Nrpc__Error" [] ]
                    )
            }
    , defaultProto__Nrpc__Error =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "defaultProto__Nrpc__Error"
            , annotation = Just (Type.namedWith [] "Proto__Nrpc__Error" [])
            }
    , fieldNumbersProto__Nrpc__Error =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "fieldNumbersProto__Nrpc__Error"
            , annotation =
                Just
                    (Type.record
                        [ ( "type_", Type.int )
                        , ( "message", Type.int )
                        , ( "msgCount", Type.int )
                        ]
                    )
            }
    , encodeProto__Nrpc__Void =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__Void"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__Void" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeProto__Nrpc__Void =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "decodeProto__Nrpc__Void"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Proto__Nrpc__Void" [] ]
                    )
            }
    , defaultProto__Nrpc__Void =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "defaultProto__Nrpc__Void"
            , annotation = Just (Type.namedWith [] "Proto__Nrpc__Void" [])
            }
    , fieldNumbersProto__Nrpc__Void =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "fieldNumbersProto__Nrpc__Void"
            , annotation = Just (Type.record [])
            }
    , encodeProto__Nrpc__NoRequest =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__NoRequest"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__NoRequest" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeProto__Nrpc__NoRequest =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "decodeProto__Nrpc__NoRequest"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Proto__Nrpc__NoRequest" [] ]
                    )
            }
    , defaultProto__Nrpc__NoRequest =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "defaultProto__Nrpc__NoRequest"
            , annotation = Just (Type.namedWith [] "Proto__Nrpc__NoRequest" [])
            }
    , fieldNumbersProto__Nrpc__NoRequest =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "fieldNumbersProto__Nrpc__NoRequest"
            , annotation = Just (Type.record [])
            }
    , encodeProto__Nrpc__NoReply =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__NoReply"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__NoReply" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeProto__Nrpc__NoReply =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "decodeProto__Nrpc__NoReply"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Proto__Nrpc__NoReply" [] ]
                    )
            }
    , defaultProto__Nrpc__NoReply =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "defaultProto__Nrpc__NoReply"
            , annotation = Just (Type.namedWith [] "Proto__Nrpc__NoReply" [])
            }
    , fieldNumbersProto__Nrpc__NoReply =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "fieldNumbersProto__Nrpc__NoReply"
            , annotation = Just (Type.record [])
            }
    , encodeProto__Nrpc__HeartBeat =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "encodeProto__Nrpc__HeartBeat"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Proto__Nrpc__HeartBeat" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeProto__Nrpc__HeartBeat =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "decodeProto__Nrpc__HeartBeat"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Proto__Nrpc__HeartBeat" [] ]
                    )
            }
    , defaultProto__Nrpc__HeartBeat =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "defaultProto__Nrpc__HeartBeat"
            , annotation = Just (Type.namedWith [] "Proto__Nrpc__HeartBeat" [])
            }
    , fieldNumbersProto__Nrpc__HeartBeat =
        Elm.value
            { importFrom = [ "Proto", "Nrpc", "Internals_" ]
            , name = "fieldNumbersProto__Nrpc__HeartBeat"
            , annotation = Just (Type.record [ ( "lastbeat", Type.int ) ])
            }
    }