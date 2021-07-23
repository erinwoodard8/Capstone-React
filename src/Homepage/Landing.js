import React, { useState, useEffect } from "react";
import Login from "./Login";
// import Test from '../test';
import Search from "./Search";
import Header from "../static/Header";

const Landing = () => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch("http://localhost:8080/users/login", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
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
