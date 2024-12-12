import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const DetailsForm = () => (
  <Container>
    <h2>Enter Exam Details</h2>
    <Form>
      <Form.Group controlId="formExamDate">
        <Form.Label>Exam Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group controlId="formSubjectCode">
        <Form.Label>Subject Code</Form.Label>
        <Form.Control type="text" placeholder="Enter subject code" />
      </Form.Group>
      <Form.Group controlId="formCourseName">
        <Form.Label>Course Name</Form.Label>
        <Form.Control type="text" placeholder="Enter course name" />
      </Form.Group>
      <Form.Group controlId="formStartingUSN">
        <Form.Label>Starting USN</Form.Label>
        <Form.Control type="text" placeholder="Enter starting USN" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate Seating Arrangement
      </Button>
    </Form>
  </Container>
);

export default DetailsForm;
