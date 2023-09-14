module Gen.Protobuf.Decode exposing (annotation_, bool, bytes, call_, decode, double, expectBytes, fixed32, fixed64, float, int32, int64, lazy, map, mapped, message, moduleName_, oneOf, optional, repeated, required, sfixed32, sfixed64, sint32, sint64, string, uint32, uint64, values_)

{-| 
@docs moduleName_, decode, expectBytes, message, required, optional, repeated, mapped, oneOf, int32, uint32, sint32, fixed32, sfixed32, int64, uint64, sint64, fixed64, sfixed64, double, float, string, bool, bytes, map, lazy, annotation_, call_, values_
-}


import Elm
import Elm.Annotation as Type


{-| The name of this module. -}
moduleName_ : List String
moduleName_ =
    [ "Protobuf", "Decode" ]


{-| Turn a sequence of bytes into a nice Elm value.

     decode int32 <7F>    -- Just 127
     decode sint32 <7F>   -- Just -64
     decode sfixed32 <7F> -- Nothing

The `Decoder` specifies exactly how this should happen. This process may fail
if:

  - a required field is not present (`proto2` only);
  - there is a mismatch of the
    [_wire type_](https://developers.google.com/protocol-buffers/docs/encoding#structure)
    of the encoded value and the decoder;
  - the sequence of bytes is corrupted or unexpected somehow.

The examples above show a case where there are not enough bytes. They also show
the same bytes sequence can lead to different values depending on the `Decoder`
that is being used. Decoders cannot always detect these kind of mismatches.

Values are always encoded together with a field number and their
[_wire type_](https://developers.google.com/protocol-buffers/docs/encoding#structure)
. This allows the decoder to set the right fields and to process the correct
number of bytes.

decode: Protobuf.Decode.Decoder a -> Bytes.Bytes -> Maybe a
-}
decode : Elm.Expression -> Elm.Expression -> Elm.Expression
decode decodeArg decodeArg0 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "decode"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.namedWith [ "Bytes" ] "Bytes" []
                        ]
                        (Type.maybe (Type.var "a"))
                    )
            }
        )
        [ decodeArg, decodeArg0 ]


{-| Turn a [`Decoder`](#Decoder) into a `Http.Expect`. You probably received
the `Bytes` you want to decode from an HTTP request. As [`message`](#message)
consumes **all remaining bytes** on the wire, you cannot use `Http.expectBytes`
directly (as it is not aware of the width of the bytes sequence). Hence, you
might want to use the `expectBytes` as provided by this package.

    import Http
    import Protobuf.Decode as Decode

    getPerson : (Result Http.Error a -> msg) -> Cmd msg
    getPerson toMsg =
        Http.get
          { url = "https://example.com/person"
          , Decode.expectBytes toMsg personDecoder
          }

expectBytes: 
    (Result.Result Http.Error a -> msg)
    -> Protobuf.Decode.Decoder a
    -> Http.Expect msg
-}
expectBytes :
    (Elm.Expression -> Elm.Expression) -> Elm.Expression -> Elm.Expression
expectBytes expectBytesArg expectBytesArg0 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "expectBytes"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.namedWith
                                [ "Result" ]
                                "Result"
                                [ Type.namedWith [ "Http" ] "Error" []
                                , Type.var "a"
                                ]
                            ]
                            (Type.var "msg")
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        ]
                        (Type.namedWith [ "Http" ] "Expect" [ Type.var "msg" ])
                    )
            }
        )
        [ Elm.functionReduced "expectBytesUnpack" expectBytesArg
        , expectBytesArg0
        ]


{-| Decode **all remaining bytes** into an record. The initial value given here
holds all default values (which cannot be overridden for `proto3`). Each
provided field decoder calls a setter function to update the record when its
field number is encountered on the bytes sequence. _Unknown fields_ that have
no matching field decoder are currently being ignored.

    import Protobuf.Decode as Decode

    type alias Person =
        { name : String
        }

    personDecoder : Decode.Decoder Person
    personDecoder =
        -- Person "John"
        Decode.message (Person "John") []

message: a -> List (Protobuf.Decode.FieldDecoder a) -> Protobuf.Decode.Decoder a
-}
message : Elm.Expression -> List Elm.Expression -> Elm.Expression
message messageArg messageArg0 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "message"
            , annotation =
                Just
                    (Type.function
                        [ Type.var "a"
                        , Type.list
                            (Type.namedWith
                                [ "Protobuf", "Decode" ]
                                "FieldDecoder"
                                [ Type.var "a" ]
                            )
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        )
                    )
            }
        )
        [ messageArg, Elm.list messageArg0 ]


{-| Decode a required field. Decoding a message fails when one of its required
fields is not present in the bytes sequence. Required fields are only supported
in `proto2`.

    type alias Person =
        { age : Int -- field number 1
        , name : String -- field number 3
        }

    personDecoder : Decode.Decoder Person
    personDecoder =
        -- <08 21 1A 04 4A 6F 68 6E> == Just (Person 33 "John")
        -- <08 21>                   == Nothing
        -- <>                        == Nothing
        Decode.message (Person 0 "")
            [ Decode.required 1 int32 setAge
            , Decode.required 3 string setName
            ]

    -- SETTERS
    setAge : a -> { b | age : a } -> { b | age : a }
    setAge value model =
        { model | age = value }

    setName : a -> { b | name : a } -> { b | name : a }
    setName value model =
        { model | name = value }

required: 
    Int
    -> Protobuf.Decode.Decoder a
    -> (a -> b -> b)
    -> Protobuf.Decode.FieldDecoder b
-}
required :
    Int
    -> Elm.Expression
    -> (Elm.Expression -> Elm.Expression -> Elm.Expression)
    -> Elm.Expression
required requiredArg requiredArg0 requiredArg1 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "required"
            , annotation =
                Just
                    (Type.function
                        [ Type.int
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.function
                            [ Type.var "a", Type.var "b" ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
        )
        [ Elm.int requiredArg
        , requiredArg0
        , Elm.functionReduced
            "requiredUnpack"
            (\functionReducedUnpack ->
                Elm.functionReduced
                    "unpack"
                    (requiredArg1 functionReducedUnpack)
            )
        ]


{-| Decode an optional field.

    import Protobuf.Decode as Decode

    type alias Person =
        { age : Int -- field number 2
        , name : String -- field number 4
        }

    personDecoder : Decode.Decoder Person
    personDecoder =
        -- <08 21 1A 04 4A 6F 68 6E> == Just (Person 33 "John")
        -- <08 21>                   == Just (Person 33 "")
        -- <>                        == Just (Person 0 "")
        Decode.message (Person 0 "")
            [ Decode.optional 2 int32 setAge
            , Decode.optional 4 string setName
            ]

    -- SETTERS
    setAge : a -> { b | age : a } -> { b | age : a }
    setAge value model =
        { model | age = value }

    setName : a -> { b | name : a } -> { b | name : a }
    setName value model =
        { model | name = value }

optional: 
    Int
    -> Protobuf.Decode.Decoder a
    -> (a -> b -> b)
    -> Protobuf.Decode.FieldDecoder b
-}
optional :
    Int
    -> Elm.Expression
    -> (Elm.Expression -> Elm.Expression -> Elm.Expression)
    -> Elm.Expression
optional optionalArg optionalArg0 optionalArg1 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "optional"
            , annotation =
                Just
                    (Type.function
                        [ Type.int
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.function
                            [ Type.var "a", Type.var "b" ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
        )
        [ Elm.int optionalArg
        , optionalArg0
        , Elm.functionReduced
            "optionalUnpack"
            (\functionReducedUnpack ->
                Elm.functionReduced
                    "unpack"
                    (optionalArg1 functionReducedUnpack)
            )
        ]


{-| Decode a repeated field. If no such fields are present when decoding a
message, the result will be an empty list.

As repeated fields may occur multiple times in a bytes sequence, `repeated`
also needs to get hold of the record's current value in order to append the new
value.

    import Protobuf.Decode as Decode

    type alias Person =
        { names : List String -- field number 5
        }

    personDecoder : Decode.Decoder Person
    personDecoder =
        -- <2A 04 4A 6F 68 6E 2A 07 4D 61 72 77 6F 6F 64> == Just (Person [ "John", "Marwood" ])
        -- <2A 04 4A 6F 68 6E>                            == Just (Person [ "John" ])
        -- <>                                             == Just (Person [])
        Decode.message (Person [])
            [ Decode.repeated 5 string .names setNames
            ]

    -- SETTERS
    setNames : a -> { b | names : a } -> { b | names : a }
    setNames value model =
        { model | names = value }

repeated: 
    Int
    -> Protobuf.Decode.Decoder a
    -> (b -> List a)
    -> (List a -> b -> b)
    -> Protobuf.Decode.FieldDecoder b
-}
repeated :
    Int
    -> Elm.Expression
    -> (Elm.Expression -> Elm.Expression)
    -> (Elm.Expression -> Elm.Expression -> Elm.Expression)
    -> Elm.Expression
repeated repeatedArg repeatedArg0 repeatedArg1 repeatedArg2 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "repeated"
            , annotation =
                Just
                    (Type.function
                        [ Type.int
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.function
                            [ Type.var "b" ]
                            (Type.list (Type.var "a"))
                        , Type.function
                            [ Type.list (Type.var "a"), Type.var "b" ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
        )
        [ Elm.int repeatedArg
        , repeatedArg0
        , Elm.functionReduced "repeatedUnpack" repeatedArg1
        , Elm.functionReduced
            "repeatedUnpack"
            (\functionReducedUnpack ->
                Elm.functionReduced
                    "unpack"
                    (repeatedArg2 functionReducedUnpack)
            )
        ]


{-| Decode a map field. If no such fields are present when decoding a message,
the result will be an empty `Dict`. Note that you need to provide one decoder
for the keys and another one for the values. Keys without a value or values
without a key stick to the provided defaults.

As map fields may occur multiple times in a bytes sequence, `mapped`
also needs to get hold of the record's current value in order to append the new
value.

    import Dict exposing (Dict)
    import Protobuf.Decode as Decode

    type alias Administration =
        { persons : Dict Int String -- field number 6
        }

    administrationDecoder : Decode.Decoder Administration
    administrationDecoder =
        -- <32 08 08 01 12 04 4A 6F 68 6E 32 08 08 02 12 04 4B 61 74 65> == Just (Administration (Dict.fromList [( 1, "John" ), ( 2, "Kate" )])
        -- <32 08 08 01 12 04 4A 6F 68 6E>                               == Just (Administration (Dict.fromList [( 1, "John" )])
        -- <32 08 08 01>                                                 == Just (Administration (Dict.fromList [( 1, "" )])
        -- <>                                                            == Just (Administration Dict.empty)
        Decode.message (Administration Dict.empty)
            [ Decode.mapped 6 ( 0, "" ) int32 string .persons setPersons
            ]

    -- SETTERS
    setPersons : a -> { b | persons : a } -> { b | persons : a }
    setPersons value model =
        { model | persons = value }

mapped: 
    Int
    -> ( comparable, a )
    -> Protobuf.Decode.Decoder comparable
    -> Protobuf.Decode.Decoder a
    -> (b -> Dict.Dict comparable a)
    -> (Dict.Dict comparable a -> b -> b)
    -> Protobuf.Decode.FieldDecoder b
-}
mapped :
    Int
    -> Elm.Expression
    -> Elm.Expression
    -> Elm.Expression
    -> (Elm.Expression -> Elm.Expression)
    -> (Elm.Expression -> Elm.Expression -> Elm.Expression)
    -> Elm.Expression
mapped mappedArg mappedArg0 mappedArg1 mappedArg2 mappedArg3 mappedArg4 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "mapped"
            , annotation =
                Just
                    (Type.function
                        [ Type.int
                        , Type.tuple (Type.var "comparable") (Type.var "a")
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "comparable" ]
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.function
                            [ Type.var "b" ]
                            (Type.namedWith
                                [ "Dict" ]
                                "Dict"
                                [ Type.var "comparable", Type.var "a" ]
                            )
                        , Type.function
                            [ Type.namedWith
                                [ "Dict" ]
                                "Dict"
                                [ Type.var "comparable", Type.var "a" ]
                            , Type.var "b"
                            ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
        )
        [ Elm.int mappedArg
        , mappedArg0
        , mappedArg1
        , mappedArg2
        , Elm.functionReduced "mappedUnpack" mappedArg3
        , Elm.functionReduced
            "mappedUnpack"
            (\functionReducedUnpack ->
                Elm.functionReduced "unpack" (mappedArg4 functionReducedUnpack)
            )
        ]


{-| Decode one of some fields. As the decoder is capable of deserializing
different types of data its return type must be a custom type.

    import Protobuf.Decode as Decode

    type alias FormValue =
        { key : String -- field number 7
        , value : Maybe Value -- field number 8 or 9
        }

    type Value
        = StringValue String
        | IntValue Int

    formValueDecoder : Decode.Decoder FormValue
    formValueDecoder =
        -- <0A 03 6B 65 79 12 05 76 61 6C 75 65> == Just (FormValue "key" (StringValue "value"))
        -- <0A 03 6B 65 79 10 64>                == Just (FormValue "key" (IntValue 100))
        -- <0A 03 6B 65 79>                      == Just (FormValue "key" NoValue)
        -- <>                                    == Just (FormValue "" NoValue)
        Decode.message (FormValue "" NoValue)
            [ Decode.optional 7 string setKey
            , Decode.oneOf
                [ ( 8, Decode.map StringValue Decode.string )
                , ( 9, Decode.map IntValue Decode.int32 )
                ]
                setValue
            ]

    -- SETTERS
    setKey : a -> { b | key : a } -> { b | key : a }
    setKey value model =
        { model | key = value }

    setValue : a -> { b | value : a } -> { b | value : a }
    setValue value model =
        { model | value = value }

oneOf: 
    List ( Int, Protobuf.Decode.Decoder a )
    -> (Maybe a -> b -> b)
    -> Protobuf.Decode.FieldDecoder b
-}
oneOf :
    List Elm.Expression
    -> (Elm.Expression -> Elm.Expression -> Elm.Expression)
    -> Elm.Expression
oneOf oneOfArg oneOfArg0 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "oneOf"
            , annotation =
                Just
                    (Type.function
                        [ Type.list
                            (Type.tuple
                                Type.int
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                )
                            )
                        , Type.function
                            [ Type.maybe (Type.var "a"), Type.var "b" ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
        )
        [ Elm.list oneOfArg
        , Elm.functionReduced
            "oneOfUnpack"
            (\functionReducedUnpack ->
                Elm.functionReduced "unpack" (oneOfArg0 functionReducedUnpack)
            )
        ]


{-| Decode a variable number of bytes into an integer from -2147483648 to 2147483647.

int32: Protobuf.Decode.Decoder Int
-}
int32 : Elm.Expression
int32 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "int32"
        , annotation =
            Just
                (Type.namedWith [ "Protobuf", "Decode" ] "Decoder" [ Type.int ])
        }


{-| Decode a variable number of bytes into an integer from 0 to 4294967295.

uint32: Protobuf.Decode.Decoder Int
-}
uint32 : Elm.Expression
uint32 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "uint32"
        , annotation =
            Just
                (Type.namedWith [ "Protobuf", "Decode" ] "Decoder" [ Type.int ])
        }


{-| Decode a variable number of bytes into an integer from -2147483648 to 2147483647.

sint32: Protobuf.Decode.Decoder Int
-}
sint32 : Elm.Expression
sint32 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "sint32"
        , annotation =
            Just
                (Type.namedWith [ "Protobuf", "Decode" ] "Decoder" [ Type.int ])
        }


{-| Decode four bytes into an integer from 0 to 4294967295.

fixed32: Protobuf.Decode.Decoder Int
-}
fixed32 : Elm.Expression
fixed32 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "fixed32"
        , annotation =
            Just
                (Type.namedWith [ "Protobuf", "Decode" ] "Decoder" [ Type.int ])
        }


{-| Decode four bytes into an integer from -2147483648 to 2147483647.

sfixed32: Protobuf.Decode.Decoder Int
-}
sfixed32 : Elm.Expression
sfixed32 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "sfixed32"
        , annotation =
            Just
                (Type.namedWith [ "Protobuf", "Decode" ] "Decoder" [ Type.int ])
        }


{-| Decode a variable number of bytes into an integer from `-9223372036854775808` to `9223372036854775807`.

int64: Protobuf.Decode.Decoder Protobuf.Types.Int64.Int64
-}
int64 : Elm.Expression
int64 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "int64"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Protobuf", "Types", "Int64" ] "Int64" []
                    ]
                )
        }


{-| Decode a variable number of bytes into an integer from `0` to `18446744073709551615`.

uint64: Protobuf.Decode.Decoder Protobuf.Types.Int64.Int64
-}
uint64 : Elm.Expression
uint64 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "uint64"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Protobuf", "Types", "Int64" ] "Int64" []
                    ]
                )
        }


{-| Decode a variable number of bytes into an integer from `-9223372036854775808` to `9223372036854775807`.

sint64: Protobuf.Decode.Decoder Protobuf.Types.Int64.Int64
-}
sint64 : Elm.Expression
sint64 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "sint64"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Protobuf", "Types", "Int64" ] "Int64" []
                    ]
                )
        }


{-| Decode a eight bytes into an integer from `0` to `18446744073709551615`.

fixed64: Protobuf.Decode.Decoder Protobuf.Types.Int64.Int64
-}
fixed64 : Elm.Expression
fixed64 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "fixed64"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Protobuf", "Types", "Int64" ] "Int64" []
                    ]
                )
        }


{-| Decode eight bytes into an integer from `-9223372036854775808` to `9223372036854775807`.

sfixed64: Protobuf.Decode.Decoder Protobuf.Types.Int64.Int64
-}
sfixed64 : Elm.Expression
sfixed64 =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "sfixed64"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Protobuf", "Types", "Int64" ] "Int64" []
                    ]
                )
        }


{-| Decode eight bytes into a floating point number.

double: Protobuf.Decode.Decoder Float
-}
double : Elm.Expression
double =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "double"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.float ]
                )
        }


{-| Decode four bytes into a floating point number.

float: Protobuf.Decode.Decoder Float
-}
float : Elm.Expression
float =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "float"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.float ]
                )
        }


{-| Decode all bytes into a string.

string: Protobuf.Decode.Decoder String
-}
string : Elm.Expression
string =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "string"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.string ]
                )
        }


{-| Decode one byte into a boolean.

bool: Protobuf.Decode.Decoder Bool
-}
bool : Elm.Expression
bool =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "bool"
        , annotation =
            Just
                (Type.namedWith [ "Protobuf", "Decode" ] "Decoder" [ Type.bool ]
                )
        }


{-| Copy all bytes into a new `Bytes` sequence.

bytes: Protobuf.Decode.Decoder Bytes.Bytes
-}
bytes : Elm.Expression
bytes =
    Elm.value
        { importFrom = [ "Protobuf", "Decode" ]
        , name = "bytes"
        , annotation =
            Just
                (Type.namedWith
                    [ "Protobuf", "Decode" ]
                    "Decoder"
                    [ Type.namedWith [ "Bytes" ] "Bytes" [] ]
                )
        }


{-| Transform the value produced by a decoder.
This is useful when encoding custom types as an enumeration:

    type Fruit
        = Apple
        | Banana
        | Mango
        | Unrecognized Int

    fruitDecoder : Decoder Fruit
    fruitDecoder =
        Decode.int32
            |> Decode.map
                (\value ->
                    case value of
                        0 ->
                            Apple

                        1 ->
                            Banana

                        2 ->
                            Mango

                        v ->
                            Unrecognized v
                )

`Unrecognized Int` is only used for values that are present but not known. For
`proto2` decoding it is left out and unrecognized values are left out.

map: (a -> b) -> Protobuf.Decode.Decoder a -> Protobuf.Decode.Decoder b
-}
map : (Elm.Expression -> Elm.Expression) -> Elm.Expression -> Elm.Expression
map mapArg mapArg0 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "map"
            , annotation =
                Just
                    (Type.function
                        [ Type.function [ Type.var "a" ] (Type.var "b")
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "b" ]
                        )
                    )
            }
        )
        [ Elm.functionReduced "mapUnpack" mapArg, mapArg0 ]


{-| Sometimes you have messages with a recursive structure, like nested
comments. You must use `lazy`to make sure your decoder unrolls lazily.

    type alias Comment =
        { message : String
        , responses : Responses
        }

    type Responses
        = Responses (List Comment)

    commentDecoder : Decoder Comment
    commentDecoder =
        Decode.message (Comment "" (Responses []))
            [ Decode.optional 1 Decode.string setMessage
            , Decode.repeated 2
                (Decode.lazy (\_ -> commentDecoder))
                (unwrapResponses << .responses)
                (setResponses << Responses)
            ]

    -- SETTERS
    setMessage : a -> { b | message : a } -> { b | message : a }
    setMessage value model =
        { model | message = value }

    setResponses : a -> { b | responses : a } -> { b | responses : a }
    setResponses value model =
        { model | responses = value }

    unwrapResponses : Responses -> List Comment
    unwrapResponses (Responses responses) =
        responses

[Here](https://elm-lang.org/0.19.0/bad-recursion) you can read more about
recursive data structures.

lazy: (() -> Protobuf.Decode.Decoder a) -> Protobuf.Decode.Decoder a
-}
lazy : (Elm.Expression -> Elm.Expression) -> Elm.Expression
lazy lazyArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "lazy"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.unit ]
                            (Type.namedWith
                                [ "Protobuf", "Decode" ]
                                "Decoder"
                                [ Type.var "a" ]
                            )
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        )
                    )
            }
        )
        [ Elm.functionReduced "lazyUnpack" lazyArg ]


annotation_ :
    { decoder : Type.Annotation -> Type.Annotation
    , fieldDecoder : Type.Annotation -> Type.Annotation
    }
annotation_ =
    { decoder =
        \decoderArg0 ->
            Type.namedWith [ "Protobuf", "Decode" ] "Decoder" [ decoderArg0 ]
    , fieldDecoder =
        \fieldDecoderArg0 ->
            Type.namedWith
                [ "Protobuf", "Decode" ]
                "FieldDecoder"
                [ fieldDecoderArg0 ]
    }


call_ :
    { decode : Elm.Expression -> Elm.Expression -> Elm.Expression
    , expectBytes : Elm.Expression -> Elm.Expression -> Elm.Expression
    , message : Elm.Expression -> Elm.Expression -> Elm.Expression
    , required :
        Elm.Expression -> Elm.Expression -> Elm.Expression -> Elm.Expression
    , optional :
        Elm.Expression -> Elm.Expression -> Elm.Expression -> Elm.Expression
    , repeated :
        Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
    , mapped :
        Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
        -> Elm.Expression
    , oneOf : Elm.Expression -> Elm.Expression -> Elm.Expression
    , map : Elm.Expression -> Elm.Expression -> Elm.Expression
    , lazy : Elm.Expression -> Elm.Expression
    }
call_ =
    { decode =
        \decodeArg decodeArg0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "decode"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                , Type.namedWith [ "Bytes" ] "Bytes" []
                                ]
                                (Type.maybe (Type.var "a"))
                            )
                    }
                )
                [ decodeArg, decodeArg0 ]
    , expectBytes =
        \expectBytesArg expectBytesArg0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "expectBytes"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function
                                    [ Type.namedWith
                                        [ "Result" ]
                                        "Result"
                                        [ Type.namedWith [ "Http" ] "Error" []
                                        , Type.var "a"
                                        ]
                                    ]
                                    (Type.var "msg")
                                , Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                ]
                                (Type.namedWith
                                    [ "Http" ]
                                    "Expect"
                                    [ Type.var "msg" ]
                                )
                            )
                    }
                )
                [ expectBytesArg, expectBytesArg0 ]
    , message =
        \messageArg messageArg0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "message"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.var "a"
                                , Type.list
                                    (Type.namedWith
                                        [ "Protobuf", "Decode" ]
                                        "FieldDecoder"
                                        [ Type.var "a" ]
                                    )
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                )
                            )
                    }
                )
                [ messageArg, messageArg0 ]
    , required =
        \requiredArg requiredArg0 requiredArg1 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "required"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int
                                , Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                , Type.function
                                    [ Type.var "a", Type.var "b" ]
                                    (Type.var "b")
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "FieldDecoder"
                                    [ Type.var "b" ]
                                )
                            )
                    }
                )
                [ requiredArg, requiredArg0, requiredArg1 ]
    , optional =
        \optionalArg optionalArg0 optionalArg1 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "optional"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int
                                , Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                , Type.function
                                    [ Type.var "a", Type.var "b" ]
                                    (Type.var "b")
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "FieldDecoder"
                                    [ Type.var "b" ]
                                )
                            )
                    }
                )
                [ optionalArg, optionalArg0, optionalArg1 ]
    , repeated =
        \repeatedArg repeatedArg0 repeatedArg1 repeatedArg2 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "repeated"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int
                                , Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                , Type.function
                                    [ Type.var "b" ]
                                    (Type.list (Type.var "a"))
                                , Type.function
                                    [ Type.list (Type.var "a"), Type.var "b" ]
                                    (Type.var "b")
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "FieldDecoder"
                                    [ Type.var "b" ]
                                )
                            )
                    }
                )
                [ repeatedArg, repeatedArg0, repeatedArg1, repeatedArg2 ]
    , mapped =
        \mappedArg mappedArg0 mappedArg1 mappedArg2 mappedArg3 mappedArg4 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "mapped"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int
                                , Type.tuple
                                    (Type.var "comparable")
                                    (Type.var "a")
                                , Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "comparable" ]
                                , Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                , Type.function
                                    [ Type.var "b" ]
                                    (Type.namedWith
                                        [ "Dict" ]
                                        "Dict"
                                        [ Type.var "comparable", Type.var "a" ]
                                    )
                                , Type.function
                                    [ Type.namedWith
                                        [ "Dict" ]
                                        "Dict"
                                        [ Type.var "comparable", Type.var "a" ]
                                    , Type.var "b"
                                    ]
                                    (Type.var "b")
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "FieldDecoder"
                                    [ Type.var "b" ]
                                )
                            )
                    }
                )
                [ mappedArg
                , mappedArg0
                , mappedArg1
                , mappedArg2
                , mappedArg3
                , mappedArg4
                ]
    , oneOf =
        \oneOfArg oneOfArg0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "oneOf"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.list
                                    (Type.tuple
                                        Type.int
                                        (Type.namedWith
                                            [ "Protobuf", "Decode" ]
                                            "Decoder"
                                            [ Type.var "a" ]
                                        )
                                    )
                                , Type.function
                                    [ Type.maybe (Type.var "a"), Type.var "b" ]
                                    (Type.var "b")
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "FieldDecoder"
                                    [ Type.var "b" ]
                                )
                            )
                    }
                )
                [ oneOfArg, oneOfArg0 ]
    , map =
        \mapArg mapArg0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "map"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function [ Type.var "a" ] (Type.var "b")
                                , Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "b" ]
                                )
                            )
                    }
                )
                [ mapArg, mapArg0 ]
    , lazy =
        \lazyArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Decode" ]
                    , name = "lazy"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function
                                    [ Type.unit ]
                                    (Type.namedWith
                                        [ "Protobuf", "Decode" ]
                                        "Decoder"
                                        [ Type.var "a" ]
                                    )
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                )
                            )
                    }
                )
                [ lazyArg ]
    }


values_ :
    { decode : Elm.Expression
    , expectBytes : Elm.Expression
    , message : Elm.Expression
    , required : Elm.Expression
    , optional : Elm.Expression
    , repeated : Elm.Expression
    , mapped : Elm.Expression
    , oneOf : Elm.Expression
    , int32 : Elm.Expression
    , uint32 : Elm.Expression
    , sint32 : Elm.Expression
    , fixed32 : Elm.Expression
    , sfixed32 : Elm.Expression
    , int64 : Elm.Expression
    , uint64 : Elm.Expression
    , sint64 : Elm.Expression
    , fixed64 : Elm.Expression
    , sfixed64 : Elm.Expression
    , double : Elm.Expression
    , float : Elm.Expression
    , string : Elm.Expression
    , bool : Elm.Expression
    , bytes : Elm.Expression
    , map : Elm.Expression
    , lazy : Elm.Expression
    }
values_ =
    { decode =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "decode"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.namedWith [ "Bytes" ] "Bytes" []
                        ]
                        (Type.maybe (Type.var "a"))
                    )
            }
    , expectBytes =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "expectBytes"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.namedWith
                                [ "Result" ]
                                "Result"
                                [ Type.namedWith [ "Http" ] "Error" []
                                , Type.var "a"
                                ]
                            ]
                            (Type.var "msg")
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        ]
                        (Type.namedWith [ "Http" ] "Expect" [ Type.var "msg" ])
                    )
            }
    , message =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "message"
            , annotation =
                Just
                    (Type.function
                        [ Type.var "a"
                        , Type.list
                            (Type.namedWith
                                [ "Protobuf", "Decode" ]
                                "FieldDecoder"
                                [ Type.var "a" ]
                            )
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        )
                    )
            }
    , required =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "required"
            , annotation =
                Just
                    (Type.function
                        [ Type.int
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.function
                            [ Type.var "a", Type.var "b" ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
    , optional =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "optional"
            , annotation =
                Just
                    (Type.function
                        [ Type.int
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.function
                            [ Type.var "a", Type.var "b" ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
    , repeated =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "repeated"
            , annotation =
                Just
                    (Type.function
                        [ Type.int
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.function
                            [ Type.var "b" ]
                            (Type.list (Type.var "a"))
                        , Type.function
                            [ Type.list (Type.var "a"), Type.var "b" ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
    , mapped =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "mapped"
            , annotation =
                Just
                    (Type.function
                        [ Type.int
                        , Type.tuple (Type.var "comparable") (Type.var "a")
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "comparable" ]
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        , Type.function
                            [ Type.var "b" ]
                            (Type.namedWith
                                [ "Dict" ]
                                "Dict"
                                [ Type.var "comparable", Type.var "a" ]
                            )
                        , Type.function
                            [ Type.namedWith
                                [ "Dict" ]
                                "Dict"
                                [ Type.var "comparable", Type.var "a" ]
                            , Type.var "b"
                            ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
    , oneOf =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "oneOf"
            , annotation =
                Just
                    (Type.function
                        [ Type.list
                            (Type.tuple
                                Type.int
                                (Type.namedWith
                                    [ "Protobuf", "Decode" ]
                                    "Decoder"
                                    [ Type.var "a" ]
                                )
                            )
                        , Type.function
                            [ Type.maybe (Type.var "a"), Type.var "b" ]
                            (Type.var "b")
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "FieldDecoder"
                            [ Type.var "b" ]
                        )
                    )
            }
    , int32 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "int32"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.int ]
                    )
            }
    , uint32 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "uint32"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.int ]
                    )
            }
    , sint32 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "sint32"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.int ]
                    )
            }
    , fixed32 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "fixed32"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.int ]
                    )
            }
    , sfixed32 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "sfixed32"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.int ]
                    )
            }
    , int64 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "int64"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                    )
            }
    , uint64 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "uint64"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                    )
            }
    , sint64 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "sint64"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                    )
            }
    , fixed64 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "fixed64"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                    )
            }
    , sfixed64 =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "sfixed64"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                    )
            }
    , double =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "double"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.float ]
                    )
            }
    , float =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "float"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.float ]
                    )
            }
    , string =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "string"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.string ]
                    )
            }
    , bool =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "bool"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.bool ]
                    )
            }
    , bytes =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "bytes"
            , annotation =
                Just
                    (Type.namedWith
                        [ "Protobuf", "Decode" ]
                        "Decoder"
                        [ Type.namedWith [ "Bytes" ] "Bytes" [] ]
                    )
            }
    , map =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "map"
            , annotation =
                Just
                    (Type.function
                        [ Type.function [ Type.var "a" ] (Type.var "b")
                        , Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "b" ]
                        )
                    )
            }
    , lazy =
        Elm.value
            { importFrom = [ "Protobuf", "Decode" ]
            , name = "lazy"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.unit ]
                            (Type.namedWith
                                [ "Protobuf", "Decode" ]
                                "Decoder"
                                [ Type.var "a" ]
                            )
                        ]
                        (Type.namedWith
                            [ "Protobuf", "Decode" ]
                            "Decoder"
                            [ Type.var "a" ]
                        )
                    )
            }
    }