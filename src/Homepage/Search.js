import React, { useState, useEffect } from "react";
import "../styles/search.css";

const Search = () => {

  const [movieState, setMovieState] = useState({});
  const [titleState, setTitleState] = useState("");
  const [userState, setUserState] = useState({id:"", username:"", email:"", favoriteMovies:[""]});


  const handleChange =(event) => {
    setTitleState(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    // console.log(movieState);
    
    getUser();
  
  }, [])
  
// IF THE RESPONSE IS NULL YOU NEED TO USE A DIFFERENT API KEY BECAUSE OF THE REQUEST LIMIT (k_2whi6r49 OR k_sf4k7xi2 OR k_7mrq9eci OR k_q83az6pl)
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
    console.log(("MOVIE ID: ") + movieId);

    const movieResponse = await fetch(
      "https://imdb-api.com/en/API/Title/k_2whi6r49/" + movieId,
      {
        method: "GET",
      }
    );
    const movieInfo = await movieResponse.json();
    const newMovieState = movieInfo;
    setMovieState(newMovieState);
  }

  async function getUser() {
    const response = await fetch("http://localhost:8080/users/login", {
      method: "GET",
      credentials: "include",
    });
    const user = await response.json();
    const newUserState = user;
    console.log(newUserState);
    setUserState(await newUserState);
    //above works
  }
  
  async function saveMovie() {
    const movieId = movieState.id;
    console.log(movieId);
    let user = userState;
    if(user.favoriteMovies == null) {
    user.favoriteMovies=[movieId];
    } else {
      user.favoriteMovies.push(movieId);
    }
    // console.log(user.favoriteMovies);

    const response = await fetch("http://localhost:8080/users/favorites", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("POSTUSER" + json);
    console.log(user.favoriteMovies);
  }





  // async function getFavorites() {
  //   const response = await fetch("http://localhost:8080/users/login", {
  //     method: "GET",
  //     credentials: "include",
  //   });
  //   const user = await response.json();
  //   await user.favoriteMovies.push(movieState.id);
  //   await setUserState(user);
  //   console.log("USERSTATE: " +  JSON.stringify(user));

  //   console.log(await userState.favoriteMovies);

    
  //   const postResponse = await fetch("http://localhost:8080/post/google", {
  //       method: "POST",
  //       body: JSON.stringify(userState),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //   });
    // const json = await postResponse.json();
    // console.log(await "POSTUSER: " + JSON.stringify(json));
  // }


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

      {/* <button onClick={getUser}>GET USER</button> */}
      <button onClick={saveMovie}>SAVE MOVIE</button>
    </div>
  );
};

export default Search;
