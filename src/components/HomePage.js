import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SomeComponent = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/Seatselector');
  };

  return (
    <Button onClick={handleNavigation}>Go to Seat Selection</Button>
  );
};


const HomePage = () => (
  <Container>
    <h2>Seat Allotment</h2>
    <Form>
      <Form.Group controlId="formClassroomNumber">
        <Form.Label>Classroom Number</Form.Label>
        <Form.Control type="text" placeholder="Enter classroom number" />
      </Form.Group>
      <Form.Group controlId="formRows">
        <Form.Label>Number of Rows</Form.Label>
        <Form.Control type="number" placeholder="Enter number of rows" />
      </Form.Group>
      <Form.Group controlId="formColumns">
        <Form.Label>Number of Columns</Form.Label>
        <Form.Control type="number" placeholder="Enter number of columns" />
      </Form.Group>
      <Form.Group controlId="formThreeSeater">
        <Form.Label>Number of 3-Seater Benches</Form.Label>
        <Form.Control type="number" placeholder="Enter number of 3-seater benches" />
      </Form.Group>
      <Form.Group controlId="formFiveSeater">
        <Form.Label>Number of 5-Seater Benches</Form.Label>
        <Form.Control type="number" placeholder="Enter number of 5-seater benches" />
      </Form.Group>
      <Button variant="primary" type="submit">
      
        Proceed to Seat Selection
      </Button>
    </Form>
  </Container>
);

export default HomePage;
