import React from 'react';
import Card from "react-bootstrap/Card";
import '../styles/movieCard.css';


const MovieCard = ({movie}) => {
return(
    <Card className="card-container" style={{ width: "18rem" }}>
    <Card.Img className="card-image" variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
    </Card.Body>  
  </Card>
)
}

export default MovieCard;