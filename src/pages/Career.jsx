import React from "react";
import Layout from "../componet/Layout";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

function Career() {
  return (
    <Layout>
      <section>
        <Container fluid className="">
          <Row className="mb-5 justify-content-center">
            <Col lg={11} className="mx-auto">
              <Row>
                <Col lg={8}>
                  <div className="">
                    <img src="" alt="" />
                  </div>
                </Col>
                <Col lg={4}>
                  <Col lg={12}>
                  <div className="">
                    <img className="img-fluid" src="https://st5.depositphotos.com/8322640/62432/v/1600/depositphotos_624326282-stock-illustration-banner-design-gaming-headphones-new.jpg" alt=""/>
                  </div>
                  </Col>
                  <Col lg={12}></Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Career;
