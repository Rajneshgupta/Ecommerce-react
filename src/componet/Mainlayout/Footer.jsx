import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import {
  faFacebook,
  faInstagram,
  faYoutube,
  faXTwitter, // This is the new "X" (formerly Twitter) icon
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";
import applogo from "../../asset/download/app-store-img.png";
import playdown from "../../asset/download/google-play-img.png";
import securepayment from "../../asset/img/secure-payment.png";
function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="footer-area">
      <Container fluid>
        <Row>
          <Col lg={11} className="mx-auto">
            {/* Compnay link React */}

            <div className="footer-top">
              <Row>
                <Col lg={2} sm={6}>
                  <div className="about-footer">
                    <div className="footer-title">
                      <h5>ONLINE SHOPPING</h5>
                    </div>
                    <ul className="ps-0 footer-list">
                      <li>
                        {" "}
                        <Link>Mobile</Link>
                      </li>
                      <li>
                        {" "}
                        <Link>Electronics</Link>
                      </li>
                      <li>
                        {" "}
                        <Link>Laptop</Link>
                      </li>
                      <li>
                        {" "}
                        <Link>Headphone</Link>
                      </li>
                      <li>
                        {" "}
                        <Link>LED/Smart TVs</Link>
                      </li>
                      <li>
                        {" "}
                        <Link>Home</Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={2}>
                  <div className="page-more-info">
                    <div className="footer-title">
                      <h5>Company</h5>
                    </div>
                    <ul className="ps-0 footer-list">
                      <li>
                        {" "}
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/about"}>About</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/career"}>Career</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/blog"}>Blog</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/contact"}>Contact</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/faq"}>FAQ</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/sitemap"}>Sitemap</Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={2}>
                  <div className=" page-more-info">
                    <div className="footer-title">
                      <h5>CUSTOMER POLICIES</h5>
                    </div>
                    <ul className="ps-0 footer-list">
                      <li>
                        {" "}
                        <Link>Terms Of Use</Link>
                      </li>
                      <li>
                        {" "}
                        <Link>Track Orders</Link>
                      </li>
                      <li>
                        {" "}
                        <Link>Shipping</Link>
                      </li>
                      <li>
                        {" "}
                        <Link>Cancellation</Link>
                      </li>
                      <li>
                        {" "}
                        <Link>Returns</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/termCondition"}>Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={3}>
                  <div className="open-hours">
                    <div className="pb-3 footer-title">
                      <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                      <div className="gap-3 pt-2 d-flex">
                        <div className="footer-logo">
                          <Link className="download-app">
                            <img src={applogo} alt="App Logo" />
                          </Link>
                        </div>
                        <div className="footer-logo">
                          <Link className="download-apps">
                            <img src={playdown} alt="App Logo" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <ul className="gap-3 footer-social list-unstyled d-flex">
                      <li>
                        <Link to="#">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-white"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-white"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-white"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="text-white"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={3}>
                  <div className="open-hours">
                    <div className="footer-title">
                      <h5>Registered Office Address:</h5>
                      <ul className="footer-social ps-0">
                        <p class="fs-17 text-white mb-0">
                          E-commerce Internet Private Limited,{" "}
                        </p>
                        <p class="fs-17 text-white mb-0">
                          {" "}
                          Buildings Alyssa, Begonia &amp;{" "}
                        </p>
                        <p class="fs-17 text-white mb-0">
                          {" "}
                          Clove Embassy Tech Village,{" "}
                        </p>
                        <p class="fs-17 text-white mb-0">
                          {" "}
                          Outer Ring Road, Devarabeesanahalli Village,{" "}
                        </p>
                        <p class="fs-17 text-white mb-0"> Seoni, 484839, </p>
                        <p class="fs-17 text-white mb-0">
                          {" "}
                          Madhya Pradesh, India
                        </p>
                        <p className="gap-1 mb-0 d-flex fs-17">
                          <a href="tel:+918839029696">+918839029696</a>
                          <a href="tel:+918085671537">+918085671537</a>
                        </p>
                      </ul>
                    </div>
                    <div className="footer-logo"></div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Compnay link React */}
            <Col lg={12}>
              <hr className="mb-0 text-white" />
            </Col>

            <div class="footer-bottom">
              {/* Product Category React */}

              <Row className="pb-2">
                <Col lg={12} sm={12}>
                  <div className="flex-wrap gap-3 d-flex align-items-center">
                    <div className="footer-popular-link">
                      <Link>Topwear</Link>
                    </div>
                    <div className="footer-popular-link">
                      <Link>T-Shirts</Link>
                    </div>
                    <div className="footer-popular-link">
                      <Link>Casual Shirts</Link>
                    </div>
                    <div className="footer-popular-link">
                      <Link>Formal Shirts</Link>
                    </div>
                    <div className="footer-popular-link">
                      <Link>Sweatshirts</Link>
                    </div>
                    <div className="footer-popular-link">
                      <Link>Sweaters</Link>
                    </div>
                    <div className="footer-popular-link">
                      <Link>Jackets</Link>
                    </div>
                    <div className="footer-popular-link">
                      <Link>Blazers & Coats</Link>
                    </div>
                    <div className="footer-popular-link">
                      <Link>Suits</Link>
                    </div>
                    <div className="footer-popular-link">
                      <Link>Rain Jackets</Link>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* End Product Category React */}

              {/* Information With CopyRight React */}

              <Row className="align-items-center">
                <Col lg={4} sm={12}>
                  <div className="">
                    <p className="mb-0 text-white">
                      <Link className="text-white fs-15" to={"/about"}>
                        A E-commerce company
                      </Link>
                    </p>
                  </div>
                </Col>
                <Col lg={4} sm={12}>
                  <div className="text-center">
                    <p className="mb-0 text-white fs-15">
                      Copyright @ 2023 All rights reserved
                    </p>
                  </div>
                </Col>
                <Col lg={4} sm={12}>
                  <div className="text-end">
                    <img
                      className="secure-payment"
                      src={securepayment}
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
              {/* End Information With CopyRight React */}
            </div>
          </Col>
        </Row>

        <div className="">
          {showButton && (
            <button
              className={`scroll-btn ${!showButton ? "hide" : ""}`}
              onClick={scrollToTop}
            >
              <KeyboardArrowUpIcon />
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Footer;
