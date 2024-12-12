import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const SeatSelector = () => {
  // Step 1: Define state for selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Step 3: Event handler to toggle seat selection
  const toggleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  // Step 2: Implement grid/table for seats
  const renderSeatMatrix = () => {
    const seats = Array.from({ length: 20 }, (_, i) => i + 1); // Example: 20 seats
    return seats.map((seatNumber) => (
      <Button
        key={seatNumber}
        variant={selectedSeats.includes(seatNumber) ? 'success' : 'secondary'}
        onClick={() => toggleSeatSelection(seatNumber)}
        style={{ margin: '5px' }}
      >
        {seatNumber}
      </Button>
    ));
  };

  // Step 4: Confirm selection logic
  const confirmSelection = () => {
    console.log('Selected Seats:', selectedSeats);
    // Add logic to handle confirmed selection, e.g., save to database or proceed to next step
  };

  return (
    <Container>
      <h2>Select Seats</h2>
      <div className="seat-matrix">{renderSeatMatrix()}</div>
      <Button variant="primary" onClick={confirmSelection}>
        Confirm Selection
      </Button>
    </Container>
  );
};

export default SeatSelector;


