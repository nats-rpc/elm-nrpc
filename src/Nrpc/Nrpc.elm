module Nrpc.Nrpc exposing (..)

-- DO NOT EDIT
-- AUTOGENERATED BY THE ELM PROTOCOL BUFFER COMPILER
-- https://github.com/tiziano88/elm-protobuf
-- source file: nrpc/nrpc.proto

import Protobuf exposing (..)

import Json.Decode as JD
import Json.Encode as JE


type SubjectRule
    = Copy -- 0
    | Tolower -- 1


subjectRuleDecoder : JD.Decoder SubjectRule
subjectRuleDecoder =
    let
        lookup s =
            case s of
                "COPY" ->
                    Copy

                "TOLOWER" ->
                    Tolower

                _ ->
                    Copy
    in
        JD.map lookup JD.string


subjectRuleDefault : SubjectRule
subjectRuleDefault = Copy


subjectRuleEncoder : SubjectRule -> JE.Value
subjectRuleEncoder v =
    let
        lookup s =
            case s of
                Copy ->
                    "COPY"

                Tolower ->
                    "TOLOWER"

    in
        JE.string <| lookup v


type alias Error =
    { type_ : Error_Type -- 1
    , message : String -- 2
    , msgCount : Int -- 3
    }


type Error_Type
    = Error_Client -- 0
    | Error_Server -- 1
    | Error_Eos -- 3
    | Error_Servertoobusy -- 4


errorDecoder : JD.Decoder Error
errorDecoder =
    JD.lazy <| \_ -> decode Error
        |> required "type" error_TypeDecoder error_TypeDefault
        |> required "message" JD.string ""
        |> required "msgCount" intDecoder 0


error_TypeDecoder : JD.Decoder Error_Type
error_TypeDecoder =
    let
        lookup s =
            case s of
                "CLIENT" ->
                    Error_Client

                "SERVER" ->
                    Error_Server

                "EOS" ->
                    Error_Eos

                "SERVERTOOBUSY" ->
                    Error_Servertoobusy

                _ ->
                    Error_Client
    in
        JD.map lookup JD.string


error_TypeDefault : Error_Type
error_TypeDefault = Error_Client


errorEncoder : Error -> JE.Value
errorEncoder v =
    JE.object <| List.filterMap identity <|
        [ (requiredFieldEncoder "type" error_TypeEncoder error_TypeDefault v.type_)
        , (requiredFieldEncoder "message" JE.string "" v.message)
        , (requiredFieldEncoder "msgCount" JE.int 0 v.msgCount)
        ]


error_TypeEncoder : Error_Type -> JE.Value
error_TypeEncoder v =
    let
        lookup s =
            case s of
                Error_Client ->
                    "CLIENT"

                Error_Server ->
                    "SERVER"

                Error_Eos ->
                    "EOS"

                Error_Servertoobusy ->
                    "SERVERTOOBUSY"

    in
        JE.string <| lookup v


type alias Void =
    {
    }


voidDecoder : JD.Decoder Void
voidDecoder =
    JD.lazy <| \_ -> decode Void


voidEncoder : Void -> JE.Value
voidEncoder v =
    JE.object <| List.filterMap identity <|
        [
        ]


type alias NoRequest =
    {
    }


noRequestDecoder : JD.Decoder NoRequest
noRequestDecoder =
    JD.lazy <| \_ -> decode NoRequest


noRequestEncoder : NoRequest -> JE.Value
noRequestEncoder v =
    JE.object <| List.filterMap identity <|
        [
        ]


type alias NoReply =
    {
    }


noReplyDecoder : JD.Decoder NoReply
noReplyDecoder =
    JD.lazy <| \_ -> decode NoReply


noReplyEncoder : NoReply -> JE.Value
noReplyEncoder v =
    JE.object <| List.filterMap identity <|
        [
        ]


type alias HeartBeat =
    { lastbeat : Bool -- 1
    }


heartBeatDecoder : JD.Decoder HeartBeat
heartBeatDecoder =
    JD.lazy <| \_ -> decode HeartBeat
        |> required "lastbeat" JD.bool False


heartBeatEncoder : HeartBeat -> JE.Value
heartBeatEncoder v =
    JE.object <| List.filterMap identity <|
        [ (requiredFieldEncoder "lastbeat" JE.bool False v.lastbeat)
        ]
