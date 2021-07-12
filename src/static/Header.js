import {Navbar} from 'react-bootstrap';
import React from "react";
import MyflixLogo4 from "./MyflixLogo4.png";
import "../"






const Header = () => {
  
  return (
   
<div>
  <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
  

  <img class="logo-image" src={MyflixLogo4} class="img-fluid" width="50" alt="Bootstrappin'"/>


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

