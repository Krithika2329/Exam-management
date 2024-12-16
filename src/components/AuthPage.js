import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', { email, password });
      console.log(response.data);
      setIsSignUp(false);
      alert('Sign Up successful! Please log in.');
    } catch (error) {
      console.error('Error:', error);
      setError('Sign Up failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      navigate('/home');
    } catch (error) {
      console.error('Error:', error);
      setError('Invalid email or password');
    }
  };

  const styles = {
    authContainer: {
      marginTop: '50px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    buttonFullWidth: {
      marginTop: '15px',
    },
    textDanger: {
      fontSize: '14px',
    },
  };

  return (
    <Container style={styles.authContainer}>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center my-4">{isSignUp ? 'Sign Up' : 'Log In'}</h2>

          <Form onSubmit={isSignUp ? handleSignUp : handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {isSignUp && (
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
            )}

            {error && <p style={styles.textDanger}>{error}</p>}

            <Button variant="primary" type="submit" className="w-100" style={styles.buttonFullWidth}>
              {isSignUp ? 'Sign Up' : 'Log In'}
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Button
              variant="link"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
            >
              {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
