import React from "react";
import { Genres } from "./TrialGenre";
import { getMovieByTag } from "../Api/Movies";
import { getLists } from "../Api/Movies";

export const TrialRank = () => {
  return (
    <Genres
      getFetch={getLists}
      handler={getMovieByTag}
      movieFilterHeader={"Listy Rankingowe"}
      backImage={"/images/rank2.png"}
      startOption={"Lista"}
    ></Genres>
  );
};
