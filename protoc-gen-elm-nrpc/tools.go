package main

import (
	"strings"

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

// PkgSubject returns the package subject for a given file
func PkgSubject(fd *descriptor.FileDescriptorProto) string {
	if options := fd.GetOptions(); options != nil {
		e, err := proto.GetExtension(options, nrpc.E_PackageSubject)
		if err == nil {
			value := e.(*string)
			return *value
		}
	}
	return fd.GetPackage()
}

// PkgSubjectParams returns a package subject parameter names
func PkgSubjectParams(fd *descriptor.FileDescriptorProto) []string {
	if opts := fd.GetOptions(); opts != nil {
		e, err := proto.GetExtension(opts, nrpc.E_PackageSubjectParams)
		if err == nil {
			value := e.([]string)
			return value
		}
	}
	return nil
}

// PkgSubjectPrefix returns the package subject prefix if applicable, else
// and empty string
func PkgSubjectPrefix(fd *descriptor.FileDescriptorProto) string {
	if s := PkgSubject(fd); s != "" {
		return s + "."
	}
	return ""
}

// ServiceSubject returns a service subject
func ServiceSubject(fd *descriptor.FileDescriptorProto, sd *descriptor.ServiceDescriptorProto) string {
	if opts := sd.GetOptions(); opts != nil {
		s, err := proto.GetExtension(opts, nrpc.E_ServiceSubject)
		if err == nil {
			value := s.(*string)
			return *value
		}
	}
	if opts := fd.GetOptions(); opts != nil {
		s, err := proto.GetExtension(opts, nrpc.E_ServiceSubjectRule)
		if err == nil {
			switch *(s.(*nrpc.SubjectRule)) {
			case nrpc.SubjectRule_COPY:
				return sd.GetName()
			case nrpc.SubjectRule_TOLOWER:
				return strings.ToLower(sd.GetName())
			}
		}
	}
	return sd.GetName()
}

// ServiceSubjectParams returns a service subject params
func ServiceSubjectParams(sd *descriptor.ServiceDescriptorProto) []string {
	if opts := sd.GetOptions(); opts != nil {
		if e, err := proto.GetExtension(opts, nrpc.E_ServiceSubjectParams); err == nil {
			return e.([]string)
		}
	}
	return []string{}
}

// MethodSubject return the method part of a subject
func MethodSubject(
	fd *descriptor.FileDescriptorProto,
	md *descriptor.MethodDescriptorProto) string {
	if opts := md.GetOptions(); opts != nil {
		s, err := proto.GetExtension(opts, nrpc.E_MethodSubject)
		if err == nil {
			value := s.(*string)
			return *value
		}
	}
	if opts := fd.GetOptions(); opts != nil {
		s, err := proto.GetExtension(opts, nrpc.E_MethodSubjectRule)
		if err == nil {
			switch *(s.(*nrpc.SubjectRule)) {
			case nrpc.SubjectRule_COPY:
				return md.GetName()
			case nrpc.SubjectRule_TOLOWER:
				return strings.ToLower(md.GetName())
			}
		}
	}
	return md.GetName()
}

// MethodSubjectParams returns the method subject params
func MethodSubjectParams(md *descriptor.MethodDescriptorProto) []string {
	if opts := md.GetOptions(); opts != nil {
		if e, err := proto.GetExtension(opts, nrpc.E_MethodSubjectParams); err == nil {
			return e.([]string)
		}
	}
	return []string{}
}
