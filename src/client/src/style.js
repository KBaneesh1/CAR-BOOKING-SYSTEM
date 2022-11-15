 import { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"; //browser-router is for the browsing history in the browser
 import React from "react"; //acts like require
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class NavLinCom extends Component{
    render(){

  return (
    
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/SignUp"}>SignUp</Nav.Link>
            <Nav.Link as={Link} to={"/Login"}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  
  
  );
}
}
