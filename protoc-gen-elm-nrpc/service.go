package main

import (
	"fmt"
	"strings"

	"github.com/golang/protobuf/protoc-gen-go/descriptor"
)

// GenerateService generates the code of a service
func (fg *FileGenerator) GenerateService(inService *descriptor.ServiceDescriptorProto) {
	fg.P("service%sSubject : String", inService.GetName())
	fg.P("service%sSubject =", inService.GetName())
	fg.In()
	fg.P(`"%s"`, ServiceSubject(fg.inFile, inService))
	fg.Out()
	var svcParamsType = ""
	var fmtSvcSubject = fmt.Sprintf("fmtService%sSubject", inService.GetName())

	if len(ServiceSubjectParams(inService)) != 0 {
		svcParamsType = fmt.Sprintf("Service%sParams", inService.GetName())
		fg.P("type alias %s =", svcParamsType)
		var lead = "{"
		fg.In()
		for _, name := range ServiceSubjectParams(inService) {
			fg.P("%s %s : String", lead, name)
			lead = ","
		}
		fg.P("}")
		fg.Out()

		fg.P("%s : %s -> String", fmtSvcSubject, svcParamsType)
		fg.P("%s { %s } =",
			fmtSvcSubject,
			strings.Join(ServiceSubjectParams(inService), ", "))
		fg.In()
		fg.P(`pkgSubject ++ "." ++ service%sSubject ++ "." ++ %s`,
			inService.GetName(),
			strings.Join(ServiceSubjectParams(inService), " ++ "),
		)
		fg.Out()
	} else {
		fg.P("%s : String", fmtSvcSubject)
		fg.P("%s =", fmtSvcSubject)
		fg.In()
		fg.P(`pkgSubject ++ "." ++ service%sSubject`, inService.GetName())
		fg.Out()
	}
	for _, inMethod := range inService.GetMethod() {
		name := inService.GetName()
		prefix := strings.ToLower(name[0:1]) + name[1:]
		fg.GenerateMethod(prefix, fmtSvcSubject, svcParamsType, inMethod)
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
func (fg *FileGenerator) GenerateMethod(
	prefix string, fmtSvcSubject string, svcParamsType string,
	inMethod *descriptor.MethodDescriptorProto,
) {
	methodName := prefix + inMethod.GetName()
	inputType := fg.lookupElmType(inMethod.GetInputType())
	outputType := fg.lookupElmType(inMethod.GetOutputType())
	noRequestMethod := inMethod.GetInputType() == ".nrpc.NoRequest"
	hasInput := !noRequestMethod && inMethod.GetInputType() != ".nrpc.Void"
	hasOutput := inMethod.GetOutputType() != ".nrpc.Void"
	streamedReply := HasStreamedReply(inMethod)

	subjectParams := MethodSubjectParams(inMethod)
	hasSubjectParams := len(subjectParams) != 0
	paramsType := firstUpper(methodName) + "Params"

	fg.P("%sSubject : String", methodName)
	fg.P("%sSubject =", methodName)
	fg.In()
	fg.P(`"%s"`, MethodSubject(fg.inFile, inMethod))
	fg.Out()

	if hasSubjectParams {
		fg.P("type alias %s =", paramsType)
		fg.In()
		var lead = "{"
		for _, name := range subjectParams {
			fg.P("%s %s : String", lead, name)
			lead = ","
		}
		fg.P("}")
		fg.Out()
	}

	fmtSubjectSig := fmt.Sprintf("String")
	var fmtSubjectArgs []string
	if hasSubjectParams {
		fmtSubjectSig = paramsType + " -> " + fmtSubjectSig
		fmtSubjectArgs = append(fmtSubjectArgs,
			fmt.Sprintf("{ %s }", strings.Join(subjectParams, ", ")),
		)
	}
	if svcParamsType != "" {
		fmtSubjectSig = svcParamsType + " -> " + fmtSubjectSig
		fmtSubjectArgs = append([]string{"svcParams"}, fmtSubjectArgs...)
	}

	fg.P("fmt%sSubject : %s", firstUpper(methodName), fmtSubjectSig)
	fg.P("fmt%sSubject %s =", firstUpper(methodName), strings.Join(fmtSubjectArgs, " "))
	fg.In()
	fg.P(fmtSvcSubject)
	fg.In()
	if svcParamsType != "" {
		fg.P("svcParams")
	}
	fg.P("++ \".\"")
	fg.P("++ %sSubject", methodName)
	if hasSubjectParams {
		for _, name := range subjectParams {
			fg.P("++ \".\"")
			fg.P("++ %s", name)
		}
	}
	fg.P("++ \".json\"")
	fg.Out()
	fg.Out()

	sig := fmt.Sprintf("(Result Nrpc.Error %s -> msg)", outputType)
	argsline := "tagger"
	if hasInput && !noRequestMethod {
		sig = fmt.Sprintf("%s -> %s", inputType, sig)
		argsline = "input " + argsline
	}
	if hasSubjectParams {
		sig = fmt.Sprintf("%s -> %s", paramsType, sig)
		argsline = fmt.Sprintf("params %s", argsline)
	}
	if svcParamsType != "" {
		sig = fmt.Sprintf("%s -> %s", svcParamsType, sig)
		argsline = "svcParams " + argsline
	}
	if streamedReply || noRequestMethod {
		sig += " -> Nats.Sub.Sub msg"
	} else {
		sig += " -> Nats.Cmd.Cmd msg"
	}
	fg.P("%s : %s", methodName, sig)
	fg.P("%s %s =", methodName, argsline)

	fg.In()
	if noRequestMethod {
		fg.P("Nrpc.subscribeToNoRequestMethod")
	} else {
		var suffix = ""
		if streamedReply {
			suffix += "Subscribe"
		}
		if !hasOutput {
			suffix += "VoidReply"
		}
		fg.P("Nrpc.request%s", suffix)
	}
	fg.In()
	subject := fmt.Sprintf("fmt%sSubject", firstUpper(methodName))
	if svcParamsType != "" {
		subject += " svcParams"
	}
	if hasSubjectParams {
		subject += " params"
	}
	fg.P("(%s)", subject)
	if !noRequestMethod {
		if hasInput {
			fg.P("(Just (%s input))", encoderName(inputType))
		} else {
			fg.P("Nothing")
		}
	}
	if hasOutput {
		fg.P("%s", decoderName(outputType))
	}
	fg.P("tagger")
	fg.Out()
	fg.Out()
}
