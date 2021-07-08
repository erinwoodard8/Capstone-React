import {Navbar, Form, Nav, Button, FormControl} from 'react-bootstrap';
import React from "react";





const NavbarI = () => {
  
  return (
   
<div>
  <Navbar bg="primary" variant="dark">


  <Navbar.Brand className="text-center" href="#home">Movie World</Navbar.Brand>
   
   
    
    <Nav className= "mr-auto" >

      <Button variant="outline-light" href="#Login" >LogIn</Button>
    
      <Button variant="outline-light" href="#Signup">Resgister</Button>
     
    </Nav>




    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>


 

  </Navbar>

  </div>


      
  
  );
};

export default NavbarI;

