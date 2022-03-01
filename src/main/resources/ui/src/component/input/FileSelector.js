import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const FileSelector = () => {
  const fileSelector = document.createElement("input");
  fileSelector.setAttribute("type", "file");
  fileSelector.setAttribute("id", "file-input");

  //var file = document.forms['files']['file-input'].files[0];

  const selectFile = () => {
    // alert('open file dialog');
    fileSelector.click();
    return false;
  };

  return (
    <Form id="files">
      <Container id="files">
        <Container className="alert alert-secondary text-center" role="alert">
          Įkelkite *.doc ar *docx failą. Ne didesnį kaip 20 MB.
        </Container>
        <Button id="fileSelectorBtn" onClick={selectFile}>
          Įkelkite failą
        </Button>
        <Container>{"filename: "}</Container>
      </Container>
    </Form>
  );
};

export default FileSelector;
