module Gen.Google.Protobuf exposing (annotation_, anyDecoder, apiDecoder, boolValueDecoder, bytesValueDecoder, call_, cardinalityDecoder, caseOf_, doubleValueDecoder, durationDecoder, emptyDecoder, enumDecoder, enumValueDecoder, fieldDecoder, fieldMaskDecoder, floatValueDecoder, int32ValueDecoder, kindDecoder, listValueDecoder, make_, methodDecoder, mixinDecoder, moduleName_, optionDecoder, sourceContextDecoder, stringValueDecoder, structDecoder, syntaxDecoder, timestampDecoder, toAnyEncoder, toApiEncoder, toBoolValueEncoder, toBytesValueEncoder, toCardinalityEncoder, toDoubleValueEncoder, toDurationEncoder, toEmptyEncoder, toEnumEncoder, toEnumValueEncoder, toFieldEncoder, toFieldMaskEncoder, toFloatValueEncoder, toInt32ValueEncoder, toKindEncoder, toListValueEncoder, toMethodEncoder, toMixinEncoder, toOptionEncoder, toSourceContextEncoder, toStringValueEncoder, toStructEncoder, toSyntaxEncoder, toTimestampEncoder, toTypeEncoder, toUInt32ValueEncoder, toValueEncoder, typeDecoder, uInt32ValueDecoder, valueDecoder, values_)

{-| 
@docs moduleName_, anyDecoder, apiDecoder, methodDecoder, mixinDecoder, durationDecoder, emptyDecoder, fieldMaskDecoder, sourceContextDecoder, structDecoder, valueDecoder, listValueDecoder, timestampDecoder, typeDecoder, fieldDecoder, kindDecoder, cardinalityDecoder, enumDecoder, enumValueDecoder, optionDecoder, syntaxDecoder, doubleValueDecoder, floatValueDecoder, int32ValueDecoder, uInt32ValueDecoder, boolValueDecoder, stringValueDecoder, bytesValueDecoder, toAnyEncoder, toApiEncoder, toMethodEncoder, toMixinEncoder, toDurationEncoder, toEmptyEncoder, toFieldMaskEncoder, toSourceContextEncoder, toStructEncoder, toValueEncoder, toListValueEncoder, toTimestampEncoder, toTypeEncoder, toFieldEncoder, toKindEncoder, toCardinalityEncoder, toEnumEncoder, toEnumValueEncoder, toOptionEncoder, toSyntaxEncoder, toDoubleValueEncoder, toFloatValueEncoder, toInt32ValueEncoder, toUInt32ValueEncoder, toBoolValueEncoder, toStringValueEncoder, toBytesValueEncoder, annotation_, make_, caseOf_, call_, values_
-}


import Elm
import Elm.Annotation as Type
import Elm.Case


{-| The name of this module. -}
moduleName_ : List String
moduleName_ =
    [ "Google", "Protobuf" ]


{-| anyDecoder: Protobuf.Decode.Decoder Google.Protobuf.Any -}
anyDecoder : Elm.Expression
anyDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "anyDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Any" [] ]
                )
        }


{-| apiDecoder: Protobuf.Decode.Decoder Google.Protobuf.Api -}
apiDecoder : Elm.Expression
apiDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "apiDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Api" [] ]
                )
        }


{-| methodDecoder: Protobuf.Decode.Decoder Google.Protobuf.Method -}
methodDecoder : Elm.Expression
methodDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "methodDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Method" [] ]
                )
        }


{-| mixinDecoder: Protobuf.Decode.Decoder Google.Protobuf.Mixin -}
mixinDecoder : Elm.Expression
mixinDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "mixinDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Mixin" [] ]
                )
        }


{-| durationDecoder: Protobuf.Decode.Decoder Google.Protobuf.Duration -}
durationDecoder : Elm.Expression
durationDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "durationDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Duration" [] ]
                )
        }


{-| emptyDecoder: Protobuf.Decode.Decoder Google.Protobuf.Empty -}
emptyDecoder : Elm.Expression
emptyDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "emptyDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Empty" [] ]
                )
        }


{-| fieldMaskDecoder: Protobuf.Decode.Decoder Google.Protobuf.FieldMask -}
fieldMaskDecoder : Elm.Expression
fieldMaskDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "fieldMaskDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "FieldMask" [] ]
                )
        }


{-| sourceContextDecoder: Protobuf.Decode.Decoder Google.Protobuf.SourceContext -}
sourceContextDecoder : Elm.Expression
sourceContextDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "sourceContextDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "SourceContext" []
                    ]
                )
        }


{-| structDecoder: Protobuf.Decode.Decoder Google.Protobuf.Struct -}
structDecoder : Elm.Expression
structDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "structDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Struct" [] ]
                )
        }


{-| valueDecoder: Protobuf.Decode.Decoder Google.Protobuf.Value -}
valueDecoder : Elm.Expression
valueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "valueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Value" [] ]
                )
        }


{-| listValueDecoder: Protobuf.Decode.Decoder Google.Protobuf.ListValue -}
listValueDecoder : Elm.Expression
listValueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "listValueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "ListValue" [] ]
                )
        }


{-| timestampDecoder: Protobuf.Decode.Decoder Google.Protobuf.Timestamp -}
timestampDecoder : Elm.Expression
timestampDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "timestampDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Timestamp" [] ]
                )
        }


{-| typeDecoder: Protobuf.Decode.Decoder Google.Protobuf.Type -}
typeDecoder : Elm.Expression
typeDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "typeDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Type" [] ]
                )
        }


{-| fieldDecoder: Protobuf.Decode.Decoder Google.Protobuf.Field -}
fieldDecoder : Elm.Expression
fieldDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "fieldDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Field" [] ]
                )
        }


{-| kindDecoder: Protobuf.Decode.Decoder Google.Protobuf.Kind -}
kindDecoder : Elm.Expression
kindDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "kindDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Kind" [] ]
                )
        }


{-| cardinalityDecoder: Protobuf.Decode.Decoder Google.Protobuf.Cardinality -}
cardinalityDecoder : Elm.Expression
cardinalityDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "cardinalityDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Cardinality" [] ]
                )
        }


{-| enumDecoder: Protobuf.Decode.Decoder Google.Protobuf.Enum -}
enumDecoder : Elm.Expression
enumDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "enumDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Enum" [] ]
                )
        }


{-| enumValueDecoder: Protobuf.Decode.Decoder Google.Protobuf.EnumValue -}
enumValueDecoder : Elm.Expression
enumValueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "enumValueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "EnumValue" [] ]
                )
        }


{-| optionDecoder: Protobuf.Decode.Decoder Google.Protobuf.Option -}
optionDecoder : Elm.Expression
optionDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "optionDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Option" [] ]
                )
        }


{-| syntaxDecoder: Protobuf.Decode.Decoder Google.Protobuf.Syntax -}
syntaxDecoder : Elm.Expression
syntaxDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "syntaxDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Syntax" [] ]
                )
        }


{-| doubleValueDecoder: Protobuf.Decode.Decoder Google.Protobuf.DoubleValue -}
doubleValueDecoder : Elm.Expression
doubleValueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "doubleValueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "DoubleValue" [] ]
                )
        }


{-| floatValueDecoder: Protobuf.Decode.Decoder Google.Protobuf.FloatValue -}
floatValueDecoder : Elm.Expression
floatValueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "floatValueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "FloatValue" [] ]
                )
        }


{-| int32ValueDecoder: Protobuf.Decode.Decoder Google.Protobuf.Int32Value -}
int32ValueDecoder : Elm.Expression
int32ValueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "int32ValueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "Int32Value" [] ]
                )
        }


{-| uInt32ValueDecoder: Protobuf.Decode.Decoder Google.Protobuf.UInt32Value -}
uInt32ValueDecoder : Elm.Expression
uInt32ValueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "uInt32ValueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "UInt32Value" [] ]
                )
        }


{-| boolValueDecoder: Protobuf.Decode.Decoder Google.Protobuf.BoolValue -}
boolValueDecoder : Elm.Expression
boolValueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "boolValueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "BoolValue" [] ]
                )
        }


{-| stringValueDecoder: Protobuf.Decode.Decoder Google.Protobuf.StringValue -}
stringValueDecoder : Elm.Expression
stringValueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "stringValueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "StringValue" [] ]
                )
        }


{-| bytesValueDecoder: Protobuf.Decode.Decoder Google.Protobuf.BytesValue -}
bytesValueDecoder : Elm.Expression
bytesValueDecoder =
    Elm.value
        { importFrom = [ "Google", "Protobuf" ]
        , name = "bytesValueDecoder"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Google", "Protobuf" ] "BytesValue" [] ]
                )
        }


{-| toAnyEncoder: Google.Protobuf.Any -> Protobuf.Encode.Encoder -}
toAnyEncoder : Elm.Expression -> Elm.Expression
toAnyEncoder toAnyEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toAnyEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Any" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toAnyEncoderArg ]


{-| toApiEncoder: Google.Protobuf.Api -> Protobuf.Encode.Encoder -}
toApiEncoder : Elm.Expression -> Elm.Expression
toApiEncoder toApiEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toApiEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Api" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toApiEncoderArg ]


{-| toMethodEncoder: Google.Protobuf.Method -> Protobuf.Encode.Encoder -}
toMethodEncoder : Elm.Expression -> Elm.Expression
toMethodEncoder toMethodEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toMethodEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Method" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toMethodEncoderArg ]


{-| toMixinEncoder: Google.Protobuf.Mixin -> Protobuf.Encode.Encoder -}
toMixinEncoder : Elm.Expression -> Elm.Expression
toMixinEncoder toMixinEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toMixinEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Mixin" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toMixinEncoderArg ]


{-| toDurationEncoder: Google.Protobuf.Duration -> Protobuf.Encode.Encoder -}
toDurationEncoder : Elm.Expression -> Elm.Expression
toDurationEncoder toDurationEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toDurationEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Duration" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toDurationEncoderArg ]


{-| toEmptyEncoder: Google.Protobuf.Empty -> Protobuf.Encode.Encoder -}
toEmptyEncoder : Elm.Expression -> Elm.Expression
toEmptyEncoder toEmptyEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toEmptyEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Empty" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toEmptyEncoderArg ]


{-| toFieldMaskEncoder: Google.Protobuf.FieldMask -> Protobuf.Encode.Encoder -}
toFieldMaskEncoder : Elm.Expression -> Elm.Expression
toFieldMaskEncoder toFieldMaskEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toFieldMaskEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "FieldMask" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toFieldMaskEncoderArg ]


{-| toSourceContextEncoder: Google.Protobuf.SourceContext -> Protobuf.Encode.Encoder -}
toSourceContextEncoder : Elm.Expression -> Elm.Expression
toSourceContextEncoder toSourceContextEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toSourceContextEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "SourceContext"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toSourceContextEncoderArg ]


{-| toStructEncoder: Google.Protobuf.Struct -> Protobuf.Encode.Encoder -}
toStructEncoder : Elm.Expression -> Elm.Expression
toStructEncoder toStructEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toStructEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Struct" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toStructEncoderArg ]


{-| toValueEncoder: Google.Protobuf.Value -> Protobuf.Encode.Encoder -}
toValueEncoder : Elm.Expression -> Elm.Expression
toValueEncoder toValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Value" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toValueEncoderArg ]


{-| toListValueEncoder: Google.Protobuf.ListValue -> Protobuf.Encode.Encoder -}
toListValueEncoder : Elm.Expression -> Elm.Expression
toListValueEncoder toListValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toListValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "ListValue" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toListValueEncoderArg ]


{-| toTimestampEncoder: Google.Protobuf.Timestamp -> Protobuf.Encode.Encoder -}
toTimestampEncoder : Elm.Expression -> Elm.Expression
toTimestampEncoder toTimestampEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toTimestampEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Timestamp" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toTimestampEncoderArg ]


{-| toTypeEncoder: Google.Protobuf.Type -> Protobuf.Encode.Encoder -}
toTypeEncoder : Elm.Expression -> Elm.Expression
toTypeEncoder toTypeEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toTypeEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Type" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toTypeEncoderArg ]


{-| toFieldEncoder: Google.Protobuf.Field -> Protobuf.Encode.Encoder -}
toFieldEncoder : Elm.Expression -> Elm.Expression
toFieldEncoder toFieldEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toFieldEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Field" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toFieldEncoderArg ]


{-| toKindEncoder: Google.Protobuf.Kind -> Protobuf.Encode.Encoder -}
toKindEncoder : Elm.Expression -> Elm.Expression
toKindEncoder toKindEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toKindEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Kind" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toKindEncoderArg ]


{-| toCardinalityEncoder: Google.Protobuf.Cardinality -> Protobuf.Encode.Encoder -}
toCardinalityEncoder : Elm.Expression -> Elm.Expression
toCardinalityEncoder toCardinalityEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toCardinalityEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "Cardinality"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toCardinalityEncoderArg ]


{-| toEnumEncoder: Google.Protobuf.Enum -> Protobuf.Encode.Encoder -}
toEnumEncoder : Elm.Expression -> Elm.Expression
toEnumEncoder toEnumEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toEnumEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Enum" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toEnumEncoderArg ]


{-| toEnumValueEncoder: Google.Protobuf.EnumValue -> Protobuf.Encode.Encoder -}
toEnumValueEncoder : Elm.Expression -> Elm.Expression
toEnumValueEncoder toEnumValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toEnumValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "EnumValue" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toEnumValueEncoderArg ]


{-| toOptionEncoder: Google.Protobuf.Option -> Protobuf.Encode.Encoder -}
toOptionEncoder : Elm.Expression -> Elm.Expression
toOptionEncoder toOptionEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toOptionEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Option" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toOptionEncoderArg ]


{-| toSyntaxEncoder: Google.Protobuf.Syntax -> Protobuf.Encode.Encoder -}
toSyntaxEncoder : Elm.Expression -> Elm.Expression
toSyntaxEncoder toSyntaxEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toSyntaxEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Syntax" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toSyntaxEncoderArg ]


{-| toDoubleValueEncoder: Google.Protobuf.DoubleValue -> Protobuf.Encode.Encoder -}
toDoubleValueEncoder : Elm.Expression -> Elm.Expression
toDoubleValueEncoder toDoubleValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toDoubleValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "DoubleValue"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toDoubleValueEncoderArg ]


{-| toFloatValueEncoder: Google.Protobuf.FloatValue -> Protobuf.Encode.Encoder -}
toFloatValueEncoder : Elm.Expression -> Elm.Expression
toFloatValueEncoder toFloatValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toFloatValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "FloatValue"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toFloatValueEncoderArg ]


{-| toInt32ValueEncoder: Google.Protobuf.Int32Value -> Protobuf.Encode.Encoder -}
toInt32ValueEncoder : Elm.Expression -> Elm.Expression
toInt32ValueEncoder toInt32ValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toInt32ValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "Int32Value"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toInt32ValueEncoderArg ]


{-| toUInt32ValueEncoder: Google.Protobuf.UInt32Value -> Protobuf.Encode.Encoder -}
toUInt32ValueEncoder : Elm.Expression -> Elm.Expression
toUInt32ValueEncoder toUInt32ValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toUInt32ValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "UInt32Value"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toUInt32ValueEncoderArg ]


{-| toBoolValueEncoder: Google.Protobuf.BoolValue -> Protobuf.Encode.Encoder -}
toBoolValueEncoder : Elm.Expression -> Elm.Expression
toBoolValueEncoder toBoolValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toBoolValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "BoolValue" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toBoolValueEncoderArg ]


{-| toStringValueEncoder: Google.Protobuf.StringValue -> Protobuf.Encode.Encoder -}
toStringValueEncoder : Elm.Expression -> Elm.Expression
toStringValueEncoder toStringValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toStringValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "StringValue"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toStringValueEncoderArg ]


{-| toBytesValueEncoder: Google.Protobuf.BytesValue -> Protobuf.Encode.Encoder -}
toBytesValueEncoder : Elm.Expression -> Elm.Expression
toBytesValueEncoder toBytesValueEncoderArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toBytesValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "BytesValue"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ toBytesValueEncoderArg ]


annotation_ :
    { any : Type.Annotation
    , api : Type.Annotation
    , method : Type.Annotation
    , mixin : Type.Annotation
    , duration : Type.Annotation
    , empty : Type.Annotation
    , fieldMask : Type.Annotation
    , sourceContext : Type.Annotation
    , struct : Type.Annotation
    , structFields : Type.Annotation
    , value : Type.Annotation
    , valueKind : Type.Annotation
    , kindType : Type.Annotation
    , nullValue : Type.Annotation
    , listValue : Type.Annotation
    , listValueValues : Type.Annotation
    , timestamp : Type.Annotation
    , type_ : Type.Annotation
    , field : Type.Annotation
    , kind : Type.Annotation
    , cardinality : Type.Annotation
    , enum : Type.Annotation
    , enumValue : Type.Annotation
    , option : Type.Annotation
    , syntax : Type.Annotation
    , doubleValue : Type.Annotation
    , floatValue : Type.Annotation
    , int32Value : Type.Annotation
    , uInt32Value : Type.Annotation
    , boolValue : Type.Annotation
    , stringValue : Type.Annotation
    , bytesValue : Type.Annotation
    }
annotation_ =
    { any =
        Type.alias
            moduleName_
            "Any"
            []
            (Type.record
                [ ( "typeUrl", Type.string )
                , ( "value", Type.namedWith [ "Bytes" ] "Bytes" [] )
                ]
            )
    , api =
        Type.alias
            moduleName_
            "Api"
            []
            (Type.record
                [ ( "name", Type.string )
                , ( "methods"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Method" [])
                  )
                , ( "options"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Option" [])
                  )
                , ( "version", Type.string )
                , ( "sourceContext"
                  , Type.maybe
                        (Type.namedWith
                            [ "Google", "Protobuf" ]
                            "SourceContext"
                            []
                        )
                  )
                , ( "mixins"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Mixin" [])
                  )
                , ( "syntax"
                  , Type.namedWith [ "Google", "Protobuf" ] "Syntax" []
                  )
                ]
            )
    , method =
        Type.alias
            moduleName_
            "Method"
            []
            (Type.record
                [ ( "name", Type.string )
                , ( "requestTypeUrl", Type.string )
                , ( "requestStreaming", Type.bool )
                , ( "responseTypeUrl", Type.string )
                , ( "responseStreaming", Type.bool )
                , ( "options"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Option" [])
                  )
                , ( "syntax"
                  , Type.namedWith [ "Google", "Protobuf" ] "Syntax" []
                  )
                ]
            )
    , mixin =
        Type.alias
            moduleName_
            "Mixin"
            []
            (Type.record [ ( "name", Type.string ), ( "root", Type.string ) ])
    , duration =
        Type.alias
            moduleName_
            "Duration"
            []
            (Type.record [ ( "seconds", Type.int ), ( "nanos", Type.int ) ])
    , empty = Type.alias moduleName_ "Empty" [] (Type.record [])
    , fieldMask =
        Type.alias
            moduleName_
            "FieldMask"
            []
            (Type.record [ ( "paths", Type.list Type.string ) ])
    , sourceContext =
        Type.alias
            moduleName_
            "SourceContext"
            []
            (Type.record [ ( "fileName", Type.string ) ])
    , struct =
        Type.alias
            moduleName_
            "Struct"
            []
            (Type.record
                [ ( "fields"
                  , Type.namedWith [ "Google", "Protobuf" ] "StructFields" []
                  )
                ]
            )
    , structFields = Type.namedWith [ "Google", "Protobuf" ] "StructFields" []
    , value =
        Type.alias
            moduleName_
            "Value"
            []
            (Type.record
                [ ( "kind"
                  , Type.namedWith [ "Google", "Protobuf" ] "ValueKind" []
                  )
                ]
            )
    , valueKind = Type.namedWith [ "Google", "Protobuf" ] "ValueKind" []
    , kindType = Type.namedWith [ "Google", "Protobuf" ] "KindType" []
    , nullValue = Type.namedWith [ "Google", "Protobuf" ] "NullValue" []
    , listValue =
        Type.alias
            moduleName_
            "ListValue"
            []
            (Type.record
                [ ( "values"
                  , Type.namedWith [ "Google", "Protobuf" ] "ListValueValues" []
                  )
                ]
            )
    , listValueValues =
        Type.namedWith [ "Google", "Protobuf" ] "ListValueValues" []
    , timestamp =
        Type.alias
            moduleName_
            "Timestamp"
            []
            (Type.record [ ( "seconds", Type.int ), ( "nanos", Type.int ) ])
    , type_ =
        Type.alias
            moduleName_
            "Type"
            []
            (Type.record
                [ ( "name", Type.string )
                , ( "fields"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Field" [])
                  )
                , ( "oneofs", Type.list Type.string )
                , ( "options"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Option" [])
                  )
                , ( "sourceContext"
                  , Type.maybe
                        (Type.namedWith
                            [ "Google", "Protobuf" ]
                            "SourceContext"
                            []
                        )
                  )
                , ( "syntax"
                  , Type.namedWith [ "Google", "Protobuf" ] "Syntax" []
                  )
                ]
            )
    , field =
        Type.alias
            moduleName_
            "Field"
            []
            (Type.record
                [ ( "kind", Type.namedWith [ "Google", "Protobuf" ] "Kind" [] )
                , ( "cardinality"
                  , Type.namedWith [ "Google", "Protobuf" ] "Cardinality" []
                  )
                , ( "number", Type.int )
                , ( "name", Type.string )
                , ( "typeUrl", Type.string )
                , ( "oneofIndex", Type.int )
                , ( "packed", Type.bool )
                , ( "options"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Option" [])
                  )
                , ( "jsonName", Type.string )
                , ( "defaultValue", Type.string )
                ]
            )
    , kind = Type.namedWith [ "Google", "Protobuf" ] "Kind" []
    , cardinality = Type.namedWith [ "Google", "Protobuf" ] "Cardinality" []
    , enum =
        Type.alias
            moduleName_
            "Enum"
            []
            (Type.record
                [ ( "name", Type.string )
                , ( "enumvalue"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "EnumValue" [])
                  )
                , ( "options"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Option" [])
                  )
                , ( "sourceContext"
                  , Type.maybe
                        (Type.namedWith
                            [ "Google", "Protobuf" ]
                            "SourceContext"
                            []
                        )
                  )
                , ( "syntax"
                  , Type.namedWith [ "Google", "Protobuf" ] "Syntax" []
                  )
                ]
            )
    , enumValue =
        Type.alias
            moduleName_
            "EnumValue"
            []
            (Type.record
                [ ( "name", Type.string )
                , ( "number", Type.int )
                , ( "options"
                  , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Option" [])
                  )
                ]
            )
    , option =
        Type.alias
            moduleName_
            "Option"
            []
            (Type.record
                [ ( "name", Type.string )
                , ( "value"
                  , Type.maybe
                        (Type.namedWith [ "Google", "Protobuf" ] "Any" [])
                  )
                ]
            )
    , syntax = Type.namedWith [ "Google", "Protobuf" ] "Syntax" []
    , doubleValue =
        Type.alias
            moduleName_
            "DoubleValue"
            []
            (Type.record [ ( "value", Type.float ) ])
    , floatValue =
        Type.alias
            moduleName_
            "FloatValue"
            []
            (Type.record [ ( "value", Type.float ) ])
    , int32Value =
        Type.alias
            moduleName_
            "Int32Value"
            []
            (Type.record [ ( "value", Type.int ) ])
    , uInt32Value =
        Type.alias
            moduleName_
            "UInt32Value"
            []
            (Type.record [ ( "value", Type.int ) ])
    , boolValue =
        Type.alias
            moduleName_
            "BoolValue"
            []
            (Type.record [ ( "value", Type.bool ) ])
    , stringValue =
        Type.alias
            moduleName_
            "StringValue"
            []
            (Type.record [ ( "value", Type.string ) ])
    , bytesValue =
        Type.alias
            moduleName_
            "BytesValue"
            []
            (Type.record [ ( "value", Type.namedWith [ "Bytes" ] "Bytes" [] ) ])
    }


make_ :
    { any :
        { typeUrl : Elm.Expression, value : Elm.Expression } -> Elm.Expression
    , api :
        { name : Elm.Expression
        , methods : Elm.Expression
        , options : Elm.Expression
        , version : Elm.Expression
        , sourceContext : Elm.Expression
        , mixins : Elm.Expression
        , syntax : Elm.Expression
        }
        -> Elm.Expression
    , method :
        { name : Elm.Expression
        , requestTypeUrl : Elm.Expression
        , requestStreaming : Elm.Expression
        , responseTypeUrl : Elm.Expression
        , responseStreaming : Elm.Expression
        , options : Elm.Expression
        , syntax : Elm.Expression
        }
        -> Elm.Expression
    , mixin : { name : Elm.Expression, root : Elm.Expression } -> Elm.Expression
    , duration :
        { seconds : Elm.Expression, nanos : Elm.Expression } -> Elm.Expression
    , empty : empty -> Elm.Expression
    , fieldMask : { paths : Elm.Expression } -> Elm.Expression
    , sourceContext : { fileName : Elm.Expression } -> Elm.Expression
    , struct : { fields : Elm.Expression } -> Elm.Expression
    , structFields : Elm.Expression -> Elm.Expression
    , value : { kind : Elm.Expression } -> Elm.Expression
    , valueKind : Elm.Expression -> Elm.Expression
    , kindNullValue : Elm.Expression -> Elm.Expression
    , kindNumberValue : Elm.Expression -> Elm.Expression
    , kindStringValue : Elm.Expression -> Elm.Expression
    , kindBoolValue : Elm.Expression -> Elm.Expression
    , kindStructValue : Elm.Expression -> Elm.Expression
    , kindListValue : Elm.Expression -> Elm.Expression
    , nullValue : Elm.Expression
    , nullValueUnrecognized_ : Elm.Expression -> Elm.Expression
    , listValue : { values : Elm.Expression } -> Elm.Expression
    , listValueValues : Elm.Expression -> Elm.Expression
    , timestamp :
        { seconds : Elm.Expression, nanos : Elm.Expression } -> Elm.Expression
    , type_ :
        { name : Elm.Expression
        , fields : Elm.Expression
        , oneofs : Elm.Expression
        , options : Elm.Expression
        , sourceContext : Elm.Expression
        , syntax : Elm.Expression
        }
        -> Elm.Expression
    , field :
        { kind : Elm.Expression
        , cardinality : Elm.Expression
        , number : Elm.Expression
        , name : Elm.Expression
        , typeUrl : Elm.Expression
        , oneofIndex : Elm.Expression
        , packed : Elm.Expression
        , options : Elm.Expression
        , jsonName : Elm.Expression
        , defaultValue : Elm.Expression
        }
        -> Elm.Expression
    , typeUnknown : Elm.Expression
    , typeDouble : Elm.Expression
    , typeFloat : Elm.Expression
    , typeInt64 : Elm.Expression
    , typeUint64 : Elm.Expression
    , typeInt32 : Elm.Expression
    , typeFixed64 : Elm.Expression
    , typeFixed32 : Elm.Expression
    , typeBool : Elm.Expression
    , typeString : Elm.Expression
    , typeGroup : Elm.Expression
    , typeMessage : Elm.Expression
    , typeBytes : Elm.Expression
    , typeUint32 : Elm.Expression
    , typeEnum : Elm.Expression
    , typeSfixed32 : Elm.Expression
    , typeSfixed64 : Elm.Expression
    , typeSint32 : Elm.Expression
    , typeSint64 : Elm.Expression
    , kindUnrecognized_ : Elm.Expression -> Elm.Expression
    , cardinalityUnknown : Elm.Expression
    , cardinalityOptional : Elm.Expression
    , cardinalityRequired : Elm.Expression
    , cardinalityRepeated : Elm.Expression
    , cardinalityUnrecognized_ : Elm.Expression -> Elm.Expression
    , enum :
        { name : Elm.Expression
        , enumvalue : Elm.Expression
        , options : Elm.Expression
        , sourceContext : Elm.Expression
        , syntax : Elm.Expression
        }
        -> Elm.Expression
    , enumValue :
        { name : Elm.Expression
        , number : Elm.Expression
        , options : Elm.Expression
        }
        -> Elm.Expression
    , option :
        { name : Elm.Expression, value : Elm.Expression } -> Elm.Expression
    , syntaxProto2 : Elm.Expression
    , syntaxProto3 : Elm.Expression
    , syntaxUnrecognized_ : Elm.Expression -> Elm.Expression
    , doubleValue : { value : Elm.Expression } -> Elm.Expression
    , floatValue : { value : Elm.Expression } -> Elm.Expression
    , int32Value : { value : Elm.Expression } -> Elm.Expression
    , uInt32Value : { value : Elm.Expression } -> Elm.Expression
    , boolValue : { value : Elm.Expression } -> Elm.Expression
    , stringValue : { value : Elm.Expression } -> Elm.Expression
    , bytesValue : { value : Elm.Expression } -> Elm.Expression
    }
make_ =
    { any =
        \any_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Any"
                    []
                    (Type.record
                        [ ( "typeUrl", Type.string )
                        , ( "value", Type.namedWith [ "Bytes" ] "Bytes" [] )
                        ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "typeUrl" any_args.typeUrl
                    , Tuple.pair "value" any_args.value
                    ]
                )
    , api =
        \api_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Api"
                    []
                    (Type.record
                        [ ( "name", Type.string )
                        , ( "methods"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Method"
                                    []
                                )
                          )
                        , ( "options"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Option"
                                    []
                                )
                          )
                        , ( "version", Type.string )
                        , ( "sourceContext"
                          , Type.maybe
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "SourceContext"
                                    []
                                )
                          )
                        , ( "mixins"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Mixin"
                                    []
                                )
                          )
                        , ( "syntax"
                          , Type.namedWith [ "Google", "Protobuf" ] "Syntax" []
                          )
                        ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "name" api_args.name
                    , Tuple.pair "methods" api_args.methods
                    , Tuple.pair "options" api_args.options
                    , Tuple.pair "version" api_args.version
                    , Tuple.pair "sourceContext" api_args.sourceContext
                    , Tuple.pair "mixins" api_args.mixins
                    , Tuple.pair "syntax" api_args.syntax
                    ]
                )
    , method =
        \method_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Method"
                    []
                    (Type.record
                        [ ( "name", Type.string )
                        , ( "requestTypeUrl", Type.string )
                        , ( "requestStreaming", Type.bool )
                        , ( "responseTypeUrl", Type.string )
                        , ( "responseStreaming", Type.bool )
                        , ( "options"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Option"
                                    []
                                )
                          )
                        , ( "syntax"
                          , Type.namedWith [ "Google", "Protobuf" ] "Syntax" []
                          )
                        ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "name" method_args.name
                    , Tuple.pair "requestTypeUrl" method_args.requestTypeUrl
                    , Tuple.pair "requestStreaming" method_args.requestStreaming
                    , Tuple.pair "responseTypeUrl" method_args.responseTypeUrl
                    , Tuple.pair
                        "responseStreaming"
                        method_args.responseStreaming
                    , Tuple.pair "options" method_args.options
                    , Tuple.pair "syntax" method_args.syntax
                    ]
                )
    , mixin =
        \mixin_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Mixin"
                    []
                    (Type.record
                        [ ( "name", Type.string ), ( "root", Type.string ) ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "name" mixin_args.name
                    , Tuple.pair "root" mixin_args.root
                    ]
                )
    , duration =
        \duration_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Duration"
                    []
                    (Type.record
                        [ ( "seconds", Type.int ), ( "nanos", Type.int ) ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "seconds" duration_args.seconds
                    , Tuple.pair "nanos" duration_args.nanos
                    ]
                )
    , empty =
        \empty_args ->
            Elm.withType
                (Type.alias [ "Google", "Protobuf" ] "Empty" [] (Type.record [])
                )
                (Elm.record [])
    , fieldMask =
        \fieldMask_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "FieldMask"
                    []
                    (Type.record [ ( "paths", Type.list Type.string ) ])
                )
                (Elm.record [ Tuple.pair "paths" fieldMask_args.paths ])
    , sourceContext =
        \sourceContext_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "SourceContext"
                    []
                    (Type.record [ ( "fileName", Type.string ) ])
                )
                (Elm.record
                    [ Tuple.pair "fileName" sourceContext_args.fileName ]
                )
    , struct =
        \struct_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Struct"
                    []
                    (Type.record
                        [ ( "fields"
                          , Type.namedWith
                                [ "Google", "Protobuf" ]
                                "StructFields"
                                []
                          )
                        ]
                    )
                )
                (Elm.record [ Tuple.pair "fields" struct_args.fields ])
    , structFields =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "StructFields"
                    , annotation = Just (Type.namedWith [] "StructFields" [])
                    }
                )
                [ ar0 ]
    , value =
        \value_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Value"
                    []
                    (Type.record
                        [ ( "kind"
                          , Type.namedWith
                                [ "Google", "Protobuf" ]
                                "ValueKind"
                                []
                          )
                        ]
                    )
                )
                (Elm.record [ Tuple.pair "kind" value_args.kind ])
    , valueKind =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "ValueKind"
                    , annotation = Just (Type.namedWith [] "ValueKind" [])
                    }
                )
                [ ar0 ]
    , kindNullValue =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "KindNullValue"
                    , annotation = Just (Type.namedWith [] "KindType" [])
                    }
                )
                [ ar0 ]
    , kindNumberValue =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "KindNumberValue"
                    , annotation = Just (Type.namedWith [] "KindType" [])
                    }
                )
                [ ar0 ]
    , kindStringValue =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "KindStringValue"
                    , annotation = Just (Type.namedWith [] "KindType" [])
                    }
                )
                [ ar0 ]
    , kindBoolValue =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "KindBoolValue"
                    , annotation = Just (Type.namedWith [] "KindType" [])
                    }
                )
                [ ar0 ]
    , kindStructValue =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "KindStructValue"
                    , annotation = Just (Type.namedWith [] "KindType" [])
                    }
                )
                [ ar0 ]
    , kindListValue =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "KindListValue"
                    , annotation = Just (Type.namedWith [] "KindType" [])
                    }
                )
                [ ar0 ]
    , nullValue =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "NullValue"
            , annotation = Just (Type.namedWith [] "NullValue" [])
            }
    , nullValueUnrecognized_ =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "NullValueUnrecognized_"
                    , annotation = Just (Type.namedWith [] "NullValue" [])
                    }
                )
                [ ar0 ]
    , listValue =
        \listValue_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "ListValue"
                    []
                    (Type.record
                        [ ( "values"
                          , Type.namedWith
                                [ "Google", "Protobuf" ]
                                "ListValueValues"
                                []
                          )
                        ]
                    )
                )
                (Elm.record [ Tuple.pair "values" listValue_args.values ])
    , listValueValues =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "ListValueValues"
                    , annotation = Just (Type.namedWith [] "ListValueValues" [])
                    }
                )
                [ ar0 ]
    , timestamp =
        \timestamp_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Timestamp"
                    []
                    (Type.record
                        [ ( "seconds", Type.int ), ( "nanos", Type.int ) ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "seconds" timestamp_args.seconds
                    , Tuple.pair "nanos" timestamp_args.nanos
                    ]
                )
    , type_ =
        \type_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Type"
                    []
                    (Type.record
                        [ ( "name", Type.string )
                        , ( "fields"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Field"
                                    []
                                )
                          )
                        , ( "oneofs", Type.list Type.string )
                        , ( "options"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Option"
                                    []
                                )
                          )
                        , ( "sourceContext"
                          , Type.maybe
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "SourceContext"
                                    []
                                )
                          )
                        , ( "syntax"
                          , Type.namedWith [ "Google", "Protobuf" ] "Syntax" []
                          )
                        ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "name" type_args.name
                    , Tuple.pair "fields" type_args.fields
                    , Tuple.pair "oneofs" type_args.oneofs
                    , Tuple.pair "options" type_args.options
                    , Tuple.pair "sourceContext" type_args.sourceContext
                    , Tuple.pair "syntax" type_args.syntax
                    ]
                )
    , field =
        \field_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Field"
                    []
                    (Type.record
                        [ ( "kind"
                          , Type.namedWith [ "Google", "Protobuf" ] "Kind" []
                          )
                        , ( "cardinality"
                          , Type.namedWith
                                [ "Google", "Protobuf" ]
                                "Cardinality"
                                []
                          )
                        , ( "number", Type.int )
                        , ( "name", Type.string )
                        , ( "typeUrl", Type.string )
                        , ( "oneofIndex", Type.int )
                        , ( "packed", Type.bool )
                        , ( "options"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Option"
                                    []
                                )
                          )
                        , ( "jsonName", Type.string )
                        , ( "defaultValue", Type.string )
                        ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "kind" field_args.kind
                    , Tuple.pair "cardinality" field_args.cardinality
                    , Tuple.pair "number" field_args.number
                    , Tuple.pair "name" field_args.name
                    , Tuple.pair "typeUrl" field_args.typeUrl
                    , Tuple.pair "oneofIndex" field_args.oneofIndex
                    , Tuple.pair "packed" field_args.packed
                    , Tuple.pair "options" field_args.options
                    , Tuple.pair "jsonName" field_args.jsonName
                    , Tuple.pair "defaultValue" field_args.defaultValue
                    ]
                )
    , typeUnknown =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeUnknown"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeDouble =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeDouble"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeFloat =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeFloat"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeInt64 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeInt64"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeUint64 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeUint64"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeInt32 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeInt32"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeFixed64 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeFixed64"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeFixed32 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeFixed32"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeBool =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeBool"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeString =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeString"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeGroup =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeGroup"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeMessage =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeMessage"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeBytes =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeBytes"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeUint32 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeUint32"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeEnum =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeEnum"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeSfixed32 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeSfixed32"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeSfixed64 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeSfixed64"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeSint32 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeSint32"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , typeSint64 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "TypeSint64"
            , annotation = Just (Type.namedWith [] "Kind" [])
            }
    , kindUnrecognized_ =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "KindUnrecognized_"
                    , annotation = Just (Type.namedWith [] "Kind" [])
                    }
                )
                [ ar0 ]
    , cardinalityUnknown =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "CardinalityUnknown"
            , annotation = Just (Type.namedWith [] "Cardinality" [])
            }
    , cardinalityOptional =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "CardinalityOptional"
            , annotation = Just (Type.namedWith [] "Cardinality" [])
            }
    , cardinalityRequired =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "CardinalityRequired"
            , annotation = Just (Type.namedWith [] "Cardinality" [])
            }
    , cardinalityRepeated =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "CardinalityRepeated"
            , annotation = Just (Type.namedWith [] "Cardinality" [])
            }
    , cardinalityUnrecognized_ =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "CardinalityUnrecognized_"
                    , annotation = Just (Type.namedWith [] "Cardinality" [])
                    }
                )
                [ ar0 ]
    , enum =
        \enum_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Enum"
                    []
                    (Type.record
                        [ ( "name", Type.string )
                        , ( "enumvalue"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "EnumValue"
                                    []
                                )
                          )
                        , ( "options"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Option"
                                    []
                                )
                          )
                        , ( "sourceContext"
                          , Type.maybe
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "SourceContext"
                                    []
                                )
                          )
                        , ( "syntax"
                          , Type.namedWith [ "Google", "Protobuf" ] "Syntax" []
                          )
                        ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "name" enum_args.name
                    , Tuple.pair "enumvalue" enum_args.enumvalue
                    , Tuple.pair "options" enum_args.options
                    , Tuple.pair "sourceContext" enum_args.sourceContext
                    , Tuple.pair "syntax" enum_args.syntax
                    ]
                )
    , enumValue =
        \enumValue_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "EnumValue"
                    []
                    (Type.record
                        [ ( "name", Type.string )
                        , ( "number", Type.int )
                        , ( "options"
                          , Type.list
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Option"
                                    []
                                )
                          )
                        ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "name" enumValue_args.name
                    , Tuple.pair "number" enumValue_args.number
                    , Tuple.pair "options" enumValue_args.options
                    ]
                )
    , option =
        \option_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Option"
                    []
                    (Type.record
                        [ ( "name", Type.string )
                        , ( "value"
                          , Type.maybe
                                (Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Any"
                                    []
                                )
                          )
                        ]
                    )
                )
                (Elm.record
                    [ Tuple.pair "name" option_args.name
                    , Tuple.pair "value" option_args.value
                    ]
                )
    , syntaxProto2 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "SyntaxProto2"
            , annotation = Just (Type.namedWith [] "Syntax" [])
            }
    , syntaxProto3 =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "SyntaxProto3"
            , annotation = Just (Type.namedWith [] "Syntax" [])
            }
    , syntaxUnrecognized_ =
        \ar0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "SyntaxUnrecognized_"
                    , annotation = Just (Type.namedWith [] "Syntax" [])
                    }
                )
                [ ar0 ]
    , doubleValue =
        \doubleValue_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "DoubleValue"
                    []
                    (Type.record [ ( "value", Type.float ) ])
                )
                (Elm.record [ Tuple.pair "value" doubleValue_args.value ])
    , floatValue =
        \floatValue_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "FloatValue"
                    []
                    (Type.record [ ( "value", Type.float ) ])
                )
                (Elm.record [ Tuple.pair "value" floatValue_args.value ])
    , int32Value =
        \int32Value_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "Int32Value"
                    []
                    (Type.record [ ( "value", Type.int ) ])
                )
                (Elm.record [ Tuple.pair "value" int32Value_args.value ])
    , uInt32Value =
        \uInt32Value_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "UInt32Value"
                    []
                    (Type.record [ ( "value", Type.int ) ])
                )
                (Elm.record [ Tuple.pair "value" uInt32Value_args.value ])
    , boolValue =
        \boolValue_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "BoolValue"
                    []
                    (Type.record [ ( "value", Type.bool ) ])
                )
                (Elm.record [ Tuple.pair "value" boolValue_args.value ])
    , stringValue =
        \stringValue_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "StringValue"
                    []
                    (Type.record [ ( "value", Type.string ) ])
                )
                (Elm.record [ Tuple.pair "value" stringValue_args.value ])
    , bytesValue =
        \bytesValue_args ->
            Elm.withType
                (Type.alias
                    [ "Google", "Protobuf" ]
                    "BytesValue"
                    []
                    (Type.record
                        [ ( "value", Type.namedWith [ "Bytes" ] "Bytes" [] ) ]
                    )
                )
                (Elm.record [ Tuple.pair "value" bytesValue_args.value ])
    }


caseOf_ :
    { structFields :
        Elm.Expression
        -> { structFieldsTags_0_0
            | structFields : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    , valueKind :
        Elm.Expression
        -> { valueKindTags_1_0 | valueKind : Elm.Expression -> Elm.Expression }
        -> Elm.Expression
    , kindType :
        Elm.Expression
        -> { kindTypeTags_2_0
            | kindNullValue : Elm.Expression -> Elm.Expression
            , kindNumberValue : Elm.Expression -> Elm.Expression
            , kindStringValue : Elm.Expression -> Elm.Expression
            , kindBoolValue : Elm.Expression -> Elm.Expression
            , kindStructValue : Elm.Expression -> Elm.Expression
            , kindListValue : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    , nullValue :
        Elm.Expression
        -> { nullValueTags_3_0
            | nullValue : Elm.Expression
            , nullValueUnrecognized_ : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    , listValueValues :
        Elm.Expression
        -> { listValueValuesTags_4_0
            | listValueValues : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    , kind :
        Elm.Expression
        -> { kindTags_5_0
            | typeUnknown : Elm.Expression
            , typeDouble : Elm.Expression
            , typeFloat : Elm.Expression
            , typeInt64 : Elm.Expression
            , typeUint64 : Elm.Expression
            , typeInt32 : Elm.Expression
            , typeFixed64 : Elm.Expression
            , typeFixed32 : Elm.Expression
            , typeBool : Elm.Expression
            , typeString : Elm.Expression
            , typeGroup : Elm.Expression
            , typeMessage : Elm.Expression
            , typeBytes : Elm.Expression
            , typeUint32 : Elm.Expression
            , typeEnum : Elm.Expression
            , typeSfixed32 : Elm.Expression
            , typeSfixed64 : Elm.Expression
            , typeSint32 : Elm.Expression
            , typeSint64 : Elm.Expression
            , kindUnrecognized_ : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    , cardinality :
        Elm.Expression
        -> { cardinalityTags_6_0
            | cardinalityUnknown : Elm.Expression
            , cardinalityOptional : Elm.Expression
            , cardinalityRequired : Elm.Expression
            , cardinalityRepeated : Elm.Expression
            , cardinalityUnrecognized_ : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    , syntax :
        Elm.Expression
        -> { syntaxTags_7_0
            | syntaxProto2 : Elm.Expression
            , syntaxProto3 : Elm.Expression
            , syntaxUnrecognized_ : Elm.Expression -> Elm.Expression
        }
        -> Elm.Expression
    }
caseOf_ =
    { structFields =
        \structFieldsExpression structFieldsTags ->
            Elm.Case.custom
                structFieldsExpression
                (Type.namedWith [ "Google", "Protobuf" ] "StructFields" [])
                [ Elm.Case.branch1
                    "StructFields"
                    ( "dict.Dict"
                    , Type.namedWith
                        [ "Dict" ]
                        "Dict"
                        [ Type.string
                        , Type.maybe
                            (Type.namedWith [ "Google", "Protobuf" ] "Value" [])
                        ]
                    )
                    structFieldsTags.structFields
                ]
    , valueKind =
        \valueKindExpression valueKindTags ->
            Elm.Case.custom
                valueKindExpression
                (Type.namedWith [ "Google", "Protobuf" ] "ValueKind" [])
                [ Elm.Case.branch1
                    "ValueKind"
                    ( "maybe.Maybe"
                    , Type.maybe
                        (Type.namedWith [ "Google", "Protobuf" ] "KindType" [])
                    )
                    valueKindTags.valueKind
                ]
    , kindType =
        \kindTypeExpression kindTypeTags ->
            Elm.Case.custom
                kindTypeExpression
                (Type.namedWith [ "Google", "Protobuf" ] "KindType" [])
                [ Elm.Case.branch1
                    "KindNullValue"
                    ( "google.Protobuf.NullValue"
                    , Type.namedWith [ "Google", "Protobuf" ] "NullValue" []
                    )
                    kindTypeTags.kindNullValue
                , Elm.Case.branch1
                    "KindNumberValue"
                    ( "basics.Float", Type.float )
                    kindTypeTags.kindNumberValue
                , Elm.Case.branch1
                    "KindStringValue"
                    ( "string.String", Type.string )
                    kindTypeTags.kindStringValue
                , Elm.Case.branch1
                    "KindBoolValue"
                    ( "basics.Bool", Type.bool )
                    kindTypeTags.kindBoolValue
                , Elm.Case.branch1
                    "KindStructValue"
                    ( "google.Protobuf.Struct"
                    , Type.namedWith [ "Google", "Protobuf" ] "Struct" []
                    )
                    kindTypeTags.kindStructValue
                , Elm.Case.branch1
                    "KindListValue"
                    ( "google.Protobuf.ListValue"
                    , Type.namedWith [ "Google", "Protobuf" ] "ListValue" []
                    )
                    kindTypeTags.kindListValue
                ]
    , nullValue =
        \nullValueExpression nullValueTags ->
            Elm.Case.custom
                nullValueExpression
                (Type.namedWith [ "Google", "Protobuf" ] "NullValue" [])
                [ Elm.Case.branch0 "NullValue" nullValueTags.nullValue
                , Elm.Case.branch1
                    "NullValueUnrecognized_"
                    ( "basics.Int", Type.int )
                    nullValueTags.nullValueUnrecognized_
                ]
    , listValueValues =
        \listValueValuesExpression listValueValuesTags ->
            Elm.Case.custom
                listValueValuesExpression
                (Type.namedWith [ "Google", "Protobuf" ] "ListValueValues" [])
                [ Elm.Case.branch1
                    "ListValueValues"
                    ( "list.List"
                    , Type.list
                        (Type.namedWith [ "Google", "Protobuf" ] "Value" [])
                    )
                    listValueValuesTags.listValueValues
                ]
    , kind =
        \kindExpression kindTags ->
            Elm.Case.custom
                kindExpression
                (Type.namedWith [ "Google", "Protobuf" ] "Kind" [])
                [ Elm.Case.branch0 "TypeUnknown" kindTags.typeUnknown
                , Elm.Case.branch0 "TypeDouble" kindTags.typeDouble
                , Elm.Case.branch0 "TypeFloat" kindTags.typeFloat
                , Elm.Case.branch0 "TypeInt64" kindTags.typeInt64
                , Elm.Case.branch0 "TypeUint64" kindTags.typeUint64
                , Elm.Case.branch0 "TypeInt32" kindTags.typeInt32
                , Elm.Case.branch0 "TypeFixed64" kindTags.typeFixed64
                , Elm.Case.branch0 "TypeFixed32" kindTags.typeFixed32
                , Elm.Case.branch0 "TypeBool" kindTags.typeBool
                , Elm.Case.branch0 "TypeString" kindTags.typeString
                , Elm.Case.branch0 "TypeGroup" kindTags.typeGroup
                , Elm.Case.branch0 "TypeMessage" kindTags.typeMessage
                , Elm.Case.branch0 "TypeBytes" kindTags.typeBytes
                , Elm.Case.branch0 "TypeUint32" kindTags.typeUint32
                , Elm.Case.branch0 "TypeEnum" kindTags.typeEnum
                , Elm.Case.branch0 "TypeSfixed32" kindTags.typeSfixed32
                , Elm.Case.branch0 "TypeSfixed64" kindTags.typeSfixed64
                , Elm.Case.branch0 "TypeSint32" kindTags.typeSint32
                , Elm.Case.branch0 "TypeSint64" kindTags.typeSint64
                , Elm.Case.branch1
                    "KindUnrecognized_"
                    ( "basics.Int", Type.int )
                    kindTags.kindUnrecognized_
                ]
    , cardinality =
        \cardinalityExpression cardinalityTags ->
            Elm.Case.custom
                cardinalityExpression
                (Type.namedWith [ "Google", "Protobuf" ] "Cardinality" [])
                [ Elm.Case.branch0
                    "CardinalityUnknown"
                    cardinalityTags.cardinalityUnknown
                , Elm.Case.branch0
                    "CardinalityOptional"
                    cardinalityTags.cardinalityOptional
                , Elm.Case.branch0
                    "CardinalityRequired"
                    cardinalityTags.cardinalityRequired
                , Elm.Case.branch0
                    "CardinalityRepeated"
                    cardinalityTags.cardinalityRepeated
                , Elm.Case.branch1
                    "CardinalityUnrecognized_"
                    ( "basics.Int", Type.int )
                    cardinalityTags.cardinalityUnrecognized_
                ]
    , syntax =
        \syntaxExpression syntaxTags ->
            Elm.Case.custom
                syntaxExpression
                (Type.namedWith [ "Google", "Protobuf" ] "Syntax" [])
                [ Elm.Case.branch0 "SyntaxProto2" syntaxTags.syntaxProto2
                , Elm.Case.branch0 "SyntaxProto3" syntaxTags.syntaxProto3
                , Elm.Case.branch1
                    "SyntaxUnrecognized_"
                    ( "basics.Int", Type.int )
                    syntaxTags.syntaxUnrecognized_
                ]
    }


call_ :
    { toAnyEncoder : Elm.Expression -> Elm.Expression
    , toApiEncoder : Elm.Expression -> Elm.Expression
    , toMethodEncoder : Elm.Expression -> Elm.Expression
    , toMixinEncoder : Elm.Expression -> Elm.Expression
    , toDurationEncoder : Elm.Expression -> Elm.Expression
    , toEmptyEncoder : Elm.Expression -> Elm.Expression
    , toFieldMaskEncoder : Elm.Expression -> Elm.Expression
    , toSourceContextEncoder : Elm.Expression -> Elm.Expression
    , toStructEncoder : Elm.Expression -> Elm.Expression
    , toValueEncoder : Elm.Expression -> Elm.Expression
    , toListValueEncoder : Elm.Expression -> Elm.Expression
    , toTimestampEncoder : Elm.Expression -> Elm.Expression
    , toTypeEncoder : Elm.Expression -> Elm.Expression
    , toFieldEncoder : Elm.Expression -> Elm.Expression
    , toKindEncoder : Elm.Expression -> Elm.Expression
    , toCardinalityEncoder : Elm.Expression -> Elm.Expression
    , toEnumEncoder : Elm.Expression -> Elm.Expression
    , toEnumValueEncoder : Elm.Expression -> Elm.Expression
    , toOptionEncoder : Elm.Expression -> Elm.Expression
    , toSyntaxEncoder : Elm.Expression -> Elm.Expression
    , toDoubleValueEncoder : Elm.Expression -> Elm.Expression
    , toFloatValueEncoder : Elm.Expression -> Elm.Expression
    , toInt32ValueEncoder : Elm.Expression -> Elm.Expression
    , toUInt32ValueEncoder : Elm.Expression -> Elm.Expression
    , toBoolValueEncoder : Elm.Expression -> Elm.Expression
    , toStringValueEncoder : Elm.Expression -> Elm.Expression
    , toBytesValueEncoder : Elm.Expression -> Elm.Expression
    }
call_ =
    { toAnyEncoder =
        \toAnyEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toAnyEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Any"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toAnyEncoderArg ]
    , toApiEncoder =
        \toApiEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toApiEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Api"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toApiEncoderArg ]
    , toMethodEncoder =
        \toMethodEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toMethodEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Method"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toMethodEncoderArg ]
    , toMixinEncoder =
        \toMixinEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toMixinEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Mixin"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toMixinEncoderArg ]
    , toDurationEncoder =
        \toDurationEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toDurationEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Duration"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toDurationEncoderArg ]
    , toEmptyEncoder =
        \toEmptyEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toEmptyEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Empty"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toEmptyEncoderArg ]
    , toFieldMaskEncoder =
        \toFieldMaskEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toFieldMaskEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "FieldMask"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toFieldMaskEncoderArg ]
    , toSourceContextEncoder =
        \toSourceContextEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toSourceContextEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "SourceContext"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toSourceContextEncoderArg ]
    , toStructEncoder =
        \toStructEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toStructEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Struct"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toStructEncoderArg ]
    , toValueEncoder =
        \toValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Value"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toValueEncoderArg ]
    , toListValueEncoder =
        \toListValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toListValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "ListValue"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toListValueEncoderArg ]
    , toTimestampEncoder =
        \toTimestampEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toTimestampEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Timestamp"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toTimestampEncoderArg ]
    , toTypeEncoder =
        \toTypeEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toTypeEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Type"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toTypeEncoderArg ]
    , toFieldEncoder =
        \toFieldEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toFieldEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Field"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toFieldEncoderArg ]
    , toKindEncoder =
        \toKindEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toKindEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Kind"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toKindEncoderArg ]
    , toCardinalityEncoder =
        \toCardinalityEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toCardinalityEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Cardinality"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toCardinalityEncoderArg ]
    , toEnumEncoder =
        \toEnumEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toEnumEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Enum"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toEnumEncoderArg ]
    , toEnumValueEncoder =
        \toEnumValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toEnumValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "EnumValue"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toEnumValueEncoderArg ]
    , toOptionEncoder =
        \toOptionEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toOptionEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Option"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toOptionEncoderArg ]
    , toSyntaxEncoder =
        \toSyntaxEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toSyntaxEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Syntax"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toSyntaxEncoderArg ]
    , toDoubleValueEncoder =
        \toDoubleValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toDoubleValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "DoubleValue"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toDoubleValueEncoderArg ]
    , toFloatValueEncoder =
        \toFloatValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toFloatValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "FloatValue"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toFloatValueEncoderArg ]
    , toInt32ValueEncoder =
        \toInt32ValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toInt32ValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "Int32Value"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toInt32ValueEncoderArg ]
    , toUInt32ValueEncoder =
        \toUInt32ValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toUInt32ValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "UInt32Value"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toUInt32ValueEncoderArg ]
    , toBoolValueEncoder =
        \toBoolValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toBoolValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "BoolValue"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toBoolValueEncoderArg ]
    , toStringValueEncoder =
        \toStringValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toStringValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "StringValue"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toStringValueEncoderArg ]
    , toBytesValueEncoder =
        \toBytesValueEncoderArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Google", "Protobuf" ]
                    , name = "toBytesValueEncoder"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Google", "Protobuf" ]
                                    "BytesValue"
                                    []
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ toBytesValueEncoderArg ]
    }


values_ :
    { anyDecoder : Elm.Expression
    , apiDecoder : Elm.Expression
    , methodDecoder : Elm.Expression
    , mixinDecoder : Elm.Expression
    , durationDecoder : Elm.Expression
    , emptyDecoder : Elm.Expression
    , fieldMaskDecoder : Elm.Expression
    , sourceContextDecoder : Elm.Expression
    , structDecoder : Elm.Expression
    , valueDecoder : Elm.Expression
    , listValueDecoder : Elm.Expression
    , timestampDecoder : Elm.Expression
    , typeDecoder : Elm.Expression
    , fieldDecoder : Elm.Expression
    , kindDecoder : Elm.Expression
    , cardinalityDecoder : Elm.Expression
    , enumDecoder : Elm.Expression
    , enumValueDecoder : Elm.Expression
    , optionDecoder : Elm.Expression
    , syntaxDecoder : Elm.Expression
    , doubleValueDecoder : Elm.Expression
    , floatValueDecoder : Elm.Expression
    , int32ValueDecoder : Elm.Expression
    , uInt32ValueDecoder : Elm.Expression
    , boolValueDecoder : Elm.Expression
    , stringValueDecoder : Elm.Expression
    , bytesValueDecoder : Elm.Expression
    , toAnyEncoder : Elm.Expression
    , toApiEncoder : Elm.Expression
    , toMethodEncoder : Elm.Expression
    , toMixinEncoder : Elm.Expression
    , toDurationEncoder : Elm.Expression
    , toEmptyEncoder : Elm.Expression
    , toFieldMaskEncoder : Elm.Expression
    , toSourceContextEncoder : Elm.Expression
    , toStructEncoder : Elm.Expression
    , toValueEncoder : Elm.Expression
    , toListValueEncoder : Elm.Expression
    , toTimestampEncoder : Elm.Expression
    , toTypeEncoder : Elm.Expression
    , toFieldEncoder : Elm.Expression
    , toKindEncoder : Elm.Expression
    , toCardinalityEncoder : Elm.Expression
    , toEnumEncoder : Elm.Expression
    , toEnumValueEncoder : Elm.Expression
    , toOptionEncoder : Elm.Expression
    , toSyntaxEncoder : Elm.Expression
    , toDoubleValueEncoder : Elm.Expression
    , toFloatValueEncoder : Elm.Expression
    , toInt32ValueEncoder : Elm.Expression
    , toUInt32ValueEncoder : Elm.Expression
    , toBoolValueEncoder : Elm.Expression
    , toStringValueEncoder : Elm.Expression
    , toBytesValueEncoder : Elm.Expression
    }
values_ =
    { anyDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "anyDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Any" [] ]
                    )
            }
    , apiDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "apiDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Api" [] ]
                    )
            }
    , methodDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "methodDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Method" [] ]
                    )
            }
    , mixinDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "mixinDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Mixin" [] ]
                    )
            }
    , durationDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "durationDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Duration" []
                        ]
                    )
            }
    , emptyDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "emptyDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Empty" [] ]
                    )
            }
    , fieldMaskDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "fieldMaskDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "FieldMask" []
                        ]
                    )
            }
    , sourceContextDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "sourceContextDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "SourceContext"
                            []
                        ]
                    )
            }
    , structDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "structDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Struct" [] ]
                    )
            }
    , valueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "valueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Value" [] ]
                    )
            }
    , listValueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "listValueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "ListValue" []
                        ]
                    )
            }
    , timestampDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "timestampDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Timestamp" []
                        ]
                    )
            }
    , typeDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "typeDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Type" [] ]
                    )
            }
    , fieldDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "fieldDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Field" [] ]
                    )
            }
    , kindDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "kindDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Kind" [] ]
                    )
            }
    , cardinalityDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "cardinalityDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "Cardinality"
                            []
                        ]
                    )
            }
    , enumDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "enumDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Enum" [] ]
                    )
            }
    , enumValueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "enumValueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "EnumValue" []
                        ]
                    )
            }
    , optionDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "optionDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Option" [] ]
                    )
            }
    , syntaxDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "syntaxDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "Syntax" [] ]
                    )
            }
    , doubleValueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "doubleValueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "DoubleValue"
                            []
                        ]
                    )
            }
    , floatValueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "floatValueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "FloatValue"
                            []
                        ]
                    )
            }
    , int32ValueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "int32ValueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "Int32Value"
                            []
                        ]
                    )
            }
    , uInt32ValueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "uInt32ValueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "UInt32Value"
                            []
                        ]
                    )
            }
    , boolValueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "boolValueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Google", "Protobuf" ] "BoolValue" []
                        ]
                    )
            }
    , stringValueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "stringValueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "StringValue"
                            []
                        ]
                    )
            }
    , bytesValueDecoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "bytesValueDecoder"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "BytesValue"
                            []
                        ]
                    )
            }
    , toAnyEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toAnyEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Any" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toApiEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toApiEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Api" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toMethodEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toMethodEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Method" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toMixinEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toMixinEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Mixin" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toDurationEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toDurationEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Duration" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toEmptyEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toEmptyEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Empty" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toFieldMaskEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toFieldMaskEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "FieldMask" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toSourceContextEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toSourceContextEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "SourceContext"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toStructEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toStructEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Struct" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Value" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toListValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toListValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "ListValue" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toTimestampEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toTimestampEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Timestamp" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toTypeEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toTypeEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Type" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toFieldEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toFieldEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Field" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toKindEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toKindEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Kind" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toCardinalityEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toCardinalityEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "Cardinality"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toEnumEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toEnumEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Enum" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toEnumValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toEnumValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "EnumValue" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toOptionEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toOptionEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Option" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toSyntaxEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toSyntaxEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "Syntax" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toDoubleValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toDoubleValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "DoubleValue"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toFloatValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toFloatValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "FloatValue"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toInt32ValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toInt32ValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "Int32Value"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toUInt32ValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toUInt32ValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "UInt32Value"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toBoolValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toBoolValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Google", "Protobuf" ] "BoolValue" []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toStringValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toStringValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "StringValue"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , toBytesValueEncoder =
        Elm.value
            { importFrom = [ "Google", "Protobuf" ]
            , name = "toBytesValueEncoder"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Google", "Protobuf" ]
                            "BytesValue"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    }