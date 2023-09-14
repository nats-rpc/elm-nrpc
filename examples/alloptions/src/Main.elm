module Main exposing (..)

import AlloptionsRpc
import Browser
import Bytes exposing (Bytes)
import Html exposing (Html, a, div, h1, h3, li, p, text, ul)
import Html.Attributes exposing (class, href)
import Nats
import Nats.Effect
import Nats.Events
import Nats.Protocol
import Nats.Socket
import Nats.Sub
import NatsPorts
import Nrpc
import Random
import Time


type alias Flags =
    { now : Int }


type alias Model =
    { nats : Nats.State Bytes Msg
    , serverInfo : Maybe Nats.Protocol.ServerInfo
    , socket : Nats.Socket.Socket
    }


type Msg
    = NatsMsg (Nats.Msg Bytes Msg)
    | OnSocketEvent Nats.Events.SocketEvent


natsConfig =
    NatsPorts.natsConfig NatsMsg


init : Flags -> ( Model, Cmd Msg )
init { now } =
    ( { nats = Nats.init (Random.initialSeed now) (Time.millisToPosix now)
      , serverInfo = Nothing
      , socket = Nats.Socket.new "0" "ws://localhost:8087"
      }
    , Cmd.none
    )


innerUpdate : Msg -> Model -> ( Model, Nats.Effect Bytes msg, Cmd Msg )
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
    Nats.connect
        (Nats.Socket.connectOptions "nrpc demo" "0.1"
            |> Nats.Socket.withUserPass "test" "test"
        )
        model.socket
        OnSocketEvent


subscriptions : Model -> Sub Msg
subscriptions model =
    Nats.subscriptions natsConfig model.nats


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
