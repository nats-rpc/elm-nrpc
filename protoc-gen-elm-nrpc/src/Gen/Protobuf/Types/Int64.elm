module Gen.Protobuf.Types.Int64 exposing (annotation_, call_, fromInts, moduleName_, toInts, values_)

{-| 
@docs moduleName_, fromInts, toInts, annotation_, call_, values_
-}


import Elm
import Elm.Annotation as Type


{-| The name of this module. -}
moduleName_ : List String
moduleName_ =
    [ "Protobuf", "Types", "Int64" ]


{-| Build an `Int64` from two `Int` values.

fromInts: Int -> Int -> Protobuf.Types.Int64.Int64
-}
fromInts : Int -> Int -> Elm.Expression
fromInts fromIntsArg fromIntsArg0 =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Types", "Int64" ]
            , name = "fromInts"
            , annotation =
                Just
                    (Type.function
                        [ Type.int, Type.int ]
                        (Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        )
                    )
            }
        )
        [ Elm.int fromIntsArg, Elm.int fromIntsArg0 ]


{-| Get the two `Int` values for higher and lower bits from an `Int64`.

toInts: Protobuf.Types.Int64.Int64 -> ( Int, Int )
-}
toInts : Elm.Expression -> Elm.Expression
toInts toIntsArg =
    Elm.apply
        (Elm.value
            { importFrom = [ "Protobuf", "Types", "Int64" ]
            , name = "toInts"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.tuple Type.int Type.int)
                    )
            }
        )
        [ toIntsArg ]


annotation_ : { int64 : Type.Annotation }
annotation_ =
    { int64 =
        Type.alias
            moduleName_
            "Int64"
            []
            (Type.namedWith [ "Internal", "Int64" ] "Int64" [])
    }


call_ :
    { fromInts : Elm.Expression -> Elm.Expression -> Elm.Expression
    , toInts : Elm.Expression -> Elm.Expression
    }
call_ =
    { fromInts =
        \fromIntsArg fromIntsArg0 ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Types", "Int64" ]
                    , name = "fromInts"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.int, Type.int ]
                                (Type.namedWith
                                    [ "Protobuf", "Types", "Int64" ]
                                    "Int64"
                                    []
                                )
                            )
                    }
                )
                [ fromIntsArg, fromIntsArg0 ]
    , toInts =
        \toIntsArg ->
            Elm.apply
                (Elm.value
                    { importFrom = [ "Protobuf", "Types", "Int64" ]
                    , name = "toInts"
                    , annotation =
                        Just
                            (Type.function
                                [ Type.namedWith
                                    [ "Protobuf", "Types", "Int64" ]
                                    "Int64"
                                    []
                                ]
                                (Type.tuple Type.int Type.int)
                            )
                    }
                )
                [ toIntsArg ]
    }


values_ : { fromInts : Elm.Expression, toInts : Elm.Expression }
values_ =
    { fromInts =
        Elm.value
            { importFrom = [ "Protobuf", "Types", "Int64" ]
            , name = "fromInts"
            , annotation =
                Just
                    (Type.function
                        [ Type.int, Type.int ]
                        (Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        )
                    )
            }
    , toInts =
        Elm.value
            { importFrom = [ "Protobuf", "Types", "Int64" ]
            , name = "toInts"
            , annotation =
                Just
                    (Type.function
                        [ Type.namedWith
                            [ "Protobuf", "Types", "Int64" ]
                            "Int64"
                            []
                        ]
                        (Type.tuple Type.int Type.int)
                    )
            }
    }