import React from "react";
import { useState, useEffect } from "react";
import { getVodMovie } from "../Api/Movies";
import { HomeWrapper } from "./Home";
import { MoviesWrapper } from "./MovieFilter";
import { CoverWrapper } from "./CoverWrapper";
import styled from "styled-components";

const VodTileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`;
const VodTile = styled.div`
  border-radius: 8px;
  padding: 2px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
export const Vod = () => {
  const vodServices = [
    {
      name: "35",
      queryValue: "35",
    },
    {
      name: "amazon",
      queryValue: "amazon",
    },
    {
      name: "chili",
      queryValue: "chili",
    },
    {
      name: "cineman",
      queryValue: "cineman",
    },
    {
      name: "hbo",
      queryValue: "hbo",
    },
    {
      name: "kato",
      queryValue: "kato",
    },
    {
      name: "netflix",
      queryValue: "netflix",
    },
    {
      name: "ninateka",
      queryValue: "ninateka",
    },
    {
      name: "player",
      queryValue: "player",
    },
    {
      name: "tvp",
      queryValue: "tvp",
    },
    {
      name: "wtf",
      queryValue: "wtf",
    },
  ];
  const [movies, setMovie] = useState();

  const fetchByVod = (service) => {
    getVodMovie(service.queryValue).then((data) => {
      setMovie(data);
    });
  };

  return (
    <HomeWrapper>
      <h4>
        Sprawdź jakie filmy są dostepne na wybranych platformach streamingowych
      </h4>
      <VodTileWrapper>
        {vodServices.map((el) => (
          <VodTile
            className="btn_pointer"
            key={el.name}
            onClick={() => fetchByVod(el)}
          >
            <img src={`/images/vod/${el.name}.png`} alt="vod"></img>
          </VodTile>
        ))}
      </VodTileWrapper>
      <MoviesWrapper>
        {movies?.length > 0 && (
          <div className="movies">
            {movies.map((movie) => (
              <CoverWrapper
                key={movie.id}
                redirect={movie.id}
                thumbnail={movie.thumbnail}
                title={movie.title}
                year={movie.year}
              />
            ))}
          </div>
        )}
      </MoviesWrapper>
    </HomeWrapper>
  );
};
