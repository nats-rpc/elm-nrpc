module Nrpc.Main.SvcCustomSubject exposing (..)

import Nats
import Nrpc
import Nrpc.Main
import Proto.Main
import Proto.Nrpc
import Protobuf.Decode
import Protobuf.Encode


subject : Nrpc.Main.SubjectParams -> String
subject packageParams =
    String.join "." [ Nrpc.Main.subject packageParams, "custom_subject" ]


mtSimpleReply__Subject : Nrpc.Main.SubjectParams -> String
mtSimpleReply__Subject packageParams =
    String.join "." [ subject packageParams, "mt_simple_reply" ]


mtSimpleReply packageParams onResponse input =
    Nrpc.request
        Proto.Main.encodeStringArg
        Proto.Main.decodeSimpleStringReply
        (mtSimpleReply__Subject packageParams)
        input
        onResponse


mtVoidReply__Subject : Nrpc.Main.SubjectParams -> String
mtVoidReply__Subject packageParams =
    String.join "." [ subject packageParams, "mtvoidreply" ]


mtVoidReply packageParams onResponse input =
    Nrpc.request
        Proto.Main.encodeStringArg
        Proto.Nrpc.decodeVoid
        (mtVoidReply__Subject packageParams)
        input
        onResponse


mtNoRequest__Subject : Nrpc.Main.SubjectParams -> String
mtNoRequest__Subject packageParams =
    String.join "." [ subject packageParams, "mtnorequest" ]


mtNoRequest packageParams onResponse =
    Nrpc.subscribeToNoRequestMethod
        (mtNoRequest__Subject packageParams)
        Proto.Main.decodeSimpleStringReply
        onResponse


mtStreamedReply__Subject : Nrpc.Main.SubjectParams -> String
mtStreamedReply__Subject packageParams =
    String.join "." [ subject packageParams, "mtstreamedreply" ]


mtStreamedReply packageParams onResponse input =
    Nrpc.streamRequest
        Proto.Main.encodeStringArg
        Proto.Main.decodeSimpleStringReply
        (mtStreamedReply__Subject packageParams)
        input
        onResponse


mtVoidReqStreamedReply__Subject : Nrpc.Main.SubjectParams -> String
mtVoidReqStreamedReply__Subject packageParams =
    String.join "." [ subject packageParams, "mtvoidreqstreamedreply" ]


mtVoidReqStreamedReply packageParams onResponse input =
    Nrpc.streamRequest
        Proto.Nrpc.encodeVoid
        Proto.Main.decodeSimpleStringReply
        (mtVoidReqStreamedReply__Subject packageParams)
        input
        onResponse