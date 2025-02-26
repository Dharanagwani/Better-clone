import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
import './Start.css';

const Start = () => {
  // State variables for form steps
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    loanPurpose: '',
    creditScore: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to navigate to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function to navigate to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log(formData);
  };

  // Progress percentage
  const progress = (step / 4) * 100;

  return (
    <Container className="start-page">
      <h1 className="text-center">Get Started with Better Mortgage</h1>

      <ProgressBar now={progress} className="mb-4" />

      <Form onSubmit={handleSubmit} className="multi-step-form">
        {step === 1 && (
          <div>
            <Form.Group className="mb-3" controlId="propertyType">
              <Form.Label>Property Type</Form.Label>
              <Form.Select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
              >
                <option value="">Select Property Type</option>
                <option value="Single Family">Single Family</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Multi-Family">Multi-Family</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" onClick={nextStep}>
              Next
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <Form.Group className="mb-3" controlId="loanPurpose">
              <Form.Label>Loan Purpose</Form.Label>
              <Form.Select
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleChange}
                required
              >
                <option value="">Select Loan Purpose</option>
                <option value="Purchase">Purchase</option>
                <option value="Refinance">Refinance</option>
              </Form.Select>
            </Form.Group>

            <Button variant="secondary" onClick={prevStep} className="me-2">
              Previous
            </Button>
            <Button variant="primary" onClick={nextStep}>
              Next
            </Button>
          </div>
        )}

        {step === 3 && (
          <div>
            <Form.Group className="mb-3" controlId="creditScore">
              <Form.Label>Credit Score</Form.Label>
              <Form.Select
                name="creditScore"
                value={formData.creditScore}
                onChange={handleChange}
                required
              >
                <option value="">Select Credit Score Range</option>
                <option value="Excellent (740+)">Excellent (740+)</option>
                <option value="Good (700-739)">Good (700-739)</option>
                <option value="Fair (640-699)">Fair (640-699)</option>
                <option value="Poor (Below 640)">Poor (Below 640)</option>
              </Form.Select>
            </Form.Group>

            <Button variant="secondary" onClick={prevStep} className="me-2">
              Previous
            </Button>
            <Button variant="primary" onClick={nextStep}>
              Next
            </Button>
          </div>
        )}

        {step === 4 && (
          <div>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="secondary" onClick={prevStep} className="me-2">
              Previous
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default Start;
