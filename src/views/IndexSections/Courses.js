import React from "react";

import { Container, Row, Col } from "reactstrap";

const Courses = () => {
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
                    Courses
                </h1>
                <Col>
                    <Row style={{ marginBottom: "50px" }}>
                        <Col>
                            <img
                                width={"100%"}
                                alt="Sample"
                                src={require("assets/img/basics_image.jpg")}
                            />
                        </Col>
                        <Col>
                            <Row>
                                <h2
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                    }}
                                >
                                    Computer Basics
                                </h2>
                            </Row>
                            <Row>
                                <p
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                    }}
                                >
                                    This course teaches the fundamental
                                    components of a computer system, basic
                                    productivity tools, networking, security,
                                    and troubleshooting. It provides a
                                    foundation for further study or everyday
                                    computer use.
                                </p>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "50px" }}>
                        <Col>
                            <Row>
                                <h2
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                    }}
                                >
                                    Competitive Programming
                                </h2>
                            </Row>
                            <Row>
                                <p
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                    }}
                                >
                                    this course teaches advanced algorithmic
                                    concepts and problem-solving skills through
                                    online coding contests and challenges. It
                                    prepares students for programming
                                    competitions and technical interviews for
                                    software engineering positions.
                                </p>
                            </Row>
                        </Col>
                        <Col>
                            <img
                                width={"100%"}
                                alt="Sample"
                                src={require("assets/img/competitive_image.png")}
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "50px" }}>
                        <Col>
                            <img
                                width={"100%"}
                                alt="Sample"
                                src={require("assets/img/web_image.png")}
                            />
                        </Col>
                        <Col>
                            <Row>
                                <h2
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                    }}
                                >
                                    Web development
                                </h2>
                            </Row>
                            <Row>
                                <p
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                    }}
                                >
                                    A web development course teaches the skills
                                    needed to design, develop, and deploy
                                    websites using Javascript, frameworks, and
                                    tools. Students learn front-end web
                                    development, back-end web development, and
                                    web development best practices, including
                                    responsive design and accessibility.
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    );
};

export default Courses;
