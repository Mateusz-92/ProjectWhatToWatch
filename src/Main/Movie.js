import React from "react";
import { MovieFilter } from "./MovieFilter";
import { useState, useEffect } from 'react'
import { getMovieById, getMovieByTag } from "../Api/Movies";

export const Movie = (props) => {
    const [movie, setMovie] = useState([])
    const MovieId = () => {
        getMovieById(`${this.props.match.params.movie.id}`).then(data => setMovie(data))
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
        </div>

    )
    console.log('Movie')
}