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
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import Slider from "nouislider";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [phoneFocus, setPhoneFocus] = React.useState(false);
  const [ageFocus, setAgeFocus] = React.useState(false);
  const [focuses, setFocuses] = React.useState({});
  const [data, setData] = React.useState({});

  // var slider1 = this.refs.slider1;

  // Slider.create(slider1, {
  //   start: [0],
  //   connect: [true, false],
  //   step: 1,
  //   range: { min: 0, max: 0 }
  // });
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
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
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-3 offset-md-3" lg="6" md="6">
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
                      <CardTitle tag="h4" style={{marginLeft: "5px"}}>Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": focuses.name
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
                            onFocus={(e) => setFocuses({...focuses, name: true})}
                            onBlur={(e) => setFocuses({...focuses, name: false})}
                            onChange = {(e) => {setData({...data, name: e.target.value})}}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": focuses.email
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
                            onFocus={(e) => setFocuses({...focuses, email: true})}
                            onBlur={(e) => setFocuses({...focuses, email: false})}
                            onChange = {(e) => {setData({...data, email: e.target.value})}}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": focuses.phone
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
                            onFocus={(e) => setFocuses({...focuses, phone: true})}
                            onBlur={(e) => setFocuses({...focuses, phone: false})}
                            onChange = {(e) => {setData({...data, phone: e.target.value})}}
                          />
                        </InputGroup>
                        
                        {/* <div className="slider" ref="slider1" /> */}
                        
                        <FormGroup>
                          <br/>
                          <p className="h4">Date of birth</p>
                        </FormGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": focuses.dob
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Age"
                            type="date"
                            onFocus={(e) => setFocuses({...focuses, dob: true})}
                            onBlur={(e) => setFocuses({...focuses, dob: false})}
                            onChange = {(e) => {setData({...data, dob: e.target.value})}}
                          />
                        </InputGroup>

                        <FormGroup>
                          <br/>
                          <p className="h4">Gender</p>
                        </FormGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": focuses.gender
                          })}
                        >
                          <Input
                            placeholder="Gender"
                            type="select"
                            onFocus={(e) => setFocuses({...focuses, gender: true})}
                            onBlur={(e) => setFocuses({...focuses, gender: false})}
                            onChange = {(e) => {setData({...data, gender: e.target.value})}}
                          > 
                            <option id="0">Other</option>
                            <option id="1">Male</option>
                            <option id="2">Female</option>
                          </Input>
                        </InputGroup>
                        <FormGroup>
                          <br/>
                          <p className="h4">Which course are you interested in? </p>
                        </FormGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": focuses.experience
                          })}
                        >
                        <Input
                            placeholder="Course"
                            type="select"
                            onFocus={(e) => setFocuses({...focuses, gender: true})}
                            onBlur={(e) => setFocuses({...focuses, gender: false})}
                            onChange = {(e) => {setData({...data, gender: e.target.value})}}
                          > 
                            <option id="0">Basic programming</option>
                            <option id="1">Competitive programming</option>
                            <option id="2">Web development</option>
                            <option id="2">App development</option>
                          </Input>
                        </InputGroup>
                        {/* <InputGroup
                          className={classnames({
                            "input-group-focus": passwordFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="text"
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                          />
                        </InputGroup> */}
                        {/* <FormGroup check className="text-left">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup> */}
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button className="btn-round" color="primary" size="lg">
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
        <Footer />
      </div>
    </>
  );
}
