import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from "../Assets/logo-removebg-preview.png"
import "./css/nav.css"
const NavB = () => {
  return (
    <Navbar className='navbar' expand="lg">
    <Container className="nav-distance">
     
      <Navbar.Brand href="#home"><h1>GP</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#skill">Skill</Nav.Link>
          
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     
    </Container>
  </Navbar>
  )
}

export default NavB