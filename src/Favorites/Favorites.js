import React, { useState} from "react";
import Header from "../static/Header";

const Favorites = () => {

    const [movieState, setMovieState] = useState([]);
    const [userState, setUserState] = useState({});

  async function getFavorites() {
    const response = await fetch("http://localhost:8080/users/login", {
      method: "GET",
      credentials: "include",
    });
    const user = await response.json();
    await setUserState(user);
    await setMovieState(user.favoriteMovies);
    console.log(await user);
  }



  async function postFavorites() {
      const data = movieState;
      const response = await fetch("http://localhost:8080/users/favorites", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
      });
    //   const apiRes = await response.json();
    //   console.log(apiRes);
  }

  console.log(userState);
  console.log(movieState);

  return (
    <div>
      <Header />
      <button onClick={getFavorites}>Click</button>
      <button onClick={postFavorites}>Test Post</button>
    </div>
  );
};

export default Favorites;
