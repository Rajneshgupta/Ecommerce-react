import React from "react";
import Layout from "../componet/Layout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
function Product() {
 const products = [
  {
    id: 1,
    title: "iPhone 16 Pro",
    shortTitle: "iPhone 16",
    description: "Latest iPhone with A18 Bionic chip.",
    shortDescription: "A18 chip, pro features.",
    image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
    rating: 4.8,
    ratingCount: 200,
    discountPrice: "Rs. 1,40,000",
    originalPrice: "Rs. 1,60,000",
    offer: "(12% OFF)",
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    shortTitle: "iPhone 15",
    description: "Fast and powerful with titanium body.",
    shortDescription: "Titanium build, superfast.",
    image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
    rating: 4.7,
    ratingCount: 150,
    discountPrice: "Rs. 1,20,000",
    originalPrice: "Rs. 1,40,000",
    offer: "(14% OFF)",
  },
  {
    id: 3,
    title: "iPhone 14",
    shortTitle: "iPhone 14",
    description: "Affordable yet powerful iPhone model.",
    shortDescription: "Affordable performance.",
    image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
    rating: 4.5,
    ratingCount: 180,
    discountPrice: "Rs. 80,000",
    originalPrice: "Rs. 90,000",
    offer: "(11% OFF)",
  },
  {
    id: 4,
    title: "iPhone SE",
    shortTitle: "iPhone SE",
    description: "Compact and budget-friendly iPhone.",
    shortDescription: "Compact & budget model.",
    image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
    rating: 4.2,
    ratingCount: 90,
    discountPrice: "Rs. 49,000",
    originalPrice: "Rs. 59,000",
    offer: "(17% OFF)",
  },
];


  return (
    <Layout>
      <section className="py-6 py-lg-12 py-md-9">
        <Container fluid className="">
          <Row>
            <Col lg={11} className="mx-auto">
              <Row>
                <Col lg={3}>
                  <div className="p-3 border rounded filter-sidebar bg-light">
                    <h5 className="mb-3">Filters</h5>

                    {/* Product Category Filter */}
                    <div className="mb-4">
                      <h6 className="mb-2">Category</h6>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="mobile"
                          id="filterMobile"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="filterMobile"
                        >
                          Mobile Phones
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="laptop"
                          id="filterLaptop"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="filterLaptop"
                        >
                          Laptops
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="computer"
                          id="filterComputer"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="filterComputer"
                        >
                          Computers
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="speaker"
                          id="filterSpeaker"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="filterSpeaker"
                        >
                          Speakers
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="others"
                          id="filterOthers"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="filterOthers"
                        >
                          Other Electronics
                        </label>
                      </div>
                    </div>

                    {/* Price Range Filter */}
                    <div className="mb-4">
                      <h6 className="mb-2">Price Range</h6>
                      <input
                        type="range"
                        className="form-range"
                        min="1000"
                        max="100000"
                        step="1000"
                      />
                      <div className="d-flex justify-content-between">
                        <span>₹1,000</span>
                        <span>₹1,00,000+</span>
                      </div>
                    </div>

                    {/* Brands Filter (optional) */}
                    <div>
                      <h6 className="mb-2">Brands</h6>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brandApple"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="brandApple"
                        >
                          Apple
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brandSamsung"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="brandSamsung"
                        >
                          Samsung
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="brandDell"
                        />
                        <label className="form-check-label" htmlFor="brandDell">
                          Dell
                        </label>
                      </div>
                      {/* Add more brands if needed */}
                    </div>
                  </div>
                </Col>

                <Col lg={9}>
                  <Row>
                    {products.map((product, index) => (
                      <Col lg={4} key={index} className="">
                        <div className="product-card">
                          {/* Product Image & Rating */}
                          <div className="product-img">
                            <img src={product.image} alt={product.title} />
                            <div className="product-ratingsContainer">
                              <span>{product.rating} <StarIcon  className="text-white fs-19" /></span>
                              <div className="product-ratingsCount">
                                <div className="product-separator">|</div>
                                <span>{product.ratingCount}</span>
                              </div>
                            </div>

                            {/* Wishlist Button */}
                            <div className="product-actions">
                              <span className="product-wishlistFlex product-actionsButton product-wishlist">
                                <span className="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>
                                <FavoriteBorderIcon className="material-icon" />{" "}
                                wishlist
                              </span>
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="product-info items-info">
                            <h3>{product.title}</h3>
                            <p className="mb-1">{product.description}</p>
                            <span className="fs-16 text-muted">{product.shortDescription}</span>
                            <div className="pt-1 price">
                              <div className="discount-price">
                                {product.discountPrice}
                              </div>
                              <div className="original-price">
                                {product.originalPrice}
                              </div>
                              <div className="off-prices">{product.offer}</div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Product;
