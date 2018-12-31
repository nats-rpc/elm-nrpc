package main

import (
	"bytes"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"strings"
	"unicode"
	"unicode/utf8"

	"github.com/golang/protobuf/proto"
	"github.com/golang/protobuf/protoc-gen-go/descriptor"
	"github.com/golang/protobuf/protoc-gen-go/generator"
	plugin "github.com/golang/protobuf/protoc-gen-go/plugin"
)

var (
	// Maps each type to the file in which it was defined.
	typeToFile = map[string]string{}

	// Well Known Types.
	excludedFiles = map[string]bool{
		"google/protobuf/timestamp.proto":  true,
		"google/protobuf/wrappers.proto":   true,
		"google/protobuf/descriptor.proto": true,
	}

	// Avoid collisions with reserved keywords by appending a single underscore after the name.
	// This does not guarantee that collisions are avoided, but makes them less likely to
	// happen.
	reservedKeywords = map[string]bool{
		"module":   true,
		"exposing": true,
		"import":   true,
		"type":     true,
		"let":      true,
		"in":       true,
		"if":       true,
		"then":     true,
		"else":     true,
		"where":    true,
		"case":     true,
		"of":       true,
		"port":     true,
		"as":       true,
	}
)

func main() {
	data, err := ioutil.ReadAll(os.Stdin)
	if err != nil {
		log.Fatalf("Could not read request from STDIN: %v", err)
	}

	req := &plugin.CodeGeneratorRequest{}

	err = proto.Unmarshal(data, req)
	if err != nil {
		log.Fatalf("Could not unmarshal request: %v", err)
	}

	// Remove useless source code data.
	for _, inFile := range req.GetProtoFile() {
		inFile.SourceCodeInfo = nil
	}

	resp := &plugin.CodeGeneratorResponse{}

	for _, inFile := range req.GetProtoFile() {
		log.Printf("Processing file %s", inFile.GetName())
		// Well Known Types.
		if excludedFiles[inFile.GetName()] {
			log.Printf("Skipping well known type")
			continue
		}
		outFile, err := processFile(inFile)
		if err != nil {
			log.Fatalf("Could not process file: %v", err)
		}
		if outFile != nil {
			resp.File = append(resp.File, outFile)
		}
	}

	data, err = proto.Marshal(resp)
	if err != nil {
		log.Fatalf("Could not marshal response: %v [%v]", err, resp)
	}

	_, err = os.Stdout.Write(data)
	if err != nil {
		log.Fatalf("Could not write response to STDOUT: %v", err)
	}
}

func processFile(inFile *descriptor.FileDescriptorProto) (*plugin.CodeGeneratorResponse_File, error) {
	if inFile.GetSyntax() != "proto3" {
		return nil, nil
	}

	outFile := &plugin.CodeGeneratorResponse_File{}

	inFilePath := inFile.GetName()
	inFileDir, inFileName := filepath.Split(inFilePath)

	shortModuleName := firstUpper(strings.TrimSuffix(inFileName, ".proto")) + "Rpc"

	fullModuleName := ""
	outFileName := ""
	for _, segment := range strings.Split(inFileDir, "/") {
		if segment == "" {
			continue
		}
		fullModuleName += firstUpper(segment) + "."
		outFileName += firstUpper(segment) + "/"
	}
	fullModuleName += shortModuleName
	outFileName += shortModuleName + ".elm"

	outFile.Name = proto.String(outFileName)

	b := &bytes.Buffer{}
	fg := NewFileGenerator(b, inFile)

	fg.GenerateModule(fullModuleName)
	fg.GenerateComments(inFile)
	fg.GenerateImports()

	// Import the corresponding data module
	fg.P("import %s exposing (..)", fullModuleName[:len(fullModuleName)-3])

	// Generate additional imports.
	for _, d := range inFile.GetDependency() {
		// Well Known Types.
		if excludedFiles[d] {
			continue
		}
		fullModuleName := ""
		for _, segment := range strings.Split(strings.TrimSuffix(d, ".proto"), "/") {
			if segment == "" {
				continue
			}
			fullModuleName += firstUpper(segment) + "."
		}
		fullModuleName = strings.TrimSuffix(fullModuleName, ".")
		// TODO: Do not expose everything.
		fg.P("import %s exposing (..)", fullModuleName)
	}

	fg.P("")
	fg.P("")
	fg.P("pkgSubject : String")
	fg.P("pkgSubject =")
	fg.In()
	fg.P("\"%s\"", PkgSubject(inFile))
	fg.Out()

	if len(PkgSubjectParams(inFile)) != 0 {
		fg.P("type alias PkgParams =")
		var lead = "{"
		fg.In()
		for _, name := range PkgSubjectParams(inFile) {
			fg.P("%s %s: string", lead, name)
			lead = ","
		}
		fg.Out()
	}

	for _, inService := range inFile.GetService() {
		fg.GenerateService(inService)
	}

	outFile.Content = proto.String(b.String())

	return outFile, nil
}

// GenerateModule writes the module header
func (fg *FileGenerator) GenerateModule(moduleName string) {
	fg.P("module %s exposing (..)", moduleName)
}

// GenerateComments writes the header comment
func (fg *FileGenerator) GenerateComments(inFile *descriptor.FileDescriptorProto) {
	fg.P("")
	fg.P("-- DO NOT EDIT")
	fg.P("-- AUTOGENERATED BY THE ELM NATS COMPILER")
	fg.P("-- https://github.com/nats-rpc/elm-nrpc")
	fg.P("-- source file: %s", inFile.GetName())
}

// GenerateImports write the module imports
func (fg *FileGenerator) GenerateImports() {
	fg.P("")
	fg.P("import Nats.Cmd")
	fg.P("import Nats.Sub")
	fg.P("import Nrpc")
	fg.P("")
}

func elmTypeName(in string) string {
	n := camelCase(in)
	if reservedKeywords[n] {
		n += "_"
	}
	return n
}

func elmFieldName(in string) string {
	n := firstLower(camelCase(in))
	if reservedKeywords[n] {
		n += "_"
	}
	return n
}

func elmEnumValueName(in string) string {
	return camelCase(strings.ToLower(in))
}

func defaultEnumValue(typeName string) string {
	return firstLower(typeName) + "Default"
}

func encoderName(typeName string) string {
	return firstLower(typeName) + "Encoder"
}

func decoderName(typeName string) string {
	return firstLower(typeName) + "Decoder"
}

func elmFieldType(field *descriptor.FieldDescriptorProto) string {
	inFieldName := field.GetTypeName()
	packageName, messageName := convert(inFieldName)

	// Since we are exposing everything from imported modules, we do not use the package name at
	// all here.
	// TODO: Change this.
	packageName = ""

	if packageName == "" {
		return messageName
	}
	return packageName + "." + messageName
}

// Returns package name and message name.
func convert(inType string) (string, string) {
	segments := strings.Split(inType, ".")
	outPackageSegments := []string{}
	outMessageSegments := []string{}
	for _, s := range segments {
		if s == "" {
			continue
		}
		r, _ := utf8.DecodeRuneInString(s)
		if unicode.IsLower(r) {
			// Package name.
			outPackageSegments = append(outPackageSegments, firstUpper(s))
		} else {
			// Message name.
			outMessageSegments = append(outMessageSegments, firstUpper(s))
		}
	}
	return strings.Join(outPackageSegments, "."), strings.Join(outMessageSegments, "_")
}

func jsonFieldName(field *descriptor.FieldDescriptorProto) string {
	return field.GetJsonName()
}

func firstLower(in string) string {
	if in == "" {
		return ""
	}
	if len(in) == 1 {
		return strings.ToLower(in)
	}
	return strings.ToLower(string(in[0])) + string(in[1:])
}

func firstUpper(in string) string {
	if in == "" {
		return ""
	}
	if len(in) == 1 {
		return strings.ToUpper(in)
	}
	return strings.ToUpper(string(in[0])) + string(in[1:])
}

func camelCase(in string) string {
	// Remove any additional underscores, e.g. convert `foo_1` into `foo1`.
	return strings.Replace(generator.CamelCase(in), "_", "", -1)
}