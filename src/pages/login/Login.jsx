import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Layout from "../../componet/Layout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
  };

  return (
    <Layout>
      <section className="login-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={5}>
              <Card className="border-0 shadow-sm login-card">
                <Card.Body className="p-0">
                  <h2 className="mb-5 text-center">Login to Your Account</h2>
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label className="mb-1">Email address<span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label className="mb-1">Password<span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <div className="mb-3 d-flex justify-content-between align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Remember me"
                        className="text-muted"
                      />
                      <Link
                        to="/forget"
                        className="text-decoration-none text-primary fs-18 fw-semibold"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="btn btn-primary w-100">
                      Login
                    </Button>
                  </Form>

                  <div className="mt-3 text-center">
                    <small className="text-muted fs-18">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-primary fw-semibold">
                        Sign Up
                      </Link>
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Login;