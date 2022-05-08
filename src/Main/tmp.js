import React from "react";
import { MovieTile } from "./MovieTile";
import { useState, useEffect } from "react";
import { getRandomSuggestedMovie } from "../Api/Movies";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 5%;
  text-align: center;
  color: black;
  width: 90%;
  margin: 0 auto;
  margin-top: 5px;
`;
export const Header = styled.h3`
  width: 90%;
  margin: 0 auto;
  display: block;
  text-transform: uppercase;
`;

export const Tmp = (props) => {
  const [movies, setMovie] = useState({});
  useEffect(() => {
    getRandomSuggestedMovie(props.id).then((data) => setMovie(data));
  }, []);
  return (
    <div>
      <Header>Proponowane</Header>
      {movies.length > 0 && (
        <Wrapper>
          {movies.map((movie) => (
            <MovieTile
              redirect={movie.id}
              key={movie.id}
              thumbnail={movie.thumbnail}
              title={movie.title}
              year={movie.year}
            ></MovieTile>
          ))}
        </Wrapper>
      )}
    </div>
  );
};
