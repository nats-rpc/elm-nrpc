module Gen.Proto.Nrpc exposing (annotation_, call_, caseOf_, decodeError, decodeHeartBeat, decodeNoReply, decodeNoRequest, decodeSubjectRule, decodeVoid, defaultError, defaultHeartBeat, defaultNoReply, defaultNoRequest, defaultSubjectRule, defaultVoid, encodeError, encodeHeartBeat, encodeNoReply, encodeNoRequest, encodeSubjectRule, encodeVoid, fieldNumbersError, fieldNumbersHeartBeat, fieldNumbersNoReply, fieldNumbersNoRequest, fieldNumbersSubjectRule, fieldNumbersVoid, fromInternalSubjectRule, make_, moduleName_, toInternalSubjectRule, values_)

{-| 
@docs moduleName_, decodeSubjectRule, encodeSubjectRule, fromInternalSubjectRule, toInternalSubjectRule, defaultSubjectRule, fieldNumbersSubjectRule, encodeError, decodeError, defaultError, fieldNumbersError, encodeVoid, decodeVoid, defaultVoid, fieldNumbersVoid, encodeNoRequest, decodeNoRequest, defaultNoRequest, fieldNumbersNoRequest, encodeNoReply, decodeNoReply, defaultNoReply, fieldNumbersNoReply, encodeHeartBeat, decodeHeartBeat, defaultHeartBeat, fieldNumbersHeartBeat, annotation_, make_, caseOf_, call_, values_
-}


import Elm
import Elm.Annotation as Type
import Elm.Case


{-| The name of this module. -}
moduleName_ : List String
moduleName_ =
    [ "Proto", "Nrpc" ]


{-| {-| Declares how to decode a `SubjectRule` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeSubjectRule: Protobuf.Decode.Decoder SubjectRule
-}
decodeSubjectRule : Elm.Expression
decodeSubjectRule =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "decodeSubjectRule"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "SubjectRule" [] ]
                )
        }


{-| {-| Declares how to encode a `SubjectRule` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeSubjectRule: SubjectRule -> Protobuf.Encode.Encoder
-}
encodeSubjectRule : Elm.Expression -> Elm.Expression
encodeSubjectRule encodeSubjectRuleArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeSubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "SubjectRule" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeSubjectRuleArg ]


{-| {-| Convert the internal type `Proto__Nrpc__SubjectRule` into a `SubjectRule`.


Using two different types is necessary to avoid recursive module references while having readable constructor names.


-}

fromInternalSubjectRule: Proto.Nrpc.Internals_.Proto__Nrpc__SubjectRule -> SubjectRule
-}
fromInternalSubjectRule : Elm.Expression -> Elm.Expression
fromInternalSubjectRule fromInternalSubjectRuleArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "fromInternalSubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Proto", "Nrpc", "Internals_" ]
                            "Proto__Nrpc__SubjectRule"
                            []
                        ]
                        (Type.namedWith [] "SubjectRule" [])
                    )
            }
        )
        [ fromInternalSubjectRuleArg ]


{-| {-| Convert a `SubjectRule` into its internal representation `Proto__Nrpc__SubjectRule`.


Using two different types is necessary to avoid recursive module references while having readable constructor names.


-}

toInternalSubjectRule: SubjectRule -> Proto.Nrpc.Internals_.Proto__Nrpc__SubjectRule
-}
toInternalSubjectRule : Elm.Expression -> Elm.Expression
toInternalSubjectRule toInternalSubjectRuleArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "toInternalSubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "SubjectRule" [] ]
                        (Type.namedWith
                            [ "Proto", "Nrpc", "Internals_" ]
                            "Proto__Nrpc__SubjectRule"
                            []
                        )
                    )
            }
        )
        [ toInternalSubjectRuleArg ]


{-| {-| Default for SubjectRule. Should only be used for 'required' decoders as an initial value.


-}

defaultSubjectRule: SubjectRule
-}
defaultSubjectRule : Elm.Expression
defaultSubjectRule =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "defaultSubjectRule"
        , annotation = Just (Type.namedWith [] "SubjectRule" [])
        }


{-| {-| The field numbers for the fields of `SubjectRule`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersSubjectRule: SubjectRule -> Int
-}
fieldNumbersSubjectRule : Elm.Expression -> Elm.Expression
fieldNumbersSubjectRule fieldNumbersSubjectRuleArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "fieldNumbersSubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "SubjectRule" [] ]
                        Type.int
                    )
            }
        )
        [ fieldNumbersSubjectRuleArg ]


{-| {-| Declares how to encode a `Error` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeError: Error -> Protobuf.Encode.Encoder
-}
encodeError : Elm.Expression -> Elm.Expression
encodeError encodeErrorArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeError"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Error" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeErrorArg ]


{-| {-| Declares how to decode a `Error` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeError: Protobuf.Decode.Decoder Error
-}
decodeError : Elm.Expression
decodeError =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "decodeError"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Error" [] ]
                )
        }


{-| {-| Default for Error. Should only be used for 'required' decoders as an initial value.


-}

defaultError: Error
-}
defaultError : Elm.Expression
defaultError =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "defaultError"
        , annotation = Just (Type.namedWith [] "Error" [])
        }


{-| {-| The field numbers for the fields of `Error`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersError: { type_ : Int, message : Int, msgCount : Int }
-}
fieldNumbersError : Elm.Expression
fieldNumbersError =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "fieldNumbersError"
        , annotation =
            Just
                (Type.record
                    [ ( "type_", Type.int )
                    , ( "message", Type.int )
                    , ( "msgCount", Type.int )
                    ]
                )
        }


{-| {-| Declares how to encode a `Void` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeVoid: Void -> Protobuf.Encode.Encoder
-}
encodeVoid : Elm.Expression -> Elm.Expression
encodeVoid encodeVoidArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeVoid"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Void" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeVoidArg ]


{-| {-| Declares how to decode a `Void` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeVoid: Protobuf.Decode.Decoder Void
-}
decodeVoid : Elm.Expression
decodeVoid =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "decodeVoid"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "Void" [] ]
                )
        }


{-| {-| Default for Void. Should only be used for 'required' decoders as an initial value.


-}

defaultVoid: Void
-}
defaultVoid : Elm.Expression
defaultVoid =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "defaultVoid"
        , annotation = Just (Type.namedWith [] "Void" [])
        }


{-| {-| The field numbers for the fields of `Void`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersVoid: {}
-}
fieldNumbersVoid : Elm.Expression
fieldNumbersVoid =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "fieldNumbersVoid"
        , annotation = Just (Type.record [])
        }


{-| {-| Declares how to encode a `NoRequest` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeNoRequest: NoRequest -> Protobuf.Encode.Encoder
-}
encodeNoRequest : Elm.Expression -> Elm.Expression
encodeNoRequest encodeNoRequestArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeNoRequest"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "NoRequest" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeNoRequestArg ]


{-| {-| Declares how to decode a `NoRequest` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeNoRequest: Protobuf.Decode.Decoder NoRequest
-}
decodeNoRequest : Elm.Expression
decodeNoRequest =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "decodeNoRequest"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "NoRequest" [] ]
                )
        }


{-| {-| Default for NoRequest. Should only be used for 'required' decoders as an initial value.


-}

defaultNoRequest: NoRequest
-}
defaultNoRequest : Elm.Expression
defaultNoRequest =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "defaultNoRequest"
        , annotation = Just (Type.namedWith [] "NoRequest" [])
        }


{-| {-| The field numbers for the fields of `NoRequest`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersNoRequest: {}
-}
fieldNumbersNoRequest : Elm.Expression
fieldNumbersNoRequest =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "fieldNumbersNoRequest"
        , annotation = Just (Type.record [])
        }


{-| {-| Declares how to encode a `NoReply` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeNoReply: NoReply -> Protobuf.Encode.Encoder
-}
encodeNoReply : Elm.Expression -> Elm.Expression
encodeNoReply encodeNoReplyArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeNoReply"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "NoReply" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeNoReplyArg ]


{-| {-| Declares how to decode a `NoReply` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeNoReply: Protobuf.Decode.Decoder NoReply
-}
decodeNoReply : Elm.Expression
decodeNoReply =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "decodeNoReply"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "NoReply" [] ]
                )
        }


{-| {-| Default for NoReply. Should only be used for 'required' decoders as an initial value.


-}

defaultNoReply: NoReply
-}
defaultNoReply : Elm.Expression
defaultNoReply =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "defaultNoReply"
        , annotation = Just (Type.namedWith [] "NoReply" [])
        }


{-| {-| The field numbers for the fields of `NoReply`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersNoReply: {}
-}
fieldNumbersNoReply : Elm.Expression
fieldNumbersNoReply =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "fieldNumbersNoReply"
        , annotation = Just (Type.record [])
        }


{-| {-| Declares how to encode a `HeartBeat` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}

encodeHeartBeat: HeartBeat -> Protobuf.Encode.Encoder
-}
encodeHeartBeat : Elm.Expression -> Elm.Expression
encodeHeartBeat encodeHeartBeatArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeHeartBeat"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "HeartBeat" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ encodeHeartBeatArg ]


{-| {-| Declares how to decode a `HeartBeat` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}

decodeHeartBeat: Protobuf.Decode.Decoder HeartBeat
-}
decodeHeartBeat : Elm.Expression
decodeHeartBeat =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "decodeHeartBeat"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [] "HeartBeat" [] ]
                )
        }


{-| {-| Default for HeartBeat. Should only be used for 'required' decoders as an initial value.


-}

defaultHeartBeat: HeartBeat
-}
defaultHeartBeat : Elm.Expression
defaultHeartBeat =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "defaultHeartBeat"
        , annotation = Just (Type.namedWith [] "HeartBeat" [])
        }


{-| {-| The field numbers for the fields of `HeartBeat`. This is mostly useful for internals, like documentation generation.


-}

fieldNumbersHeartBeat: { lastbeat : Int }
-}
fieldNumbersHeartBeat : Elm.Expression
fieldNumbersHeartBeat =
    Elm.value
        { importFrom = [ "Proto", "Nrpc" ]
        , name = "fieldNumbersHeartBeat"
        , annotation = Just (Type.record [ ( "lastbeat", Type.int ) ])
        }


annotation_ :
    { error : Type.Annotation
    , void : Type.Annotation
    , noRequest : Type.Annotation
    , noReply : Type.Annotation
    , heartBeat : Type.Annotation
    , subjectRule : Type.Annotation
    }
annotation_ =
    { error =
        Type.alias
            moduleName_
            "Error"
            []
            (Type.namedWith
                [ "Proto", "Nrpc", "Internals_" ]
                "Proto__Nrpc__Error"
                []
            )
    , void =
        Type.alias
            moduleName_
            "Void"
            []
            (Type.namedWith
                [ "Proto", "Nrpc", "Internals_" ]
                "Proto__Nrpc__Void"
                []
            )
    , noRequest =
        Type.alias
            moduleName_
            "NoRequest"
            []
            (Type.namedWith
                [ "Proto", "Nrpc", "Internals_" ]
                "Proto__Nrpc__NoRequest"
                []
            )
    , noReply =
        Type.alias
            moduleName_
            "NoReply"
            []
            (Type.namedWith
                [ "Proto", "Nrpc", "Internals_" ]
                "Proto__Nrpc__NoReply"
                []
            )
    , heartBeat =
        Type.alias
            moduleName_
            "HeartBeat"
            []
            (Type.namedWith
                [ "Proto", "Nrpc", "Internals_" ]
                "Proto__Nrpc__HeartBeat"
                []
            )
    , subjectRule = Type.namedWith [ "Proto", "Nrpc" ] "SubjectRule" []
    }


make_ :
    { cOPY : Elm.Expression
    , tOLOWER : Elm.Expression
    , subjectRuleUnrecognized_ : Elm.Expression -> Elm.Expression
    }
make_ =
    { cOPY =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "COPY"
            , annotation = Just (Type.namedWith [] "SubjectRule" [])
            }
    , tOLOWER =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "TOLOWER"
            , annotation = Just (Type.namedWith [] "SubjectRule" [])
            }
    , subjectRuleUnrecognized_ =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "SubjectRuleUnrecognized_"
                    , annotation = Just (Type.namedWith [] "SubjectRule" [])
                    }
                )
                [ ar0 ]
    }


caseOf_ :
    { subjectRule :
        Elm.Expression
        -> { subjectRuleTags_0_0
            | cOPY : Elm.Expression
            , tOLOWER : Elm.Expression
            , subjectRuleUnrecognized_ : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    }
caseOf_ =
    { subjectRule =
        \subjectRuleExpression subjectRuleTags ->
            Elm.Case.custom
                subjectRuleExpression
                (Type.namedWith [ "Proto", "Nrpc" ] "SubjectRule" [])
                [ Elm.Case.branch0 "COPY" subjectRuleTags.cOPY
                , Elm.Case.branch0 "TOLOWER" subjectRuleTags.tOLOWER
                , Elm.Case.branch1
                    "SubjectRuleUnrecognized_"
                    ( "basics.Int", Type.int )
                    subjectRuleTags.subjectRuleUnrecognized_
                ]
    }


call_ :
    { encodeSubjectRule : Elm.Expression -> Elm.Expression
    , fromInternalSubjectRule : Elm.Expression -> Elm.Expression
    , toInternalSubjectRule : Elm.Expression -> Elm.Expression
    , fieldNumbersSubjectRule : Elm.Expression -> Elm.Expression
    , encodeError : Elm.Expression -> Elm.Expression
    , encodeVoid : Elm.Expression -> Elm.Expression
    , encodeNoRequest : Elm.Expression -> Elm.Expression
    , encodeNoReply : Elm.Expression -> Elm.Expression
    , encodeHeartBeat : Elm.Expression -> Elm.Expression
    }
call_ =
    { encodeSubjectRule =
        \encodeSubjectRuleArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "encodeSubjectRule"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "SubjectRule" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeSubjectRuleArg ]
    , fromInternalSubjectRule =
        \fromInternalSubjectRuleArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "fromInternalSubjectRule"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Proto", "Nrpc", "Internals_" ]
                                    "Proto__Nrpc__SubjectRule"
                                    []
                                ]
                                (Type.namedWith [] "SubjectRule" [])
                            )
                    }
                )
                [ fromInternalSubjectRuleArg ]
    , toInternalSubjectRule =
        \toInternalSubjectRuleArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "toInternalSubjectRule"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "SubjectRule" [] ]
                                (Type.namedWith
                                    [ "Proto", "Nrpc", "Internals_" ]
                                    "Proto__Nrpc__SubjectRule"
                                    []
                                )
                            )
                    }
                )
                [ toInternalSubjectRuleArg ]
    , fieldNumbersSubjectRule =
        \fieldNumbersSubjectRuleArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "fieldNumbersSubjectRule"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "SubjectRule" [] ]
                                Type.int
                            )
                    }
                )
                [ fieldNumbersSubjectRuleArg ]
    , encodeError =
        \encodeErrorArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "encodeError"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Error" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeErrorArg ]
    , encodeVoid =
        \encodeVoidArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "encodeVoid"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "Void" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeVoidArg ]
    , encodeNoRequest =
        \encodeNoRequestArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "encodeNoRequest"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "NoRequest" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeNoRequestArg ]
    , encodeNoReply =
        \encodeNoReplyArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "encodeNoReply"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "NoReply" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeNoReplyArg ]
    , encodeHeartBeat =
        \encodeHeartBeatArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Proto", "Nrpc" ]
                    , name = "encodeHeartBeat"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [] "HeartBeat" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ encodeHeartBeatArg ]
    }


values_ :
    { decodeSubjectRule : Elm.Expression
    , encodeSubjectRule : Elm.Expression
    , fromInternalSubjectRule : Elm.Expression
    , toInternalSubjectRule : Elm.Expression
    , defaultSubjectRule : Elm.Expression
    , fieldNumbersSubjectRule : Elm.Expression
    , encodeError : Elm.Expression
    , decodeError : Elm.Expression
    , defaultError : Elm.Expression
    , fieldNumbersError : Elm.Expression
    , encodeVoid : Elm.Expression
    , decodeVoid : Elm.Expression
    , defaultVoid : Elm.Expression
    , fieldNumbersVoid : Elm.Expression
    , encodeNoRequest : Elm.Expression
    , decodeNoRequest : Elm.Expression
    , defaultNoRequest : Elm.Expression
    , fieldNumbersNoRequest : Elm.Expression
    , encodeNoReply : Elm.Expression
    , decodeNoReply : Elm.Expression
    , defaultNoReply : Elm.Expression
    , fieldNumbersNoReply : Elm.Expression
    , encodeHeartBeat : Elm.Expression
    , decodeHeartBeat : Elm.Expression
    , defaultHeartBeat : Elm.Expression
    , fieldNumbersHeartBeat : Elm.Expression
    }
values_ =
    { decodeSubjectRule =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "decodeSubjectRule"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "SubjectRule" [] ]
                    )
            }
    , encodeSubjectRule =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeSubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "SubjectRule" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , fromInternalSubjectRule =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "fromInternalSubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Proto", "Nrpc", "Internals_" ]
                            "Proto__Nrpc__SubjectRule"
                            []
                        ]
                        (Type.namedWith [] "SubjectRule" [])
                    )
            }
    , toInternalSubjectRule =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "toInternalSubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "SubjectRule" [] ]
                        (Type.namedWith
                            [ "Proto", "Nrpc", "Internals_" ]
                            "Proto__Nrpc__SubjectRule"
                            []
                        )
                    )
            }
    , defaultSubjectRule =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "defaultSubjectRule"
            , annotation = Just (Type.namedWith [] "SubjectRule" [])
            }
    , fieldNumbersSubjectRule =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "fieldNumbersSubjectRule"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "SubjectRule" [] ]
                        Type.int
                    )
            }
    , encodeError =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeError"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Error" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeError =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "decodeError"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Error" [] ]
                    )
            }
    , defaultError =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "defaultError"
            , annotation = Just (Type.namedWith [] "Error" [])
            }
    , fieldNumbersError =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "fieldNumbersError"
            , annotation =
                Just
                    (Type.record
                        [ ( "type_", Type.int )
                        , ( "message", Type.int )
                        , ( "msgCount", Type.int )
                        ]
                    )
            }
    , encodeVoid =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeVoid"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "Void" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeVoid =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "decodeVoid"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "Void" [] ]
                    )
            }
    , defaultVoid =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "defaultVoid"
            , annotation = Just (Type.namedWith [] "Void" [])
            }
    , fieldNumbersVoid =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "fieldNumbersVoid"
            , annotation = Just (Type.record [])
            }
    , encodeNoRequest =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeNoRequest"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "NoRequest" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeNoRequest =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "decodeNoRequest"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "NoRequest" [] ]
                    )
            }
    , defaultNoRequest =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "defaultNoRequest"
            , annotation = Just (Type.namedWith [] "NoRequest" [])
            }
    , fieldNumbersNoRequest =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "fieldNumbersNoRequest"
            , annotation = Just (Type.record [])
            }
    , encodeNoReply =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeNoReply"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "NoReply" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeNoReply =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "decodeNoReply"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "NoReply" [] ]
                    )
            }
    , defaultNoReply =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "defaultNoReply"
            , annotation = Just (Type.namedWith [] "NoReply" [])
            }
    , fieldNumbersNoReply =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "fieldNumbersNoReply"
            , annotation = Just (Type.record [])
            }
    , encodeHeartBeat =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "encodeHeartBeat"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [] "HeartBeat" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , decodeHeartBeat =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "decodeHeartBeat"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [] "HeartBeat" [] ]
                    )
            }
    , defaultHeartBeat =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "defaultHeartBeat"
            , annotation = Just (Type.namedWith [] "HeartBeat" [])
            }
    , fieldNumbersHeartBeat =
        Elm.value
            { importFrom = [ "Proto", "Nrpc" ]
            , name = "fieldNumbersHeartBeat"
            , annotation = Just (Type.record [ ( "lastbeat", Type.int ) ])
            }
    }