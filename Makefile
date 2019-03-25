proto:
	go install ./protoc-gen-elm-nrpc
	protoc --elm_out "excludeFile=google/protobuf/descriptor.proto:src/" nrpc/nrpc.proto
