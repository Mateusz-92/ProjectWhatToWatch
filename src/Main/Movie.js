import React from "react";
import { HomeWrapper } from "./Home";
import { getMovieById } from "../Api/Movies";
import { MovieDetailWrapper } from "./InterestingMoviesFacts";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tmp } from "./tmp";
import { MovieDetailsWrapper } from "./MovieDetailsWrapper";

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const tmpArray = ["netflix", "player", "amazon", "ninateka"];

  useEffect(() => {
    getMovieById(id).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, []);
  if (isLoading) return <div>loading...</div>;
  return (
    <HomeWrapper>
      <MovieDetailWrapper>
        <MovieDetailsWrapper
          thumbnail={movie.thumbnail}
          year={movie.year}
          title={movie.title}
          genres={[`${movie.genres}`]}
          country={movie.country}
          description={movie.description}
          vod={tmpArray}
        />
        <Tmp id={id} />
      </MovieDetailWrapper>
    </HomeWrapper>
  );
};
