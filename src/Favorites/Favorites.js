import React, { useState, useEffect } from "react";
import Header from "../static/Header";
import MovieCard from "../static/MovieCard";
import "../styles/favorites.css";
import { Row, Col, Container } from "react-bootstrap";

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
  console.log(listState);

  return (
    <div>
    <Header />    
    <Container flex={true}>
      {listState.length % 3 == 0 ? (
        <Row className="row justify-content-md-center">
          {listState.map((movie) => (
            <Col className="justify-content-md-center">
              <MovieCard movie={movie} />
            </Col>
          ))}
      
        </Row>
      ) : (
        <Row className="row justify-content-md-center">
          {listState.map((movie) => (
            <Col className="justify-content-md-center">
              <MovieCard movie={movie} />
            </Col>
          ))}
          <Col></Col>
        </Row>
      )}
    </Container>
  </div>
  );
};

export default Favorites;
