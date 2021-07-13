import React from "react";
import "../styles/search.css";
import { Form, FormControl, Button } from "react-bootstrap";
const Search = () => {
  async function getMovie() {
    let title = "hobbit";
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
    console.log(await movieInfo.plot);
  }

  return (
    <div>
      <div className="textBox">
        <input
          type="text"
          id="searchBar"
          placeholder="Search for a Movie Title..."
        />
        <button onClick={getMovie} type="button" className="submitButt" onclick="search()">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
