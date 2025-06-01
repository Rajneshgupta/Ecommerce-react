import React from "react";
import Layout from "../componet/Layout";
import { Link } from 'react-router-dom';
import Newslatter  from "../pages/newslatter/Newslatter";
import '../pages/Blog.css';
import { Container, Row, Col } from "react-bootstrap";

const blogData = [
    {
        id: 1,
        title: "The Ultimate Guide to Choosing the Right Handwash for Your Skin",
        image: "https://www.cossmic.com/source/images/skincare/handwash/prod-ftc-img.jpg",
        author: "Shivmohan Sharma",
        date: "2 weeks ago",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
    {
        id: 2,
        title: "The Ultimate Guide to Choosing the Right Handwash for Your Skin",
        image: "https://www.cossmic.com/source/images/skincare/handwash/prod-ftc-img.jpg",
        author: "Shivmohan Sharma",
        date: "2 weeks ago",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
    // Add more blog items here as needed
];

function Blog() {
    return (
        <Layout>
            <section className="section-theme">
                <Container>
                  <Col lg={12}> 
                      <div className="text-center pb-5">
                        <h1> Our Blogs</h1>
                      </div>
                  </Col>
                </Container>
                <Container fluid>
                    <Row>
                        <Col lg={11} className="mx-auto">
                            <Row>
                                <Col lg={8} md={12} sm={12}>
                                    <Row>
                                        {blogData.map((blog) => (
                                            <Col lg={4} key={blog.id}>
                                                <div className="postbox__wrapper">
                                                    <article className="postbox__item format-image transition-3">
                                                        <div className="postbox-thumb">
                                                            <Link to="/blogshow">
                                                                <img src={blog.image} alt={blog.title} />
                                                            </Link>
                                                        </div>
                                                        <div className="postbox-content">
                                                            <div className="postbox-meta d-flex align-items-center gap-4 pb-3">
                                                                <span>
                                                                    <a href="#" className="d-flex align-items-center gap-1">
                                                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M11.6667 13V11.6667C11.6667 10.9594 11.3857 10.2811 10.8856 9.78105C10.3855 9.28095 9.70724 9 9 9H3.66667C2.95942 9 2.28115 9.28095 1.78105 9.78105C1.28095 10.2811 1 10.9594 1 11.6667V13"
                                                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                                                strokeLinejoin="round"></path>
                                                                            <path
                                                                                d="M6.33317 6.33333C7.80593 6.33333 8.99984 5.13943 8.99984 3.66667C8.99984 2.19391 7.80593 1 6.33317 1C4.86041 1 3.6665 2.19391 3.6665 3.66667C3.6665 5.13943 4.86041 6.33333 6.33317 6.33333Z"
                                                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                                                strokeLinejoin="round"></path>
                                                                        </svg>
                                                                        {blog.author}
                                                                    </a>
                                                                </span>
                                                                <span className="d-flex align-items-center gap-1">
                                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                                                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                                        </path>
                                                                        <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" strokeWidth="1.5"
                                                                            strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                    {blog.date}
                                                                </span>
                                                            </div>
                                                            <h4 className="postbox-title mb-3">
                                                                <a href="#">{blog.title}</a>
                                                            </h4>
                                                            <div className="postbox-text">
                                                                <p>{blog.description}</p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                                <Col lg={4} md={12} sm={12}>
                                    {/* Optional sidebar content */}
                                    <div className="blog-sidebar-wrapper">
                                      <div className="sidebar-widget mb-4">
                                          <h4 className="blog-sidebar-title">Category</h4>
                                          <div className="blog-sidebar-widget-content">
                                              <ul className="ps-0">
                                                  <li>
                                                    <a href="">Psychology <span>1</span></a>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="sidebar-widget mb-4">
                                          <h4 className="blog-sidebar-title">Recent Post</h4>
                                          <div className="sidebar-widget-content">
                                              <div className="sidebar-post">
                                                    <div className="resent-post d-flex gap-4">
                                                        <div className="resent-post-thumb">
                                                            <a href="">
                                                                <img src="https://www.cossmic.com/source/images/skincare/handwash/prod-ftc-img.jpg" alt=""/>
                                                            </a>
                                                        </div>
                                                        <div className="resent-post-content">
                                                            <h3 className="resent-post-title lh-05">
                                                                <a href="">From ClassNameroom to Career: Navi...</a>
                                                            </h3>
                                                            <div className="resent-post-meta">
                                                                <span className="d-flex align-items-center gap-2">
                                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                    </svg>2 weeks ago
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                              </div>
                                          </div>
                                      </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newslatter></Newslatter>
        </Layout>
    );
}

export default Blog;
