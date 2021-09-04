import React from "react";
import classes from "./Login.module.css";
import { Form, Button, Card, Alert } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Userlog = () => {
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"  required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"  required />
          </Form.Group>
          <Button  className="w-100" type="submit">
            Log In
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          {/* <Link to="/forgot-password">Forgot Password?</Link> */}
          <p>Forgot Password</p>
        </div>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Need an account? <Link to="./register">Sign Up</Link>
    </div>
  </>
  );
};

export default Userlog;
