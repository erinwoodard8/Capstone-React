import React, { useState } from "react";
import  "../styles/common.css";
import MyflixLogo from "../static/MyflixLogo4.png";

const Login = () => {
  const [state, setState] = useState(false);

  //have login fields email and password
  //allow to login with google
  //once login/authorized, page will render movie search
  //have a link to allow user to signup

  // const render = () => {
  //   if (state) {
  //     return <Signup>Register</Signup>;
  //   } else {
  //     return <h1>This is login page</h1>
  //   }
  // };

  return (
    
     
    <div id="loginform">
      
      <div className="image" >
      <img  src={MyflixLogo} alt="Logo" />
      </div>
     
      <div id="button" className="row" >
      <button >Sign in with Google</button>
      </div>

           
    

  
  </div>
  );
};

export default Login;

