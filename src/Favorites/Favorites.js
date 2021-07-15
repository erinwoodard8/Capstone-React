import React, { useState} from "react";
import Header from "../static/Header";

const Favorites = () => {

    const [movieState, setMovieState] = useState([]);
   

  async function getFavorites() {
    const response = await fetch("http://localhost:8080/users/login", {
      method: "GET",
      credentials: "include",
    });
    const user = await response.json();
    let favorites = movieState;
    favorites = user.favoriteMovies;
    console.log(favorites);
  }



  return (
    <div>
      <Header />
      <button onClick={getFavorites}>Click</button>
    </div>
  );
};

export default Favorites;
