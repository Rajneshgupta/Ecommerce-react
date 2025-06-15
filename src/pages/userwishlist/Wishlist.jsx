import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../../componet/Layout";
import CloseIcon from "@mui/icons-material/Close";

const wishlistItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "Rs.1025",
    discount: "Rs.300",
    priceoff: "30",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "Rs.890",
    discount: "Rs.200",
    priceoff: "15",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "Rs.1400",
    discount: "Rs.450",
    priceoff: "60",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "Rs.1400",
    discount: "Rs.450",
    priceoff: "60",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function Wishlist() {
  return (
    <Layout>
      <section className="wishListarea">
        <Container fluid className="py-10">
          <Col lg={11} className="mx-auto">
            <h2 className="mb-5">
              Your Wishlist <span className="fw-light">2 items</span>
            </h2>
            <Row>
              {wishlistItems.map((item) => (
                <Col
                  lg={3}
                  md={3}
                  sm={6}
                  xs={12}
                  key={item.id}
                  className="mb-4"
                >
                  <Link>
                    <Card className="h-100 wishlist-card rounded-0">
                      <Card.Img
                        className="wishlistcard-image rounded-0"
                        variant="top"
                        src={item.image}
                        alt={item.name}
                      />
                      <div class="wishlistcard-removeIcon">
                        <CloseIcon />
                      </div>
                      <Card.Body className="p-3 d-flex flex-column wishlistcard-itemaction">
                        <Card.Title className="mb-2 wishlistdetails-label">
                          {item.name}
                        </Card.Title>
                        <Card.Text className="itemdetails-itemPricing">
                          <span class="itemdetails-boldFont">{item.price}</span>
                          <span class="itemdetails-strike">
                            {item.discount}
                          </span>
                          <span class="itemdetails-discountPercent">
                            ({item.priceoff} OFF%)
                          </span>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <div className="mt-auto d-flex justify-content-center">
                          <Button variant="primary" size="sm">
                            Move to Cart
                          </Button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Container>
      </section>
    </Layout>
  );
}

export default Wishlist;
