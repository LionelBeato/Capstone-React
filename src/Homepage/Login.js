import React from "react";
import MyflixLogo4 from "../static/MyflixLogo4.png";
import "../styles/login.css";
import videos from "../styles/videos.mp4";
import GoogleLogin from 'react-google-login';
import { BACKEND_URL } from "../constants";


const Login = () => {

  // const responseGoogle = (response) => {
  //   console.log(response.tokenId)
  //   localStorage.setItem("token", response.tokenId)
  // }

  // const login = () => {
  //   fetch("https://erin-spring-backend.herokuapp.com/users/oidc-principal",
  //     {
  //       method: "GET",
  //       credentials: "include",
  //     })
  //     .then(response => console.log(response))
  //   // .then(json => console.log(json))
  // }
  return (
    <div id="loginform">
      <video autoPlay loop muted={true} height="150px" width="300px">
        <source src={videos} type="video/mp4" />
      </video>
      <div className="imageLogo">
        <img src={MyflixLogo4} alt="Logo" />
      </div>
      {/* <GoogleLogin
        clientId="768435042402-lc8p0l5blqou7u5tjno1m2rf17eo6qv7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      // cookiePolicy={'single_host_origin'}
      /> */}
      <a
        className="button-link"
        href={`${BACKEND_URL}/oauth2/authorization/google`}
      >
        <div id="buttonSign" className="rowLogin">
          <button>Sign in with Google</button>
        </div>
      </a>
      {/* <button onClick={login}>click me :)</button> */}
    </div>
  );
};
export default Login;
