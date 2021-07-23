import React from "react";
import MyflixLogo4 from "../static/MyflixLogo4.png";
import "../styles/login.css";
import videos from "../styles/videos.mp4";
const Login = () => {
  return (
    <div id="loginform">
      <video autoPlay loop muted={true} height="150px" width="300px">
        <source src={videos} type="video/mp4" />
      </video>
      <div className="imageLogo">
        <img src={MyflixLogo4} alt="Logo" />
      </div>
      <a
        className="button-link"
        href="http://localhost:8080/oauth2/authorization/google"
      >
        <div id="buttonSign" className="rowLogin">
          <button>Sign in with Google</button>
        </div>
      </a>
    </div>
  );
};
export default Login;
