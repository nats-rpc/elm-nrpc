Elm NRPC
========

Elm NRPC is a NRPC client for the elm language.

It provides a Elm library that implements the
[NRPC calling patterns](https://github.com/nats-rpc/nrpc/wiki/Specifications),
and a protoc plugin for generating Elm source code from a .proto file.

It relies on [elm-nats](https://package.elm-lang.org/packages/orus-io/elm-nats/latest/)
for handling the NATS protocol, 
[eriktim/elm-protocol-buffers](https://package.elm-lang.org/packages/eriktim/elm-protocol-buffers/latest/)
and the [protoc-gen-elm](https://www.npmjs.com/package/protoc-gen-elm) generated
files for handling the protobuf encoding/decoding.

The 'examples/alloptions' application demonstrate all the features, it is
probably a good idea to have look.

Install protoc-gen-elm-nrpc
---------------------------

```
npm install -g protoc-gen-elm-nrpc
```

Compile the .proto files
------------------------

```bash
NO_GRPC=true protoc \
    -I <include-path> \
    --elm_out "excludeFile=google/protobuf/descriptor.proto:src/" \
    --elm-nrpc_out "src/" \
    --plugin "protoc-gen-elm-nrpc=elm-nrpc/protoc-gen-elm-nrpc/index.js" \
	file.proto
```


