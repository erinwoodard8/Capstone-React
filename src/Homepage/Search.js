import React, { useState, useEffect } from "react";
import "../styles/search.css";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from "../static/MovieCard";
import Header from "../static/Header";
import Modal from "../Homepage/Modal";

const Search = () => {
  const [results, setResultsState] = useState([]);
  const [movieState, setMovieState] = useState();
  const [titleState, setTitleState] = useState("");

  const handleChange = (event) => {
    setTitleState(event.target.value);
    console.log(event.target.value);
  };

  async function getMovieResults() {
    let title = titleState;
    const idResponse = await fetch(
      "https://imdb-api.com/en/API/SearchMovie/k_q83az6pl/" + title,
      {
        method: "GET",
      }
    );
    const movie = await idResponse.json();
    const newResults = await movie.results;
    setResultsState(newResults);
  }

  async function getMovieInfo(movie) {
    let movieId = movie.id;
    const movieResponse = await fetch(
      "https://imdb-api.com/en/API/Title/k_q83az6pl/" + movieId,
      {
        method: "GET",
      }
    );
    const movieInfo = await movieResponse.json();
    setMovieState(movieInfo);
    console.log(movieInfo);
  }

  

  return (
    <div>
      <div className="textBox">
        <input
          type="text"
          id="searchBar"
          placeholder="Search for a Movie Title..."
          onChange={handleChange}
        />
        <button onClick={getMovieResults} type="button" className="submitButt">
          <i class="fa fa-search"></i>
        </button>
      </div>

      {/* test start */}
      <div>
        <Modal />
      </div>
      {/* test end */}

      <div>
        <Container flex={true}>
          {results.length % 3 == 0 ? (
            <Row className="row justify-content-md-center">
              {results.map((movie) => (
                <Col className="justify-content-md-center width">
                  <MovieCard key={movie.id} movie={movie} getMovieInfo={getMovieInfo} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="row justify-content-md-center">
              {results.map((movie) => (
                <Col className="justify-content-md-center width">
                  <MovieCard key={movie.id} movie={movie} getMovieInfo={getMovieInfo}/>
                </Col>
              ))}
              <Col></Col>
            </Row>
          )}
        </Container>
      </div>

      {/* test end */}
    </div>
  );
};

export default Search;
