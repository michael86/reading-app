import React from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <div className="App">
      <header>
        <h3>Welcome to</h3>
        <h1>Tigers Early Readers</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <Card className="mt-5">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos nihil perspiciatis sed aliquam quas laborum
                  laudantium provident neque deserunt dicta possimus fugit, id
                  suscipit magni cum iusto repudiandae exercitationem eius.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mt-5">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, enim vel at ipsa nobis dicta id ipsum quibusdam a
                  amet facilis. Nesciunt totam at excepturi obcaecati cum
                  quisquam necessitatibus nobis!
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
