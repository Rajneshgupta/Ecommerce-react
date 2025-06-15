import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../componet/Layout";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import InfoIcon from "@mui/icons-material/Info";
import ShieldIcon from "@mui/icons-material/Shield";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dell Inspiron 15",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nisi consectetur adipisicing elit. Modi, nisi.",
      seller: "Campusactivewear",
      price: 55000,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71IfBk7ET0L.jpg",
    },
    {
      id: 2,
      name: "HP Pavilion x360",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nisi consectetur adipisicing elit. Modi, nisi.",
      seller: "Campusactivewear",
      price: 62000,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71IfBk7ET0L.jpg",
    },
    {
      id: 3,
      name: "HP Pavilion x360",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nisi consectetur adipisicing elit. Modi, nisi.",
      seller: "Campusactivewear",
      price: 62000,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71IfBk7ET0L.jpg",
    },
    {
      id: 4,
      name: "HP Pavilion x360",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nisi consectetur adipisicing elit. Modi, nisi.",
      seller: "Campusactivewear",
      price: 1000,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71IfBk7ET0L.jpg",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <section className="py-5 pb-8 bg-gray">
        <Container fluid>
          <div className="mx-auto col-lg-11">
            <h2 className="mb-5">Your Cart</h2>
            <Row className="g-4">
              <Col lg={8}>
                <div className="flex-row p-3 mb-3 card d-flex justify-content-between align-items-center delivery-card">
                  <div>
                    <span className="text-muted">Deliver to: </span>
                    <span className="fw-semibold">Seoni - 480661</span>
                  </div>
                  <button className="px-2 py-1 border btn btn-outline-primary text-primary change-btn">
                    Change
                  </button>
                </div>
                <Card className="overflow-items">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="mb-3 border-0 border-bottom">
                      <Card.Body className="gap-3 d-flex ">
                        <div className="">
                          <div className="mx-auto text-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className=""
                              style={{ width: 100 }}
                            />
                          </div>
                          <div className="gap-2 d-flex align-items-center">
                            <Button
                              variant="outline-secondary"
                              className="increase-items"
                              title="Decrease Item"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              <RemoveIcon fontSize="small" />
                            </Button>
                            <span className="mx-2 item-quantity">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              className="increase-items"
                              title="Increase Item"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              <AddIcon fontSize="small" />
                            </Button>
                          </div>
                        </div>
                        <div className="w-60">
                          <h3 className="fw-semibold">{item.name}</h3>
                          <p className="mb-3 lh-xs">{item.short_description}</p>
                          <div className="">
                            <p className="mb-3 text-muted fs-19">
                              Seller: {item.seller}
                            </p>
                          </div>
                          <div className="gap-2 d-flex align-items-baseline">
                            <span className="text-muted fs-18">
                              <del>₹430</del>
                            </span>
                            <p
                              className="mb-2 fw-semibold"
                              style={{ fontSize: "18px" }}
                            >
                              ₹{item.price.toLocaleString()}
                            </p>
                            <span className="text-success fs-18">42% Off</span>
                          </div>
                        </div>
                        <div className="text-end">
                          <div className="">
                            <p>Delivery by Tue Jun 17 </p>
                          </div>
                          <div className="gap-2 pb-3 d-flex align-items-center">
                            <p className="mb-0 fw-bold">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </p>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleRemove(item.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </Card>
                {cartItems.length === 0 && (
                  <div className="my-5 text-center">
                    <div className="empty-cart-wrapper">
                      <img
                        src="/images/empty-cart.png" // Replace with your actual image path
                        alt="Empty Cart"
                        className="mb-4 empty-cart-img"
                      />

                      <h5 className="mb-2 fw-semibold">
                        Hey, it feels so light!
                      </h5>
                      <p className="mb-3 text-muted">
                        There is nothing in your bag. Let's add some items.
                      </p>

                      <Link
                        to="/wishlist"
                        className="px-4 mb-3 btn btn-outline-danger fw-bold text-uppercase"
                      >
                        Add Items from Wishlist
                      </Link>
                    </div>
                  </div>
                )}
              </Col>
              <Col lg={4}>
                <Card className="mb-3 shadow-sm">
                  <div className="p-5 border-bottom">
                    <h3 className="mb-0 fw-semibold">Price Details</h3>
                  </div>

                  {(() => {
                    const price = cartItems.reduce(
                      (sum, item) => sum + item.price * item.quantity,
                      0
                    );
                    const discount = Math.round(price * 0.3); // 30% discount
                    const coupon = 90;
                    const deliveryCharge = price > 999 ? 0 : 260;
                    const protectFee = 19;

                    const totalAmount =
                      price - discount - coupon + deliveryCharge + protectFee;
                    const savings =
                      discount + coupon + (deliveryCharge === 0 ? 260 : 0);

                    return (
                      <>
                        <div className="p-5">
                          <div className="mb-4 d-flex justify-content-between">
                            <span>Price ({cartItems.length} items)</span>
                            <span>₹{price.toLocaleString()}</span>
                          </div>

                          <div className="mb-4 d-flex justify-content-between">
                            <span>Discount</span>
                            <span className="text-success">
                              – ₹{discount.toLocaleString()}
                            </span>
                          </div>

                          <div className="mb-4 d-flex justify-content-between">
                            <span>Coupons for you</span>
                            <span className="text-success">– ₹{coupon}</span>
                          </div>

                          <div className="mb-4 d-flex justify-content-between">
                            <span>Delivery Charges</span>
                            <span>
                              {deliveryCharge > 0 ? (
                                <span>₹{deliveryCharge}</span>
                              ) : (
                                <>
                                  <del className="text-muted">₹260</del>{" "}
                                  <span className="text-success">Free</span>
                                </>
                              )}
                            </span>
                          </div>

                          <div className="mb-4 d-flex justify-content-between">
                            <span>
                              Protect Promise Fee{" "}
                              <span title="Protection from fraud and damage.">
                                <InfoIcon className="fs-lg" />
                              </span>
                            </span>
                            <span>₹{protectFee}</span>
                          </div>

                          <div className="py-4 d-flex justify-content-between total-list">
                            <strong>Total Amount</strong>
                            <strong>₹{totalAmount.toLocaleString()}</strong>
                          </div>

                          <div className="py-4 text-success fw-semibold total-list">
                            You will save ₹{savings.toLocaleString()} on this
                            order
                          </div>

                          <div className="gap-2 text-navy small d-flex align-items-start">
                            <ShieldIcon  className="fs-2x" />
                            <span className="fs-17">
                              Safe and Secure Payments. Easy returns. 100%
                              Authentic products.
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Cart;
