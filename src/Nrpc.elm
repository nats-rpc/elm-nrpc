module Nrpc
    exposing
        ( Error(..)
        , request
        , requestVoidReply
        , requestSubscribe
        , requestSubscribeVoidReply
        )

{-| Utilities for Nrpc generated code

@docs Error, request, requestSubscribe, requestVoidReply, requestSubscribeVoidReply

-}

import Json.Decode exposing (Decoder)
import Json.Encode
import Nats
import Nats.Cmd
import Nats.Errors
import Nats.Protocol
import Nats.Sub


{-| Nrpc error type
-}
type Error
    = Timeout
    | DecodeError String
    | ClientError String
    | ServerError String
    | ServerTooBusy
    | EOS


handleResponse : Decoder a -> Result Nats.Errors.Timeout Nats.Protocol.Message -> Result Error a
handleResponse decoder result =
    case result of
        Ok message ->
            decodeMessage decoder message

        Err _ ->
            Err Timeout


handleVoidResponse : Result Nats.Errors.Timeout Nats.Protocol.Message -> Result Error ()
handleVoidResponse result =
    case result of
        Ok message ->
            if message.data /= "" then
                case Json.Decode.decodeString decodeError message.data of
                    Ok err ->
                        Err err

                    Err err ->
                        Err <| DecodeError err
            else
                Err <| DecodeError ("Unexpected payload: " ++ message.data)

        Err _ ->
            Err Timeout


{-| Perform a request
-}
request : String -> Maybe Json.Encode.Value -> Decoder b -> (Result Error b -> msg) -> Nats.Cmd.Cmd msg
request subject payload decoder tagger =
    Nats.request subject
        (payload
            |> Maybe.map (Json.Encode.encode 0)
            |> Maybe.withDefault ""
        )
        (handleResponse decoder >> tagger)


{-| subsribe to a stream request with void replies
-}
requestVoidReply : String -> Maybe Json.Encode.Value -> (Result Error () -> msg) -> Nats.Cmd.Cmd msg
requestVoidReply subject payload tagger =
    Nats.request subject
        (payload
            |> Maybe.map (Json.Encode.encode 0)
            |> Maybe.withDefault ""
        )
        (handleVoidResponse >> tagger)


{-| subscribe to a stream request
-}
requestSubscribe : String -> Maybe Json.Encode.Value -> Decoder b -> (Result Error b -> msg) -> Nats.Sub.Sub msg
requestSubscribe subject payload decoder tagger =
    Nats.requestSubscribe subject
        (payload
            |> Maybe.map (Json.Encode.encode 0)
            |> Maybe.withDefault ""
        )
        (handleResponse decoder >> tagger)


{-| subsribe to a stream request with void replies
-}
requestSubscribeVoidReply : String -> Maybe Json.Encode.Value -> (Result Error () -> msg) -> Nats.Sub.Sub msg
requestSubscribeVoidReply subject payload tagger =
    Nats.requestSubscribe subject
        (payload
            |> Maybe.map (Json.Encode.encode 0)
            |> Maybe.withDefault ""
        )
        (handleVoidResponse >> tagger)


decodeMessage : Decoder a -> Nats.Protocol.Message -> Result Error a
decodeMessage decoder message =
    case Json.Decode.decodeString Json.Decode.value message.data of
        Ok json ->
            case Json.Decode.decodeValue decodeError json of
                Ok err ->
                    Err err

                Err _ ->
                    case Json.Decode.decodeValue decoder json of
                        Ok result ->
                            Ok result

                        Err err ->
                            Err <| DecodeError err

        Err err ->
            Err <| DecodeError err


decodeError : Decoder Error
decodeError =
    Json.Decode.at [ "__error__", "type" ] Json.Decode.int
        |> Json.Decode.map
            (\err ->
                case err of
                    0 ->
                        ClientError ""

                    1 ->
                        ServerError ""

                    3 ->
                        EOS

                    4 ->
                        ServerTooBusy

                    _ ->
                        DecodeError <| "Unknown error type: " ++ toString err
            )
