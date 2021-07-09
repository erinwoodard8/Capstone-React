import {Navbar, Form, Nav, Button, FormControl} from 'react-bootstrap';
import React from "react";






const Header = () => {
  
  return (
   
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
   <Navbar.Brand className="text-center" href="#home">Logo Here</Navbar.Brand>
      
   {/* <Navbar bg="primary" variant="dark" className="myflix" >MyFlix</Navbar> */}


    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}

  </Navbar>
</div>


      
  
  );
};

export default Header;

