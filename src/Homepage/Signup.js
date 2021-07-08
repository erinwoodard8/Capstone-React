import React, { useState } from "react";


const Signup = () => {
    const [state, setState] = useState(false);


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
        <button >Register</button>
        
        </div>
    )
};

export default Signup