import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container>
          <h1 className="hero-title">Find a Better Way to Mortgage</h1>
          <p className="hero-subtitle">
            Get pre-approved online in just 3 minutes.
          </p>
          <Button variant="primary" size="lg" className="cta-button">
            Get Started
          </Button>
          <Button variant="outline-primary" size="lg" className="cta-button">
            Learn More
          </Button>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <h2 className="section-title">Why Choose Better?</h2>
          <Row>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>No Hidden Fees</Card.Title>
                  <Card.Text>
                    Transparent pricing with no surprises.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Fast Approvals</Card.Title>
                  <Card.Text>
                    Get pre-approved in just minutes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Expert Support</Card.Title>
                  <Card.Text>
                    Dedicated advisors to guide you.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section text-center">
        <Container>
          <h2 className="section-title">How It Works</h2>
          <Row>
            <Col md={4}>
              <h3>Step 1</h3>
              <p>Get pre-approved online in 3 minutes.</p>
            </Col>
            <Col md={4}>
              <h3>Step 2</h3>
              <p>Complete your application with ease.</p>
            </Col>
            <Col md={4}>
              <h3>Step 3</h3>
              <p>Close your loan faster and save money.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <Container>
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <Row>
            <Col md={6}>
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text>
                    "Better made the mortgage process so easy and stress-free."
                  </Card.Text>
                  <footer className="blockquote-footer">
                    John Doe, Homeowner
                  </footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text>
                    "I saved thousands on my mortgage with Better!"
                  </Card.Text>
                  <footer className="blockquote-footer">
                    Jane Smith, First-Time Buyer
                  </footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
