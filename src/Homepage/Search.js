import React, { useState } from "react";
import "../styles/search.css";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from "../static/MovieCard";
import Header from "../static/Header";
import Modal from "../Homepage/Modal";
import Results2 from "../Homepage/Results2";

const Search = () => {
  const [results, setResultsState] = useState([]);
  const [movieState, setMovieState] = useState();
  const [titleState, setTitleState] = useState("");
  const [displayState, setDisplayState] = useState(false);

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
    setDisplayState(true);
    // console.log(movieInfo);
  }

  const back = () => {
    setDisplayState(false);
  };

  return (
    <div>
      {displayState ? (
        <Results2 movieState={movieState} back={back} />
      ) : (
        <div>
          <div className="textBox">
            <input
              type="text"
              id="searchBar"
              placeholder="Search for a Movie Title..."
              onChange={handleChange}
            />
            <button
              onClick={getMovieResults}
              type="button"
              className="submitButt"
            >
              <i class="fa fa-search"></i>
            </button>
          </div>
        {movieState === undefined ?<div><Modal /></div> : <p></p> }
     

          <div>
            <Container flex={true}>
              {results.length % 3 == 0 ? (
                <Row className="row justify-content-md-center">
                  {results.map((movie) => (
                    <Col className="justify-content-md-center width">
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        getMovieInfo={getMovieInfo}
                      />
                    </Col>
                  ))}
                </Row>
              ) : (
                <Row className="row justify-content-md-center">
                  {results.map((movie) => (
                    <Col className="justify-content-md-center width">
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        getMovieInfo={getMovieInfo}
                      />
                    </Col>
                  ))}
                  <Col></Col>
                </Row>
              )}
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
