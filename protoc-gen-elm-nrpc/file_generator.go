package main

import (
	"fmt"
	"io"
	"strings"
)

// FileGenerator help producing a elm module
type FileGenerator struct {
	w io.Writer
	// Used to avoid qualifying names in the same file.
	inFileName string
	indent     uint
}

// NewFileGenerator creates a new FileGenerator
func NewFileGenerator(w io.Writer, inFileName string) *FileGenerator {
	return &FileGenerator{
		w:          w,
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
