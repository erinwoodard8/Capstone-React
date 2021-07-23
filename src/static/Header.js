import { Navbar, Nav } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import MyflixLogo4 from "./MyflixLogo4.png";
import "../styles/header.css"


const Header = () => {

  const [userState, setUserState] = useState({});

  useEffect(() => {
    postUser();
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
  
<Navbar  className="nav" expand="lg">
  <Navbar.Brand href="/"><img class="logo-image" src={MyflixLogo4} class="img-fluid" width="50"/></Navbar.Brand>
    <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
      <Nav>
      <Nav.Link href="/">Search</Nav.Link>
      <Nav.Link href="/favorites">Favorites</Nav.Link>
      <Nav.Link className="user" class="text-warning"><p class="text-warning">Logged in as: {userState.username}</p></Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Navbar.Text>
              <Nav.Link href="http://localhost:8080/logout">Logout</Nav.Link>
      </Navbar.Text>
      </Nav>
      
    </Navbar.Collapse>
</Navbar>
</div>


      
  
  );
};

export default Header;

