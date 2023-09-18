module Nrpc.Main.NoRequestService exposing (..)

import Nats
import Nrpc
import Nrpc.Main
import Proto.Main
import Proto.Nrpc
import Protobuf.Decode
import Protobuf.Encode


subject : Nrpc.Main.SubjectParams -> String
subject packageParams =
    String.join "." [ Nrpc.Main.subject packageParams, "norequestservice" ]


mtNoRequest__Subject : Nrpc.Main.SubjectParams -> String
mtNoRequest__Subject packageParams =
    String.join "." [ subject packageParams, "mtnorequest" ]


mtNoRequest packageParams onResponse input =
    Nrpc.request
        Proto.Nrpc.encodeNoRequest
        Proto.Main.decodeSimpleStringReply
        (mtNoRequest__Subject packageParams)
        input
        onResponse