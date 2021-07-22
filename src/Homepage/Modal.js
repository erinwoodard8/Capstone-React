import React, { useEffect, useState } from "react";
import "../styles/modal.css";
import Modal from 'react-modal';
import { Row, Col, Container,Button } from "react-bootstrap";
import MovieCard from "../static/MovieCard";
import Results2 from "./Results2";


const ModalIn =() => {

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [displayState, setDisplayState] = useState(false);
    const [movieState, setMovieState] = useState();


    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const [inTheaterState, setInTheaterState] = useState([]);
      useEffect(() => {
          getInTheaters();
          setModalIsOpen(true);  
        }, []);
  
    async function getInTheaters() {
        const response = await fetch(
          "https://imdb-api.com/en/API/InTheaters/k_q83az6pl" ,
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
        // console.log(movieInfo);
      }


     return(
                <Modal closeTimeoutMS={1500} className="modalDisplay" isOpen={modalIsOpen} onRequestClose = {()=>setModalIsOpen(false)} >
                    <Button className="modalButt" onClick={setModalIsOpenToFalse}>Close</Button>
                    <div id="newRel">Now In Theaters</div>

                    <Container flex={true}>
                        {displayState ? <Results2 movieState={movieState} /> :
                        inTheaterState.length % 3 == 0 ? (
                        <Row className="row justify-content-md-center">
                            {inTheaterState.map((movie) => (
                            <Col className="justify-content-md-center">
                                <MovieCard movie={movie} getMovieInfo={getMovieInfo}/>
                            </Col>
                            ))}
                        
                        </Row>
                        ) : (
                        <Row className="row justify-content-md-center">
                            {inTheaterState.map((movie) => (
                            <Col className="justify-content-md-center">
                                <MovieCard movie={movie} getMovieInfo={getMovieInfo} />
                            </Col>
                            ))}
                            <Col></Col>
                        </Row>
                        )}
                    </Container>

                </Modal>
            )
};
export default ModalIn;