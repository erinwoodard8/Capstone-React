import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {

  const [movieState, setMovieState] = useState({});
  const [titleState, setTitleState] = useState("");

  const handleChange =(event) => {
    setTitleState(event.target.value);
    console.log(event.target.value);
  }
  

  async function getMovie() {
    let title = titleState;
    const idResponse = await fetch(
      "https://imdb-api.com/en/API/SearchMovie/k_2whi6r49/" + title,
      {
        method: "GET",
      }
    );
    const movie = await idResponse.json();
    const movieId = await movie.results[0].id;
    console.log(await movie);
    console.log((await "MOVIE ID: ") + movieId);

    const movieResponse = await fetch(
      "https://imdb-api.com/en/API/Title/k_2whi6r49/" + movieId,
      {
        method: "GET",
      }
    );
    const movieInfo = await movieResponse.json();
    const newMovieState = movieInfo;
    await setMovieState(newMovieState);
    // console.log(await movieState.toString());
  }

  console.log("TITLESTATE: " + titleState);
  

  return (
    <div>
      <div className="textBox">
        <input
          type="text"
          id="searchBar"
          placeholder="Search for a Movie Title..."
          onChange={handleChange}
          // value={titleState}
        />

        <h1>TITLE:</h1><h1>{movieState.title}</h1>
        <button onClick={getMovie} type="button" className="submitButt">
         <i class="fa fa-search"></i>

        </button>
      </div>
    </div>
  );
};

export default Search;
