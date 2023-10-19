module Nrpc.Main.SvcSubjectParams exposing (..)

import Nats
import Nrpc
import Nrpc.Main
import Proto.Main
import Proto.Nrpc
import Protobuf.Decode
import Protobuf.Encode


type alias SubjectParams =
    { clientid : String }


subject : Nrpc.Main.SubjectParams -> SubjectParams -> String
subject packageParams params =
    String.join
        "."
        [ Nrpc.Main.subject packageParams, "svcsubjectparams", params.clientid ]


type alias MtWithSubjectParams__SubjectParams =
    { mp1 : String, mp2 : String }


mtWithSubjectParams__Subject :
    Nrpc.Main.SubjectParams
    -> SubjectParams
    -> MtWithSubjectParams__SubjectParams
    -> String
mtWithSubjectParams__Subject packageParams serviceParams params =
    String.join
        "."
        [ subject packageParams serviceParams
        , "mtwithsubjectparams"
        , params.mp1
        , params.mp2
        ]


mtWithSubjectParams packageParams serviceParams params onResponse input =
    Nrpc.request
        Proto.Nrpc.encodeVoid
        Proto.Main.decodeSimpleStringReply
        (mtWithSubjectParams__Subject packageParams serviceParams params)
        input
        onResponse


type alias MtStreamedReplyWithSubjectParams__SubjectParams =
    { mp1 : String, mp2 : String }


mtStreamedReplyWithSubjectParams__Subject :
    Nrpc.Main.SubjectParams
    -> SubjectParams
    -> MtStreamedReplyWithSubjectParams__SubjectParams
    -> String
mtStreamedReplyWithSubjectParams__Subject packageParams serviceParams params =
    String.join
        "."
        [ subject packageParams serviceParams
        , "mtstreamedreplywithsubjectparams"
        , params.mp1
        , params.mp2
        ]


mtStreamedReplyWithSubjectParams packageParams serviceParams params onResponse input =
    Nrpc.streamRequest
        Proto.Nrpc.encodeVoid
        Proto.Main.decodeSimpleStringReply
        (mtStreamedReplyWithSubjectParams__Subject
            packageParams
            serviceParams
            params
        )
        input
        onResponse


mtNoReply__Subject : Nrpc.Main.SubjectParams -> SubjectParams -> String
mtNoReply__Subject packageParams serviceParams =
    String.join "." [ subject packageParams serviceParams, "mtnoreply" ]


mtNoReply packageParams serviceParams input =
    Nrpc.requestNoReply
        Proto.Nrpc.encodeVoid
        (mtNoReply__Subject packageParams serviceParams)
        input


type alias MtNoRequestWParams__SubjectParams =
    { mp1 : String }


mtNoRequestWParams__Subject :
    Nrpc.Main.SubjectParams
    -> SubjectParams
    -> MtNoRequestWParams__SubjectParams
    -> String
mtNoRequestWParams__Subject packageParams serviceParams params =
    String.join
        "."
        [ subject packageParams serviceParams
        , "mtnorequestwparams"
        , params.mp1
        ]


mtNoRequestWParams packageParams serviceParams params onResponse =
    Nrpc.subscribeToNoRequestMethod
        (mtNoRequestWParams__Subject packageParams serviceParams params)
        Proto.Main.decodeSimpleStringReply
        onResponse