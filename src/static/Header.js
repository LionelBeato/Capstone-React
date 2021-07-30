import { Navbar, Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import MyflixLogo4 from "./MyflixLogo4.png";
import "../styles/header.css";
import axios from "axios";
import { BACKEND_URL } from "../constants";


const Header = () => {
  const [userState, setUserState] = useState({});

  useEffect(() => {
    postUser();
  }, []);

  const postUser = () => {
    let data = userState;
    fetch(`${BACKEND_URL}/users/post/google`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",

      },
    })
      .then((response) => response.json())
      .then((json) => { setUserState(json) })

    // axios.post(`${BACKEND_URL}/users/post/google`, JSON.stringify(data))
    //   .then(response => console.log(response))
  };

  return (
    <div>
      <Navbar className="nav fixed-top " expand="lg">
        <Navbar.Brand href="/">
          <img
            class="logo-image"
            src={MyflixLogo4}
            class="img-fluid"
            width="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-start"
        >
          <Nav>
            <Nav.Link href="/">Search</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="user text-warning pb-0">
              <p class="text-warning">Logged in as: {userState.username}</p>
            </Nav.Link>
            <Nav.Link href={`${BACKEND_URL}/logout`}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
