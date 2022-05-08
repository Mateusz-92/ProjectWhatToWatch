import React from "react";
import { useEffect, useState } from "react";
import { getMovieByTag } from "../Api/Movies";
import { HomeWrapper } from "./Home";
import { CoverWrapper, MoviesWrapper } from "./MovieFilter";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";

const Header = styled.div`
  margin-left: 2.5%;
  margin-bottom: 8rem;

  .star_image {
    position: absolute;
    right: 2.5%;
    top: 0px;
    max-width: 80%;
    opacity: 80%;
  }
  h1 {
    margin-left: 2.5%;
    margin-top: 2%;
    z-index: 10;
    position: relative;
  }
`;

export const Recommended = () => {
  const [movies, SetMovie] = useState([]);
  useEffect(() => {
    getMovieByTag("fav").then((data) => SetMovie(data));
  }, []);
  return (
    <HomeWrapper>
      <LogoComponent />
      <Header>
        <h1>Polecamy do oglądania</h1>
        <div>
          <img className="star_image" src="/images/recommended2.png"></img>
        </div>
      </Header>
      <MoviesWrapper>
        {movies.length > 0 && (
          <div className="movies">
            {movies.map((movie) => (
              <CoverWrapper key={movie.id}>
                <Link className="links" to={`/movie/${movie.id}`}>
                  <div class="cover">
                    <img className="thumbnail" src={movie.thumbnail}></img>
                  </div>
                  <div className="title">
                    <span className="span_overflow">{movie.title}</span>
                    <span>{movie.year}</span>
                  </div>
                </Link>
              </CoverWrapper>
            ))}
          </div>
        )}
      </MoviesWrapper>
    </HomeWrapper>
  );
};
