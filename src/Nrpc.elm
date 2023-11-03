module Nrpc exposing
    ( Error(..), request, requestVoidReply, requestNoReply, subscribeToNoRequestMethod
    , streamRequest, cancelStreamRequest, heartbeat, setStreamRequestMarker, onRequestCanceled
    )

{-| Utilities for Nrpc generated code

@docs Error, request, requestVoidReply, requestNoReply, subscribeToNoRequestMethod
@docs streamRequest, cancelStreamRequest, heartbeat, setStreamRequestMarker, onRequestCanceled

-}

import Bytes exposing (Bytes)
import Bytes.Decode
import Bytes.Encode
import Nats
import Nats.Effect
import Nats.Errors
import Proto.Nrpc exposing (decodeError)
import Proto.Nrpc.Internals_
import Protobuf.Decode exposing (Decoder)
import Protobuf.Encode exposing (Encoder)


{-| Nrpc error type
-}
type Error
    = Timeout
    | DecodeError String
    | ClientError String
    | ServerError String
    | ServerTooBusy String
    | EOS Int


type alias Message =
    Bytes


handleResponse : Decoder a -> Result Nats.Errors.Timeout Message -> Result Error a
handleResponse decoder result =
    case result of
        Ok message ->
            decodeMessage decoder message

        Err _ ->
            Err Timeout


handleVoidResponse : Result Nats.Errors.Timeout Message -> Result Error ()
handleVoidResponse result =
    case result of
        Ok message ->
            if Bytes.width message /= 0 then
                case Protobuf.Decode.decode decodeError message of
                    Just err ->
                        Err <| fromProtoError err

                    Nothing ->
                        Err <| DecodeError "handleVoidResponse: could not decode error payload"

            else
                Ok ()

        Err _ ->
            Err Timeout


{-| Perform a request
-}
request :
    (arg -> Encoder)
    -> Decoder result
    -> String
    -> arg
    -> (Result Error result -> msg)
    -> Nats.Effect Bytes msg
request encode decoder subject arg onResponse =
    Nats.request subject
        (encode arg |> Protobuf.Encode.encode)
        (handleResponse decoder
            >> onResponse
        )


{-| Perform a request to a method with void
-}
requestVoidReply :
    (arg -> Encoder)
    -> String
    -> arg
    -> (Result Error () -> msg)
    -> Nats.Effect Bytes msg
requestVoidReply encode subject arg tagger =
    Nats.request subject
        (encode arg |> Protobuf.Encode.encode)
        (handleVoidResponse >> tagger)


{-| publish a message to a 'noreply' method

See <https://github.com/nats-rpc/nrpc/wiki/Specifications#noreply>

-}
requestNoReply :
    (arg -> Encoder)
    -> String
    -> arg
    -> Nats.Effect Bytes msg
requestNoReply encode subject arg =
    Nats.publish subject
        (encode arg |> Protobuf.Encode.encode)


{-| Perform a request expecting a streamed reply

See <https://github.com/nats-rpc/nrpc/wiki/Specifications#streamed-replies>

-}
streamRequest :
    (arg -> Encoder)
    -> Decoder result
    -> String
    -> arg
    -> (Result Error result -> msg)
    -> Nats.Effect Bytes msg
streamRequest encode decoder subject arg onResponse =
    Nats.customRequest
        { marker = "stream/"
        , subject = subject
        , replyTo = Nothing
        , message = encode arg |> Protobuf.Encode.encode
        , timeout = Nothing
        , onTimeout = always (Err Timeout |> onResponse)
        , onResponse =
            \m ->
                if isKeepAliveMsg m.data then
                    ( Nothing, True )

                else
                    case handleResponse decoder (Ok m.data) of
                        Err err ->
                            ( Err err |> onResponse |> Just, False )

                        Ok result ->
                            ( Ok result |> onResponse |> Just, True )
        }


{-| subscribe to a NoRequest method
-}
subscribeToNoRequestMethod : String -> Decoder a -> (Result Error a -> msg) -> Nats.Sub Bytes msg
subscribeToNoRequestMethod subject decoder tagger =
    Nats.subscribe subject
        (.data >> decodeMessage decoder >> tagger)


{-| Send a heartbeat in all the streamed requests. Should be done every seconds or so
-}
heartbeat : Nats.State Bytes msg -> Nats.Effect Bytes msg
heartbeat =
    Nats.activeRequests
        >> List.filterMap
            (\r ->
                r.marker
                    |> Maybe.andThen
                        (\m ->
                            if String.startsWith "stream/" m then
                                Just <| Nats.publish (r.inbox ++ ".heartbeat") emptyBytes

                            else
                                Nothing
                        )
            )
        >> Nats.Effect.batch


lastBeatMessage : Bytes
lastBeatMessage =
    Proto.Nrpc.encodeHeartBeat { lastbeat = True }
        |> Protobuf.Encode.encode


{-| Returns a nats effect to apply when a request is canceled.

It sends the 'lastbeat' message on stream requests

-}
onRequestCanceled :
    { sid : String
    , id : String
    , marker : Maybe String
    , subject : String
    , inbox : String
    }
    -> Nats.Effect Bytes msg
onRequestCanceled req =
    case req.marker of
        Just marker ->
            if String.startsWith "stream/" marker then
                Nats.publish (req.inbox ++ ".heartbeat") lastBeatMessage

            else
                Nats.Effect.none

        Nothing ->
            Nats.Effect.none


hasLeadlingZero : Bytes -> Bool
hasLeadlingZero =
    Bytes.Decode.decode
        (Bytes.Decode.signedInt8
            |> Bytes.Decode.map ((==) 0)
        )
        >> Maybe.withDefault False


isKeepAliveMsg : Bytes -> Bool
isKeepAliveMsg bytes =
    Bytes.width bytes == 1 && hasLeadlingZero bytes


decodeMessage : Decoder a -> Bytes -> Result Error a
decodeMessage decoder message =
    let
        isError : Bool
        isError =
            hasLeadlingZero message
    in
    if isError then
        case
            message
                |> Bytes.Decode.decode
                    (Bytes.Decode.signedInt8
                        |> Bytes.Decode.andThen
                            (\_ ->
                                Bytes.Decode.bytes <| Bytes.width message - 1
                            )
                    )
                |> Maybe.andThen (Protobuf.Decode.decode decodeError)
        of
            Just err ->
                Err <| fromProtoError err

            Nothing ->
                Err <| DecodeError "could not decode the error"

    else
        case Protobuf.Decode.decode decoder message of
            Just value ->
                Ok value

            Nothing ->
                Err <| DecodeError "could not decode the response"


fromProtoError : Proto.Nrpc.Error -> Error
fromProtoError err =
    case err.type_ of
        Proto.Nrpc.Internals_.Proto__Nrpc__Error__CLIENT ->
            ClientError err.message

        Proto.Nrpc.Internals_.Proto__Nrpc__Error__SERVER ->
            ServerError err.message

        Proto.Nrpc.Internals_.Proto__Nrpc__Error__EOS ->
            EOS err.msgCount

        Proto.Nrpc.Internals_.Proto__Nrpc__Error__SERVERTOOBUSY ->
            ServerTooBusy err.message

        Proto.Nrpc.Internals_.Proto__Nrpc__Error__TypeUnrecognized_ i ->
            DecodeError <| "invalid error type: " ++ String.fromInt i


emptyBytes : Bytes
emptyBytes =
    Bytes.Encode.string ""
        |> Bytes.Encode.encode


{-| Cancel a stream request given its marker

The given marker must not have the "stream/" prefix

-}
cancelStreamRequest : String -> Nats.Effect datatype msg
cancelStreamRequest marker =
    Nats.cancelRequest ("stream/" ++ marker)


{-| Add a marker to a streamRequest

The string "stream/" will be prepended to the marker, so the heartbeat mechanism
can still operate.

The "stream/" prefix must be added too for tracking the request with Nats.track.

-}
setStreamRequestMarker : String -> Nats.Effect datatype msg -> Nats.Effect datatype msg
setStreamRequestMarker marker =
    Nats.Effect.setRequestMarker ("stream/" ++ marker)
