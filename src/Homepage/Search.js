import React, { useState } from "react";
import "../styles/search.css";
import { Form, FormControl, Button } from "react-bootstrap";
const Search = () => {

  const [movieState, setMovieState] = useState({});

  async function getMovie() {
    let title = searchBar.value;
    const idResponse = await fetch(
      "https://imdb-api.com/en/API/SearchMovie/k_7mrq9eci/" + title,
      {
        method: "GET",
      }
    );
    const movie = await idResponse.json();
    const movieId = await movie.results[0].id;
    console.log((await "MOVIE ID: ") + movieId);

    const movieResponse = await fetch(
      "https://imdb-api.com/en/API/Title/k_7mrq9eci/" + movieId,
      {
        method: "GET",
      }
    );
    const movieInfo = await movieResponse.json();
    const newMovieState = movieInfo;
    setMovieState(newMovieState);
    console.log(await movieInfo);
  }

  return (
    <div>
      <div className="textBox">
        <input
          type="text"
          id="searchBar"
          placeholder="Search for a Movie Title..."
        />

        <h1>TITLE:</h1><h1>{movieState.title}</h1>
        <button onClick={getMovie} type="button" className="submitButt">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
