.PHONY: examples


proto:
	cd protoc-gen-elm-nrpc && go install .
	NO_GRPC=true protoc --elm_out "excludeFile=google/protobuf/descriptor.proto:src/" nrpc/nrpc.proto

examples:
	cd protoc-gen-elm-nrpc && go install .
	cd examples/alloptions && \
		NO_GRPC=true protoc \
			--proto_path=. \
			--proto_path=../.. \
			--elm_out "excludeFile=google/protobuf/descriptor.proto:src" \
			--elm-nrpc_out "src/" \
			alloptions.proto
