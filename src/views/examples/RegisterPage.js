/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Table,
    Popover,
    PopoverHeader,
    PopoverBody,
} from "reactstrap";

import { firestore } from "./../../Firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
    const [squares1to6, setSquares1to6] = React.useState("");
    const [squares7and8, setSquares7and8] = React.useState("");
    const [isPopOpen, setIsPopOpen] = React.useState(false);
    const [focuses, setFocuses] = React.useState({});
    const [data, setData] = React.useState({});
    const [slide, setSlide] = React.useState(0);
    const [firstSelection, setFirstSelection] = React.useState(null);
    const [secondSelection, setSecondSelection] = React.useState(null);
    const [extraSelection, setExtraSelection] = React.useState(null);
    const [Times, setTimes] = React.useState([[]]);

    React.useEffect(() => {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", followCursor);
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("register-page");
            document.documentElement.removeEventListener(
                "mousemove",
                followCursor
            );
        };
    }, []);

    const CourseCollection = collection(firestore, "Courses");
    React.useEffect(() => {
        let times = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];
        for (let i = 10; i <= 20; i++) {
            times[i - 10][0] = i + ":00";
        }
        async function start() {
            const querySnapshot = await getDocs(CourseCollection);
            const docs1 = [];
            console.log("Getting Courses!!!");
            querySnapshot.forEach((doc) => {
                const datas = doc.data();
                docs1.push({ id: doc.id, ...doc.data() });
                console.log(datas.day, datas.Time);
                times[+datas.Time - 10][+datas.day] = doc.data();
            });
            console.log(times);
            setTimes(times);
        }
        start();
    }, []);

    const followCursor = (event) => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        setSquares1to6(
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)"
        );
        setSquares7and8(
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)"
        );
    };

    function styleForCourseButton(selectedCourse) {
        if (
            selectedCourse === firstSelection ||
            selectedCourse === secondSelection
        ) {
            return {
                background: "#26b54c",
            };
        }
        if (selectedCourse === extraSelection) {
            return {
                background: "#297ee6",
            };
        }
    }
    function onRegister() {
        
    }
    return (
        <>
            <ExamplesNavbar />
            <div style={{ marginBottom: "100px" }}>
                <div className="page-header">
                    <div className="page-header-image" />
                    <div style={{ marginTop: "10%" }}>
                        <Container>
                            <Row className={slide === 0 ? "" : "d-none"}>
                                <Col
                                    className="offset-lg-3 offset-md-3"
                                    lg="6"
                                    md="6"
                                >
                                    <div
                                        className="square square-7"
                                        id="square7"
                                        style={{ transform: squares7and8 }}
                                    />
                                    <div
                                        className="square square-8"
                                        id="square8"
                                        style={{ transform: squares7and8 }}
                                    />
                                    <Card className="card-register">
                                        <CardHeader>
                                            <CardImg
                                                alt="..."
                                                src={require("assets/img/square-purple-1.png")}
                                            />
                                            <CardTitle
                                                tag="h4"
                                                style={{ marginLeft: "5px" }}
                                            >
                                                Register
                                            </CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <Form className="form">
                                                <InputGroup
                                                    className={classnames({
                                                        "input-group-focus":
                                                            focuses.name,
                                                    })}
                                                >
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="tim-icons icon-single-02" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Full Name"
                                                        type="text"
                                                        onFocus={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                name: true,
                                                            })
                                                        }
                                                        onBlur={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                name: false,
                                                            })
                                                        }
                                                        onChange={(e) => {
                                                            setData({
                                                                ...data,
                                                                name: e.target
                                                                    .value,
                                                            });
                                                        }}
                                                    />
                                                </InputGroup>
                                                <InputGroup
                                                    className={classnames({
                                                        "input-group-focus":
                                                            focuses.email,
                                                    })}
                                                >
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="tim-icons icon-email-85" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email"
                                                        type="text"
                                                        onFocus={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                email: true,
                                                            })
                                                        }
                                                        onBlur={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                email: false,
                                                            })
                                                        }
                                                        onChange={(e) => {
                                                            setData({
                                                                ...data,
                                                                email: e.target
                                                                    .value,
                                                            });
                                                        }}
                                                    />
                                                </InputGroup>
                                                <InputGroup
                                                    className={classnames({
                                                        "input-group-focus":
                                                            focuses.phone,
                                                    })}
                                                >
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="tim-icons icon-mobile" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Phone"
                                                        type="number"
                                                        onFocus={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                phone: true,
                                                            })
                                                        }
                                                        onBlur={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                phone: false,
                                                            })
                                                        }
                                                        onChange={(e) => {
                                                            setData({
                                                                ...data,
                                                                phone: e.target
                                                                    .value,
                                                            });
                                                        }}
                                                    />
                                                </InputGroup>

                                                {/* <div className="slider" ref="slider1" /> */}

                                                <FormGroup>
                                                    <br />
                                                    <p className="h4">
                                                        Date of birth
                                                    </p>
                                                </FormGroup>
                                                <InputGroup
                                                    className={classnames({
                                                        "input-group-focus":
                                                            focuses.dob,
                                                    })}
                                                >
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText></InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Age"
                                                        type="date"
                                                        onFocus={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                dob: true,
                                                            })
                                                        }
                                                        onBlur={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                dob: false,
                                                            })
                                                        }
                                                        onChange={(e) => {
                                                            setData({
                                                                ...data,
                                                                dob: e.target
                                                                    .value,
                                                            });
                                                        }}
                                                    />
                                                </InputGroup>

                                                <FormGroup>
                                                    <br />
                                                    <p className="h4">Gender</p>
                                                </FormGroup>
                                                <InputGroup
                                                    className={classnames({
                                                        "input-group-focus":
                                                            focuses.gender,
                                                    })}
                                                >
                                                    <Input
                                                        placeholder="Gender"
                                                        type="select"
                                                        onFocus={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                gender: true,
                                                            })
                                                        }
                                                        onBlur={(e) =>
                                                            setFocuses({
                                                                ...focuses,
                                                                gender: false,
                                                            })
                                                        }
                                                        onChange={(e) => {
                                                            setData({
                                                                ...data,
                                                                gender: e.target
                                                                    .value,
                                                            });
                                                        }}
                                                    >
                                                        <option id="0">
                                                            Other
                                                        </option>
                                                        <option id="1">
                                                            Male
                                                        </option>
                                                        <option id="2">
                                                            Female
                                                        </option>
                                                    </Input>
                                                </InputGroup>
                                            </Form>
                                        </CardBody>
                                        <CardFooter>
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                                size="lg"
                                                onClick={() => {
                                                    setSlide(1);
                                                }}
                                            >
                                                Next
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className={slide === 1 ? "" : "d-none"}>
                                <Col
                                    className="offset-lg-1 offset-md-1"
                                    lg="10"
                                    md="10"
                                >
                                    <div
                                        className="square square-7"
                                        id="square7"
                                        style={{ transform: squares7and8 }}
                                    />
                                    <div
                                        className="square square-8"
                                        id="square8"
                                        style={{ transform: squares7and8 }}
                                    />
                                    <Card className="card-register">
                                        <CardHeader>
                                            <CardImg
                                                alt="..."
                                                src={require("assets/img/square-purple-1.png")}
                                            />
                                            <CardTitle
                                                tag="h4"
                                                style={{
                                                    marginLeft: "5px",
                                                    marginBottom: "-30px",
                                                }}
                                            >
                                                course
                                            </CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Monday</th>
                                                        <th>Tuesday</th>
                                                        <th>Wednesday</th>
                                                        <th>Thursday</th>
                                                        <th>Friday</th>
                                                        <th>Saturday</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Times.map((time) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">
                                                                    {time[0]}
                                                                </th>
                                                                {time.map(
                                                                    (
                                                                        tim,
                                                                        i
                                                                    ) => {
                                                                        if (
                                                                            i !==
                                                                            0
                                                                        ) {
                                                                            return (
                                                                                <th>
                                                                                    {tim ? (
                                                                                        <div>
                                                                                            <Button
                                                                                                id="Popover1"
                                                                                                type="button"
                                                                                                style={styleForCourseButton(
                                                                                                    i
                                                                                                )}
                                                                                                onClick={() => {
                                                                                                    if (
                                                                                                        i <=
                                                                                                        3
                                                                                                    ) {
                                                                                                        if (
                                                                                                            !firstSelection
                                                                                                        ) {
                                                                                                            setFirstSelection(
                                                                                                                i
                                                                                                            );
                                                                                                        } else {
                                                                                                            if (
                                                                                                                i ===
                                                                                                                firstSelection
                                                                                                            ) {
                                                                                                                setFirstSelection(
                                                                                                                    null
                                                                                                                );
                                                                                                            } else if (
                                                                                                                i ===
                                                                                                                extraSelection
                                                                                                            ) {
                                                                                                                setExtraSelection(
                                                                                                                    null
                                                                                                                );
                                                                                                            } else
                                                                                                                setExtraSelection(
                                                                                                                    i
                                                                                                                );
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (
                                                                                                            !secondSelection
                                                                                                        ) {
                                                                                                            setSecondSelection(
                                                                                                                i
                                                                                                            );
                                                                                                        } else {
                                                                                                            if (
                                                                                                                i ===
                                                                                                                secondSelection
                                                                                                            ) {
                                                                                                                setSecondSelection(
                                                                                                                    null
                                                                                                                );
                                                                                                            } else if (
                                                                                                                i ===
                                                                                                                extraSelection
                                                                                                            ) {
                                                                                                                setExtraSelection(
                                                                                                                    null
                                                                                                                );
                                                                                                            } else
                                                                                                                setExtraSelection(
                                                                                                                    i
                                                                                                                );
                                                                                                        }
                                                                                                    }
                                                                                                }}
                                                                                            >
                                                                                                {
                                                                                                    tim.Course
                                                                                                }
                                                                                            </Button>
                                                                                            <Popover
                                                                                                flip
                                                                                                target="Popover1"
                                                                                                isOpen={
                                                                                                    isPopOpen
                                                                                                }
                                                                                                trigger="hover focus"
                                                                                                toggle={() => {
                                                                                                    setIsPopOpen(
                                                                                                        !isPopOpen
                                                                                                    );
                                                                                                }}
                                                                                            >
                                                                                                <PopoverHeader>
                                                                                                    {
                                                                                                        tim.Course
                                                                                                    }
                                                                                                </PopoverHeader>
                                                                                                <PopoverBody>
                                                                                                    <Col>
                                                                                                        <Row>
                                                                                                            <b>
                                                                                                                Teacher:
                                                                                                            </b>
                                                                                                            {
                                                                                                                tim.Teacher
                                                                                                            }
                                                                                                        </Row>
                                                                                                        <Row>
                                                                                                            <b>
                                                                                                                Spot
                                                                                                                left:
                                                                                                            </b>
                                                                                                            {Math.max(
                                                                                                                0,
                                                                                                                5 -
                                                                                                                    tim
                                                                                                                        .Students
                                                                                                                        .length
                                                                                                            )}
                                                                                                        </Row>
                                                                                                        <Row>
                                                                                                            <b>
                                                                                                                Start
                                                                                                                Time:
                                                                                                            </b>
                                                                                                            {
                                                                                                                tim.Time
                                                                                                            }
                                                                                                        </Row>
                                                                                                        <Row>
                                                                                                            <b>
                                                                                                                Duration:
                                                                                                            </b>
                                                                                                            {
                                                                                                                tim.duration
                                                                                                            }
                                                                                                        </Row>
                                                                                                        <Row>
                                                                                                            <b>
                                                                                                                Is
                                                                                                                online?:
                                                                                                            </b>
                                                                                                            {tim.isOnline
                                                                                                                ? "Yes"
                                                                                                                : "No"}
                                                                                                        </Row>
                                                                                                    </Col>
                                                                                                </PopoverBody>
                                                                                            </Popover>
                                                                                        </div>
                                                                                    ) : (
                                                                                        <>

                                                                                        </>
                                                                                    )}
                                                                                </th>
                                                                            );
                                                                        }
                                                                    }
                                                                )}
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                        <CardFooter>
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                                size="lg"
                                                onClick={() => {
                                                    setSlide(0);
                                                }}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                                size="lg"
                                                onClick={() => {}}
                                            >
                                                Register
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                            <div className="register-bg" />
                            <div
                                className="square square-1"
                                id="square1"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-2"
                                id="square2"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-3"
                                id="square3"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-4"
                                id="square4"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-5"
                                id="square5"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-6"
                                id="square6"
                                style={{ transform: squares1to6 }}
                            />
                        </Container>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
