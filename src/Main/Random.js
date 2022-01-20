import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./Home";
import { Link } from "react-router-dom"
import styled from "styled-components";

const MovieWrapper = styled.div`
width: 90%;
height: 12.5em;
background-color: #FFD756;
left: 1em;
top: 1em;
position: relative;
box-sizing: border-box;

img {
    max-height: 90%;
    position: absolute;
    top: 10px;
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
    overflow: hidden;
}

`
const MovieHeaders = styled.div`
position: absolute;
max-width: 100%;
height: 100px;
left: 140px;
`
const BackWrapper = styled.div`
width:  100px;
margin-left: 10px;

button {
background-color: #f8c317;
border: none;
}
button :hover{
    background-color:  #FFD756;
}
span {
    margin-left: 3px;
    font-weight: 900;
}
`



export const Random = () => {
    const APIurl = 'https://wtwapi.azurewebsites.net/api/movies/random';
    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetch(APIurl)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, []);
    return (
        <HomeWrapper>
            <BackWrapper>
                <Link to="/revolver">
                    <button><img src="/images/back_icon.png"></img></button>
                </Link>
                <span>BACK</span>
            </BackWrapper>
            <MovieWrapper>
                <img src={movie.thumbnail}></img>
                <MovieHeaders>
                    <h1>{movie.title}</h1>
                    <h3>{movie.year}</h3>
                    <p>{movie.description}</p>
                </MovieHeaders>

            </MovieWrapper>
        </HomeWrapper>

    )
}
