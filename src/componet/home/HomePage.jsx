import React from "react";
import { Link } from "react-router-dom";


import { Container, Button, Row, Col, Card } from "react-bootstrap";

import Banner from "./banner/Banner";
import Category from "./categorySection/Category";
import Electronics from "./electronicsSection/Electronics";
import Product from "./productSection/Product";
import FestiveSection from "./festiveSection/FestiveSection";

function HomePage() {

    return (

        <section className="bg-gray pb-md-12">
            <Container fluid>
                <Row>
                    <Col lg={11} className="mx-auto">
                        <Banner />
                        <Category />
                        <Electronics />
                        <Product />
                        <FestiveSection />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HomePage;