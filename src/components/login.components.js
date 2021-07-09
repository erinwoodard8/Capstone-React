
import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <form>
                    <h2 className="movies">movies</h2>
                  
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      
                    </div>

    
                </div>
           
                <br></br>
                     
             
         <button type="submit" className=" styled " >Login</button> 
         <div id="signup">
             <Link to={"/Sign-up"}> <button className="styled" renderAs="button"><span>Sign Up</span></button></Link>
        </div>
             <p className="forgot-password text-center">
                Forgot <a href="#">password?</a>
             </p>
           <hr></hr>
           <div>
               <button type="reset" id="blank">blank

               </button>
           </div>
     
           
            <p class="fb"> Login with Facebook</p>
            <br></br>
            <p class="fb"> Login with Twitter</p>

            <div>
             <Link to={"/profile"}> <button className="styled " renderAs="button"><span>Profile</span></button></Link>
           </div>
     
           <div>
             <Link to={"/profPicture"}> <button className="styled " renderAs="button"><span>ProfPicture</span></button></Link>
           </div>


        </form>
        );
    }
}