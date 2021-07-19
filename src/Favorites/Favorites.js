import React, { useState, useEffect } from "react";
import Header from "../static/Header";
import MovieCard from "./MovieCard";
import "../styles/favorites.css";

const Favorites = () => {
  const [listState, setListState] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  async function getFavorites() {
    const response = await fetch("http://localhost:8080/users/login", {
      method: "GET",
      credentials: "include",
    });
    const user = await response.json();
    let favorites = user.favoriteMovies;

    let movieList = [];
    console.log(favorites);
    for (let i = 0; i < favorites.length; i++) {
      const response = await fetch(
        "https://imdb-api.com/en/API/Title/k_7mrq9eci/" + favorites[i],
        {
          method: "GET",
        }
      );
      const movie = await response.json();
      movieList.push(movie);
    }
    setListState(movieList);
  }
  console.log(listState);

  return (
    <div>
      <Header />

      <div className="container">
        {listState.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
