import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeatingTable = () => {
  const [details, setDetails] = useState({});
  const [students, setStudents] = useState([]);
  const [seatingGrid, setSeatingGrid] = useState([]);
  const [seatingArrangement, setSeatingArrangement] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const detailsResponse = await axios.get('http://localhost:5000/api/seating-details');
        setDetails(detailsResponse.data);

        const studentsResponse = await axios.get('http://localhost:5000/api/students');
        setStudents(studentsResponse.data);

        const gridResponse = await axios.get('http://localhost:5000/api/seating-grid');
        setSeatingGrid(gridResponse.data);

        const arrangementResponse = await axios.post('http://localhost:5000/api/seating-arrangement', {
          rows: gridResponse.data.rows,
          columns: gridResponse.data.columns,
          num3Seater: detailsResponse.data.num3Seater,
          num5Seater: detailsResponse.data.num5Seater
        });
        setSeatingArrangement(arrangementResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <div>
      <h2>Seating Arrangement</h2>
      <div>
        <h3>Details</h3>
        <p>Course Name: {details.course_name}</p>
        <p>Starting USN: {details.starting_usn}</p>
        <p>Room Number: {details.room_number}</p>
        <p>Block/Floor: {details.block_floor}</p>
      </div>
      <div>
        <h3>Seating Grid</h3>
        <table border="1">
          <tbody>
            {seatingArrangement.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((seat, colIndex) => (
                  <td key={colIndex}>
                    {seat ? `${seat.registration_number} (${seat.subject_code})` : 'Empty'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeatingTable;
