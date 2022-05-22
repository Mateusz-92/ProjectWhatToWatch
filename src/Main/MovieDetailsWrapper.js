import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10px;

  .btn {
    margin-left: 0px;
  }
  .wrap {
    @media (min-width: 768px) {
      text-align: center;
    }
  }
`;
const ImageWrapper = styled.div`
  margin-bottom: 2.5%;
  margin-top: 1%;
  height: 60%;
  @media (min-width: 768px) {
    height: 100%;
    text-align: center;
  }

  img {
    height: 100%;
    width: 100%;
    max-height: 365px;
    border-radius: 8px;
    @media (min-width: 768px) {
      max-height: 500px;
      width: 40%;
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
  @media (min-width: 768px) {
    text-align: center;
  }
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
        <img
          className="thumbnail"
          src={thumbnail === "" ? "/images/noimg.png" : thumbnail}
          alt="plakat-film"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/images/noimg.png";
          }}
        ></img>
      </ImageWrapper>
      <div className="cover">
        <Header>
          <span>{year}</span>
          <h1>{title}</h1>
        </Header>
        <Genres>
          <span>{genres}</span>
          <span>{country}</span>
        </Genres>
      </div>
      <Description>
        <span>{description}</span>
      </Description>
    </Wrapper>
  );
};
