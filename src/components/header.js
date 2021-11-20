import React from 'react'
import {Navbar, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styling/header.css"


const Header = () =>{
    return (
        <div>
            <Navbar className="header">
  <Container>
    <Navbar.Brand><h2 className="heading">To-Do List</h2></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
                <h3 className="user_login">Made with ❤️</h3> <p className="user_name" ></p>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
