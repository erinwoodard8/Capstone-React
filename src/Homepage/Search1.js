import React, { useState, useEffect } from "react";
import "../styles/search1.css";
import { Row,Col, Container } from "react-bootstrap";
import MovieCard from "../Favorites/MovieCard";
import Header from "../static/Header";

const Search1 = () => {
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
          <Header />
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
          
            {/* display movie list start */}
            {/* <Container id="movieDisplay" >
              <Row>
              {results.map((movie) => (
                    <Col md="3">
                      <MovieCard movie={movie} />
                    </Col>
                  ))}
              </Row>
            </Container> */}


                {/* test start */}
                  <div>
                    <Container  flex={true} >
                        <Row className="row justify-content-md-center">
                          
                              {results.map((movie) => (
                              <Col className="justify-content-md-center width" >
                                <MovieCard movie={movie} />
                              </Col>
                              ))}
                              <Col></Col>
                          
                        </Row>
                    </Container>
                  </div>
            
                {/* test end */}

          
        </div>
  );
};

export default Search1;
