import React, { useState, useEffect } from "react";
import Header from "../static/Header";
import MovieCard from "../static/MovieCard";
import "../styles/favorites.css";
import { Row, Col, Container } from "react-bootstrap";
import noMovieTrans from "../static/noMovieTrans.png";

const Favorites = () => {
  const [listState, setListState] = useState([]);
  const [renderState, setRenderState] = useState(true);

  useEffect(() => {
    getFavorites();
  }, [renderState]);

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
  async function removeFavorite(movie) {
    console.log(movie);
    const userResponse = await fetch("http://localhost:8080/users/login", {
      method: "GET",
      credentials: "include",
    });
    const user = await userResponse.json();
    const favorites = user.favoriteMovies;
    const movieIndex = favorites.indexOf(movie.id);
    favorites.splice(movieIndex, 1);
    
    const response = await fetch("http://localhost:8080/users/favorites", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRenderState(!renderState);
  }
  return (
    <div>
      <Header />
      {listState.length == 0 ? (
        <div className="noFavorites">
          <img className="img-fluid" width="50%"  src={noMovieTrans} />
        </div>
      ) : (
        <Container flex={true}>
          {listState.length % 3 == 0 ? (
            <Row className="row justify-content-md-center">
              {listState.map((movie) => (
                <Col key={movie.id} className="justify-content-md-center">
                  <MovieCard
                    movie={movie}
                    listState={listState}
                    removeFavorite={removeFavorite}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="row justify-content-md-center">
              {listState.map((movie) => (
                <Col key={movie.id} className="justify-content-md-center">
                  <MovieCard
                    movie={movie}
                    listState={listState}
                    removeFavorite={removeFavorite}
                  />
                </Col>
              ))}
              <Col></Col>
            </Row>
          )}
        </Container>
      )}
    </div>
  );
};
export default Favorites;
