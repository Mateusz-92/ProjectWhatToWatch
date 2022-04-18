import React from "react";
import { HomeWrapper } from "./Home";
import { ButtonMenu } from "./ButtonMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";

const MovieFilterHeader = styled.div`
  h1 {
    margin-left: 2.5%;
    margin-top: 2%;
  }
  .clock {
    position: absolute;
    right: 2px;
    top: 0px;
    max-width: 80%;
    opacity: 60%;
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
    /* grid-template-columns: auto auto auto auto auto ; */
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 1%;
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
export const CoverWrapper = styled.div`
  margin-top: 2%;
  padding-bottom: 2px;
  height: 100%;
  .links {
    text-decoration: none;
    color: black;
    font-size: larger;
    font-weight: 600;
    color: #3e3134;
    /* height: 20%; */
  }
  .cover {
    width: 100%;
    height: 75%;
    max-height: 283.16px;
    @media (min-width: 768px) {
      height: 85%;
      max-height: 100%;
    }
  }
  .thumbnail {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .title {
    width: 90%;
    margin-top: 2px;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
  }
  .span_overflow{
    display: -webkit-box;
    /* margin: 0 auto; */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const MoviesWrapper = styled.div`
  width: 95%;
  margin: 0 auto;

  .movies {
    display: grid;
    grid-template-columns: 49% 49%;
    grid-column-gap: 2%;
  }
`;

export const MovieFilter = ({
  dataList,
  handler,
  movieFilterHeader,
  typeOfFilter,
  backImage,
}) => {
  console.log("MovieFilter", dataList, handler);
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
      <LogoComponent/>
      <MovieFilterHeader>
        <h1>{movieFilterHeader}</h1>
        <img className="clock" src={backImage}></img>
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
              <CoverWrapper key={movie.id}>
                <Link className="links" to={`/movie/${movie.id}`}>
                  <div class="cover">
                    <img className="thumbnail" src={movie.thumbnail}></img>
                  </div>
                  <div className="title">
                    <span className="span_overflow">{movie.title}</span>
                    <span>{movie.year}</span>
                  </div>
                </Link>
              </CoverWrapper>
            ))}
          </div>
        )}
      </MoviesWrapper>
      <ButtonMenu/>
    </HomeWrapper>
  );
};
