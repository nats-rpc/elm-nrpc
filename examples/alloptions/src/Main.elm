module Main exposing (..)

import Browser
import Bytes exposing (Bytes)
import Html exposing (Html, a, button, div, h1, h3, li, p, text, ul)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)
import Nats
import Nats.Effect
import Nats.Events
import Nats.Protocol
import Nats.Socket
import Nats.Sub
import NatsPorts
import Nrpc
import Nrpc.Main
import Nrpc.Main.NoRequestService
import Nrpc.Main.SvcCustomSubject
import Nrpc.Main.SvcSubjectParams
import Proto.Main
import Proto.Nrpc
import Random
import Time


type alias Flags =
    { now : Int }


type alias Model =
    { nats : Nats.State Bytes Msg
    , serverInfo : Maybe Nats.Protocol.ServerInfo
    , socket : Nats.Socket.Socket
    , simpleStringReply : Maybe (Result Nrpc.Error Proto.Main.SimpleStringReply)
    , voidReply : Maybe (Result Nrpc.Error Proto.Nrpc.Void)
    , svcCustomSubjectMtNoRequestResponse : Maybe (Result Nrpc.Error Proto.Main.SimpleStringReply)
    , streamSimpleStringResponse : List (Result Nrpc.Error Proto.Main.SimpleStringReply)
    , reqMarker : Maybe String
    }


type Msg
    = NatsMsg (Nats.Msg Bytes Msg)
    | OnSocketEvent Nats.Events.SocketEvent
    | CallSimpleReply String
    | CallVoidReply String
    | CallNoReply
    | CallStreamReply String
    | CallVoidReqStreamReply
    | CancelVoidReqStreamReply
    | OnSimpleReplyResponse (Result Nrpc.Error Proto.Main.SimpleStringReply)
    | OnNoRequestResponse (Result Nrpc.Error Proto.Main.SimpleStringReply)
    | OnVoidReply (Result Nrpc.Error Proto.Nrpc.Void)
    | OnStreamSimpleStringResponse (Result Nrpc.Error Proto.Main.SimpleStringReply)
    | OnTime Time.Posix


natsConfig =
    NatsPorts.natsConfig NatsMsg


printError : Nrpc.Error -> String
printError e =
    case e of
        Nrpc.Timeout ->
            "timeout"

        Nrpc.DecodeError err ->
            "decode error: " ++ err

        Nrpc.ClientError err ->
            "client error: " ++ err

        Nrpc.ServerError err ->
            "server error: " ++ err

        Nrpc.ServerTooBusy err ->
            "server too busy: " ++ err

        Nrpc.EOS err ->
            "EOS: " ++ String.fromInt err


printSimpleStringReply : Result Nrpc.Error Proto.Main.SimpleStringReply -> String
printSimpleStringReply res =
    case res of
        Ok reply ->
            reply.reply

        Err err ->
            printError err


printVoidReply : Result Nrpc.Error Proto.Nrpc.Void -> String
printVoidReply res =
    case res of
        Ok _ ->
            "OK"

        Err err ->
            printError err


init : Flags -> ( Model, Cmd Msg )
init { now } =
    ( { nats = Nats.init (Random.initialSeed now) (Time.millisToPosix now)
      , serverInfo = Nothing
      , socket =
            Nats.Socket.new "0" "ws://localhost:8087"
                |> Nats.Socket.withDebug True
      , simpleStringReply = Nothing
      , voidReply = Nothing
      , svcCustomSubjectMtNoRequestResponse = Nothing
      , streamSimpleStringResponse = []
      , reqMarker = Nothing
      }
    , Cmd.none
    )


innerUpdate : Msg -> Model -> ( Model, Nats.Effect Bytes Msg, Cmd Msg )
innerUpdate msg model =
    case msg of
        NatsMsg natsMsg ->
            let
                ( nats, cmd ) =
                    Nats.update natsConfig natsMsg model.nats
            in
            ( { model | nats = nats }
            , Nats.Effect.none
            , cmd
            )

        OnTime _ ->
            ( model
            , Nrpc.heartbeat model.nats
            , Cmd.none
            )

        OnSocketEvent (Nats.Events.SocketOpen info) ->
            ( { model
                | serverInfo = Just info
              }
            , Nats.Effect.none
            , Cmd.none
            )

        OnSocketEvent _ ->
            ( model
            , Nats.Effect.none
            , Cmd.none
            )

        OnNoRequestResponse reply ->
            ( { model | svcCustomSubjectMtNoRequestResponse = Just reply }
            , Nats.Effect.none
            , Cmd.none
            )

        CallSimpleReply instance ->
            ( model
            , Nrpc.Main.SvcCustomSubject.mtSimpleReply { instance = instance }
                OnSimpleReplyResponse
                { arg1 = "Some value" }
            , Cmd.none
            )

        OnSimpleReplyResponse reply ->
            ( { model | simpleStringReply = Just reply }
            , Nats.Effect.none
            , Cmd.none
            )

        OnStreamSimpleStringResponse reply ->
            ( { model | streamSimpleStringResponse = reply :: model.streamSimpleStringResponse }
            , Nats.Effect.none
            , Cmd.none
            )

        CallVoidReply arg ->
            ( model
            , Nrpc.Main.SvcCustomSubject.mtVoidReply { instance = "default" }
                OnVoidReply
                { arg1 = arg }
            , Cmd.none
            )

        CallStreamReply arg ->
            ( model
            , Nrpc.Main.SvcCustomSubject.mtStreamedReply { instance = "default" }
                OnStreamSimpleStringResponse
                { arg1 = arg }
            , Cmd.none
            )

        CallVoidReqStreamReply ->
            ( { model | reqMarker = Just "1" }
            , Nrpc.Main.SvcCustomSubject.mtVoidReqStreamedReply { instance = "default" }
                OnStreamSimpleStringResponse
                {}
                |> Nrpc.setStreamRequestMarker "1"
            , Cmd.none
            )

        CancelVoidReqStreamReply ->
            ( { model | reqMarker = Nothing }
            , case model.reqMarker of
                Just m ->
                    Nrpc.cancelStreamRequest m

                Nothing ->
                    Nats.Effect.none
            , Cmd.none
            )

        OnVoidReply reply ->
            ( { model | voidReply = Just reply }
            , Nats.Effect.none
            , Cmd.none
            )

        CallNoReply ->
            ( model
            , Nrpc.Main.SvcSubjectParams.mtNoReply { instance = "default" }
                { clientid = "client1" }
                {}
            , Cmd.none
            )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        ( newModel, natsEffect, cmd ) =
            innerUpdate msg model

        ( nats, natsCmd ) =
            Nats.applyEffectAndSub natsConfig natsEffect (natsSubscriptions model) newModel.nats
    in
    ( { newModel | nats = nats }
    , Cmd.batch [ cmd, natsCmd ]
    )


natsSubscriptions : Model -> Nats.Sub Bytes Msg
natsSubscriptions model =
    Nats.Sub.batch
        [ Nats.connect
            (Nats.Socket.connectOptions "nrpc demo" "0.1"
                |> Nats.Socket.withUserPass "test" "test"
            )
            model.socket
            OnSocketEvent
        , Nrpc.Main.SvcCustomSubject.mtNoRequest { instance = "default" } OnNoRequestResponse
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Nats.subscriptions natsConfig model.nats
        , Time.every 1000 OnTime
        ]


panel : List (Html Msg) -> Html Msg
panel body =
    div [ class "panel panel-default" ]
        [ div [ class "panel-body" ]
            body
        ]


scaffolding : List (List (Html Msg)) -> Html Msg
scaffolding boxes =
    div
        [ class "container"
        ]
        [ div [ class "header clearfix" ]
            [ h3 [ class "text-muted" ] [ text "Elm NATS" ]
            ]
        , let
            ( col1, col2 ) =
                List.partition (\( n, box ) -> modBy 2 n == 0) <|
                    List.map2
                        (\n box -> ( n, panel box ))
                        (List.range 0 50)
                        boxes
          in
          div [ class "row" ]
            [ div [ class "col-sm-12" ]
                [ panel
                    [ h1 [] [ text "Elm NRPC demonstration mini-app" ]
                    , p [] [ text "This mini-app demonstrate Elm NRPC" ]
                    ]
                ]
            , div [ class "col-sm-6" ] <|
                List.map Tuple.second <|
                    col1
            , div [ class "col-sm-6" ] <|
                List.map Tuple.second <|
                    col2
            ]
        ]


view : Model -> Browser.Document Msg
view model =
    { title = "Elm Nrpc Demo"
    , body =
        [ scaffolding <|
            [ [ Html.h4 [] [ Html.text "nats info" ]
              , case model.serverInfo of
                    Just info ->
                        ul []
                            [ li [] [ text ("Server ID: " ++ info.server_id) ]
                            , li [] [ text ("Version: " ++ info.version) ]
                            , li [] [ text ("Go version: " ++ info.go) ]
                            ]

                    Nothing ->
                        div [ class "alert alert-warning" ]
                            [ text "Problem: No connection established (yet?). This app need a running "
                            , a [ href "https://github.com/nats-io/gnatsd/" ]
                                [ text "gnatsd" ]
                            , text " and a running "
                            , a [ href "https://github.com/orus-io/nats-websocket-gw" ]
                                [ text "nats-websocket-gw" ]
                            , text " --no-origin-check"
                            ]
              ]
            , [ Html.h4 [] [ Html.text "Custom Subject" ]
              , ul []
                    [ li []
                        [ button [ onClick <| CallSimpleReply "default" ] [ Html.text "MtSimpleReply" ]
                        , button [ onClick <| CallSimpleReply "invalid" ] [ Html.text "MtSimpleReply error" ]
                        ]
                    , li []
                        [ button [ onClick <| CallVoidReply "normal" ] [ Html.text "MtVoidReply normal" ]
                        , button [ onClick <| CallVoidReply "please fail" ] [ Html.text "MtVoidReply please fail" ]
                        ]
                    , li []
                        [ button [ onClick <| CallStreamReply "arg" ] [ Html.text "MtStreamedReply" ]
                        ]
                    , li []
                        [ button [ onClick <| CallVoidReqStreamReply ] [ Html.text "MtVoidReqStreamedReply" ]
                        , button [ onClick <| CancelVoidReqStreamReply ] [ Html.text "Cancel" ]
                        ]
                    ]
              ]
            , [ Html.h4 [] [ Html.text "Subject Params" ]
              , ul []
                    [ li []
                        [ button [ onClick <| CallNoReply ] [ Html.text "MtNoReply" ]
                        ]
                    ]
              ]
            , [ Html.h4 [] [ Html.text "Replies" ]
              , ul []
                    [ li []
                        [ text
                            ("Simple String Reply: "
                                ++ (model.simpleStringReply
                                        |> Maybe.map printSimpleStringReply
                                        |> Maybe.withDefault ""
                                   )
                            )
                        ]
                    , li []
                        [ text
                            ("Void Reply: "
                                ++ (model.voidReply
                                        |> Maybe.map printVoidReply
                                        |> Maybe.withDefault ""
                                   )
                            )
                        ]
                    , li []
                        [ text
                            ("SvcCustomSubject.MtNoRequest: "
                                ++ (model.svcCustomSubjectMtNoRequestResponse
                                        |> Maybe.map printSimpleStringReply
                                        |> Maybe.withDefault ""
                                   )
                            )
                        ]
                    , li []
                        [ text
                            "SvcCustomSubject.MtStreamedReply: "
                        , ul []
                            (model.streamSimpleStringResponse
                                |> List.map
                                    (\r ->
                                        li [] [ text <| printSimpleStringReply r ]
                                    )
                            )
                        ]
                    ]
              ]
            ]
        ]
    }


main =
    Browser.document
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }
