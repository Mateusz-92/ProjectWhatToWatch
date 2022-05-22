import React from "react";
import { MovieFilter } from "./MovieFilter";
import { getMovieByTag } from "../Api/Movies";

export const Rank = () => {
  const dataList = [
    {
      name: "AFI",
      queryValue: "AFI",
    },
    {
      name: "100Na100",
      queryValue: "100Na100",
    },
    {
      name: "KK45",
      queryValue: "KK45",
    },
    {
      name: "Pełna_sala",
      queryValue: "Pełna_sala",
    },
    {
      name: "Pełna_sala_PL",
      queryValue: "Pełna_sala_PL",
    },
  ];
  return (
    <MovieFilter
      dataList={dataList}
      handler={getMovieByTag}
      movieFilterHeader={"Rankingi Filmowe"}
      backImage={"/images/rank2.png"}
    ></MovieFilter>
  );
};
