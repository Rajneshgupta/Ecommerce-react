import React from "react";
import { Link } from "react-router-dom";
import { Container, Row,Col,} from "react-bootstrap";
import Layout from "../componet/Layout";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Sitemap() {
  return (
    <Layout>
      <section>
        <Container fluid className="py-9 py-md-10">
          {/* Section 2: Our Purpose */}
          <Row className="mb-5 justify-content-center">
            <Col lg={11} className="mx-auto">
              {/* Breadcrumb  */}
              <nav className="mb-2 breadcrumb-wrapper breadcrumb-nav d-flex align-items-center">
                <Link to="#">Home</Link>
                <ChevronRightIcon/>
                <span className="active">Sitemap</span>
              </nav>
              {/* End Breadcrumb  */}

              {/* Search Bar  */}
              <div className="pt-3 pb-8 d-flex justify-content-center">
                <div className="search-bar-container d-flex align-items-center">
                  <span className="search-start-icon">
                  <i className="fa-solid fa-magnifying-glass me-1"></i> 
                  </span>
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Enter your doubt here..."
                  />
                  <button className="btn btn-primary rounded-pill site-search-btn">
                    Search
                  </button>
                </div>
              </div>
               {/*End  Search Bar  */}

              {/* Sitemap List */}
              <Row className="sitemap-row">
                <Col lg={3} sm={6}>
                  <div className="sitemap-section">
                    <div className="sitemap-hedaing">
                       <h3 className="sitemap-title">Electronics</h3>
                    </div>
                    <ul className="sitemap-list">
                      <li>
                        <Link to="/mobiles">Mobile Phones</Link>
                      </li>
                      <li>
                        <Link to="/laptops">Laptops</Link>
                      </li>
                      <li>
                        <Link to="/televisions">Televisions</Link>
                      </li>
                      <li>
                        <Link to="/headphones">Headphones</Link>
                      </li>
                      <li>
                        <Link to="/cameras">Cameras</Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={3} sm={6}>
                  <div className="sitemap-section">
                    <div className="sitemap-hedaing">
                      <h3 className="sitemap-title">Fashion</h3>
                    </div>
                    <ul className="sitemap-list">
                      <li>
                        <Link to="/mens-fashion">Men’s Clothing</Link>
                      </li>
                      <li>
                        <Link to="/womens-fashion">Women’s Clothing</Link>
                      </li>
                      <li>
                        <Link to="/footwear">Footwear</Link>
                      </li>
                      <li>
                        <Link to="/accessories">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/jewelry">Jewelry</Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={3} sm={6}>
                  <div className="sitemap-section">
                    <div className="sitemap-hedaing">
                    <h3 className="sitemap-title">Home & Kitchen</h3>
                    </div>
                    <ul className="sitemap-list">
                      <li>
                        <Link to="/furniture">Furniture</Link>
                      </li>
                      <li>
                        <Link to="/appliances">Home Appliances</Link>
                      </li>
                      <li>
                        <Link to="/decor">Home Decor</Link>
                      </li>
                      <li>
                        <Link to="/cookware">Cookware</Link>
                      </li>
                      <li>
                        <Link to="/lighting">Lighting</Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={3} sm={6}>
                  <div className="sitemap-section">
                    <div className="sitemap-hedaing">
                    <h3 className="sitemap-title">Customer Service</h3>
                    </div>
                    <ul className="sitemap-list">
                      <li>
                        <Link to="/help">Help Center</Link>
                      </li>
                      <li>
                        <Link to="/track-order">Track Order</Link>
                      </li>
                      <li>
                        <Link to="/returns">Returns</Link>
                      </li>
                      <li>
                        <Link to="/shipping">Shipping Info</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              {/* End Sitemap List */}

            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}


export default Sitemap;