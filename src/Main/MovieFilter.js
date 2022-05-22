import React from "react";
import { HomeWrapper } from "./Home";
import { useState } from "react";
import styled from "styled-components";
import { CoverWrapper } from "./CoverWrapper";

export const MovieFilterHeader = styled.div`
  h1 {
    margin-left: 2.5%;
    margin-top: 2%;
    position: relative;
    z-index: 10;
  }
  .back_image {
    position: absolute;
    right: 2px;
    top: 0px;
    max-width: 80%;
    opacity: 80%;
  }

  .type_of_filter {
    margin-top: 0.5rem;
    margin-left: 2.5%;
  }
`;
const MovieFilterWrapper = styled.div`
  margin-top: 5rem;

  .filter_elements {
    font-size: x-large;
    padding: 0.5em;
    font-weight: 700;
    margin-bottom: 110px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1%;
  }
`;
const Filter = styled.div`
  background-color: ${(props) => (props.selected ? "red" : "#ffd756")};
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  padding: 2px;
  font-size: large;
  font-weight: bold;
  margin-top: 0.5rem;
  z-index: 2;
`;

export const MoviesWrapper = styled.div`
  width: 95%;
  margin: 0 auto;

  .movies {
    display: grid;
    grid-template-columns: 49% 49%;
    grid-column-gap: 2%;
    @media (min-width: 768px) {
      grid-template-columns: 24% 24% 24% 24%;
      grid-column-gap: 1%;
    }
  }
`;

export const MovieFilter = ({
  dataList,
  handler,
  movieFilterHeader,
  typeOfFilter,
  backImage,
}) => {
  const [movies, setMovies] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const fetchByDecade = (decade) => {
    setSelectedValue(decade.name);
    handler(decade.queryValue).then((data) => {
      setMovies(data);
    });
  };
  return (
    <HomeWrapper>
      <MovieFilterHeader>
        <h1>{movieFilterHeader}</h1>
        <img className="back_image" src={backImage} alt="back"></img>
        <span className="type_of_filter">{typeOfFilter}</span>
      </MovieFilterHeader>
      <MovieFilterWrapper>
        <div className="filter_elements">
          {dataList.map((el) => (
            <Filter
              selected={el.name === selectedValue}
              key={el.name}
              onClick={() => fetchByDecade(el)}
            >
              {el.name}
            </Filter>
          ))}
        </div>
      </MovieFilterWrapper>
      <MoviesWrapper>
        {movies.length > 0 && (
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
