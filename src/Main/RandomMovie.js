import { useState, useEffect } from "react";
import { MovieDetailsWrapper } from "./MovieDetailsWrapper";
import { fetchRandomMovie } from "../Api/Movies";

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
    <MovieDetailsWrapper
      thumbnail={movie.thumbnail}
      year={movie.year}
      title={movie.title}
      genres={[`${movie.genres}`]}
      country={movie.country}
      description={movie.description}
    />
  );
};
