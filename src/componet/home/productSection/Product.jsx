import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from "react-bootstrap";

const Product = () => {
     const products = [
    {
      id: 1,
      title: "Samsung Galaxy S21 Ultra 128GB – Black",
      description:
        "4999",
      imgSrc:
        "https://www.apple.com/v/airpods/x/images/overview/airpods_max_stardust__l9lr6719rmaa_large.png",
    },
    {
      id: 2,
      title: "Airpods Apple",
      description:
        "4999",
      imgSrc:
        "https://www.apple.com/v/airpods/x/images/overview/airpods_max_stardust__l9lr6719rmaa_large.png",
    },
    {
      id: 2,
      title: "Airpods Apple",
      description:
        "4999",
      imgSrc:
        "https://www.apple.com/v/airpods/x/images/overview/airpods_max_stardust__l9lr6719rmaa_large.png",
    },
    {
      id: 2,
      title: "Airpods Apple",
      description:
        "4999",
      imgSrc:
        "https://www.apple.com/v/airpods/x/images/overview/airpods_max_stardust__l9lr6719rmaa_large.png",
    },
    {
      id: 2,
      title: "Airpods Apple",
      description:
        "4999",
      imgSrc:
        "https://www.apple.com/v/airpods/x/images/overview/airpods_max_stardust__l9lr6719rmaa_large.png",
    },
    {
      id: 2,
      title: "Airpods Apple",
      description:
        "4999",
      imgSrc:
        "https://www.apple.com/v/airpods/x/images/overview/airpods_max_stardust__l9lr6719rmaa_large.png",
    },
  ];
 
  return (
    <div>
         {/*  Best Deals on Smartphones Category */}
              <Row className="pb-3">
                <Col lg={12} className="pb-1">
                  <div className="category-title">
                    <h6>Best Deals on Smartphones</h6>
                  </div>
                </Col>
                <div className="category-grid">
                  {products.map((product) => (
                    <div key={product.id} className="category-card">
                      <Link>
                        <div className="card-body">
                          <div className="category-img">
                            <img src={product.imgSrc} alt={product.title} />
                          </div>
                          <div className="category-description">
                            <h4>{product.title}</h4>
                            <p className="mb-0 lh-xs">{product.description}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </Row>
              {/*  End Best Deals on Smartphones Category */}

              {/*  Trending Deals Category */}
              <Row className="pb-3">
                <Col lg={12} className="pb-1">
                  <div className="category-title">
                    <h6>Trending Deals</h6>
                  </div>
                </Col>
                <div className="category-grid">
                  {products.map((product) => (
                    <div key={product.id} className="category-card">
                      <Link>
                        <div className="card-body">
                          <div className="category-img">
                            <img src={product.imgSrc} alt={product.title} />
                          </div>
                          <div className="category-description">
                            <h4>{product.title}</h4>
                            <p className="mb-0 lh-xs">{product.description}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </Row>
              {/*  End Trending Deals Category */}

    </div>
  )
}

export default Product