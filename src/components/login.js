import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-location"
import Header from "../components/header"
import Button from "react-bootstrap/Button";
import "../styling/login.css";

export default function Login() {
  const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    

  function validateForm() {
    return FirstName.length > 0 && LastName.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

   
    
    return (
        <div>
            <Header />
      <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="FirstName">
          <Form.Label className="form_label">First Name</Form.Label>
          <Form.Control
            autoFocus
            type="FirstName"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Aayush"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="LastName">
          <Form.Label className="form_label">Last Name</Form.Label>
          <Form.Control
            type="LastName"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Sharma"
          />
              </Form.Group>
              <Form.Group size="lg" controlId="email">
          <Form.Label className="form_label">Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="xyz@example.com"
          />
        </Form.Group>
        <Link to="/todo"><Button className="login_user" block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button></Link>
      </Form>
            </div>
            </div>
  );
}