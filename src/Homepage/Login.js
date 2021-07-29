import React from "react";
import MyflixLogo4 from "../static/MyflixLogo4.png";
import "../styles/login.css";
import videos from "../styles/videos.mp4";
import GoogleLogin from 'react-google-login';

const Login = () => {

  const responseGoogle = (response) => {
    console.log(response);
  }

  const login = () => {
    fetch("https://erin-spring-backend.herokuapp.com/users/oidc-principal")
      .then(response => console.log(response))
  }

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
        href="https://erin-spring-backend.herokuapp.com/oauth2/authorization/google"
      >
        {/* <GoogleLogin
          clientId="768435042402-lc8p0l5blqou7u5tjno1m2rf17eo6qv7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
        <div id="buttonSign" className="rowLogin">
          <button>Sign in with Google</button>
        </div>
        <button onClick={login}>click me :)</button>
      </a>
    </div>
  );
};
export default Login;
