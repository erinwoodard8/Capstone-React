import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/movieCard.css";


const MovieCard = ({ movie, listState, removeFavorite, getMovieInfo }) => {
  const buttonRender = () => {
    if (listState == undefined) {
      return <p></p>;
    } else if (listState.length > 0) {
      for (let i = 0; i < listState.length; i++) {
        if (listState[i].id.includes(movie.id)) {
          return (
            <Button onClick={() => removeFavorite(movie)}className="delete-button">
              <i class="fa fa-trash fa-2x fa-del " aria-hidden="true"></i>
            </Button>
          );
        }
      }
    } else {
      return <p></p>;
    }
  };

//Send movie.id to the results page as a prop
  return (
    <Card className="card-container" style={{ width: "18rem" }}>
      <Card.Img className="card-image" variant="top" src={movie.image} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{movie.title}</Card.Title>
        {buttonRender()}
        <Button className="moreInfoBtn" onClick={() => getMovieInfo(movie)}>More Info</Button>
      </Card.Body>
    </Card>
  );
};


export default MovieCard;
