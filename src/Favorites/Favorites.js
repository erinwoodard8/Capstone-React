import React, { useState, useEffect} from "react";
import Header from "../static/Header";
import MovieCard from "./MovieCard";
import '../styles/favorites.css';

const Favorites = () => {
  const [favoriteState, setFavoriteState] = useState([]);
  const [listState, setListState] = useState([]);
//   const [movieState, setMovieState] = useState({})

  useEffect(()=> {
    getFavorites();
    console.log(listState);
  }, [listState])  

  async function getFavorites() {
    const response = await fetch("http://localhost:8080/users/login", {
      method: "GET",
      credentials: "include",
    });
    const user = await response.json();
    let favorites = favoriteState;
    favorites = user.favoriteMovies;
    setFavoriteState(favorites);
  }



 
  async function createList() {
    let movieList = [];
      for(let i = 0; i < favoriteState.length; i++) {
          const response = await fetch("https://imdb-api.com/en/API/Title/k_7mrq9eci/" + favoriteState[i],{
              method: "GET",
          })
            const movie = await response.json();
            movieList.push(movie);
      }
       setListState(movieList);
  }

//   async function renderCards() {
//       let movieList = await createList();
//       console.log(movieList.length);
//       for(let i = 0; i < movieList.length; i++) {  
//         console.log(movieList[i].title);
//       }
//   }

  




  return (
    <div>
      <Header />

      {/* <button onClick={getFavorites}>Click</button> */}
      {/* {renderCards()} */}
      <div className="container">
        {listState.map(movie => {
            return <MovieCard movie={movie} />
        })}
      </div>  
      <button onClick={createList}>Loop</button>
    </div>
  );
};

export default Favorites;
