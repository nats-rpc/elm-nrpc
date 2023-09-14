port module NatsPorts exposing (natsConfig)

import Bytes exposing (Bytes)
import Nats
import Nats.Config
import Nats.PortsAPI


port natsSend : Nats.PortsAPI.Send Bytes msg


port natsReceive : Nats.PortsAPI.Receive Bytes msg


natsConfig : (Nats.Msg Bytes msg -> msg) -> Nats.Config Bytes Bytes msg
natsConfig toMsg =
    Nats.Config.bytesPorts toMsg
        { send = natsSend
        , receive = natsReceive
        }
