module Nrpc exposing (Error(..), request, requestSubscribe)

{-| Utilities for Nrpc generated code

@docs Error, request, requestSubscribe

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


{-| Perform a request
-}
request : String -> Maybe Json.Encode.Value -> Decoder b -> (Result Error b -> msg) -> Nats.Cmd.Cmd msg
request subject payload decoder tagger =
    let
        handleResponse : Result Nats.Errors.Timeout Nats.Protocol.Message -> msg
        handleResponse result =
            tagger <|
                case result of
                    Ok message ->
                        decodeMessage decoder message

                    Err _ ->
                        Err Timeout
    in
        Nats.request subject
            (payload
                |> Maybe.map (Json.Encode.encode 0)
                |> Maybe.withDefault ""
            )
            handleResponse


{-| subscribe to a stream request
-}
requestSubscribe : String -> Maybe Json.Encode.Value -> Decoder b -> (Result Error b -> msg) -> Nats.Sub.Sub msg
requestSubscribe subject payload decoder tagger =
    let
        handleResponse : Result Nats.Errors.Timeout Nats.Protocol.Message -> msg
        handleResponse result =
            tagger <|
                case result of
                    Ok message ->
                        decodeMessage decoder message

                    Err _ ->
                        Err Timeout
    in
        Nats.requestSubscribe subject
            (payload
                |> Maybe.map (Json.Encode.encode 0)
                |> Maybe.withDefault ""
            )
            handleResponse


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
