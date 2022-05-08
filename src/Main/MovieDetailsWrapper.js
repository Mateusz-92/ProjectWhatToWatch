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

const Wrapper = styled.div`
  width: 90%;
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
    max-height: 465px;
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

export const MovieDetailsWrapper = ({
  thumbnail,
  year,
  title,
  genres,
  country,
  description,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={thumbnail}></img>
      </ImageWrapper>
      <Header>
        <span>{year}</span>
        <h1>{title}</h1>
      </Header>
      <Genres>
        <span>{genres}</span>
        {/* <span>{[`${movie.genres}`]}> */}
        <span>{country}</span>
      </Genres>
      <Description>
        <span>{description}</span>
      </Description>
    </Wrapper>
  );
};
