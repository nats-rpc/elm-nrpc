module Gen.Protobuf.Encode exposing (annotation_, bool, bytes, call_, dict, double, encode, fixed32, fixed64, float, int32, int64, list, message, moduleName_, none, sfixed32, sfixed64, sint32, sint64, string, uint32, uint64, values_)

{-| 
@docs moduleName_, encode, message, int32, uint32, sint32, fixed32, sfixed32, int64, uint64, sint64, fixed64, sfixed64, double, float, string, bool, bytes, none, list, dict, annotation_, call_, values_
-}


import Elm
import Elm.Annotation as Type


{-| The name of this module. -}
moduleName_ : List String
moduleName_ =
    [ "Protobuf", "Encode" ]


{-| Turn an `Encoder` into `Bytes`.

     encode (int32 127)    -- <7F>
     encode (sint32 127)   -- <FE 01>
     encode (sfixed32 127) -- <7F 00 00 00>

Values are encoded together with a field number and the
[_wire type_](https://developers.google.com/protocol-buffers/docs/encoding#structure)
conform the specification in a `.proto` file. This allows decoders to know what
field it is decoding and to read the right number of `Bytes`.

    import Protobuf.Encode as Encode

    type alias Person =
        { age : Int
        , name : String
        }

    toPersonEncoder : Person -> Encode.Encoder
    toPersonEncoder person =
        Encode.message
            [ ( 1, Encode.uint32 person.age )
            , ( 2, Encode.string person.name )
            ]

    Encode.encode (encodePerson (Person 33 "Tom")) -- <08* 21 12* 03* 54 6F 6D>

You probably want to send these `Bytes` in the body of an HTTP request:

    import Http
    import Protobuf.Encode as Encode

    postPerson : (Result Http.Error () -> msg) -> Person -> Cmd msg
    postPerson toMsg person =
        Http.post
            { url = "https://example.com/person"
            , body =
                Http.bytesBody "application/octet-stream" <|
                    Encode.encode (encodePerson person)
            , expect = Http.expectWhatever
            }

encode: Protobuf.Encode.Encoder -> Bytes.Bytes
-}
encode : Elm.Expression -> Elm.Expression
encode encodeArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "encode"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [] ]
                        (Type.namedWith [ "Bytes" ] "Bytes" [])
                    )
            }
        )
        [ encodeArg ]


{-| Encode a record into a message. For this you need to provide a list of
**unique** field numbers (between `1` and `536870911`) and their corresponding
`Encoder`s.

     type alias Foo =
         { a : Float
         , b : String
         , c : List Int
         }

     foo : Foo
     foo =
        Foo 1.25 "hello" [ 1, 2, 3, 4, 5 ]

     toEncoder : Encoder
     toEncoder =
         message
             [ ( 1, double foo.a )         -- <09* 00 00 00 00 00 00 F4 3F
             , ( 2, string foo.b )         --  12* 05* 68 65 6C 6C 6F
             , ( 3, repeated int32 foo.c ) --  1A* 05* 01 02 03 04 05>
             ]

message: List ( Int, Protobuf.Encode.Encoder ) -> Protobuf.Encode.Encoder
-}
message : List Elm.Expression -> Elm.Expression
message messageArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "message"
            , annotation =
                Just
                    (Type.function
                        [ Type.list
                            (Type.tuple
                                Type.int
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.list messageArg ]


{-| Encode integers from `-2147483648` to `2147483647` into a message. Uses
variable-length encoding. Inefficient for encoding negative numbers – if your
field is likely to have negative values, use [`sint32`](#sint32) instead.

     encode (int32 0)    -- <00>
     encode (int32 100)  -- <64>
     encode (int32 -100) -- <FF FF FF FF FF FF FF 9C>

This function can also be used to encode custom types as enumeration:

    type Fruit
        = Apple
        | Banana
        | Mango
        | Unrecognized Int

    toFruitEncoder : Fruit -> Encoder
    toFruitEncoder value =
        Encode.int32 <|
            case value of
                Apple ->
                    0

                Banana ->
                    1

                Mango ->
                    2

                Unrecognized v ->
                    v

Note that for `proto2` the `Unrecognized Int` field can be left out.

int32: Int -> Protobuf.Encode.Encoder
-}
int32 : Int -> Elm.Expression
int32 int32Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "int32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.int int32Arg ]


{-| Encode integers from `0` to `4294967295` into a message.
Uses variable-length encoding.

     encode (uint32 0)   -- <00>
     encode (uint32 100) -- <64>

uint32: Int -> Protobuf.Encode.Encoder
-}
uint32 : Int -> Elm.Expression
uint32 uint32Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "uint32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.int uint32Arg ]


{-| Encode integers from `-2147483648` to `2147483647` into a message. Uses
variable-length encoding. This encoder encodes negative numbers more
efficiently than [`int32`](#int32).

     encode (sint32 0)    -- <00>
     encode (sint32 100)  -- <C8 01>
     encode (sint32 -100) -- <C7 01>

sint32: Int -> Protobuf.Encode.Encoder
-}
sint32 : Int -> Elm.Expression
sint32 sint32Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "sint32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.int sint32Arg ]


{-| Encode integers from `0` to `4294967295` into a message. Always four bytes.
More efficient than [`uint32`](#uint32) if values are often greater than
`268435456`.

     encode (fixed32 0)   -- <00 00 00 00>
     encode (fixed32 100) -- <64 00 00 00>

fixed32: Int -> Protobuf.Encode.Encoder
-}
fixed32 : Int -> Elm.Expression
fixed32 fixed32Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "fixed32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.int fixed32Arg ]


{-| Encode integers from `-2147483648` to `2147483647` into a message.
Always four bytes.

     encode (sfixed32 0)    -- <00 00 00 00>
     encode (sfixed32 100)  -- <64 00 00 00>
     encode (sfixed32 -100) -- <9C FF FF FF>

sfixed32: Int -> Protobuf.Encode.Encoder
-}
sfixed32 : Int -> Elm.Expression
sfixed32 sfixed32Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "sfixed32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.int sfixed32Arg ]


{-| Encode integers from `-9223372036854775808` to `9223372036854775807` into a message. Uses
variable-length encoding. Inefficient for encoding negative numbers – if your
field is likely to have negative values, use [`sint64`](#sint64) instead.

int64: Protobuf.Types.Int64.Int64 -> Protobuf.Encode.Encoder
-}
int64 : Elm.Expression -> Elm.Expression
int64 int64Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "int64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ int64Arg ]


{-| Encode integers from `0` to `18446744073709551615` into a message.
Uses variable-length encoding.

uint64: Protobuf.Types.Int64.Int64 -> Protobuf.Encode.Encoder
-}
uint64 : Elm.Expression -> Elm.Expression
uint64 uint64Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "uint64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ uint64Arg ]


{-| Encode integers from `-9223372036854775808` to `9223372036854775807` into a message. Uses
variable-length encoding. This encoder encodes negative numbers more
efficiently than [`int64`](#int64).

sint64: Protobuf.Types.Int64.Int64 -> Protobuf.Encode.Encoder
-}
sint64 : Elm.Expression -> Elm.Expression
sint64 sint64Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "sint64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ sint64Arg ]


{-| Encode integers from `0` to `18446744073709551615` into a message.
Always eight bytes.

fixed64: Protobuf.Types.Int64.Int64 -> Protobuf.Encode.Encoder
-}
fixed64 : Elm.Expression -> Elm.Expression
fixed64 fixed64Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "fixed64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ fixed64Arg ]


{-| Encode integers from `-9223372036854775808` to `9223372036854775807` into a message.
Always eight bytes.

sfixed64: Protobuf.Types.Int64.Int64 -> Protobuf.Encode.Encoder
-}
sfixed64 : Elm.Expression -> Elm.Expression
sfixed64 sfixed64Arg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "sfixed64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ sfixed64Arg ]


{-| Encode 64-bit floating point numbers into a message.

     encode (double 0)    -- <00 00 00 00 00 00 00 00>
     encode (double 100)  -- <00 00 00 00 00 00 59 40>
     encode (double -100) -- <00 00 00 00 00 00 59 C0>

double: Float -> Protobuf.Encode.Encoder
-}
double : Float -> Elm.Expression
double doubleArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "double"
            , annotation =
                Just
                    (Type.function
                        [ Type.float ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.float doubleArg ]


{-| Encode 32-bit floating point numbers into a message.
The value may lose some precision by encoding it as a float.

     encode (float 0)    -- <00 00 00 00>
     encode (float 100)  -- <00 00 C8 42>
     encode (float -100) -- <00 00 C8 C2>

float: Float -> Protobuf.Encode.Encoder
-}
float : Float -> Elm.Expression
float floatArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "float"
            , annotation =
                Just
                    (Type.function
                        [ Type.float ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.float floatArg ]


{-| Encode strings into a message.

     encode (string "$20")   -- <24 32 30>
     encode (string "£20")   -- <C2 A3 32 30>
     encode (string "€20")   -- <E2 82 AC 32 30>
     encode (string "bread") -- <62 72 65 61 64>
     encode (string "brød")  -- <62 72 C3 B8 64>

string: String -> Protobuf.Encode.Encoder
-}
string : String -> Elm.Expression
string stringArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "string"
            , annotation =
                Just
                    (Type.function
                        [ Type.string ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.string stringArg ]


{-| Encode booleans into a message.

     encode (bool False) -- <00>
     encode (bool True)  -- <01>

bool: Bool -> Protobuf.Encode.Encoder
-}
bool : Bool -> Elm.Expression
bool boolArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "bool"
            , annotation =
                Just
                    (Type.function
                        [ Type.bool ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.bool boolArg ]


{-| Copy raw `Bytes` into a message.

    -- bs == <0A 0B 0C>
    encode (bytes bs) -- <0A 0B 0C>

bytes: Bytes.Bytes -> Protobuf.Encode.Encoder
-}
bytes : Elm.Expression -> Elm.Expression
bytes bytesArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "bytes"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Bytes" ] "Bytes" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ bytesArg ]


{-| Encode nothing. Note that you can easily combine this encoder with _any_
field number to pass to [`message`](#message) as literally **nothing** will be
encoded.

This can be useful when encoding embedded messages:

    type alias Report =
        { title : String
        , contents : String
        , attachment : Maybe Attachment
        }

    toReportEncoder : Report -> Encoder
    toReportEncoder report =
        message
            [ ( 1, string report.title )
            , ( 2, string report.contents )
            , ( 3, Maybe.withDefault none <| Maybe.map toAttachmentEncoder report.attachment )
            ]

Or when encoding custom types:

    type alias FormValue =
        { key : String
        , value : Maybe Value
        }

    type Value
        = StringValue String
        | IntValue Int

    toKeyValueEncoder : FormValue -> Encoder
    toKeyValueEncoder formValue =
        message
            [ ( 1, string formValue.key )
            , Maybe.withDefault ( 0, none ) <| Maybe.map toValueEncoder formValue.value
            ]

    toValueEncoder : Value -> ( Int, Encoder )
    toValueEncoder model =
        case model of
            StringValue value ->
                ( 2, string value )

            IntValue value ->
                ( 3, int32 value )

none: Protobuf.Encode.Encoder
-}
none : Elm.Expression
none =
    Elm.value
        { importFrom = [ "Protobuf", "Encode" ]
        , name = "none"
        , annotation =
            Just (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
        }


{-| Encode a list of values into a message.
Protobuf support two kind of encodings:

     -- packed encoding
     message
         [ ( 1, list int32 [ 1, 2, 3 ] ) -- <0A* 03* 01 02 03>
         ]

     -- non-packed encoding
     message
         [ ( 1
           , list string
                 [ "one"   -- <0A* 03* 6F 6E 65
                 , "two"   --  0A* 03* 74 77 6F
                 , "three" --  0A* 05* 74 68 72 65 65>
                 ]
           )
         ]

Packed encoding is preferred as it uses less bytes on the wire. `list` will
automatically fall-back to non-packed encoding for non-scalar numeric types.

list: (a -> Protobuf.Encode.Encoder) -> List a -> Protobuf.Encode.Encoder
-}
list :
    (Elm.Expression -> Elm.Expression) -> List Elm.Expression -> Elm.Expression
list listArg listArg0 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "list"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "a" ]
                            (Type.namedWith
                                [ "Protobuf", "Encode" ]
                                "Encoder"
                                []
                            )
                        , Type.list (Type.var "a")
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.functionReduced "listUnpack" listArg, Elm.list listArg0 ]


{-| Encode a dictionary of key-value pairs. This requires providing one encoder
for the keys and one for the values.

    let
        value =
            Dict.fromList
                [ ( 1, "foo" ) -- <0A* 07* 08* 01 12* 03* 66 6F 6F
                , ( 2, "bar" ) --  0A* 07* 08* 02 12* 03* 62 61 72>
                ]
    in
    message [ ( 1, dict int32 string value ) ]

dict: 
    (k -> Protobuf.Encode.Encoder)
    -> (v -> Protobuf.Encode.Encoder)
    -> Dict.Dict k v
    -> Protobuf.Encode.Encoder
-}
dict :
    (Elm.Expression -> Elm.Expression)
    -> (Elm.Expression -> Elm.Expression)
    -> Elm.Expression
    -> Elm.Expression
dict dictArg dictArg0 dictArg1 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "dict"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "k" ]
                            (Type.namedWith
                                [ "Protobuf", "Encode" ]
                                "Encoder"
                                []
                            )
                        , Type.function
                            [ Type.var "v" ]
                            (Type.namedWith
                                [ "Protobuf", "Encode" ]
                                "Encoder"
                                []
                            )
                        , Type.namedWith
                            [ "Dict" ]
                            "Dict"
                            [ Type.var "k", Type.var "v" ]
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
        )
        [ Elm.functionReduced "dictUnpack" dictArg
        , Elm.functionReduced "dictUnpack" dictArg0
        , dictArg1
        ]


annotation_ : { encoder : Type.Annotation }
annotation_ =
    { encoder = Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [] }


call_ :
    { encode : Elm.Expression -> Elm.Expression
    , message : Elm.Expression -> Elm.Expression
    , int32 : Elm.Expression -> Elm.Expression
    , uint32 : Elm.Expression -> Elm.Expression
    , sint32 : Elm.Expression -> Elm.Expression
    , fixed32 : Elm.Expression -> Elm.Expression
    , sfixed32 : Elm.Expression -> Elm.Expression
    , int64 : Elm.Expression -> Elm.Expression
    , uint64 : Elm.Expression -> Elm.Expression
    , sint64 : Elm.Expression -> Elm.Expression
    , fixed64 : Elm.Expression -> Elm.Expression
    , sfixed64 : Elm.Expression -> Elm.Expression
    , double : Elm.Expression -> Elm.Expression
    , float : Elm.Expression -> Elm.Expression
    , string : Elm.Expression -> Elm.Expression
    , bool : Elm.Expression -> Elm.Expression
    , bytes : Elm.Expression -> Elm.Expression
    , list : Elm.Expression -> Elm.Expression -> Elm.Expression
    , dict :
        Elm.Expression -> Elm.Expression -> Elm.Expression -> Elm.Expression
    }
call_ =
    { encode =
        \encodeArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "encode"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                ]
                                (Type.namedWith [ "Bytes" ] "Bytes" [])
                            )
                    }
                )
                [ encodeArg ]
    , message =
        \messageArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "message"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.list
                                    (Type.tuple
                                        Type.int
                                        (Type.namedWith
                                            [ "Protobuf", "Encode" ]
                                            "Encoder"
                                            []
                                        )
                                    )
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ messageArg ]
    , int32 =
        \int32Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "int32"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ int32Arg ]
    , uint32 =
        \uint32Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "uint32"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ uint32Arg ]
    , sint32 =
        \sint32Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "sint32"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ sint32Arg ]
    , fixed32 =
        \fixed32Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "fixed32"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ fixed32Arg ]
    , sfixed32 =
        \sfixed32Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "sfixed32"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ sfixed32Arg ]
    , int64 =
        \int64Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "int64"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Protobuf", "Types", "Int64" ]
                                    "Int64"
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
                [ int64Arg ]
    , uint64 =
        \uint64Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "uint64"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Protobuf", "Types", "Int64" ]
                                    "Int64"
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
                [ uint64Arg ]
    , sint64 =
        \sint64Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "sint64"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Protobuf", "Types", "Int64" ]
                                    "Int64"
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
                [ sint64Arg ]
    , fixed64 =
        \fixed64Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "fixed64"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Protobuf", "Types", "Int64" ]
                                    "Int64"
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
                [ fixed64Arg ]
    , sfixed64 =
        \sfixed64Arg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "sfixed64"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Protobuf", "Types", "Int64" ]
                                    "Int64"
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
                [ sfixed64Arg ]
    , double =
        \doubleArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "double"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.float ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ doubleArg ]
    , float =
        \floatArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "float"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.float ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ floatArg ]
    , string =
        \stringArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "string"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.string ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ stringArg ]
    , bool =
        \boolArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "bool"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.bool ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ boolArg ]
    , bytes =
        \bytesArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "bytes"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith [ "Bytes" ] "Bytes" [] ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ bytesArg ]
    , list =
        \listArg listArg0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "list"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function
                                    [ Type.var "a" ]
                                    (Type.namedWith
                                        [ "Protobuf", "Encode" ]
                                        "Encoder"
                                        []
                                    )
                                , Type.list (Type.var "a")
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ listArg, listArg0 ]
    , dict =
        \dictArg dictArg0 dictArg1 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Encode" ]
                    , name = "dict"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.function
                                    [ Type.var "k" ]
                                    (Type.namedWith
                                        [ "Protobuf", "Encode" ]
                                        "Encoder"
                                        []
                                    )
                                , Type.function
                                    [ Type.var "v" ]
                                    (Type.namedWith
                                        [ "Protobuf", "Encode" ]
                                        "Encoder"
                                        []
                                    )
                                , Type.namedWith
                                    [ "Dict" ]
                                    "Dict"
                                    [ Type.var "k", Type.var "v" ]
                                ]
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                    }
                )
                [ dictArg, dictArg0, dictArg1 ]
    }


values_ :
    { encode : Elm.Expression
    , message : Elm.Expression
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
    , none : Elm.Expression
    , list : Elm.Expression
    , dict : Elm.Expression
    }
values_ =
    { encode =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "encode"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [] ]
                        (Type.namedWith [ "Bytes" ] "Bytes" [])
                    )
            }
    , message =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "message"
            , annotation =
                Just
                    (Type.function
                        [ Type.list
                            (Type.tuple
                                Type.int
                                (Type.namedWith
                                    [ "Protobuf", "Encode" ]
                                    "Encoder"
                                    []
                                )
                            )
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , int32 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "int32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , uint32 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "uint32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , sint32 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "sint32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , fixed32 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "fixed32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , sfixed32 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "sfixed32"
            , annotation =
                Just
                    (Type.function
                        [ Type.int ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , int64 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "int64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , uint64 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "uint64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , sint64 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "sint64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , fixed64 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "fixed64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , sfixed64 =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "sfixed64"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , double =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "double"
            , annotation =
                Just
                    (Type.function
                        [ Type.float ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , float =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "float"
            , annotation =
                Just
                    (Type.function
                        [ Type.float ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , string =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "string"
            , annotation =
                Just
                    (Type.function
                        [ Type.string ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , bool =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "bool"
            , annotation =
                Just
                    (Type.function
                        [ Type.bool ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , bytes =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "bytes"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith [ "Bytes" ] "Bytes" [] ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , none =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "none"
            , annotation =
                Just (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
            }
    , list =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "list"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "a" ]
                            (Type.namedWith
                                [ "Protobuf", "Encode" ]
                                "Encoder"
                                []
                            )
                        , Type.list (Type.var "a")
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    , dict =
        Elm.value
            { importFrom = [ "Protobuf", "Encode" ]
            , name = "dict"
            , annotation =
                Just
                    (Type.function
                        [ Type.function
                            [ Type.var "k" ]
                            (Type.namedWith
                                [ "Protobuf", "Encode" ]
                                "Encoder"
                                []
                            )
                        , Type.function
                            [ Type.var "v" ]
                            (Type.namedWith
                                [ "Protobuf", "Encode" ]
                                "Encoder"
                                []
                            )
                        , Type.namedWith
                            [ "Dict" ]
                            "Dict"
                            [ Type.var "k", Type.var "v" ]
                        ]
                        (Type.namedWith [ "Protobuf", "Encode" ] "Encoder" [])
                    )
            }
    }