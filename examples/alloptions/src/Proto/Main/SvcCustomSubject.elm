{- !!! DO NOT EDIT THIS FILE MANUALLY !!! -}

module Proto.Main.SvcCustomSubject exposing (mtNoRequest, mtSimpleReply, mtStreamedReply, mtVoidReply, mtVoidReqStreamedReply)

{-| 
This file was automatically generated by
- [`protoc-gen-elm`](https://www.npmjs.com/package/protoc-gen-elm) 3.2.0
- `protoc` 4.22.2
- the following specification files: `alloptions.proto`

To run it, add a dependency via `elm install` on [`elm-protocol-buffers`](https://package.elm-lang.org/packages/eriktim/elm-protocol-buffers/1.2.0) version latest or higher.


@docs mtNoRequest, mtSimpleReply, mtStreamedReply, mtVoidReply, mtVoidReqStreamedReply
-}

import Grpc.Internal
import Proto.Main
import Proto.Nrpc


{-| A template for a gRPC call to the method 'MtVoidReqStreamedReply' sending a `Void` to get back a `SimpleStringReply`.


-}
mtVoidReqStreamedReply : Grpc.Internal.Rpc Proto.Nrpc.Void Proto.Main.SimpleStringReply
mtVoidReqStreamedReply =
    Grpc.Internal.Rpc
        { service = "SvcCustomSubject"
        , package = "main"
        , rpcName = "MtVoidReqStreamedReply"
        , encoder = Proto.Nrpc.encodeVoid
        , decoder = Proto.Main.decodeSimpleStringReply
        }


{-| A template for a gRPC call to the method 'MtStreamedReply' sending a `StringArg` to get back a `SimpleStringReply`.


-}
mtStreamedReply : Grpc.Internal.Rpc Proto.Main.StringArg Proto.Main.SimpleStringReply
mtStreamedReply =
    Grpc.Internal.Rpc
        { service = "SvcCustomSubject"
        , package = "main"
        , rpcName = "MtStreamedReply"
        , encoder = Proto.Main.encodeStringArg
        , decoder = Proto.Main.decodeSimpleStringReply
        }


{-| A template for a gRPC call to the method 'MtNoRequest' sending a `NoRequest` to get back a `SimpleStringReply`.


-}
mtNoRequest : Grpc.Internal.Rpc Proto.Nrpc.NoRequest Proto.Main.SimpleStringReply
mtNoRequest =
    Grpc.Internal.Rpc
        { service = "SvcCustomSubject"
        , package = "main"
        , rpcName = "MtNoRequest"
        , encoder = Proto.Nrpc.encodeNoRequest
        , decoder = Proto.Main.decodeSimpleStringReply
        }


{-| A template for a gRPC call to the method 'MtVoidReply' sending a `StringArg` to get back a `Void`.


-}
mtVoidReply : Grpc.Internal.Rpc Proto.Main.StringArg Proto.Nrpc.Void
mtVoidReply =
    Grpc.Internal.Rpc
        { service = "SvcCustomSubject"
        , package = "main"
        , rpcName = "MtVoidReply"
        , encoder = Proto.Main.encodeStringArg
        , decoder = Proto.Nrpc.decodeVoid
        }


{-| A template for a gRPC call to the method 'MtSimpleReply' sending a `StringArg` to get back a `SimpleStringReply`.


-}
mtSimpleReply : Grpc.Internal.Rpc Proto.Main.StringArg Proto.Main.SimpleStringReply
mtSimpleReply =
    Grpc.Internal.Rpc
        { service = "SvcCustomSubject"
        , package = "main"
        , rpcName = "MtSimpleReply"
        , encoder = Proto.Main.encodeStringArg
        , decoder = Proto.Main.decodeSimpleStringReply
        }
