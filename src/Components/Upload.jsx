import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Upload.css";

function Upload() {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="upload-container">
      <div className="drop">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop your files here</p>
          <button type="button" onClick={open} className="submit">
            Select file
          </button>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </div>
    </div>
  );
}

export default Upload;
