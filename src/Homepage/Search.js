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
    setMovieState(newMovieState);
    console.log(await movieState);
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
            <button onClick={getMovie} type="button" className="submitButt">
                <i class="fa fa-search"></i>
            </button>
        {/* <form>
        <h1>Title:</h1><h1>{movieState.title} </h1>
            <div>
                <h3>Image:</h3> <img src={movieState.image} />
                <h3>Runtime:</h3> <h3> {movieState.runtimeMins} </h3> 
                <h3>Plot:</h3> <h3>{movieState.plot} </h3> 
                <h3>Award:</h3> <h3>{movieState.awards}</h3>  
                <h3>Year:</h3> <h3>{movieState.year} </h3>
            </div> 
        </form> */}
        <form>
        <h1>Title: {movieState.title} </h1>
            <div className= "displayInfo">
                <img className="img1" src={movieState.image} width="800" height="800"/>  
                <h3>Year: {movieState.year} | Runtime: {movieState.runtimeMins} Minutes </h3> 
                <h3>Award:{movieState.awards}</h3>
                <h3>Plot:</h3> <h3>{movieState.plot} </h3> 
            </div> 
        </form>
        
      </div>
    </div>
  );
};

export default Search;
