import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import watch from "../../../asset/img/watch.jpg";
import sound from "../../../asset/img/sound.jpg";
const Electronics = () => {
  const electronics = [
    {
      id: 1,
      title: "Samsung Galaxy S24 5G",
      prices: "From ₹44,999",
      imgSrc: "https://m.media-amazon.com/images/I/71IfBk7ET0L.jpg",
    },
    {
      id: 2,
      title: "Motorola G85 5G",
      prices: "Just ₹14,999*",
      imgSrc: "https://cdn.lotuselectronics.com/webpimages/699081IM.webp",
    },
    {
      id: 3,
      title: "Apple iphone 13",
      prices: "From ₹39,999*",
      imgSrc:
        "https://mobileleb.com/cdn/shop/files/apple-mobile-phone-apple-iphone-13-128gb-ob-33456457580676.jpg?v=1744894366",
    },
    {
      id: 4,
      title: "Vivo T4x 5G",
      prices: "From ₹14,999",
      imgSrc:
        "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1740131500990/9cc40070e704777688659a333dd1d30a.png",
    },
    {
      id: 4,
      title: "Samsung Galaxy S24 FE 5G",
      prices: "From ₹14,999",
      imgSrc:
        "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-gsf/blue/landscape-front.png",
    },
    {
      id: 4,
      title: "Oppo K12x 5G",
      prices: "From ₹14,999",
      imgSrc:
        "https://www.oppo.com/content/dam/oppo-campaign-site/in/events/oppo-product/image-link/march-2023/K12x_5G_Breeze_Blue_1200X200.png",
    },
    {
      id: 4,
      title: "Vivo T4x 5G",
      prices: "From ₹14,999",
      imgSrc:
        "https://www.oppo.com/content/dam/oppo-campaign-site/in/events/oppo-product/image-link/march-2023/K12x_5G_Breeze_Blue_1200X200.png",
    },
    {
      id: 4,
      title: "Vivo T4x 5G",
      prices: "From ₹14,999",
      imgSrc:
        "https://www.oppo.com/content/dam/oppo-campaign-site/in/events/oppo-product/image-link/march-2023/K12x_5G_Breeze_Blue_1200X200.png",
    },
  ];
  return (
    <div>
      {/*  Best of Electronics Category */}
      <Row className="pb-3">
        <Col lg={12} className="pb-1">
          <div className="category-title">
            <h2>Best Deals on Smartphones</h2>
          </div>
        </Col>
        <Col lg={8}>
          <div className="category-grid">
            {electronics.map((electronic) => (
              <div key={electronic.id} className="category-card">
                <Link>
                  <div className="p-0 card-body">
                    <div className="category-img">
                      <img src={electronic.imgSrc} alt={electronic.title} />
                    </div>
                    <div className="category-description">
                      <h4>{electronic.title}</h4>
                      <p className="mb-0 lh-xs">{electronic.prices}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={4}>
          <div className="racker-image-group">
            <div className="racker-image">
              <Row>
                <Col lg={12}>
                  <div className="">
                    <Link>
                      <img
                        className="img-fluid"
                        src="https://www.reliancedigital.in/medias/boAT-Rockers-410-Bluetooth-Headphones-491598555-i-1?context=bWFzdGVyfGltYWdlc3w2NzczNnxpbWFnZS9qcGVnfGltYWdlcy9oZGIvaDQxLzkzMjE4Nzg1NTI2MDYuanBnfGJjMzk0MzhmODkzZWFlYmY2ZGNmYjdhZTAzMDMxYmZhMjJhNmM3YmVkMDE0MDc2ZjQyNDY2NzE4ZWNhN2MwMGQ"
                        alt=""
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6} className="pe-0">
                  <div className="">
                    <img
                      className="img-fluid"
                      src={sound}
                      alt=""
                    />
                  </div>
                </Col>
                <Col lg={6} className="ps-0">
                  <div className="">
                    <img src={watch} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      {/*  End Best of Electronics Category */}
    </div>
  );
};

export default Electronics;