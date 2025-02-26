import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero-section text-center">
        <Container>
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">
            We're transforming the homeownership experience.
          </p>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <Container>
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            At Better, we're on a mission to make homeownership simpler, faster,
            and more accessible for all. We're using technology to eliminate the
            unnecessary costs and complexity of the traditional mortgage process.
          </p>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <Container>
          <h2 className="section-title">Our Leadership Team</h2>
          <Row>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x300"
                  alt="CEO"
                />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Chief Executive Officer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x300"
                  alt="COO"
                />
                <Card.Body>
                  <Card.Title>Jane Smith</Card.Title>
                  <Card.Text>Chief Operating Officer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x300"
                  alt="CTO"
                />
                <Card.Body>
                  <Card.Title>Mike Johnson</Card.Title>
                  <Card.Text>Chief Technology Officer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Careers Section */}
      <section className="careers-section text-center">
        <Container>
          <h2 className="section-title">Join Our Team</h2>
          <p className="careers-text">
            We're growing fast and looking for talented people to join our team.
          </p>
          <Button variant="primary" size="lg" className="careers-button">
            Explore Careers
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
