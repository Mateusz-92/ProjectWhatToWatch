import React from "react";
import { getMovieByTag } from "../Api/Movies";
import { ButtonMenu } from "./ButtonMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  text-align: center;
  color: black;
  
  
  h3 {
    text-transform: uppercase;
  }
  .cover {
    height: 80%;
    max-height: 165px ;
    @media (min-width: 768px) {
      max-height: 70%;
    }
  }
`;
const SugestionMoviesWrapper = styled.div`
  margin-top: 0.5rem;
  height: 80%;
  width: 100%; 
 

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
  span {
    display: block;
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
                <StyledLink to={`/movie/${movie.id}`}>
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
            .sort(() => 0.5 - Math.random()).slice(0, 3)}
            {/* // .Math.floor(Math.random() * movies.length).slice(0,3)} */}
        </Wrapper>
      )}
      
    </>
  );
};
