.PHONY: examples


proto:
	go install ./protoc-gen-elm-nrpc
	protoc --elm_out "excludeFile=google/protobuf/descriptor.proto:src/" nrpc/nrpc.proto

examples:
	go install ./protoc-gen-elm-nrpc
	cd examples/alloptions && \
		protoc \
			--proto_path=. \
			--proto_path=../.. \
			--elm_out "excludeFile=google/protobuf/descriptor.proto:src" \
			--elm-nrpc_out "src/" \
			alloptions.proto
