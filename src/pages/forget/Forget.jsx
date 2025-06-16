import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Layout from "../../componet/Layout"; // Adjust path as needed

function Forget() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset email sent to:", email);
    // Add actual API logic here
  };

  return (
    <Layout>
      <section className="py-5 forget-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6}>
              <Card className="border-0 shadow-sm forget-card">
                <Card.Body>
                  <h2 className="mb-5 text-center">Forgot Password?</h2>
                  <p className="mb-4 text-center text-muted">
                    Enter your email address and we’ll send you a link to reset
                    your password.
                  </p>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="mb-1">Email Address<span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button type="submit" className="w-100 btn-reset">
                      Send Reset Link
                    </Button>
                    <div className="mt-3 text-center fw-semibold">
                      <small className="fs-18">
                        Remembered your password?{" "}
                        <Link to="/login" className="text-primary fs-18 fw-semibold">
                          Login here
                        </Link>
                      </small>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Forget;
