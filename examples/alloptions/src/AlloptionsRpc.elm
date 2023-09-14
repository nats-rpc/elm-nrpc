module AlloptionsRpc exposing (..)

-- DO NOT EDIT
-- AUTOGENERATED BY THE ELM NATS COMPILER
-- https://github.com/nats-rpc/elm-nrpc
-- source file: alloptions.proto

import Nats.Cmd
import Nats.Sub
import Nrpc

import Alloptions exposing (..)
import Nrpc.Nrpc exposing (..)


pkgSubject : String
pkgSubject =
    "root"


type alias PkgParams =
    { instance: string


serviceSvcCustomSubjectSubject : String
serviceSvcCustomSubjectSubject =
    "custom_subject"


fmtServiceSvcCustomSubjectSubject : String
fmtServiceSvcCustomSubjectSubject =
    pkgSubject ++ "." ++ serviceSvcCustomSubjectSubject


svcCustomSubjectMtSimpleReplySubject : String
svcCustomSubjectMtSimpleReplySubject =
    "mt_simple_reply"


fmtSvcCustomSubjectMtSimpleReplySubject : String
fmtSvcCustomSubjectMtSimpleReplySubject  =
    fmtServiceSvcCustomSubjectSubject
        ++ "."
        ++ svcCustomSubjectMtSimpleReplySubject
        ++ ".json"


svcCustomSubjectMtSimpleReply : StringArg -> (Result Nrpc.Error SimpleStringReply -> msg) -> Nats.Cmd.Cmd msg
svcCustomSubjectMtSimpleReply input tagger =
    Nrpc.request
        (fmtSvcCustomSubjectMtSimpleReplySubject)
        (Just (stringArgEncoder input))
        simpleStringReplyDecoder
        tagger


svcCustomSubjectMtVoidReplySubject : String
svcCustomSubjectMtVoidReplySubject =
    "mtvoidreply"


fmtSvcCustomSubjectMtVoidReplySubject : String
fmtSvcCustomSubjectMtVoidReplySubject  =
    fmtServiceSvcCustomSubjectSubject
        ++ "."
        ++ svcCustomSubjectMtVoidReplySubject
        ++ ".json"


svcCustomSubjectMtVoidReply : StringArg -> (Result Nrpc.Error () -> msg) -> Nats.Cmd.Cmd msg
svcCustomSubjectMtVoidReply input tagger =
    Nrpc.requestVoidReply
        (fmtSvcCustomSubjectMtVoidReplySubject)
        (Just (stringArgEncoder input))
        tagger


svcCustomSubjectMtNoRequestSubject : String
svcCustomSubjectMtNoRequestSubject =
    "mtnorequest"


fmtSvcCustomSubjectMtNoRequestSubject : String
fmtSvcCustomSubjectMtNoRequestSubject  =
    fmtServiceSvcCustomSubjectSubject
        ++ "."
        ++ svcCustomSubjectMtNoRequestSubject
        ++ ".json"


svcCustomSubjectMtNoRequest : (Result Nrpc.Error SimpleStringReply -> msg) -> Nats.Sub.Sub msg
svcCustomSubjectMtNoRequest tagger =
    Nrpc.subscribeToNoRequestMethod
        (fmtSvcCustomSubjectMtNoRequestSubject)
        simpleStringReplyDecoder
        tagger


svcCustomSubjectMtStreamedReplySubject : String
svcCustomSubjectMtStreamedReplySubject =
    "mtstreamedreply"


fmtSvcCustomSubjectMtStreamedReplySubject : String
fmtSvcCustomSubjectMtStreamedReplySubject  =
    fmtServiceSvcCustomSubjectSubject
        ++ "."
        ++ svcCustomSubjectMtStreamedReplySubject
        ++ ".json"


svcCustomSubjectMtStreamedReply : StringArg -> (Result Nrpc.Error SimpleStringReply -> msg) -> Nats.Sub.Sub msg
svcCustomSubjectMtStreamedReply input tagger =
    Nrpc.requestSubscribe
        (fmtSvcCustomSubjectMtStreamedReplySubject)
        (Just (stringArgEncoder input))
        simpleStringReplyDecoder
        tagger


svcCustomSubjectMtVoidReqStreamedReplySubject : String
svcCustomSubjectMtVoidReqStreamedReplySubject =
    "mtvoidreqstreamedreply"


fmtSvcCustomSubjectMtVoidReqStreamedReplySubject : String
fmtSvcCustomSubjectMtVoidReqStreamedReplySubject  =
    fmtServiceSvcCustomSubjectSubject
        ++ "."
        ++ svcCustomSubjectMtVoidReqStreamedReplySubject
        ++ ".json"


svcCustomSubjectMtVoidReqStreamedReply : (Result Nrpc.Error SimpleStringReply -> msg) -> Nats.Sub.Sub msg
svcCustomSubjectMtVoidReqStreamedReply tagger =
    Nrpc.requestSubscribe
        (fmtSvcCustomSubjectMtVoidReqStreamedReplySubject)
        Nothing
        simpleStringReplyDecoder
        tagger


serviceSvcSubjectParamsSubject : String
serviceSvcSubjectParamsSubject =
    "svcsubjectparams"


type alias ServiceSvcSubjectParamsParams =
    { clientid : String
    }


fmtServiceSvcSubjectParamsSubject : ServiceSvcSubjectParamsParams -> String
fmtServiceSvcSubjectParamsSubject { clientid } =
    pkgSubject ++ "." ++ serviceSvcSubjectParamsSubject ++ "." ++ clientid


svcSubjectParamsMtWithSubjectParamsSubject : String
svcSubjectParamsMtWithSubjectParamsSubject =
    "mtwithsubjectparams"


type alias SvcSubjectParamsMtWithSubjectParamsParams =
    { mp1 : String
    , mp2 : String
    }


fmtSvcSubjectParamsMtWithSubjectParamsSubject : ServiceSvcSubjectParamsParams -> SvcSubjectParamsMtWithSubjectParamsParams -> String
fmtSvcSubjectParamsMtWithSubjectParamsSubject svcParams { mp1, mp2 } =
    fmtServiceSvcSubjectParamsSubject
        svcParams
        ++ "."
        ++ svcSubjectParamsMtWithSubjectParamsSubject
        ++ "."
        ++ mp1
        ++ "."
        ++ mp2
        ++ ".json"


svcSubjectParamsMtWithSubjectParams : ServiceSvcSubjectParamsParams -> SvcSubjectParamsMtWithSubjectParamsParams -> (Result Nrpc.Error SimpleStringReply -> msg) -> Nats.Cmd.Cmd msg
svcSubjectParamsMtWithSubjectParams svcParams params tagger =
    Nrpc.request
        (fmtSvcSubjectParamsMtWithSubjectParamsSubject svcParams params)
        Nothing
        simpleStringReplyDecoder
        tagger


svcSubjectParamsMtStreamedReplyWithSubjectParamsSubject : String
svcSubjectParamsMtStreamedReplyWithSubjectParamsSubject =
    "mtstreamedreplywithsubjectparams"


type alias SvcSubjectParamsMtStreamedReplyWithSubjectParamsParams =
    { mp1 : String
    , mp2 : String
    }


fmtSvcSubjectParamsMtStreamedReplyWithSubjectParamsSubject : ServiceSvcSubjectParamsParams -> SvcSubjectParamsMtStreamedReplyWithSubjectParamsParams -> String
fmtSvcSubjectParamsMtStreamedReplyWithSubjectParamsSubject svcParams { mp1, mp2 } =
    fmtServiceSvcSubjectParamsSubject
        svcParams
        ++ "."
        ++ svcSubjectParamsMtStreamedReplyWithSubjectParamsSubject
        ++ "."
        ++ mp1
        ++ "."
        ++ mp2
        ++ ".json"


svcSubjectParamsMtStreamedReplyWithSubjectParams : ServiceSvcSubjectParamsParams -> SvcSubjectParamsMtStreamedReplyWithSubjectParamsParams -> (Result Nrpc.Error SimpleStringReply -> msg) -> Nats.Sub.Sub msg
svcSubjectParamsMtStreamedReplyWithSubjectParams svcParams params tagger =
    Nrpc.requestSubscribe
        (fmtSvcSubjectParamsMtStreamedReplyWithSubjectParamsSubject svcParams params)
        Nothing
        simpleStringReplyDecoder
        tagger


svcSubjectParamsMtNoReplySubject : String
svcSubjectParamsMtNoReplySubject =
    "mtnoreply"


fmtSvcSubjectParamsMtNoReplySubject : ServiceSvcSubjectParamsParams -> String
fmtSvcSubjectParamsMtNoReplySubject svcParams =
    fmtServiceSvcSubjectParamsSubject
        svcParams
        ++ "."
        ++ svcSubjectParamsMtNoReplySubject
        ++ ".json"


svcSubjectParamsMtNoReply : ServiceSvcSubjectParamsParams -> (Result Nrpc.Error NoReply -> msg) -> Nats.Cmd.Cmd msg
svcSubjectParamsMtNoReply svcParams tagger =
    Nrpc.request
        (fmtSvcSubjectParamsMtNoReplySubject svcParams)
        Nothing
        noReplyDecoder
        tagger


svcSubjectParamsMtNoRequestWParamsSubject : String
svcSubjectParamsMtNoRequestWParamsSubject =
    "mtnorequestwparams"


type alias SvcSubjectParamsMtNoRequestWParamsParams =
    { mp1 : String
    }


fmtSvcSubjectParamsMtNoRequestWParamsSubject : ServiceSvcSubjectParamsParams -> SvcSubjectParamsMtNoRequestWParamsParams -> String
fmtSvcSubjectParamsMtNoRequestWParamsSubject svcParams { mp1 } =
    fmtServiceSvcSubjectParamsSubject
        svcParams
        ++ "."
        ++ svcSubjectParamsMtNoRequestWParamsSubject
        ++ "."
        ++ mp1
        ++ ".json"


svcSubjectParamsMtNoRequestWParams : ServiceSvcSubjectParamsParams -> SvcSubjectParamsMtNoRequestWParamsParams -> (Result Nrpc.Error SimpleStringReply -> msg) -> Nats.Sub.Sub msg
svcSubjectParamsMtNoRequestWParams svcParams params tagger =
    Nrpc.subscribeToNoRequestMethod
        (fmtSvcSubjectParamsMtNoRequestWParamsSubject svcParams params)
        simpleStringReplyDecoder
        tagger


serviceNoRequestServiceSubject : String
serviceNoRequestServiceSubject =
    "norequestservice"


fmtServiceNoRequestServiceSubject : String
fmtServiceNoRequestServiceSubject =
    pkgSubject ++ "." ++ serviceNoRequestServiceSubject


noRequestServiceMtNoRequestSubject : String
noRequestServiceMtNoRequestSubject =
    "mtnorequest"


fmtNoRequestServiceMtNoRequestSubject : String
fmtNoRequestServiceMtNoRequestSubject  =
    fmtServiceNoRequestServiceSubject
        ++ "."
        ++ noRequestServiceMtNoRequestSubject
        ++ ".json"


noRequestServiceMtNoRequest : (Result Nrpc.Error SimpleStringReply -> msg) -> Nats.Sub.Sub msg
noRequestServiceMtNoRequest tagger =
    Nrpc.subscribeToNoRequestMethod
        (fmtNoRequestServiceMtNoRequestSubject)
        simpleStringReplyDecoder
        tagger

