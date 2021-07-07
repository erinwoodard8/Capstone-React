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
      return <Signup></Signup>;
    } else {
      return <h1>Button was NOT clicked</h1>
    }
  };

  return (
    <div>
      <button onClick={() => setState(true)}>Click me</button>
      {render()}
    </div>
  );
};

export default Login;
