import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import computer from "../../../asset/img/computer.jpg";
const FestiveSection = () => {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={4}>
                  <Link>
                    <div className="">
                      <img src="" alt="" />
                    </div>
                  </Link>
                </Col>
                <Col lg={4}>
                  <Link>
                    <div className="">
                      <img src="" alt="" />
                    </div>
                  </Link>
                </Col>
                <Col lg={4}>
                  <Link>
                    <div className="">
                      <img src="" alt="" />
                    </div>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="pt-1 fashion-section">
        <Row>
          <Col md={8}>
            <Row>
              <Col md={6} className="mb-0">
                <Card>
                  <Card.Header>
                    <div className="fashion-section-title">
                      <h2 className="mb-0">Festive Must-haves</h2>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col xs={6} className="mb-3">
                        <Link>
                          <div className="lasted-product-card">
                            <div className="lasted-product-card-img">
                              <img src="" alt="" />
                            </div>
                            <div className="lasted-product-card-body">
                              <h6>Men's Trousers</h6>
                              <div className="text-success">
                                <p className="mb-0"> Min. 50% Off</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <Link>
                          <div className="lasted-product-card">
                            <div className="lasted-product-card-img">
                              <img src="" alt="" />
                            </div>
                            <div className="lasted-product-card-body">
                              <h6>Men's Trousers</h6>
                              <div className="text-success">
                                <p className="mb-0"> Min. 50% Off</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                      <Col xs={6} className="">
                        <Link>
                          <div className="lasted-product-card">
                            <div className="lasted-product-card-img">
                              <img src="" alt="" />
                            </div>
                            <div className="lasted-product-card-body">
                              <h6>Men's Trousers</h6>
                              <div className="text-success">
                                <p className="mb-0"> Min. 50% Off</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                      <Col xs={6} className="">
                        <Link>
                          <div className="lasted-product-card">
                            <div className="lasted-product-card-img">
                              <img src="" alt="" />
                            </div>
                            <div className="lasted-product-card-body">
                              <h6>Men's Trousers</h6>
                              <div className="text-success">
                                <p className="mb-0"> Min. 50% Off</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-0">
                <Card>
                  <Card.Header>
                    <div className="fashion-section-title">
                      <h2 className="mb-0">Summer Fashion</h2>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col xs={6} className="mb-3">
                        <Link>
                          <div className="lasted-product-card">
                            <div className="lasted-product-card-img">
                              <img src="" alt="" />
                            </div>
                            <div className="lasted-product-card-body">
                              <h6>Men's Trousers</h6>
                              <div className="text-success">
                                <p className="mb-0"> Min. 50% Off</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <Link>
                          <div className="lasted-product-card">
                            <div className="lasted-product-card-img">
                              <img src="" alt="" />
                            </div>
                            <div className="lasted-product-card-body">
                              <h6>Men's Trousers</h6>
                              <div className="text-success">
                                <p className="mb-0"> Min. 50% Off</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                      <Col xs={6} className="">
                        <Link>
                          <div className="lasted-product-card">
                            <div className="lasted-product-card-img">
                              <img src="" alt="" />
                            </div>
                            <div className="lasted-product-card-body">
                              <h6>Men's Trousers</h6>
                              <div className="text-success">
                                <p className="mb-0"> Min. 50% Off</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                      <Col xs={6} className="">
                        <Link>
                          <div className="lasted-product-card">
                            <div className="lasted-product-card-img">
                              <img src="" alt="" />
                            </div>
                            <div className="lasted-product-card-body">
                              <h6>Men's Trousers</h6>
                              <div className="text-success">
                                <p className="mb-0"> Min. 50% Off</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="text-center banner-area">
            <div className="banner">
              <Link>
                <img
                  src={computer}
                  alt="Fashion Models"
                  className="img-fluid"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FestiveSection;
