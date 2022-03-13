import { useState, useEffect } from "react";
import { fetchRandomMovie } from '../Api/Movies';
import styled from "styled-components";

const MovieWrapper = styled.div`
height: 25%;
background-color: #FFD756;
box-sizing: border-box;
position: relative;
overflow: auto;
text-overflow: ellipsis;
margin-bottom: 5%;
margin-left: 2.5%;
margin-right: 2.5%;

::-webkit-scrollbar { 
    display: none; 
}

img {
    max-width: 100%;
    max-height:100%;
    
}
h1 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 2px;
    
}
h3 {
    font-size: 16px;
    color: #AE8A14;
    font-weight: 900; 
    margin-top: 2px;
 }
p {
    
}
.img_wrapper{
    width: 35%;
    height: 90%;
    margin: 2.5% 2.5% 2.5% 2.5%;
    float: left;
}
`

const RandoMovieHeaderWrapper = styled.div`
width: 55%;
float: left;
margin-right: 2.5%;
height: 100%;
`
export const RandomMovie = () => {

    const [movie, setRandom] = useState({})
    useEffect(() => {
        fetchRandomMovie().then(data => setRandom(data));
    }, []);
    return (

        <MovieWrapper>
            <div className="img_wrapper">
                <img src={movie.thumbnail}></img>
            </div>
            <RandoMovieHeaderWrapper>
                <h1 >{movie.title}</h1>
                <h3>{movie.year}</h3>
                <p>{movie.description}</p>
            </RandoMovieHeaderWrapper>
        </MovieWrapper>

    )
}