import React from "react";
import { Genres } from "./TrialGenre";
import { getMovieByTag } from "../Api/Movies";
import { getGenres } from "../Api/Movies";

export const TrailGenre = () => {
  const dataList = [
    {
      name: "dramat",
      queryValue: "dramat",
    },
    {
      name: "komedia",
      queryValue: "komedia",
    },
    {
      name: "horror",
      queryValue: "horror",
    },
    {
      name: "sensacyjny",
      queryValue: "sensacyjny",
    },
    {
      name: "psychologiczny",
      queryValue: "psychologiczny",
    },
    {
      name: "kryminał",
      queryValue: "kryminał",
    },
    {
      name: "romans",
      queryValue: "romans",
    },
  ];
  return (
    <Genres
      fetch={getGenres}
      // dataList={dataList}
      handler={getMovieByTag}
      movieFilterHeader={"Gatunek"}
      backImage={"/images/genre2.png"}
    ></Genres>
  );
};
