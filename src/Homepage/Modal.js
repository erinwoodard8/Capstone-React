import React, { useEffect, useState } from "react";
import "../styles/modal.css";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import MovieCard from "../static/MovieCard";
import Results from "../static/Results";

const ModalIn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [displayState, setDisplayState] = useState(false);
  const [movieState, setMovieState] = useState();
  const [backButtState, setBackButtState] = useState(false);

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const [inTheaterState, setInTheaterState] = useState([]);
  useEffect(() => {
    getInTheaters();
    setModalIsOpen(true);
  }, []);

  async function getInTheaters() {
    const response = await fetch(
      "https://imdb-api.com/en/API/InTheaters/k_q83az6pl",
      {
        method: "GET",
      }
    );
    const movie = await response.json();
    setInTheaterState(movie.items);
    console.log(movie.items);
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
  }

  const back = () => {
    setDisplayState(false);
  };

  return (
    <Modal
      closeTimeoutMS={1500}
      className="modalDisplay"
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <Button className="modalButt" onClick={setModalIsOpenToFalse}>
        Close
      </Button>

      {displayState ? (
        <Results
          movieState={movieState}
          back={back}
          backButtState={backButtState}
        />
      ) : (
        <div className="card-div">
          <div className="newRel">Now In Theaters</div>
          {inTheaterState.map((movie) => (
            <MovieCard movie={movie} getMovieInfo={getMovieInfo} />
          ))}
        </div>
      )}
    </Modal>
  );
};
export default ModalIn;
