import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import LogoHeader from './components/LogoHeader';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import SeatSelector from './components/SeatSelector';
import DetailsForm from './components/DetailsForm';
import SeatingTable from './components/SeatingTable';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/select-seats" element={<SeatSelector />} />
        <Route path="/enter-details" element={<DetailsForm />} />
        <Route path="/seating-table" element={<SeatingTable />} />
      </Routes>
    </Router>
  );
}

export default App;

