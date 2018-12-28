package main

import (
	"fmt"
	"strings"

	"github.com/golang/protobuf/protoc-gen-go/descriptor"
)

// GenerateService generates the code of a service
func (fg *FileGenerator) GenerateService(inService *descriptor.ServiceDescriptorProto) {
	for _, inMethod := range inService.GetMethod() {
		name := inService.GetName()
		prefix := strings.ToLower(name[0:1]) + name[1:] + "_"
		fg.GenerateMethod(prefix, inMethod)
	}
}

func (fg *FileGenerator) lookupElmType(in string) string {
	switch in {
	case ".nrpc.Void":
		return "()"
	default:
		sp := strings.Split(in, ".")
		return elmTypeName(sp[len(sp)-1])
	}
}

// GenerateMethod generates the code of a method
func (fg *FileGenerator) GenerateMethod(prefix string, inMethod *descriptor.MethodDescriptorProto) {
	methodName := prefix + inMethod.GetName()
	inputType := fg.lookupElmType(inMethod.GetInputType())
	outputType := fg.lookupElmType(inMethod.GetOutputType())
	hasInput := inMethod.GetInputType() != ".nrpc.Void"
	streamedReply := HasStreamedReply(inMethod)
	fg.P("")
	fg.P("")
	sig := fmt.Sprintf("(Result Nrpc.Error %s -> msg)", outputType)
	if hasInput {
		sig = fmt.Sprintf("%s -> %s", inputType, sig)
	}
	if streamedReply {
		sig += " -> Nats.Sub.Sub msg"
	} else {
		sig += " -> Nats.Cmd.Cmd msg"
	}
	fg.P("%s: %s", methodName, sig)
	if hasInput {
		fg.P("%s input tagger = ", methodName)
	} else {
		fg.P("%s tagger = ", methodName)
	}
	fg.In()
	if streamedReply {
		fg.P("Nrpc.requestSubscribe \"%s\"", "the_subject")
	} else {
		fg.P("Nrpc.request \"%s\"", "the_subject")
	}
	fg.In()
	if hasInput {
		fg.P("Just (%s input)", encoderName(inputType))
	} else {
		fg.P("Nothing")
	}
	fg.P("%s", decoderName(outputType))
	fg.P("tagger")
	fg.Out()
	fg.Out()
}
