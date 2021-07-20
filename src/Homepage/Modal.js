import React, { useEffect, useState } from "react";
import "../styles/modal.css";
import Modal from 'react-modal';
import { Row, Col, Container,Button } from "react-bootstrap";
import MovieCard from "../static/MovieCard";


const ModalIn =() => {

    const [modalIsOpen,setModalIsOpen] = useState(false);
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


     return(
                <Modal className="modalDisplay" isOpen={modalIsOpen} onRequestClose = {()=>setModalIsOpen(false)} >
                    <Button className="modalButt" onClick={setModalIsOpenToFalse}>Close</Button>
                    <div id="newRel">Now In Theaters</div>

                    <Container flex={true}>
                        {inTheaterState.length % 3 == 0 ? (
                        <Row className="row justify-content-md-center">
                            {inTheaterState.map((movie) => (
                            <Col className="justify-content-md-center">
                                <MovieCard movie={movie} />
                            </Col>
                            ))}
                        
                        </Row>
                        ) : (
                        <Row className="row justify-content-md-center">
                            {inTheaterState.map((movie) => (
                            <Col className="justify-content-md-center">
                                <MovieCard movie={movie} />
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