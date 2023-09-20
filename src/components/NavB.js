import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resume from "../Assets/GOKULPRADAP_M.pdf"
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
          <Nav.Link href="#portfolio">Projects</Nav.Link>          
          <Nav.Link href="#contact">Contact</Nav.Link>
          <a className='dwn_btn' href={resume} download={resume}>Resume</a>
        </Nav>
      </Navbar.Collapse>
     
    </Container>
  </Navbar>
  )
}

export default NavB