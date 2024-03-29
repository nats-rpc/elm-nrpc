{- !!! DO NOT EDIT THIS FILE MANUALLY !!! -}

module Proto.Main exposing (SimpleStringReply, StringArg, decodeSimpleStringReply, decodeStringArg, defaultSimpleStringReply, defaultStringArg, encodeSimpleStringReply, encodeStringArg, fieldNumbersSimpleStringReply, fieldNumbersStringArg)

{-| 
This file was automatically generated by
- [`protoc-gen-elm`](https://www.npmjs.com/package/protoc-gen-elm) 3.2.0
- `protoc` 4.22.2
- the following specification files: `alloptions.proto`

To run it, add a dependency via `elm install` on [`elm-protocol-buffers`](https://package.elm-lang.org/packages/eriktim/elm-protocol-buffers/1.2.0) version latest or higher.


@docs SimpleStringReply, StringArg, decodeSimpleStringReply, decodeStringArg, defaultSimpleStringReply, defaultStringArg
@docs encodeSimpleStringReply, encodeStringArg, fieldNumbersSimpleStringReply, fieldNumbersStringArg
-}

import Proto.Main.Internals_
import Protobuf.Decode
import Protobuf.Encode


{-| The field numbers for the fields of `SimpleStringReply`. This is mostly useful for internals, like documentation generation.


-}
fieldNumbersSimpleStringReply : { reply : Int }
fieldNumbersSimpleStringReply =
    Proto.Main.Internals_.fieldNumbersProto__Main__SimpleStringReply


{-| Default for SimpleStringReply. Should only be used for 'required' decoders as an initial value.


-}
defaultSimpleStringReply : SimpleStringReply
defaultSimpleStringReply =
    Proto.Main.Internals_.defaultProto__Main__SimpleStringReply


{-| Declares how to decode a `SimpleStringReply` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}
decodeSimpleStringReply : Protobuf.Decode.Decoder SimpleStringReply
decodeSimpleStringReply =
    Proto.Main.Internals_.decodeProto__Main__SimpleStringReply


{-| Declares how to encode a `SimpleStringReply` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}
encodeSimpleStringReply : SimpleStringReply -> Protobuf.Encode.Encoder
encodeSimpleStringReply =
    Proto.Main.Internals_.encodeProto__Main__SimpleStringReply


{-| `SimpleStringReply` message


-}
type alias SimpleStringReply =
    Proto.Main.Internals_.Proto__Main__SimpleStringReply


{-| The field numbers for the fields of `StringArg`. This is mostly useful for internals, like documentation generation.


-}
fieldNumbersStringArg : { arg1 : Int }
fieldNumbersStringArg =
    Proto.Main.Internals_.fieldNumbersProto__Main__StringArg


{-| Default for StringArg. Should only be used for 'required' decoders as an initial value.


-}
defaultStringArg : StringArg
defaultStringArg =
    Proto.Main.Internals_.defaultProto__Main__StringArg


{-| Declares how to decode a `StringArg` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}
decodeStringArg : Protobuf.Decode.Decoder StringArg
decodeStringArg =
    Proto.Main.Internals_.decodeProto__Main__StringArg


{-| Declares how to encode a `StringArg` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}
encodeStringArg : StringArg -> Protobuf.Encode.Encoder
encodeStringArg =
    Proto.Main.Internals_.encodeProto__Main__StringArg


{-| `StringArg` message


-}
type alias StringArg =
    Proto.Main.Internals_.Proto__Main__StringArg
