import React, { useState, useEffect } from "react";
import "../styles/search.css";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from "../static/MovieCard";
import Header from "../static/Header";

const Search = () => {
  const [results, setResultsState] = useState([]);
  const [movieState, setMovieState] = useState({ results: [] });
  const [titleState, setTitleState] = useState("");

  const handleChange = (event) => {
    setTitleState(event.target.value);
    console.log(event.target.value);
  };

  async function getMovie() {
    let title = titleState;
    const idResponse = await fetch(
      "https://imdb-api.com/en/API/SearchMovie/k_q83az6pl/" + title,
      {
        method: "GET",
      }
    );
    const movie = await idResponse.json();
    const newResults = await movie.results;
    const movieId = await movie.results[0].id;
    console.log(await movie);
    console.log("MOVIE ID: " + movieId);

    const movieResponse = await fetch(
      "https://imdb-api.com/en/API/Title/k_q83az6pl/" + movieId,
      {
        method: "GET",
      }
    );
    const movieInfo = await movieResponse.json();
    const newMovieState = movieInfo;
    setMovieState(newMovieState);
    setResultsState(newResults);
  }

  // console.log(results);

  console.log("TITLESTATE: " + titleState);

  // rendering movie list
  const renderMovies = (movieState) => {
    return movieState.results.map((movie) => <MovieCard movie={movie} />);
  };
  // end

  return (
    <div>
      <div className="textBox">
        <input
          type="text"
          id="searchBar"
          placeholder="Search for a Movie Title..."
          onChange={handleChange}
        />
        <button onClick={getMovie} type="button" className="submitButt">
          <i class="fa fa-search"></i>
        </button>
      </div>

      <div>
        <Container flex={true}>
          {results.length % 3 == 0 ? (
            <Row className="row justify-content-md-center">
              {results.map((movie) => (
                <Col className="justify-content-md-center width">
                  <MovieCard movie={movie} />
                </Col>
              ))}
          
            </Row>
          ) : (
            <Row className="row justify-content-md-center">
              {results.map((movie) => (
                <Col className="justify-content-md-center width">
                  <MovieCard movie={movie} />
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
