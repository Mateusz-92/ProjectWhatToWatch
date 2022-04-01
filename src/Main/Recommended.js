import React from "react";
import { useEffect, useState } from "react";
import { getMovieByTag } from "../Api/Movies";
import { BackButton } from "./BackButton";
import { HomeWrapper } from "./Home";
import { CoverWrapper, MoviesWrapper } from "./MovieFilter";
import { Link } from "react-router-dom"
import styled from "styled-components";

const Header = styled.div`
 margin-left: 2.5% ;
 margin-bottom: 8rem ;

 .star_image{
    position: absolute;
     right: 2.5%;
     top: 0px;
     max-width: 80%;
     opacity: 60%;
 }
 h1 {
     margin-left: 2.5%;
     margin-top: 2%;
 }

`

export const Recommended = () => {
    const [movies, SetMovie] = useState([]);
    useEffect(() => {
        getMovieByTag("fav").then(data => SetMovie(data))
    }, [])
    return (
        <HomeWrapper>
            <Header>
                <BackButton />
                <h1>Polecamy do oglądania</h1>
                <img className="star_image" src="/images/recommended2.png"></img>
            </Header>
            <MoviesWrapper>
                {movies.length > 0 && (
                    <div className="movies">
                        {movies.map(movie => (
                            <>
                                <CoverWrapper >
                                    <Link className="links" to={`${movie.id}`} >
                                        <div class="cover">
                                            <img className="thumbnail" src={movie.thumbnail}></img>
                                        </div>
                                        <div className="title" key={movie.id}>{movie.title}
                                            <span>{movie.year}</span>
                                        </div>
                                    </Link>
                                </CoverWrapper>
                            </>
                        ))}
                    </div>
                )}
            </MoviesWrapper>
        </HomeWrapper>
    )
}