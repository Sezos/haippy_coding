import React from "react";

import {
    Button,
    Label,
    FormGroup,
    CustomInput,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
} from "reactstrap";

const Register = () => {
    return (
        <div className="section section-basic">
            <Container>
                <Row>
                    <Col></Col>
                    <Col md="4">
                        <Button
                            size="lg"
                            color="primary"
                            className="btn-round"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            href="/register-page"
                        >
                            Click Here to register
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
