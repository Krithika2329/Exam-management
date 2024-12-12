import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    // If authentication is successful, navigate to the home page
    navigate('/home');
  };

  return (
    <Container>
      <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <Form onSubmit={handleLogin}>
        {isSignUp && (
          <>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </>
        )}
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </Button>
        <Button variant="link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Log In' : 'New user? Sign Up'}
        </Button>
      </Form>
    </Container>
  );
};

export default AuthPage;
