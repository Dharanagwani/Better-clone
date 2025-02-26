import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
  // State variables for form inputs and results
  const [homePrice, setHomePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState(30); // default to 30 years
  const [propertyTaxes, setPropertyTaxes] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Calculation function
  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    // Monthly payment formula
    const monthlyPrincipalAndInterest = 
      (principal * monthlyInterestRate) / 
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    
    // Adding property taxes
    const monthlyTaxes = propertyTaxes / 12;
    const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyTaxes;

    setMonthlyPayment(totalMonthlyPayment.toFixed(2));
  };

  return (
    <Container className="mortgage-calculator-page">
      <h1 className="text-center">Mortgage Calculator</h1>
      
      <Form className="calculator-form">
        <Row>
          <Col md={6}>
            <Form.Group controlId="homePrice" className="mb-3">
              <Form.Label>Home Price ($)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter home price"
                value={homePrice}
                onChange={(e) => setHomePrice(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="downPayment" className="mb-3">
              <Form.Label>Down Payment ($)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter down payment"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="interestRate" className="mb-3">
              <Form.Label>Interest Rate (%)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Annual interest rate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="loanTerm" className="mb-3">
              <Form.Label>Loan Term (Years)</Form.Label>
              <Form.Select
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              >
                <option value="15">15 years</option>
                <option value="30">30 years</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="propertyTaxes" className="mb-3">
          <Form.Label>Annual Property Taxes ($)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter property taxes"
            value={propertyTaxes}
            onChange={(e) => setPropertyTaxes(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={calculateMortgage}>
          Calculate Monthly Payment
        </Button>
      </Form>

      {monthlyPayment && (
        <Card className="result-card mt-4">
          <Card.Body>
            <h4>Estimated Monthly Payment: ${monthlyPayment}</h4>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default MortgageCalculator;
