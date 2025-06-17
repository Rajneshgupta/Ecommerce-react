import React, { useState } from "react";
import Layout from "../componet/Layout";
import { Link } from "react-router-dom";
import Newslatter from "../pages/newslatter/Newslatter";
import "../pages/Blog.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Pagination,
  Badge,
} from "react-bootstrap";

const blogData = [
  {
    id: 1,
    title: "Top 5 Laptops for Work and Play in 2025",
    excerpt:
      "We’ve tested dozens of laptops to bring you the best for productivity and entertainment.",
    category: "Laptop",
    image: "https://source.unsplash.com/600x400/?laptop,technology",
    date: "June 15, 2025",
  },
  {
    id: 2,
    title: "Choosing the Right Desktop Setup for Your Home Office",
    excerpt:
      "From processors to monitors, learn how to choose the perfect desktop bundle for any budget.",
    category: "Desktop",
    image: "https://source.unsplash.com/600x400/?desktop,pc",
    date: "June 10, 2025",
  },
  {
    id: 3,
    title: "2025 Mobile Buying Guide: Best Phones Under ₹50,000",
    excerpt:
      "Here’s our updated list of best smartphones that deliver premium features without breaking the bank.",
    category: "Mobile",
    image: "https://source.unsplash.com/600x400/?smartphone,mobile",
    date: "June 8, 2025",
  },
  {
    id: 4,
    title: "Best Noise-Cancelling Headphones for Travel & Work",
    excerpt:
      "Compare top headphone brands for battery life, comfort, and noise isolation.",
    category: "Headphone",
    image: "https://source.unsplash.com/600x400/?headphone,sound",
    date: "June 5, 2025",
  },
  {
    id: 5,
    title: "Top Bluetooth Speakers of 2025 for Every Budget",
    excerpt:
      "These compact powerhouses offer big sound for small spaces. Here are our top picks.",
    category: "Speaker",
    image: "https://source.unsplash.com/600x400/?speaker,music",
    date: "June 2, 2025",
  },
  {
    id: 6,
    title: "Laptop vs Desktop: Which One Should You Buy?",
    excerpt:
      "Debating between portability and power? We break down the pros and cons of both.",
    category: "Comparison",
    image: "https://source.unsplash.com/600x400/?laptop,desktop,comparison",
    date: "May 28, 2025",
  },
];

const categories = [
  "All",
  "Laptop",
  "Desktop",
  "Mobile",
  "Headphone",
  "Speaker",
  "Comparison",
];

const itemsPerPage = 3;

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs = blogData.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  return (
    <Layout>
      <section className="section-theme">
        <Container>
          <Col lg={12}>
            <div className="pb-5 text-center">
              <h1>Our Blogs</h1>
            </div>
          </Col>
        </Container>
      </section>

      <section className="py-5 blog-section">
        <Container>
          <Row className="mb-4 align-items-center">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </Col>
            <Col md={6} className="mt-2 text-md-end mt-md-0">
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  pill
                  bg={activeCategory === cat ? "primary" : "secondary"}
                  className="mb-1 me-2 category-badge"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                >
                  {cat}
                </Badge>
              ))}
            </Col>
          </Row>

          <Row>
            {currentBlogs.map((post) => (
              <Col md={6} lg={4} className="mb-4" key={post.id}>
                <Card className="blog-card h-100">
                  <Card.Img
                    variant="top"
                    src={post.image}
                    className="blog-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text className="text-muted small">
                      {post.date}
                    </Card.Text>
                    <Card.Text>{post.excerpt}</Card.Text>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="text-muted small">{post.category}</span>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="outline-primary" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredBlogs.length > itemsPerPage && (
            <div className="mt-4 d-flex justify-content-center">
              <Pagination>
                {[...Array(totalPages)].map((_, i) => (
                  <Pagination.Item
                    key={i + 1}
                    active={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )}
        </Container>
      </section>

      <Newslatter />
    </Layout>
  );
}

export default Blog;
