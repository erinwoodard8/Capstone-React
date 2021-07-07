import React, { useState } from "react";
import Signup from './Signup'

const Login = () => {
  const [state, setState] = useState(false);

  //have login fields email and password
  //allow to login with google
  //once login/authorized, page will render movie search
  //have a link to allow user to signup

  const render = () => {
    if (state) {
      return <Signup>Register</Signup>;
    } else {
      return <h1>This is login page</h1>
    }
  };

  return (
    <div>
      <input type="email" className="email" placeholder="example@example.com" />
       <div className="login">
       <br></br>
      <input type="password" className="password" placeholder="Enter password" />
      </div>
      <br></br>
      <button onClick={() => setState(true)}>LogIn</button>
      {render()}
      </div>
  );
};

export default Login;

