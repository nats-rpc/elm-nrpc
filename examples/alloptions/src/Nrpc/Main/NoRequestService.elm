module Nrpc.Main.NoRequestService exposing (..)

import Nats
import Nrpc
import Nrpc.Main
import Proto.Main
import Protobuf.Decode


subject : Nrpc.Main.SubjectParams -> String
subject packageParams =
    String.join "." [ Nrpc.Main.subject packageParams, "norequestservice" ]


mtNoRequest__Subject : Nrpc.Main.SubjectParams -> String
mtNoRequest__Subject packageParams =
    String.join "." [ subject packageParams, "mtnorequest" ]


mtNoRequest packageParams onResponse =
    Nrpc.subscribeToNoRequestMethod
        (mtNoRequest__Subject packageParams)
        Proto.Main.decodeSimpleStringReply
        onResponse