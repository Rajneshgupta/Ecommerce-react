import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Layout from "../../componet/Layout";

import "swiper/css";
import "swiper/css/navigation";

function Cart() {
  return (
    <Layout>
      <section className="py-9 py-md-12">
        <Container fluid>
          <Row>
            <Col lg={11} className="mx-auto itemcart-area">
              <Row>
            <Col lg={8}>pkjhjkh</Col>
            <Col lg={4}>
            <div className="">

            </div>
            </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Cart;
