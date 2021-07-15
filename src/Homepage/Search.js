import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {

  const [movieState, setMovieState] = useState({});
  const [titleState, setTitleState] = useState("");

  const handleChange =(event) => {
    setTitleState(event.target.value);
    console.log(event.target.value);
  }
  
// IF THE RESPONSE IS NULL YOU NEED TO USE A DIFFERENT API KEY BECAUSE OF THE REQUEST LIMIT (k_2whi6r49 OR k_sf4k7xi2 OR k_7mrq9eci)
  async function getMovie() {
    let title = titleState;
    const idResponse = await fetch(
      "https://imdb-api.com/en/API/SearchMovie/k_q83az6pl/" + title,
      {
        method: "GET",
      }
    );
    const movie = await idResponse.json();
    const movieId = await movie.results[0].id;
    console.log(await movie);
    console.log((await "MOVIE ID: ") + movieId);

    const movieResponse = await fetch(
      "https://imdb-api.com/en/API/Title/k_q83az6pl/" + movieId,
      {
        method: "GET",
      }
    );
    const movieInfo = await movieResponse.json();
    const newMovieState = movieInfo;
    await setMovieState(newMovieState);
    // console.log(await movieState.toString());
  }

  console.log("TITLESTATE: " + titleState);
  

  return (
    <div>
      <div className="textBox">
        <input
          type="text"
          id="searchBar"
          placeholder="Search for a Movie Title..."
          onChange={handleChange}
          // value={titleState}
        />
            <button onClick={getMovie} type="button" className="submitButt">
                <i class="fa fa-search"></i>
            </button>
        
        <form>
              <br></br>
              <br></br>
              <div className="container-fluid" >
                    <div className= "row">
                      <div className="col-md-1"></div>
                        
                        <div id="imageBg" className="col-md-3 card p-2 border-right-0 img-responsive center-block d-block mx-auto">
                            <img className="img-fluid" width="80%" src={movieState.image} /> 
                        </div>

                        <div id="textColor" className="col-md-7 card p-2 border-left-0 img-responsive center-block d-block mx-auto "  >  
                            <p className="movieTitle">{movieState.title} </p>
                            <p className="time"> {movieState.year} | {movieState.runtimeMins} min </p>
                            
                            <div><h2>Award:</h2>
                                  <h4>{movieState.awards}</h4>
                                  <br></br> 
                                  <h2> Plot: </h2>
                                  <h4>{movieState.plot}</h4>
                            </div>
                            <button type="button" class="btn btn-warning">Add to favorite </button>
                        </div>

                      <div className="col-md-1"></div>    
                    </div> 
              </div>
        </form>

          {/* testing part start */}

          

          {/* testing part end */}

        
      </div>
    </div>
  );
};

export default Search;
