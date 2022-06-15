import { useState, useEffect } from "react";
import { MovieDetailsWrapper } from "./MovieDetailsWrapper";
import { fetchRandomMovie } from "../Api/Movies";
import { HomeWrapper } from "./Home";
import { BtnWrapper } from "./InterestingMoviesFacts";
import BouncingDotsLoader from "./BouncingDotsLoader ";
import styled from "styled-components";

const Btn = styled(BtnWrapper)`
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const RandomMovie = () => {
  const [movie, setRandom] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const RandomHandler = () => {
    fetchRandomMovie().then((data) => {
      setIsLoading(false);
      setRandom(data);
    });
  };
  useEffect(() => {
    RandomHandler();
  }, []);
  if (isLoading) return <BouncingDotsLoader />;
  return (
    <HomeWrapper>
      <MovieDetailsWrapper
        thumbnail={movie.thumbnail}
        year={movie.year}
        title={movie.title}
        genres={[`${movie.genres}`]}
        country={movie.country}
        description={movie.description}
        vod={movie.vod}
      />
      <Btn>
        <button onClick={RandomHandler} className="btn">
          Losuj
        </button>
      </Btn>
    </HomeWrapper>
  );
};
