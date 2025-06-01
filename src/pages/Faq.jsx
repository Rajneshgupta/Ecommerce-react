import React from "react";
import Layout from "../componet/Layout";
import { Link } from 'react-router-dom';
import askfaq from "../../src/asset/download/faq.jpg";
import { Container,Row,Col,Card,Image,Accordion,
  Button,Nav,
} from "react-bootstrap";
const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be in original condition with packaging intact.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 100 countries worldwide. Shipping charges and delivery times vary by location.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we’ll email you a tracking number with a link to track your package.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "You can change or cancel your order within 12 hours of placing it. Contact support for assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, PayPal, Apple Pay, and other major payment methods.",
  },
  {
    question: "Are my payment details secure?",
    answer:
      "Yes, we use SSL encryption and comply with industry standards to keep your payment information safe.",
  },
];
function Faq() {
  return (
    <Layout>
      <section className="py-9 py-md-10">
        <Container fluid>
          <Row>
            <Col lg={11} className="mx-auto">
              {/* Breadcrumb  */}
              <nav className="breadcrumb-wrapper breadcrumb-nav d-flex align-items-center mb-3">
                <Link to="#">Home</Link>
                <i className="fa-solid fa-angle-right mx-2"></i>
                <span className="active">Faqs</span>
              </nav>
              {/* End Breadcrumb  */}

              {/* Faq Question */}
              <Row>
                <Col lg={8} className="pb-4">
                  <div className="">
                    <h2 className="fw-bold mb-2" style={{ fontSize: "2rem" }}>
                      Frequently Ask Questions
                    </h2>
                    <p className="fs-16 mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat possimus recusandae ipsum est maxime laudantium
                      sint tempora deleniti iure cumque!
                    </p>
                  </div>
                </Col>
                <Col lg={8}>
                  <Accordion flush>
                    {faqData.map((item, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>{item.answer}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Col>

                <Col lg={4}>
                  <Card className="shadow-sm mt-4 mt-md-0">
                    <Card.Body>
                      <div className="text-center">
                        <div className="">
                          <img
                            className="faq-img"
                            src={askfaq}
                            alt="App Logo"
                          />
                        </div>
                        <h6 className="fw-bold">Do you have more questions?</h6>
                        <div className="w-75 mx-auto">
                          <p className="text-muted fs-16 lh-xs">
                            End-to-end payments and financial management in a
                            single solution. Meet the right platform to help
                            realize...
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          className="w-100 text-white fw-semibold fs-15"
                        >
                          Shoot a Direct Mail
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
               {/* End Faq Question */}
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}


export default Faq;