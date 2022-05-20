import React from "react";
import { useEffect, useState } from "react";
import { fetchRandomFunFact } from "../Api/Movies";
import { ButtonMenu } from "./ButtonMenu";
import { MovieDetailsWrapper } from "./MovieDetailsWrapper";
import { HomeWrapper } from "./Home";
import styled from "styled-components";
import { MoviesCategory } from "./MoviesCategory";
import { LogoComponent } from "./LogoComponent";
import { MovieTile } from "./MovieTile";
import { Wrapper } from "./tmp";
import { Header } from "./tmp";

export const MovieDetailWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  .btn {
    width: 100%;
    height: 4rem;
    border-radius: 1rem;
    background-color: #3e3134;
    margin: 0 auto;
    text-transform: uppercase;
    color: #f8c317;
    margin-bottom: 2.5%;
  }
`;

export const InterestingMoviesFacts = () => {
  const [fact, setFact] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchHandler = () => {
    fetchRandomFunFact().then((data) => {
      setIsLoading(false);
      setFact(data);
    });
  };
  useEffect(() => {
    fetchHandler();
  }, []);
  if (isLoading) return <div>loading...</div>;
  let cover = `https://wtwapi.azurewebsites.net${fact.image}`;
  return (
    <>
      <HomeWrapper>
        <LogoComponent />
        <MovieDetailWrapper>
          <MovieDetailsWrapper
            thumbnail={cover}
            title={fact.title}
            description={fact.content}
          ></MovieDetailsWrapper>
          <button onClick={fetchHandler} className="btn">
            Losuj
          </button>
          {fact.relatedMovies.length > 0 && <Header>Proponowane</Header>}
          <Wrapper>
            {fact.relatedMovies?.map((movie) => (
              <MovieTile
                redirect={movie.id}
                key={movie.id}
                thumbnail={movie.thumbnail}
                title={movie.title}
                year={movie.year}
              ></MovieTile>
            ))}
          </Wrapper>
        </MovieDetailWrapper>
      </HomeWrapper>
    </>
  );
};
