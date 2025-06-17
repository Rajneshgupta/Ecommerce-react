import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import Layout from "../../componet/Layout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import registerimg from "../../asset/img/register.png";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
  };

  return (
    <Layout>
      <section className="register-section">
        <Container>
          <Row>
            <Col lg={11}>
              <Row className="justify-content-center align-items-center">
                <Col lg={5} md={5} className="d-lg-block d-md-block d-none">
                  <div className="">
                    <img
                      src={registerimg}
                      alt="Register Image"
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col xs={12} sm={10} md={7} lg={7}>
                  <Card className="border-0 shadow-sm register-card">
                    <Card.Body className="p-0">
                      <div className="">
                        <h2 className="mb-4 text-center">Create Account</h2>
                      </div>
                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label className="mb-1">
                                First Name<span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="Enter first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label className="mb-1">
                                Last Name<span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Enter last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label className="mb-1">
                                Date of Birth
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label className="mb-1">
                                Email Address
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group className="mb-3">
                          <Form.Label className="mb-1">
                            Password<span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup>
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Enter password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                            />
                            <Button
                              variant="outline-secondary"
                              className="border-primary"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <VisibilityOffIcon
                                  style={{ color: "#ff0057" }}
                                />
                              ) : (
                                <VisibilityIcon style={{ color: "#ff0057" }} />
                              )}
                            </Button>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label className="mb-1">
                            Confirm Password
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup>
                            <Form.Control
                              type={showConfirm ? "text" : "password"}
                              name="confirmPassword"
                              placeholder="Re-enter password"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              required
                            />
                            <Button
                              variant="outline-secondary"
                              className="border-primary"
                              onClick={() => setShowConfirm(!showConfirm)}
                            >
                              {showConfirm ? (
                                <VisibilityOffIcon
                                  style={{ color: "#ff0057" }}
                                />
                              ) : (
                                <VisibilityIcon style={{ color: "#ff0057" }} />
                              )}
                            </Button>
                          </InputGroup>
                        </Form.Group>

                        <Button type="submit" className="btn-register w-100">
                          Register
                        </Button>

                        <div className="mt-3 text-center">
                          <small className="fs-18 fw-semibold">
                            Already have an account?{" "}
                            <Link
                              to="/login"
                              className="text-primary fw-semibold"
                            >
                              Login here
                            </Link>
                          </small>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Register;
