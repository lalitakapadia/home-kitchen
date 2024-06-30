import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Carousel, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Helmet>
        <title>FoodDelivery - Delicious Meals Delivered to Your Doorstep</title>
        <meta name="description" content="Order delicious meals from local sellers and get them delivered to your doorstep. Search for dishes, sellers, or postcodes." />
      </Helmet>
      
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">FoodDelivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Form inline className="justify-content-center">
          <FormControl type="text" placeholder="Search for dishes, sellers, or postcode" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>

        <h2 className="my-4 text-center">Featured Dishes</h2>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Spaghetti Carbonara" />
            <Carousel.Caption>
              <h3>Spaghetti Carbonara</h3>
              <p>$12.99</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Vegan Buddha Bowl" />
            <Carousel.Caption>
              <h3>Vegan Buddha Bowl</h3>
              <p>$10.99</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Chicken Tikka Masala" />
            <Carousel.Caption>
              <h3>Chicken Tikka Masala</h3>
              <p>$14.99</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="my-4 text-center">Categories</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Breakfast</Card.Title>
                <Card.Text>Start your day with a healthy breakfast.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Lunch</Card.Title>
                <Card.Text>Delicious lunch options to keep you going.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Dinner</Card.Title>
                <Card.Text>End your day with a satisfying dinner.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Desserts</Card.Title>
                <Card.Text>Indulge in our sweet treats.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Vegan</Card.Title>
                <Card.Text>Healthy and delicious vegan options.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Gluten-Free</Card.Title>
                <Card.Text>Tasty gluten-free meals for everyone.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        <Container>
          <p>&copy; 2024 FoodDelivery. All rights reserved.</p>
          <p>
            <a href="#privacy" className="text-white">Privacy Policy</a> | 
            <a href="#terms" className="text-white"> Terms of Service</a>
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
