port module NatsPorts exposing (natsConfig)

import Bytes exposing (Bytes)
import Nats
import Nats.Config
import Nats.PortsAPI


port natsSend : Nats.PortsAPI.Send String msg


port natsReceive : Nats.PortsAPI.Receive String msg


natsConfig : (Nats.Msg Bytes msg -> msg) -> Nats.Config Bytes String msg
natsConfig toMsg =
    Nats.Config.bytes toMsg
        { send = natsSend
        , receive = natsReceive
        }
