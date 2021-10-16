import React, { useEffect, useState } from "react";
import { ResponsiveEmbed } from "react-bootstrap";

const Test = () => {
  const [userState, setUserState] = useState({});

  useEffect(() => {
    // getUser();
    postUser();
  }, []);

  //not actually using this right now, using post response
  const getUser = () => {
    fetch("https://localhost:8080/users/login", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => setUserState(json));
    // .then(userState => console.log(userState));
  };

  const postUser = () => {
    let data = userState;
    fetch("https://localhost:8080/users/post/google", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setUserState(json))
      .then((json) => console.log(json));
  };

  console.log(userState);

  // console.log(userState.hasOwnProperty("username"));
  return (
    <div>
      <button onClick={getUser}>TEST</button>
      <button onClick={postUser}>POST</button>
      <a href="https://localhost:8080/oauth2/authorization/google">
        <button>Click me</button>
      </a>
      Welcome {userState.username}
    </div>
  );
};

export default Test;
