module Nrpc exposing
    ( Error(..), request, requestVoidReply
    , subscribeToNoRequestMethod
      --, requestSubscribe, requestSubscribeVoidReply
    )

{-| Utilities for Nrpc generated code

@docs Error, request, requestVoidReply
@docs requestSubscribe, requestSubscribeVoidReply

-}

import Bytes exposing (Bytes)
import Bytes.Decode
import Nats
import Nats.Errors
import Nats.Protocol
import Nats.Sub
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
        (Result.mapError
            (\_ -> Timeout)
            >> Result.andThen
                (Protobuf.Decode.decode decoder
                    >> Result.fromMaybe (DecodeError "could not decode response")
                )
            >> onResponse
        )


{-| subsribe to a stream request with void replies
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



{- subscribe to a stream request
   requestSubscribe : String -> Maybe Json.Encode.Value -> Decoder b -> (Result Error b -> msg) -> Nats.Sub.Sub msg
   requestSubscribe subject payload decoder tagger =
   Nats.requestSubscribe subject
   (payload
   |> Maybe.map (Json.Encode.encode 0)
   |> Maybe.withDefault ""
   )
   (handleResponse decoder >> tagger)
-}
{- subscribe to a stream request with void replies
   requestSubscribeVoidReply : String -> Maybe Json.Encode.Value -> (Result Error () -> msg) -> Nats.Sub.Sub msg
   requestSubscribeVoidReply subject payload tagger =
   Nats.requestSubscribe subject
   (payload
   |> Maybe.map (Json.Encode.encode 0)
   |> Maybe.withDefault ""
   )
   (handleVoidResponse >> tagger)
-}


{-| subscribe to a NoRequest method
-}
subscribeToNoRequestMethod : String -> Decoder a -> (Result Error a -> msg) -> Nats.Sub Bytes msg
subscribeToNoRequestMethod subject decoder tagger =
    Nats.subscribe subject
        (.data >> decodeMessage decoder >> tagger)


decodeMessage : Decoder a -> Bytes -> Result Error a
decodeMessage decoder message =
    let
        isError =
            message
                |> Bytes.Decode.decode
                    (Bytes.Decode.signedInt8
                        |> Bytes.Decode.map ((==) 0)
                    )
                |> Maybe.withDefault False
    in
    if isError then
        case Protobuf.Decode.decode decodeError message of
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
