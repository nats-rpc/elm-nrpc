package main

import (
	"github.com/golang/protobuf/proto"
	"github.com/golang/protobuf/protoc-gen-go/descriptor"
	"github.com/nats-rpc/nrpc"
)

// HasStreamedReply returns true if the method has a streamed reply
func HasStreamedReply(md *descriptor.MethodDescriptorProto) bool {
	if opts := md.GetOptions(); opts != nil {
		if e, err := proto.GetExtension(opts, nrpc.E_StreamedReply); err == nil {
			return *(e.(*bool))
		}
	}
	return false
}
