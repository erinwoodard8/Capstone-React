import React, { useState, useEffect } from "react";
import "../styles/results.css";

const Results2 = ({movieState, back}) => {
  const [userState, setUserState] = useState({});



  useEffect(() => {
    getUser();
  }, []);

  console.log(movieState.title);

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
    if (user.favoriteMovies == null) {
      user.favoriteMovies = [movieId];
    } else {
      user.favoriteMovies.push(movieId);
      alert("movie has been added to favorites");
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

  return (
    <div className="main-container">
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-3 img-container">
          <img
            className="img-fluid"
            max-width="50%"
            src={movieState.image}
          />
        </div>

        <div
          className="col-md-7 info-container"
          //   className="col-md-7 card p-2 border-left-0 img-responsive center-block d-block mx-auto "
        >
          <p className="movieTitle">{movieState.title} </p>
          <p className="time">
            {" "}
            {movieState.year} | {movieState.runtimeMins}{" "}
            min{" "}
          </p>

          <div>
            <p className="header-text">Award:</p>
            <p className="info-text">{movieState.awards}</p>
            <br></br>
            <p className="header-text"> Plot: </p>
            <p className="info-text">{movieState.plot}</p>
          </div>
          <button
            type="button"
            class="btn btn-warning resultsBtn"
            onClick={saveMovie}
          >
            Add to favorite{" "}
          </button>

          <button onClick={back}>BACK</button>
        </div>

        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default Results2;
