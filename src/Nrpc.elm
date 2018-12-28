module Nrpc exposing (Error(..))

{-| @docs Error
-}


{-| Nrpc error type
-}
type Error
    = Timeout
    | DecodeError String
    | ClientError String
    | ServerError String
    | EOS
