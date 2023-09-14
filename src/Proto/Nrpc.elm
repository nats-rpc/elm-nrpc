{- !!! DO NOT EDIT THIS FILE MANUALLY !!! -}

module Proto.Nrpc exposing (Error, HeartBeat, NoReply, NoRequest, SubjectRule(..), Void, decodeError, decodeHeartBeat, decodeNoReply, decodeNoRequest, decodeSubjectRule, decodeVoid, defaultError, defaultHeartBeat, defaultNoReply, defaultNoRequest, defaultSubjectRule, defaultVoid, encodeError, encodeHeartBeat, encodeNoReply, encodeNoRequest, encodeSubjectRule, encodeVoid, fieldNumbersError, fieldNumbersHeartBeat, fieldNumbersNoReply, fieldNumbersNoRequest, fieldNumbersSubjectRule, fieldNumbersVoid, fromInternalSubjectRule, toInternalSubjectRule)

{-| 
This file was automatically generated by
- [`protoc-gen-elm`](https://www.npmjs.com/package/protoc-gen-elm) 3.2.0
- `protoc` 4.22.2
- the following specification files: `nrpc/nrpc.proto`

To run it, add a dependency via `elm install` on [`elm-protocol-buffers`](https://package.elm-lang.org/packages/eriktim/elm-protocol-buffers/1.2.0) version latest or higher.


@docs Error, HeartBeat, NoReply, NoRequest, SubjectRule, Void, decodeError, decodeHeartBeat, decodeNoReply, decodeNoRequest, decodeSubjectRule
@docs decodeVoid, defaultError, defaultHeartBeat, defaultNoReply, defaultNoRequest, defaultSubjectRule, defaultVoid, encodeError
@docs encodeHeartBeat, encodeNoReply, encodeNoRequest, encodeSubjectRule, encodeVoid, fieldNumbersError, fieldNumbersHeartBeat
@docs fieldNumbersNoReply, fieldNumbersNoRequest, fieldNumbersSubjectRule, fieldNumbersVoid, fromInternalSubjectRule
@docs toInternalSubjectRule
-}

import Proto.Nrpc.Internals_
import Protobuf.Decode
import Protobuf.Encode


{-| The field numbers for the fields of `HeartBeat`. This is mostly useful for internals, like documentation generation.


-}
fieldNumbersHeartBeat : { lastbeat : Int }
fieldNumbersHeartBeat =
    Proto.Nrpc.Internals_.fieldNumbersProto__Nrpc__HeartBeat


{-| Default for HeartBeat. Should only be used for 'required' decoders as an initial value.


-}
defaultHeartBeat : HeartBeat
defaultHeartBeat =
    Proto.Nrpc.Internals_.defaultProto__Nrpc__HeartBeat


{-| Declares how to decode a `HeartBeat` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}
decodeHeartBeat : Protobuf.Decode.Decoder HeartBeat
decodeHeartBeat =
    Proto.Nrpc.Internals_.decodeProto__Nrpc__HeartBeat


{-| Declares how to encode a `HeartBeat` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}
encodeHeartBeat : HeartBeat -> Protobuf.Encode.Encoder
encodeHeartBeat =
    Proto.Nrpc.Internals_.encodeProto__Nrpc__HeartBeat


{-| `HeartBeat` message


-}
type alias HeartBeat =
    Proto.Nrpc.Internals_.Proto__Nrpc__HeartBeat


{-| The field numbers for the fields of `NoReply`. This is mostly useful for internals, like documentation generation.


-}
fieldNumbersNoReply : {}
fieldNumbersNoReply =
    Proto.Nrpc.Internals_.fieldNumbersProto__Nrpc__NoReply


{-| Default for NoReply. Should only be used for 'required' decoders as an initial value.


-}
defaultNoReply : NoReply
defaultNoReply =
    Proto.Nrpc.Internals_.defaultProto__Nrpc__NoReply


{-| Declares how to decode a `NoReply` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}
decodeNoReply : Protobuf.Decode.Decoder NoReply
decodeNoReply =
    Proto.Nrpc.Internals_.decodeProto__Nrpc__NoReply


{-| Declares how to encode a `NoReply` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}
encodeNoReply : NoReply -> Protobuf.Encode.Encoder
encodeNoReply =
    Proto.Nrpc.Internals_.encodeProto__Nrpc__NoReply


{-| `NoReply` message


-}
type alias NoReply =
    Proto.Nrpc.Internals_.Proto__Nrpc__NoReply


{-| The field numbers for the fields of `NoRequest`. This is mostly useful for internals, like documentation generation.


-}
fieldNumbersNoRequest : {}
fieldNumbersNoRequest =
    Proto.Nrpc.Internals_.fieldNumbersProto__Nrpc__NoRequest


{-| Default for NoRequest. Should only be used for 'required' decoders as an initial value.


-}
defaultNoRequest : NoRequest
defaultNoRequest =
    Proto.Nrpc.Internals_.defaultProto__Nrpc__NoRequest


{-| Declares how to decode a `NoRequest` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}
decodeNoRequest : Protobuf.Decode.Decoder NoRequest
decodeNoRequest =
    Proto.Nrpc.Internals_.decodeProto__Nrpc__NoRequest


{-| Declares how to encode a `NoRequest` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}
encodeNoRequest : NoRequest -> Protobuf.Encode.Encoder
encodeNoRequest =
    Proto.Nrpc.Internals_.encodeProto__Nrpc__NoRequest


{-| `NoRequest` message


-}
type alias NoRequest =
    Proto.Nrpc.Internals_.Proto__Nrpc__NoRequest


{-| The field numbers for the fields of `Void`. This is mostly useful for internals, like documentation generation.


-}
fieldNumbersVoid : {}
fieldNumbersVoid =
    Proto.Nrpc.Internals_.fieldNumbersProto__Nrpc__Void


{-| Default for Void. Should only be used for 'required' decoders as an initial value.


-}
defaultVoid : Void
defaultVoid =
    Proto.Nrpc.Internals_.defaultProto__Nrpc__Void


{-| Declares how to decode a `Void` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}
decodeVoid : Protobuf.Decode.Decoder Void
decodeVoid =
    Proto.Nrpc.Internals_.decodeProto__Nrpc__Void


{-| Declares how to encode a `Void` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}
encodeVoid : Void -> Protobuf.Encode.Encoder
encodeVoid =
    Proto.Nrpc.Internals_.encodeProto__Nrpc__Void


{-| `Void` message


-}
type alias Void =
    Proto.Nrpc.Internals_.Proto__Nrpc__Void


{-| The field numbers for the fields of `Error`. This is mostly useful for internals, like documentation generation.


-}
fieldNumbersError : { type_ : Int, message : Int, msgCount : Int }
fieldNumbersError =
    Proto.Nrpc.Internals_.fieldNumbersProto__Nrpc__Error


{-| Default for Error. Should only be used for 'required' decoders as an initial value.


-}
defaultError : Error
defaultError =
    Proto.Nrpc.Internals_.defaultProto__Nrpc__Error


{-| Declares how to decode a `Error` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}
decodeError : Protobuf.Decode.Decoder Error
decodeError =
    Proto.Nrpc.Internals_.decodeProto__Nrpc__Error


{-| Declares how to encode a `Error` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}
encodeError : Error -> Protobuf.Encode.Encoder
encodeError =
    Proto.Nrpc.Internals_.encodeProto__Nrpc__Error


{-| `Error` message


-}
type alias Error =
    Proto.Nrpc.Internals_.Proto__Nrpc__Error


{-| The field numbers for the fields of `SubjectRule`. This is mostly useful for internals, like documentation generation.


-}
fieldNumbersSubjectRule : SubjectRule -> Int
fieldNumbersSubjectRule n_ =
    case n_ of
        COPY ->
            0

        TOLOWER ->
            1

        SubjectRuleUnrecognized_ m_ ->
            m_


{-| Default for SubjectRule. Should only be used for 'required' decoders as an initial value.


-}
defaultSubjectRule : SubjectRule
defaultSubjectRule =
    COPY


{-| Convert a `SubjectRule` into its internal representation `Proto__Nrpc__SubjectRule`.


Using two different types is necessary to avoid recursive module references while having readable constructor names.


-}
toInternalSubjectRule : SubjectRule -> Proto.Nrpc.Internals_.Proto__Nrpc__SubjectRule
toInternalSubjectRule data_ =
    case data_ of
        COPY ->
            Proto.Nrpc.Internals_.Proto__Nrpc__COPY

        TOLOWER ->
            Proto.Nrpc.Internals_.Proto__Nrpc__TOLOWER

        SubjectRuleUnrecognized_ n_ ->
            Proto.Nrpc.Internals_.Proto__Nrpc__SubjectRuleUnrecognized_ n_


{-| Convert the internal type `Proto__Nrpc__SubjectRule` into a `SubjectRule`.


Using two different types is necessary to avoid recursive module references while having readable constructor names.


-}
fromInternalSubjectRule : Proto.Nrpc.Internals_.Proto__Nrpc__SubjectRule -> SubjectRule
fromInternalSubjectRule data_ =
    case data_ of
        Proto.Nrpc.Internals_.Proto__Nrpc__COPY ->
            COPY

        Proto.Nrpc.Internals_.Proto__Nrpc__TOLOWER ->
            TOLOWER

        Proto.Nrpc.Internals_.Proto__Nrpc__SubjectRuleUnrecognized_ n_ ->
            SubjectRuleUnrecognized_ n_


{-| Declares how to encode a `SubjectRule` to Bytes. To actually perform the conversion to Bytes, you need to use Protobuf.Encode.encode from eriktim/elm-protocol-buffers.


-}
encodeSubjectRule : SubjectRule -> Protobuf.Encode.Encoder
encodeSubjectRule =
    toInternalSubjectRule >> Proto.Nrpc.Internals_.encodeProto__Nrpc__SubjectRule


{-| Declares how to decode a `SubjectRule` from Bytes. To actually perform the conversion from Bytes, you need to use Protobuf.Decode.decode from eriktim/elm-protocol-buffers.


-}
decodeSubjectRule : Protobuf.Decode.Decoder SubjectRule
decodeSubjectRule =
    Protobuf.Decode.map fromInternalSubjectRule Proto.Nrpc.Internals_.decodeProto__Nrpc__SubjectRule


{-| `SubjectRule` enumeration


-}
type SubjectRule
    = COPY
    | TOLOWER
    | SubjectRuleUnrecognized_ Int