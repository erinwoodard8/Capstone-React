import React, { useState } from "react";
import "../styles/search.css";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from "../static/MovieCard";
import Modal from "../Homepage/Modal";
import Results from "../static/Results";
import MyflixLogo4 from "../static/MyflixLogo4.png";
import {API}from "../constant.js";

const Search = () => {
  const [resultsState, setResultsState] = useState([]);
  const [movieState, setMovieState] = useState();
  const [titleState, setTitleState] = useState("");
  const [displayState, setDisplayState] = useState(false);
  const [backButtState, setBackButtState] = useState(true);

  const handleChange = (event) => {
    setTitleState(event.target.value);
    console.log(event.target.value);
  };

  async function getMovieResults(e) {
    e.preventDefault();
    let title = titleState;
    const idResponse = await fetch(
      // "https://imdb-api.com/en/API/SearchMovie/k_q83az6pl/" + title,
      `https://imdb-api.com/en/API/SearchMovie/${API}/` + title,
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
      // "https://imdb-api.com/en/API/Title/k_q83az6pl/" + movieId,
    "https://imdb-api.com/en/API/Title/k_r20x61v5/" + movieId,
      {
        method: "GET",
      }
    );
    const movieInfo = await movieResponse.json();
    setMovieState(movieInfo);
    setDisplayState(true);
  }

  const back = () => {
    setDisplayState(false);
  };

  console.log(resultsState);
  return (
    <div>
      {displayState ? (
        <Results
          movieState={movieState}
          back={back}
          backButtState={backButtState}
        />
      ) : (
        <div>
          <div className="textBox">
            <form>
              <input
                type="text"
                id="searchBar"
                placeholder="Search for a Movie Title..."
                onChange={handleChange}
              />
              <button
                onClick={getMovieResults}
                type="submit"
                className="submitButt"
              >
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>

          {resultsState.length === 0 ? (
            <div>
              <Modal />
              <div className="blank-search">
                <img className="img-fluid" width="650px" src={MyflixLogo4} />
              </div>
            </div>
          ) : (
            <p></p>
          )}

          <div>
            <Container flex={true}>
              {resultsState.length % 3 == 0 ? (
                <Row className="row justify-content-md-center">
                  {resultsState.map((movie) => (
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
                  {resultsState.map((movie) => (
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
