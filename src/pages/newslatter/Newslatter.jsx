import { Container, Row, Col } from "react-bootstrap";

function Newslatter(){
    return(
        <section className="newslatter-theme">
          <Container>
            <Row>
                <Col lg={12}>
                <div className="text-center blog-newsletter">
                    <h1>Subscribe to our newsletter</h1>
                </div>
                </Col>
            </Row>
          </Container>
        </section>
    )
}

export default Newslatter;