import React from "react";
import { useEffect, useState } from "react";
import { CoverWrapper } from "./CoverWrapper";
import { getMovieByTag } from "../Api/Movies";
import { HomeWrapper } from "./Home";
import { MoviesWrapper } from "./MovieFilter";
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
              <CoverWrapper
                key={movie.id}
                redirect={movie.id}
                thumbnail={movie.thumbnail}
                title={movie.title}
                year={movie.year}
              />
            ))}
          </div>
        )}
      </MoviesWrapper>
    </HomeWrapper>
  );
};
