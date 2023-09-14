.PHONY: examples

PLUGIN_PROTO_URL=https://github.com/protocolbuffers/protobuf/raw/main/src/google/protobuf/compiler/plugin.proto


proto:
	cd protoc-gen-elm-nrpc && go install .
	NO_GRPC=true protoc --elm_out "excludeFile=google/protobuf/descriptor.proto:src/" nrpc/nrpc.proto

examples:
	cd examples/alloptions && \
		NO_GRPC=true protoc \
			--proto_path=. \
			--proto_path=../.. \
			--elm_out "excludeFile=google/protobuf/descriptor.proto:src" \
			--elm-nrpc_out "src/" \
			--plugin "protoc-gen-elm-nrpc=../../protoc-gen-elm-nrpc/index.js" \
			alloptions.proto
