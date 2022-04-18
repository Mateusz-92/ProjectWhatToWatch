import React from "react";
import { MovieTile } from "./MovieTile";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {getRandomSuggestedMovie}   from "../Api/Movies";

export const Tmp = (props) => {
  const [movies, setMovie] = useState({});
  useEffect(()=>{
    getRandomSuggestedMovie(props.id).then(data => setMovie(data))
  },[])
  return (
      <div>
          {movies.length > 0 && (
              <>
              {movies.map(movie=>
          <MovieTile
              redirect= {movie.id}
              key= {movie.id}
              thumbnail= {movie.thumbnail}
              title = {movie.title}
              year = {movie.year}
          >              
          </MovieTile>
              )}
          </>
          )};
      </div>
  )
}


  