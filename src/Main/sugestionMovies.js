import React from "react";
import { getMovieByTag } from "../Api/Movies";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  color: black;
  h3 {
    text-transform: uppercase;
  }
  .cover {
    height: 60%;
  }
`;
const SugestionMoviesWrapper = styled.div`
  margin-top: 0.5rem;
  height: 95%;

  div {
    width: 95%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .links {
    text-decoration: none;
    color: black;
    font-size: larger;
    font-weight: 600;
    color: #3e3134;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3e3134;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const SugestionMovies = ({}) => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    getMovieByTag("fav").then((data) => setMovie(data));
  }, []);

  return (
    <>
      <h3>Proponowane</h3>
      {movies.length > 0 && (
        <Wrapper>
          {movies
            .map((movie) => (
              <SugestionMoviesWrapper>
                <StyledLink to={`movie/${movie.id}`}>
                  <div key={movie.id}>
                    <div className="cover">
                      <img src={movie.thumbnail} />
                    </div>
                    <span>{movie.title}</span>
                    <span>{movie.year}</span>
                  </div>
                </StyledLink>
              </SugestionMoviesWrapper>
            ))
            .slice(1, 4)}
        </Wrapper>
      )}
    </>
  );
};
