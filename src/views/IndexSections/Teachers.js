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

const Teachers = () => {
    return (
        <div className="section section-basic">
            <Container>
                <h1
                    style={{
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "50px",
                    }}
                    className="title"
                >
                    Teacher
                </h1>
                <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <img
                                    alt="Badral"
                                    src={require("assets/img/badral.jpg")}
                                ></img>
                            </Col>
                            <Col>
                                <Row>
                                    <h1
                                        style={{
                                            width: "100%",
                                            textAlign: "center",
                                        }}
                                        className="h1"
                                    >
                                        Badral
                                    </h1>
                                </Row>
                                <Row>
                                    <p
                                        style={{
                                            width: "100%",
                                            textAlign: "center",
                                            fontSize: "20px",
                                        }}
                                        className="p"
                                    >
                                        Hi, I'm Badral, a coding teacher with 6
                                        years of experience. I specialize in
                                        teaching programming languages such as
                                        JavaScript, C++, Python to beginners and
                                        advanced students. I believe in hands-on
                                        learning, and my goal is to help
                                        Mongolian students become proficient in
                                        coding by building practical projects.
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Teachers;
