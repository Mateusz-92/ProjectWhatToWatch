import React from "react";
import { Genres } from "./TrialGenre";
import { getMovieByTag } from "../Api/Movies";
import { getLists } from "../Api/Movies";

export const TrailRank = () => {
  return (
    <Genres
      fetch={getLists}
      handler={getMovieByTag}
      movieFilterHeader={"Rank"}
      backImage={"/images/genre2.png"}
    ></Genres>
  );
};
