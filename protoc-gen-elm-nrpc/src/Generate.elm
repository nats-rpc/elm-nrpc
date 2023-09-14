module Generate exposing (Error, errToString, generate)

{-| -}

import Proto.Google.Protobuf.Compiler
import Proto.Google.Protobuf.Compiler.CodeGeneratorResponse


type alias Error =
    { title : String
    , description : String
    }


errToString : Error -> String
errToString err =
    err.title ++ ": " ++ err.description


generate :
    Proto.Google.Protobuf.Compiler.CodeGeneratorRequest
    -> Result String (List Proto.Google.Protobuf.Compiler.CodeGeneratorResponse.File)
generate request =
    Err "not (yet) implemented"
