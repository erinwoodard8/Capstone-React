import React, { useState, useEffect } from "react";
import Header from "../static/Header";
import MovieCard from "../static/MovieCard";
import "../styles/favorites.css";
import { Row, Col, Container } from "react-bootstrap";
import { styles } from "ansi-colors";
import noMovieTrans from "../styles/noMovieTrans.png";

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

    if(favorites == null) {
      setListState(movieList);
    } else {
      for (let i = 0; i < favorites.length; i++) {
        const response = await fetch(
          "https://imdb-api.com/en/API/Title/k_q83az6pl/" + favorites[i],
          {
            method: "GET",
          }
        );
        const movie = await response.json();
        movieList.push(movie);
      }
      setListState(movieList);
    }
  }
  console.log(listState);

  return (
    <div>
    <Header />
  
    <div className="d-flex justify-content-center noFavLogo">
    {listState.length == 0 ? <div className="noFavorites" >
      <img src={noMovieTrans} />
      </div> 
      : <Container flex={true}>
    </Container>}  
    </div>
    <body>
<div ></div>
    </body>
  </div>
  );
};
export default Favorites;