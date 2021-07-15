import { Navbar, Nav } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import MyflixLogo4 from "./MyflixLogo4.png";
import "../styles/header.css"


const Header = () => {

  const [userState, setUserState] = useState({});

  useEffect(() => {
    // postUser();
  }, []);
  
  const postUser = () => {
    let data = userState;
    fetch("http://localhost:8080/users/post/google", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setUserState(json))
      .then((json) => console.log(json));
  };



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
      <Nav.Link href="/">Search</Nav.Link>
      <Nav.Link href="/favorites">Favorites</Nav.Link>
      <Nav.Link className="user">Logged in as: {userState.username}</Nav.Link>
      <Nav.Link href="http://localhost:8080/logout">Logout</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>


      
  
  );
};

export default Header;

