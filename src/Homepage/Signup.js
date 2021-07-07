import React, { useState } from "react";


const Signup = () => {
    const [state, setState] = useState(false);

    const render = () => {
        if (state) {
          return <Signup>Register</Signup>;
        } else {
          return <h1>This is signup page</h1>
        }
      };

    //will have option for user to signup for google
    //or allow user to enter a email, username, password
    //if user uses google, we still need them to be able to 
    //enter a username
    //there will be function that handles a post request that
    //will post the new user to the backend DB

    return(
        <div>
        <input type="name" className="userName" placeholder="enter name" />
        
         <br></br>
        <input type="email" className="email" placeholder="example@example.com" />
        
         <div className="signup">
         <br></br>
        <input type="password" className="password" placeholder="Enter password" />
        </div>
        <br></br>
        <button onClick={() => setState(true)}>LogIn</button>
        {render()}
        </div>
    )
};

export default Signup