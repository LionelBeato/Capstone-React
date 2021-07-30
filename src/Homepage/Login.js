import React from "react";
import MyflixLogo4 from "../static/MyflixLogo4.png";
import "../styles/login.css";
import videos from "../styles/videos.mp4";
import GoogleLogin from 'react-google-login';

const Login = () => {

  // const responseGoogle = (response) => {
  //   console.log(response.tokenId)
  //   localStorage.setItem("token", response.tokenId)
  // }

  const login = () => {
    fetch("https://erin-spring-backend.herokuapp.com/users/oidc-principal",
      {
        method: "GET",
        credentials: "include",
        Authorization: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNkZjBhODMxZTA5M2ZhZTFlMjRkNzdkNDc4MzQ0MDVmOTVkMTdiNTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNzY4NDM1MDQyNDAyLWxjOHAwbDVibHFvdTd1NXRqbm8xbTJyZjE3ZW82cXY3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNzY4NDM1MDQyNDAyLWxjOHAwbDVibHFvdTd1NXRqbm8xbTJyZjE3ZW82cXY3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzNDc4MjY0MjUyNzczMzY0NTE4IiwiZW1haWwiOiJsaW9uZWwuYmVhdG9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJhUXVRYy1hSXZpTEI5UGFTNktjaFpRIiwibmFtZSI6Ikxpb25lbCBCZWF0byIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp6SEtDd3d4ZjVZM3E0Nk9YT0huZ2NmLVFZZi1qcVZxRDkzMUtmQz1zOTYtYyIsImdpdmVuX25hbWUiOiJMaW9uZWwiLCJmYW1pbHlfbmFtZSI6IkJlYXRvIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2Mjc2MjA2MDQsImV4cCI6MTYyNzYyNDIwNCwianRpIjoiYzViZDIzYWQxYzk1NDAzMzc1ZTI0OGEyNzJmZDRlNGU5ZWI2NjA0ZCJ9.Nk63ifPF-WpksJSOnQpyVSdmWdqC2PbOfzwCAZJdqlxuXHDaU1wtprytPjOosWrrAS1y-f4ajopuBnC2TENOtikVMZUiExte8vMdZy-UTvRe6p2VuPy2XgyVv0ompenKh3moXlYdZ8ha3kEqYCkyojctqqkh9fwaWlB-qaNGc-owq4jXe5ihaD8u9tNOl7TJ28qQfiqHjPHL4sRKRhm3bkqUybXjGr49lZS18f_NprxgzeuXpiyfeCq1sWJTOwy6MI0Tj9BNZsEpSWcJSAZmazNZgdRF6JrbUQjsseArSLZstss2QufsSQJ6Uv9hHsvJ3VTkGgOYSHB2bWLkEXUjBA",
        headers: {

        }
      })
      .then(response => console.log(response))
    // .then(json => console.log(json))
  }
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
        href="https://erin-spring-backend.herokuapp.com/oauth2/authorization/google"
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
