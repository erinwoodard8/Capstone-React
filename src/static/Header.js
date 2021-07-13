import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import React from "react";
import MyflixLogo4 from "./MyflixLogo4.png";
import "../styles/header.css"







const Header = () => {


  
  return (
   
<div>
  {/* <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
  
  
  <img class="logo-image" src={MyflixLogo4} class="img-fluid" width="50" alt="Bootstrappin'"/>

  </Navbar> */}

<Navbar className="nav" expand="lg">
  <Navbar.Brand href="/"><img class="logo-image" src={MyflixLogo4} class="img-fluid" width="50"/></Navbar.Brand>
  <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favorites">Favorites</Nav.Link>
      <Nav.Link href="http://localhost:8080/logout">Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>


      
  
  );
};

export default Header;

