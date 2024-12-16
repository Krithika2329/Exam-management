// filepath: /C:/Users/Hp/Desktop/exam seating/exam-seating-system/src/components/DetailsForm.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const DetailsForm = () => {
  const [courseName, setCourseName] = useState('');
  const [startingUsn, setStartingUsn] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [blockFloor, setBlockFloor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      course_name: courseName,
      starting_usn: startingUsn,
      room_number: roomNumber,
      block_floor: blockFloor
    };

    try {
      const response = await axios.post('http://localhost:5000/api/seating-details', data);
      console.log(response.data);
      alert('Seating details saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save seating details');
    }
  };

  return (
    <Container>
      <h2>Enter Seating Details</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCourseName" className="mb-3">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formStartingUSN" className="mb-3">
          <Form.Label>Starting USN</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter starting USN"
            value={startingUsn}
            onChange={(e) => setStartingUsn(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formRoomNumber" className="mb-3">
          <Form.Label>Room Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter room number"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBlockFloor" className="mb-3">
          <Form.Label>Block/Floor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter block or floor"
            value={blockFloor}
            onChange={(e) => setBlockFloor(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Generate Seating Arrangement
        </Button>
      </Form>
    </Container>
  );
};

export default DetailsForm;