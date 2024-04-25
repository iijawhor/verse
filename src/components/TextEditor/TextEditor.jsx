import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
function TextEditor({
  value,
  setResponse,
  onChange,
  placeholder,
  className,
  modules,
  formats
}) {
  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ height: "150px", border: "none" }}
      className={className}
    />
  );
}

export default TextEditor;
