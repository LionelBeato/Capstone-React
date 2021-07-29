import React, { useState, useEffect } from "react";
import Login from "./Login";
// import Test from '../test';
import Search from "./Search";
import Header from "../static/Header";
import axios from "axios";

const Landing = () => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch("https://erin-spring-backend.herokuapp.com/users/login", {
      method: "GET",
      credentials: "include",

    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setAuthState(json.hasOwnProperty("id"));
      });

  };

  return (
    <div>
      {authState ? <Header /> : <div></div>}
      {authState ? <Search /> : <Login />}
    </div>
  );
};

export default Landing;
