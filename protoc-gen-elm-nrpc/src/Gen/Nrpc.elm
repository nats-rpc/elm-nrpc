module Gen.Nrpc exposing (annotation_, call_, caseOf_, make_, moduleName_, request, requestNoReply, requestVoidReply, streamRequest, streamRequestWithID, subscribeToNoRequestMethod, values_)

{-| 
@docs moduleName_, subscribeToNoRequestMethod, streamRequestWithID, streamRequest, requestNoReply, requestVoidReply, request, annotation_, make_, caseOf_, call_, values_
-}


import Elm
import Elm.Annotation as Type
import Elm.Case


{-| The name of this module. -}
moduleName_ : List String
moduleName_ =
    [ "Nrpc" ]


{-| {-| subscribe to a NoRequest method
-}

subscribeToNoRequestMethod: String -> Decoder a -> (Result Error a -> msg) -> Nats.Sub Bytes msg
-}
subscribeToNoRequestMethod :
    String
    -> Elm.Expression
    -> (Elm.Expression -> Elm.Expression)
    -> Elm.Expression
subscribeToNoRequestMethod subscribeToNoRequestMethodArg subscribeToNoRequestMethodArg0 subscribeToNoRequestMethodArg1 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "subscribeToNoRequestMethod"
            , annotation =
                Just
                    (Type.function
                        [ Type.string
                        , Type.namedWith [] "Decoder" [ Type.var "a" ]
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" [], Type.var "a" ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Sub"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
        )
        [ Elm.string subscribeToNoRequestMethodArg
        , subscribeToNoRequestMethodArg0
        , Elm.functionReduced
            "subscribeToNoRequestMethodUnpack"
            subscribeToNoRequestMethodArg1
        ]


{-| streamRequestWithID: 
    (arg -> Encoder)
    -> Decoder result
    -> String
    -> String
    -> arg
    -> (Result Error result -> msg)
    -> Nats.Effect Bytes msg
-}
streamRequestWithID :
    (Elm.Expression -> Elm.Expression)
    -> Elm.Expression
    -> String
    -> String
    -> Elm.Expression
    -> (Elm.Expression -> Elm.Expression)
    -> Elm.Expression
streamRequestWithID streamRequestWithIDArg streamRequestWithIDArg0 streamRequestWithIDArg1 streamRequestWithIDArg2 streamRequestWithIDArg3 streamRequestWithIDArg4 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "streamRequestWithID"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.namedWith [] "Decoder" [ Type.var "result" ]
                        , Type.string
                        , Type.string
                        , Type.var "arg"
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" []
                                , Type.var "result"
                                ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
        )
        [ Elm.functionReduced "streamRequestWithIDUnpack" streamRequestWithIDArg
        , streamRequestWithIDArg0
        , Elm.string streamRequestWithIDArg1
        , Elm.string streamRequestWithIDArg2
        , streamRequestWithIDArg3
        , Elm.functionReduced
            "streamRequestWithIDUnpack"
            streamRequestWithIDArg4
        ]


{-| streamRequest: 
    (arg -> Encoder)
    -> Decoder result
    -> String
    -> arg
    -> (Result Error result -> msg)
    -> Nats.Effect Bytes msg
-}
streamRequest :
    (Elm.Expression -> Elm.Expression)
    -> Elm.Expression
    -> String
    -> Elm.Expression
    -> (Elm.Expression -> Elm.Expression)
    -> Elm.Expression
streamRequest streamRequestArg streamRequestArg0 streamRequestArg1 streamRequestArg2 streamRequestArg3 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "streamRequest"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.namedWith [] "Decoder" [ Type.var "result" ]
                        , Type.string
                        , Type.var "arg"
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" []
                                , Type.var "result"
                                ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
        )
        [ Elm.functionReduced "streamRequestUnpack" streamRequestArg
        , streamRequestArg0
        , Elm.string streamRequestArg1
        , streamRequestArg2
        , Elm.functionReduced "streamRequestUnpack" streamRequestArg3
        ]


{-| requestNoReply: (arg -> Encoder) -> String -> arg -> Nats.Effect Bytes msg -}
requestNoReply :
    (Elm.Expression -> Elm.Expression)
    -> String
    -> Elm.Expression
    -> Elm.Expression
requestNoReply requestNoReplyArg requestNoReplyArg0 requestNoReplyArg1 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "requestNoReply"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.string
                        , Type.var "arg"
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
        )
        [ Elm.functionReduced "requestNoReplyUnpack" requestNoReplyArg
        , Elm.string requestNoReplyArg0
        , requestNoReplyArg1
        ]


{-| {-| subsribe to a stream request with void replies
-}

requestVoidReply: 
    (arg -> Encoder)
    -> String
    -> arg
    -> (Result Error () -> msg)
    -> Nats.Effect Bytes msg
-}
requestVoidReply :
    (Elm.Expression -> Elm.Expression)
    -> String
    -> Elm.Expression
    -> (Elm.Expression -> Elm.Expression)
    -> Elm.Expression
requestVoidReply requestVoidReplyArg requestVoidReplyArg0 requestVoidReplyArg1 requestVoidReplyArg2 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "requestVoidReply"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.string
                        , Type.var "arg"
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" [], Type.unit ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
        )
        [ Elm.functionReduced "requestVoidReplyUnpack" requestVoidReplyArg
        , Elm.string requestVoidReplyArg0
        , requestVoidReplyArg1
        , Elm.functionReduced "requestVoidReplyUnpack" requestVoidReplyArg2
        ]


{-| {-| Perform a request
-}

request: 
    (arg -> Encoder)
    -> Decoder result
    -> String
    -> arg
    -> (Result Error result -> msg)
    -> Nats.Effect Bytes msg
-}
request :
    (Elm.Expression -> Elm.Expression)
    -> Elm.Expression
    -> String
    -> Elm.Expression
    -> (Elm.Expression -> Elm.Expression)
    -> Elm.Expression
request requestArg requestArg0 requestArg1 requestArg2 requestArg3 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "request"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.namedWith [] "Decoder" [ Type.var "result" ]
                        , Type.string
                        , Type.var "arg"
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" []
                                , Type.var "result"
                                ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
        )
        [ Elm.functionReduced "requestUnpack" requestArg
        , requestArg0
        , Elm.string requestArg1
        , requestArg2
        , Elm.functionReduced "requestUnpack" requestArg3
        ]


annotation_ : { error : Type.Annotation }
annotation_ =
    { error = Type.namedWith [ "Nrpc" ] "Error" [] }


make_ :
    { timeout : Elm.Expression
    , decodeError : Elm.Expression -> Elm.Expression
    , clientError : Elm.Expression -> Elm.Expression
    , serverError : Elm.Expression -> Elm.Expression
    , serverTooBusy : Elm.Expression -> Elm.Expression
    , eOS : Elm.Expression -> Elm.Expression
    }
make_ =
    { timeout =
        Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "Timeout"
            , annotation = Just (Type.namedWith [] "Error" [])
            }
    , decodeError =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "DecodeError"
                    , annotation = Just (Type.namedWith [] "Error" [])
                    }
                )
                [ ar0 ]
    , clientError =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "ClientError"
                    , annotation = Just (Type.namedWith [] "Error" [])
                    }
                )
                [ ar0 ]
    , serverError =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "ServerError"
                    , annotation = Just (Type.namedWith [] "Error" [])
                    }
                )
                [ ar0 ]
    , serverTooBusy =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "ServerTooBusy"
                    , annotation = Just (Type.namedWith [] "Error" [])
                    }
                )
                [ ar0 ]
    , eOS =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "EOS"
                    , annotation = Just (Type.namedWith [] "Error" [])
                    }
                )
                [ ar0 ]
    }


caseOf_ :
    { error :
        Elm.Expression
        -> { errorTags_0_0
            | timeout : Elm.Expression
            , decodeError : Elm.Expression -> Elm.Expression
            , clientError : Elm.Expression -> Elm.Expression
            , serverError : Elm.Expression -> Elm.Expression
            , serverTooBusy : Elm.Expression -> Elm.Expression
            , eOS : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    }
caseOf_ =
    { error =
        \errorExpression errorTags ->
            Elm.Case.custom
                errorExpression
                (Type.namedWith [ "Nrpc" ] "Error" [])
                [ Elm.Case.branch0 "Timeout" errorTags.timeout
                , Elm.Case.branch1
                    "DecodeError"
                    ( "string.String", Type.string )
                    errorTags.decodeError
                , Elm.Case.branch1
                    "ClientError"
                    ( "string.String", Type.string )
                    errorTags.clientError
                , Elm.Case.branch1
                    "ServerError"
                    ( "string.String", Type.string )
                    errorTags.serverError
                , Elm.Case.branch1
                    "ServerTooBusy"
                    ( "string.String", Type.string )
                    errorTags.serverTooBusy
                , Elm.Case.branch1
                    "EOS"
                    ( "basics.Int", Type.int )
                    errorTags.eOS
                ]
    }


call_ :
    { subscribeToNoRequestMethod :
        Elm.Expression -> Elm.Expression -> Elm.Expression -> Elm.Expression
    , streamRequestWithID :
        Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
    , streamRequest :
        Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
    , requestNoReply :
        Elm.Expression -> Elm.Expression -> Elm.Expression -> Elm.Expression
    , requestVoidReply :
        Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
    , request :
        Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
    }
call_ =
    { subscribeToNoRequestMethod =
        \subscribeToNoRequestMethodArg subscribeToNoRequestMethodArg0 subscribeToNoRequestMethodArg1 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "subscribeToNoRequestMethod"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.string
                                , Type.namedWith [] "Decoder" [ Type.var "a" ]
                                , Type.function
                                    [ Type.namedWith
                                        []
                                        "Result"
                                        [ Type.namedWith [] "Error" []
                                        , Type.var "a"
                                        ]
                                    ]
                                    (Type.var "msg")
                                ]
                                (Type.namedWith
                                    [ "Nats" ]
                                    "Sub"
                                    [ Type.namedWith [] "Bytes" []
                                    , Type.var "msg"
                                    ]
                                )
                            )
                    }
                )
                [ subscribeToNoRequestMethodArg
                , subscribeToNoRequestMethodArg0
                , subscribeToNoRequestMethodArg1
                ]
    , streamRequestWithID =
        \streamRequestWithIDArg streamRequestWithIDArg0 streamRequestWithIDArg1 streamRequestWithIDArg2 streamRequestWithIDArg3 streamRequestWithIDArg4 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "streamRequestWithID"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function
                                    [ Type.var "arg" ]
                                    (Type.namedWith [] "Encoder" [])
                                , Type.namedWith
                                    []
                                    "Decoder"
                                    [ Type.var "result" ]
                                , Type.string
                                , Type.string
                                , Type.var "arg"
                                , Type.function
                                    [ Type.namedWith
                                        []
                                        "Result"
                                        [ Type.namedWith [] "Error" []
                                        , Type.var "result"
                                        ]
                                    ]
                                    (Type.var "msg")
                                ]
                                (Type.namedWith
                                    [ "Nats" ]
                                    "Effect"
                                    [ Type.namedWith [] "Bytes" []
                                    , Type.var "msg"
                                    ]
                                )
                            )
                    }
                )
                [ streamRequestWithIDArg
                , streamRequestWithIDArg0
                , streamRequestWithIDArg1
                , streamRequestWithIDArg2
                , streamRequestWithIDArg3
                , streamRequestWithIDArg4
                ]
    , streamRequest =
        \streamRequestArg streamRequestArg0 streamRequestArg1 streamRequestArg2 streamRequestArg3 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "streamRequest"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function
                                    [ Type.var "arg" ]
                                    (Type.namedWith [] "Encoder" [])
                                , Type.namedWith
                                    []
                                    "Decoder"
                                    [ Type.var "result" ]
                                , Type.string
                                , Type.var "arg"
                                , Type.function
                                    [ Type.namedWith
                                        []
                                        "Result"
                                        [ Type.namedWith [] "Error" []
                                        , Type.var "result"
                                        ]
                                    ]
                                    (Type.var "msg")
                                ]
                                (Type.namedWith
                                    [ "Nats" ]
                                    "Effect"
                                    [ Type.namedWith [] "Bytes" []
                                    , Type.var "msg"
                                    ]
                                )
                            )
                    }
                )
                [ streamRequestArg
                , streamRequestArg0
                , streamRequestArg1
                , streamRequestArg2
                , streamRequestArg3
                ]
    , requestNoReply =
        \requestNoReplyArg requestNoReplyArg0 requestNoReplyArg1 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "requestNoReply"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function
                                    [ Type.var "arg" ]
                                    (Type.namedWith [] "Encoder" [])
                                , Type.string
                                , Type.var "arg"
                                ]
                                (Type.namedWith
                                    [ "Nats" ]
                                    "Effect"
                                    [ Type.namedWith [] "Bytes" []
                                    , Type.var "msg"
                                    ]
                                )
                            )
                    }
                )
                [ requestNoReplyArg, requestNoReplyArg0, requestNoReplyArg1 ]
    , requestVoidReply =
        \requestVoidReplyArg requestVoidReplyArg0 requestVoidReplyArg1 requestVoidReplyArg2 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "requestVoidReply"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function
                                    [ Type.var "arg" ]
                                    (Type.namedWith [] "Encoder" [])
                                , Type.string
                                , Type.var "arg"
                                , Type.function
                                    [ Type.namedWith
                                        []
                                        "Result"
                                        [ Type.namedWith [] "Error" []
                                        , Type.unit
                                        ]
                                    ]
                                    (Type.var "msg")
                                ]
                                (Type.namedWith
                                    [ "Nats" ]
                                    "Effect"
                                    [ Type.namedWith [] "Bytes" []
                                    , Type.var "msg"
                                    ]
                                )
                            )
                    }
                )
                [ requestVoidReplyArg
                , requestVoidReplyArg0
                , requestVoidReplyArg1
                , requestVoidReplyArg2
                ]
    , request =
        \requestArg requestArg0 requestArg1 requestArg2 requestArg3 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Nrpc" ]
                    , name = "request"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function
                                    [ Type.var "arg" ]
                                    (Type.namedWith [] "Encoder" [])
                                , Type.namedWith
                                    []
                                    "Decoder"
                                    [ Type.var "result" ]
                                , Type.string
                                , Type.var "arg"
                                , Type.function
                                    [ Type.namedWith
                                        []
                                        "Result"
                                        [ Type.namedWith [] "Error" []
                                        , Type.var "result"
                                        ]
                                    ]
                                    (Type.var "msg")
                                ]
                                (Type.namedWith
                                    [ "Nats" ]
                                    "Effect"
                                    [ Type.namedWith [] "Bytes" []
                                    , Type.var "msg"
                                    ]
                                )
                            )
                    }
                )
                [ requestArg
                , requestArg0
                , requestArg1
                , requestArg2
                , requestArg3
                ]
    }


values_ :
    { subscribeToNoRequestMethod : Elm.Expression
    , streamRequestWithID : Elm.Expression
    , streamRequest : Elm.Expression
    , requestNoReply : Elm.Expression
    , requestVoidReply : Elm.Expression
    , request : Elm.Expression
    }
values_ =
    { subscribeToNoRequestMethod =
        Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "subscribeToNoRequestMethod"
            , annotation =
                Just
                    (Type.function
                        [ Type.string
                        , Type.namedWith [] "Decoder" [ Type.var "a" ]
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" [], Type.var "a" ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Sub"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
    , streamRequestWithID =
        Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "streamRequestWithID"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.namedWith [] "Decoder" [ Type.var "result" ]
                        , Type.string
                        , Type.string
                        , Type.var "arg"
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" []
                                , Type.var "result"
                                ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
    , streamRequest =
        Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "streamRequest"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.namedWith [] "Decoder" [ Type.var "result" ]
                        , Type.string
                        , Type.var "arg"
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" []
                                , Type.var "result"
                                ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
    , requestNoReply =
        Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "requestNoReply"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.string
                        , Type.var "arg"
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
    , requestVoidReply =
        Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "requestVoidReply"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.string
                        , Type.var "arg"
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" [], Type.unit ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
    , request =
        Elm.value
            { importFrom = [ "Nrpc" ]
            , name = "request"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "arg" ]
                            (Type.namedWith [] "Encoder" [])
                        , Type.namedWith [] "Decoder" [ Type.var "result" ]
                        , Type.string
                        , Type.var "arg"
                        , Type.function
                            [ Type.namedWith
                                []
                                "Result"
                                [ Type.namedWith [] "Error" []
                                , Type.var "result"
                                ]
                            ]
                            (Type.var "msg")
                        ]
                        (Type.namedWith
                            [ "Nats" ]
                            "Effect"
                            [ Type.namedWith [] "Bytes" [], Type.var "msg" ]
                        )
                    )
            }
    }