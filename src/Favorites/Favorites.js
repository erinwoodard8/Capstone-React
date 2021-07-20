import React, { useState, useEffect } from "react";
import Header from "../static/Header";
import MovieCard from "../static/MovieCard";
import "../styles/favorites.css";
import { Row, Col, Container } from "react-bootstrap";
import { styles } from "ansi-colors";
import noMovieTrans from "../styles/noMovieTrans.png";
// import Illusion from "../static/Illusion.jpg";
// import Illusion from "../styles/Illusion.jpg";
// import Panther from "../styles/Panther.jpg";


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
    {/* <div style={{
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${/styles/panther.jpg})`
}} /> */}

    <div className="d-flex justify-content-center noFavLogo">
    {/* <img src="Panther.jpg" class="mx-auto d-block"></img> */}

    
    {listState.length == 0 ? <div className="noFavorites">
      <img src={noMovieTrans} />
      </div> 
      : <Container flex={true}>

        {/* Below populates if no favorite movies are present */}
        {/* But picture only appears momentarily */}

      {/* {listState.length % 3 == 0 ? (
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
      )} */}
    </Container>}  
    </div>
    <body>
    {/* <div style={{ width: 660, height: 'auto' }}>
  <Ratio aspectRatio="16x9">
    <embed type="image/svg+xml" src="../Styles/Panther.jpg" />
  </Ratio>
</div> */}
       {/* <div style={{
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${Panther.jpg})`
}} /> */}
<div ></div>
    </body>
  </div>
  );
};
export default Favorites;