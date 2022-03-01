import FileSelector from "../input/FileSelector";
import { Container } from "react-bootstrap";
import React from "react";

const HeaderLayout = () => {
    return (
        <Container className="mt-3 text-center">Word2PDF converter</Container>
    )
}

const ContentLayout = () => {
    return (
        <Container className="">
            {/* <Form>
                <Container className="form-group">
                    <Container className="alert alert-secondary text-center" role="alert">
                        Įkelkite *.doc ar *docx failą. Ne didesnį kaip 20 MB.
                    </Container>
                    <Form.Control type="file" />
                </Container>
            </Form> */}
            <FileSelector />
        </Container>
    )
}

const FooterLayout = () => {
    return (
        <Container className="text-center">Practice {new Date().getFullYear()}</Container>
    )
}

export { HeaderLayout, ContentLayout, FooterLayout };