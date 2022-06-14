import React from "react";
import { Genres } from "./TrialGenre";
import { getMovieByTag } from "../Api/Movies";
import { getGenres } from "../Api/Movies";

export const TrialGenre = () => {
  return (
    <Genres
      getFetch={getGenres}
      handler={getMovieByTag}
      movieFilterHeader={"Gatunek"}
      backImage={"/images/genre2.png"}
      startOption={"Gatunek"}
    ></Genres>
  );
};
