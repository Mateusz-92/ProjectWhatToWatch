import { useState, useEffect } from "react";
import { fetchRandomMovie } from "../Api/Movies";
import styled from "styled-components";

const MovieWrapper = styled.div`
  height: 25%;
  background-color: #ffd756;
  box-sizing: border-box;
  position: relative;
  text-overflow: ellipsis;
  margin-bottom: 5%;
  margin-left: 2.5%;
  margin-right: 2.5%;

  @media (min-width: 768px) {
    height: 55%;
  }

  img {
    max-width: 100%;
    max-height: 100%;

    @media (min-width: 768px) {
      width: 90%;
      height: 95%;
    }
  }
  h1 {
    font-size: medium;
    font-weight: 900;
    margin-bottom: 2px;
  }
  h3 {
    font-size: small;
    color: #ae8a14;
    font-weight: 900;
    margin-top: 2px;
  }
  p {
    font-size: medium;
  }
  .img_wrapper {
    width: 35%;
    height: 90%;
    margin: 2.5% 2.5% 2.5% 2.5%;
    float: left;
  }
`;
const RandomMovieHeaderWrapper = styled.div`
  width: 55%;
  float: left;
  margin-right: 2.5%;
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const RandomMovie = () => {
  const [movie, setRandom] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchRandomMovie().then((data) => {
      setIsLoading(false);
      setRandom(data);
    });
  }, []);
  if (isLoading) return <h1>...loading</h1>;
  return (
    <MovieWrapper>
      <div className="img_wrapper">
        <img src={movie.thumbnail}></img>
      </div>
      <RandomMovieHeaderWrapper>
        <h1>{movie.title}</h1>
        <h3>{movie.year}</h3>
        <p>{movie.description}</p>
      </RandomMovieHeaderWrapper>
    </MovieWrapper>
  );
};
