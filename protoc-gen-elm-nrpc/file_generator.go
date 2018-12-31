package main

import (
	"fmt"
	"io"
	"path/filepath"
	"strings"

	"github.com/golang/protobuf/protoc-gen-go/descriptor"
)

// FileGenerator help producing a elm module
type FileGenerator struct {
	w io.Writer
	// Used to avoid qualifying names in the same file.
	inFile     *descriptor.FileDescriptorProto
	inFileName string
	indent     uint
}

// NewFileGenerator creates a new FileGenerator
func NewFileGenerator(w io.Writer, inFile *descriptor.FileDescriptorProto) *FileGenerator {
	inFilePath := inFile.GetName()
	_, inFileName := filepath.Split(inFilePath)
	return &FileGenerator{
		w:          w,
		inFile:     inFile,
		inFileName: inFileName,
	}
}

// In starts an indentation block
func (fg *FileGenerator) In() {
	fg.indent++
}

// Out stops an indentation block
func (fg *FileGenerator) Out() {
	fg.indent--
	if fg.indent == 0 {
		fg.Sep()
	}
}

// Sep writes two empty lines
func (fg *FileGenerator) Sep() {
	fg.P("")
	fg.P("")
}

// P writes a line
func (fg *FileGenerator) P(format string, a ...interface{}) error {
	var err error

	// If format is empty, avoid printing just whitespaces.
	if format != "" {
		_, err = fmt.Fprintf(fg.w, strings.Repeat("    ", int(fg.indent)))
		if err != nil {
			return err
		}

		_, err = fmt.Fprintf(fg.w, format, a...)
		if err != nil {
			return err
		}
	}

	_, err = fmt.Fprintf(fg.w, "\n")
	if err != nil {
		return err
	}

	return nil
}
