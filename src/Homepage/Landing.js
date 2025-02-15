import React, { useState, useEffect } from "react";
import Login from "./Login";
// import Test from '../test';
import Search from "./Search";
import Header from "../static/Header";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { Link, Redirect } from "react-router-dom";
import { App } from "../App";

const Landing = () => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch(`${BACKEND_URL}/users/login`, {
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
      {/* <Link to="/test">test</Link> */}
      {authState ? <Header /> : <div></div>}
      {authState ? <Redirect to="/search" /> : <Login />}
    </div>
  );
};

export default Landing;
