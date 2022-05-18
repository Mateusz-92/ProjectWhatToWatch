import React from "react";
import styled from "styled-components";

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
    width: 50%;
    margin: 0 auto;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 365px;
    border-radius: 8px;
    @media (min-width: 768px) {
      width: 90%;
      height: 100%;
      max-height: 590px;
    }
  }
`;
const Genres = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #ae8a14;
  font-size: small;
  @media (min-width: 768px) {
    justify-content: center;
  }
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
  @media (min-width: 768px) {
    text-align: center;
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
