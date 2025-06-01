import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Layout from "../componet/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const teamMembers = [
  {
    name: "Rajesh Verma",
    role: "Frontend Developer",
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Karan Singh",
    role: "QA Engineer",
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Sneha Patel",
    role: " UI/UX Designer",
    img: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=",
  },
  {
    name: "Arjun Mehta ",
    role: "Backend Developer",
    img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Priya Sharma ",
    role: "Project Manager",
    img: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=",
  },
  {
    name: "Ananya Reddy",
    role: "Product Designer",
    img: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=",
  },
];
function About() {
  return (
    <Layout>
      <section className="">
        {/* Section 1: About of Ecommercies */}
        <Container fluid className="p-0">
          <div className="hero-banner">
            <div className="hero-content text-white">
              <h2 className="display-6 fw-semibold">
                Empowering India Through Stylish Fashion, Smart Choices, and
                Seamless Shopping
              </h2>
              <p>
                Ecommercies brings modern India a world of trendy fashion,
                lifestyle essentials, and smart deals. We’re here to inspire
                confidence, celebrate individuality, and make every online
                shopping experience fast, fun, and fabulous — all at your
                fingertips.
              </p>
            </div>
          </div>
        </Container>

        <Container fluid className="py-9 py-md-12">
          {/* Section 2: Our Purpose */}
          <Row className="mb-5 justify-content-center">
            <Col lg={11} className="mx-auto">
              <div className="purpose-section position-relative text-center p-4 p-md-5">
                <h3 className="purpose-heading">Our Purpose</h3>
                <p className="purpose-description mb-0">
                  To inspire vibrant & joyous self-expression, by expanding
                  fashion possibilities for India.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid className="py-9 py-md-12">
          <Row className="mb-5 justify-content-center">
            <Col lg={11} className="mx-auto">
              <Row className="mb-5">
                <Col>
                  <h3 className="text-center mb-4">
                    We create MAGIC with our values
                  </h3>
                </Col>
              </Row>
              {/* Section 3: MAGIC Values */}
              <div className="steps-container">
                <div className="step">
                  <div className="icon-box">01</div>
                  <div className="text-box">
                    Make the business radically objective.
                  </div>
                </div>
                <div className="step">
                  <div className="icon-box">02</div>
                  <div className="text-box">
                    Set a clear direction by focusing on a few priorities.
                  </div>
                </div>
                <div className="step">
                  <div className="icon-box">03</div>
                  <div className="text-box">
                    Routine communication will align the team.
                  </div>
                </div>
                <div className="step">
                  <div className="icon-box">04</div>
                  <div className="text-box">Learn quickly and adapt.</div>
                </div>
                <div className="step">
                  <div className="icon-box">05</div>
                  <div className="text-box">
                    Accountability is based on keeping score.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Section 4: Our Journey */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-3">Our Journey of Awesomeness</h3>
            <p className="text-center mx-auto" style={{ maxWidth: "800px" }}>
              Since our launch, we've evolved from a small idea into a powerful
              eCommerce platform trusted by thousands. With each year, we've
              expanded our offerings, improved our technology, and built
              stronger connections with our customers and sellers.
            </p>
          </Col>
        </Row>
      </section>

      <section className="bg-light-gray py-md-12">
        <Container fluid>
          <Row>
            <Col lg={11} className="mx-auto">
              {/* Section 5: Meet our Leaders */}
              <div className="">
                <Col>
                  <h3 className="text-center mb-4 display-6 fw-semibold">
                    Meet Our Leaders
                  </h3>
                </Col>
              </div>
              <div className="team-slider-container">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={5}
                  navigation={true}
                  loop={true}
                >
                  {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                      <div className="team-card">
                        <div className="pb-3">
                          <img src={member.img} alt={member.name} />
                        </div>
                        <h4>{member.name}</h4>
                        <p className="mb-2 text-primary-color team-role">
                          {member.role}
                        </p>
                        <div className="">
                          <Link className="gradient-text fs-20">Read more</Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Swiper adds .swiper-button-next and .swiper-button-prev automatically */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default About;
