import React from "react";
import Layout from "../componet/Layout";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
function Product() {
  return (
    <Layout>
      <section className="py-lg-12 py-md-9 py-6">
        <Container fluid className="">
          <Row>
            <Col lg={11} className="mx-auto">
              <Row>
                <Col lg={3}></Col>
                <Col lg={9}>
                  <Row>
                    <Col lg={4}>
                      <div className="product-card">
                        {/* Product Image & Rating */}
                        <div className="product-img">
                          <img src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
                            alt=""/>
                          <div className="product-ratingsContainer">
                            <span>4.4</span>
                            <div className="product-ratingsCount">
                              <div className="product-separator">|</div>
                              <span>120</span>
                            </div>
                          </div>

                          {/* Wishlist Button */}
                          <div className="product-actions">
                            <span className="product-wishlistFlex product-actionsButton product-wishlist">
                              <span className="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>wishlist
                            </span>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="product-info">
                          <h3>Apple Headphone</h3>
                          <p className="mb-2">
                            Buy Apple iPhone online at lowest prices.
                          </p>
                          <div className="price">
                            <span className="discount-price">Rs. 400</span>
                            <span className="original-price">Rs. 200</span>
                            <span className="off-prices">(82% OFF)</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="product-card">
                        {/* Product Image & Rating */}
                        <div className="product-img">
                          <img src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
                            alt=""/>
                          <div className="product-ratingsContainer">
                            <span>4.4</span>
                            <div className="product-ratingsCount">
                              <div className="product-separator">|</div>
                              <span>120</span>
                            </div>
                          </div>

                          {/* Wishlist Button */}
                          <div className="product-actions">
                            <span className="product-wishlistFlex product-actionsButton product-wishlist">
                              <span className="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>wishlist
                            </span>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="product-info">
                          <h3>Apple Headphone</h3>
                          <p className="mb-2">
                            Buy Apple iPhone online at lowest prices.
                          </p>
                          <div className="price">
                            <span className="discount-price">Rs. 400</span>
                            <span className="original-price">Rs. 200</span>
                            <span className="off-prices">(82% OFF)</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="product-card">
                        {/* Product Image & Rating */}
                        <div className="product-img">
                          <img src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
                            alt=""/>
                          <div className="product-ratingsContainer">
                            <span>4.4</span>
                            <div className="product-ratingsCount">
                              <div className="product-separator">|</div>
                              <span>120</span>
                            </div>
                          </div>

                          {/* Wishlist Button */}
                          <div className="product-actions">
                            <span className="product-wishlistFlex product-actionsButton product-wishlist">
                              <span className="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>wishlist
                            </span>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="product-info">
                          <h3>Apple Headphone</h3>
                          <p className="mb-2">
                            Buy Apple iPhone online at lowest prices.
                          </p>
                          <div className="price">
                            <span className="discount-price">Rs. 400</span>
                            <span className="original-price">Rs. 200</span>
                            <span className="off-prices">(82% OFF)</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="product-card">
                        {/* Product Image & Rating */}
                        <div className="product-img">
                          <img src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
                            alt=""/>
                          <div className="product-ratingsContainer">
                            <span>4.4</span>
                            <div className="product-ratingsCount">
                              <div className="product-separator">|</div>
                              <span>120</span>
                            </div>
                          </div>

                          {/* Wishlist Button */}
                          <div className="product-actions">
                            <span className="product-wishlistFlex product-actionsButton product-wishlist">
                              <span className="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>wishlist
                            </span>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="product-info">
                          <h3>Apple Headphone</h3>
                          <p className="mb-2">
                            Buy Apple iPhone online at lowest prices.
                          </p>
                          <div className="price">
                            <span className="discount-price">Rs. 400</span>
                            <span className="original-price">Rs. 200</span>
                            <span className="off-prices">(82% OFF)</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="product-card">
                        {/* Product Image & Rating */}
                        <div className="product-img">
                          <img src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
                            alt=""/>
                          <div className="product-ratingsContainer">
                            <span>4.4</span>
                            <div className="product-ratingsCount">
                              <div className="product-separator">|</div>
                              <span>120</span>
                            </div>
                          </div>

                          {/* Wishlist Button */}
                          <div className="product-actions">
                            <span className="product-wishlistFlex product-actionsButton product-wishlist">
                              <span className="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>wishlist
                            </span>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="product-info">
                          <h3>Apple Headphone</h3>
                          <p className="mb-2">
                            Buy Apple iPhone online at lowest prices.
                          </p>
                          <div className="price">
                            <span className="discount-price">Rs. 400</span>
                            <span className="original-price">Rs. 200</span>
                            <span className="off-prices">(82% OFF)</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="product-card">
                        {/* Product Image & Rating */}
                        <div className="product-img">
                          <img src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
                            alt=""/>
                          <div className="product-ratingsContainer">
                            <span>4.4</span>
                            <div className="product-ratingsCount">
                              <div className="product-separator">|</div>
                              <span>120</span>
                            </div>
                          </div>

                          {/* Wishlist Button */}
                          <div className="product-actions">
                            <span className="product-wishlistFlex product-actionsButton product-wishlist">
                              <span className="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>wishlist
                            </span>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="product-info">
                          <h3>Apple Headphone</h3>
                          <p className="mb-2">
                            Buy Apple iPhone online at lowest prices.
                          </p>
                          <div className="price">
                            <span className="discount-price">Rs. 400</span>
                            <span className="original-price">Rs. 200</span>
                            <span className="off-prices">(82% OFF)</span>
                          </div>
                        </div>
                      </div>
                    </Col>
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
