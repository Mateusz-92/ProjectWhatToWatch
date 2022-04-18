import React from "react";
import { SugestionMovies } from "./sugestionMovies";
import { HomeWrapper } from "./Home";
import { getMovieById } from "../Api/Movies";
import { ButtonMenu } from "./ButtonMenu";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";
import { Tmp } from "./tmp";

const MovieWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  .btn {
    margin-left: 0px;
  }
  
`;
const ImageWrapper = styled.div`
  margin-bottom: 2.5%;
  margin-top: 1%;
  height: 60%;
  @media (min-width: 768px) {
    width: 100%;
    height: 30%;
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 485px ;
    border-radius: 8px;
    @media (min-width: 768px) {
      max-height: 70%;
    }
  }
`;
const Genres = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #ae8a14;
  font-size: small;

  span {
    margin-right: 10px;
    text-transform: uppercase;
  }
`;
const Description = styled.div`
  margin-top: 5%;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Header = styled.div`
  span {
    font-weight: 1000;
  }
`;

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieById(id).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, []);
  if (isLoading) return <div>loading...</div>;
  return (
    <HomeWrapper>
      <LogoComponent/>
      <MovieWrapper>
        <ImageWrapper>
          <img src={movie.thumbnail}></img>
          {/* <img src={movie.thumbnail}></img> */}
        </ImageWrapper>
        <Header>
          <span>{movie.year}</span>
          <h1>{movie.title}</h1>
        </Header>
        <Genres>
          <span>{[`${movie.genres}`]}</span>
          <span>{movie.country}</span>
        </Genres>
        <Description>
          <span>{movie.description}</span>
        </Description>
        <Tmp id ={id} />
      </MovieWrapper>
      <ButtonMenu/>
    </HomeWrapper>
  );
};
