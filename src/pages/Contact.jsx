import React, { useState } from "react";
import Layout from "../componet/Layout";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [selectedQuery, setSelectedQuery] = useState("Order");

  const handleQueryClick = (type) => {
    setSelectedQuery(type);
  };
  return (
    <Layout>
      {/* Contact Section */}
      <section className="py-lg-12 py-md-9 py-6">
        <Container fluid className="help-center-container">
          <Row>
            <Col lg={9} className="mx-auto">
              <Row className="border-bottom mb-2">
                <Col lg={3}>
                  <h6 className="sidebar-title mb-0">HELP CENTER</h6>
                  <p className="sidebar-subtitle mb-0">
                    We are here to help you
                  </p>
                </Col>
                <Col lg={9}>
                  <div className="help-header-section d-flex justify-content-between align-items-center">
                    <div className="track-section">
                      <div className="d-flex gap-2 ">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="45px"
                            viewBox="0 -960 960 960"
                            width="45px"
                            fill="#94969f"
                          >
                            <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
                          </svg>
                          {/* <i class="fa fa-bag-shopping text-muted"></i> */}
                        </span>
                        <div className="lh-xs">
                          <h6 className="dheader-rightHeaderText">
                            TRACK, CANCEL, RETURN/EXCHANGE
                          </h6>
                          <p className="dheader-rightContentText mb-0">
                            Manage your purchases
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline-success"
                      className="dheader-orderButton"
                    >
                      ORDERS
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  md={8}
                  lg={3}
                  sm={12}
                  className="contact-info position-relative contact-information help-sidebar"
                >
                  <div className="query-types">
                    <div className="">
                      <p className="sideBar-headerText">SELECT QUERY TYPE</p>
                    </div>
                    {["Order", "NonOrder", "Recent", "FAQ"].map((type) => (
                      <div key={type} className={`query-item ${ selectedQuery === type ? "active" : ""
                        }`} onClick={() => handleQueryClick(type)}>
                        {type === "Order" && "Order Related Queries"}
                        {type === "NonOrder" && "Non-order Related Issues"}
                        {type === "Recent" && "Recent Issues"}
                        {type === "FAQ" && "Frequently Asked Questions"}
                        <span>
                          <i className="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col md={8} lg={9} sm={12}>
                  <div className="order-query">
                    {selectedQuery === "Order" && (
                      <div className="">
                        <div className="orders-contentStyle">
                          <p className="select-item-text">
                            Select the item we can help you with
                          </p>

                          {/* Card 1 */}
                          <Card className="order-card">
                            <Card.Body className="p-3">
                              <div className="itemcollection-itemdescription">
                                <div className="item-info">
                                  <div className="cancel-icon">
                                    <span>
                                      <i class="fa-solid fa-xmark"></i>
                                    </span>
                                  </div>
                                  <div className="order-details">
                                    <p className="status-text">Cancelled</p>
                                    <p className="sub-status-text">
                                      Since we were unable to deliver your
                                      order.
                                    </p>
                                  </div>
                                </div>
                                <div className="itemcollection-imagedescription">
                                  <div className="d-flex">
                                    <div className="ProductList-thumbnail">
                                      <div className="">
                                        <figure className="mb-0">
                                          <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XFAcBKPWbtS-ZEpF47x76ixkNxjM-ecNzQ&s"
                                            alt="Product"
                                            className="product-image"
                                          />
                                        </figure>
                                      </div>
                                    </div>
                                    <div class="itemcollection-description">
                                      <div class="itemcollection-itemmaintitle">
                                        <span className="fw-semibold">
                                          Roadster
                                        </span>
                                      </div>
                                      <div class="itemcollection-itemname">
                                        <span>
                                          The Lifestyle Co. Men Solid Joggers
                                        </span>
                                      </div>
                                      <div class="itemcollection-size">
                                        <span>Size: L</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="itemcollection-arrowicon">
                                    <span>
                                      <i class="fa-solid fa-angle-right text-muted"></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                          {/* Card 2 */}
                          <Card className="order-card">
                            <Card.Body className="p-3">
                              <div className="itemcollection-itemdescription">
                                <div className="item-info">
                                  <div className="cancel-icon">
                                    <span>
                                      <i class="fa-solid fa-xmark"></i>
                                    </span>
                                  </div>
                                  <div className="order-details">
                                    <p className="status-text">Cancelled</p>
                                    <p className="sub-status-text">
                                      Since we were unable to deliver your
                                      order.
                                    </p>
                                  </div>
                                </div>
                                <div className="itemcollection-imagedescription">
                                  <div className="d-flex">
                                    <div className="ProductList-thumbnail">
                                      <div className="">
                                        <figure className="mb-0">
                                          <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XFAcBKPWbtS-ZEpF47x76ixkNxjM-ecNzQ&s"
                                            alt="Product"
                                            className="product-image"
                                          />
                                        </figure>
                                      </div>
                                    </div>
                                    <div class="itemcollection-description">
                                      <div class="itemcollection-itemmaintitle">
                                        <span className="fw-semibold">
                                          Roadster
                                        </span>
                                      </div>
                                      <div class="itemcollection-itemname">
                                        <span>
                                          The Lifestyle Co. Men Solid Joggers
                                        </span>
                                      </div>
                                      <div class="itemcollection-size">
                                        <span>Size: L</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="itemcollection-arrowicon">
                                    <span>
                                      <i class="fa-solid fa-angle-right text-muted"></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    )}
                    {selectedQuery === "NonOrder" && (
                      <p className="select-item-text">
                        Non-order related support options
                      </p>
                    )}
                    {selectedQuery === "Recent" && (
                      <p className="select-item-text">
                        Here are your recent issues
                      </p>
                    )}
                    {selectedQuery === "FAQ" && (
                      <p className="select-item-text">
                        Frequently asked questions here
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container></Container>
      </section>
    </Layout>
  );
}
export default Contact;