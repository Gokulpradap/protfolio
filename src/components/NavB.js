import resume from "../Assets/GOKULPRADAP_M.pdf"
import "./css/nav.css"
import { Navbar, Nav, Container } from 'react-bootstrap';

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