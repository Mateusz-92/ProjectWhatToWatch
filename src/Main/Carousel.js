import React, { useState, useEffect } from 'react';
import { fetchRandomMovie } from '../Api/Movies'

const Carousel = (props) => {

    let [movieImage, setMovieImage] = useState(null)

    useEffect(() => {
        fetchRandomMovie()
            .then(response => response?.data)
            .then(data => setMovieImage(data.thumbnail))
    }, [])

    return (
        <div>
            {movieImage && <img src={movieImage}></img>}
        </div>
    );
}

export default Carousel;