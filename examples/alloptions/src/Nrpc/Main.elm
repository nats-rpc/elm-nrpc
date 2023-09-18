module Nrpc.Main exposing (..)


type alias SubjectParams =
    { instance : String }


subject : SubjectParams -> String
subject params =
    String.join "." [ "root", params.instance ]