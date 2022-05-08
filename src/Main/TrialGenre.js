import React from "react";
import { HomeWrapper } from "./Home";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";

const MovieFilterHeader = styled.div`
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

  nav ul {
    height: auto;
    /* width: 18%; */
  }
  nav ul {
    overflow: hidden;
    overflow-y: scroll;
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
  .span_overflow {
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

export const Genres = ({
  dataList,
  handler,
  movieFilterHeader,
  typeOfFilter,
  backImage,
  fetch,
  description,
}) => {
  console.log("MovieFilter", dataList, handler);
  const [movies, setMovies] = useState([]);
  const [genres, SetGenre] = useState([]);

  const fetchByDecade = (e) => {
    handler(e).then((data) => {
      setMovies(data);
    });
  };

  useEffect(() => {
    fetch().then((data) => SetGenre(data));
  }, []);

  return (
    <HomeWrapper>
      <LogoComponent />
      <MovieFilterHeader>
        <h1>{movieFilterHeader}</h1>
        <img className="back_image" src={backImage}></img>
        <span className="type_of_filter">{typeOfFilter}</span>
      </MovieFilterHeader>
      <MovieFilterWrapper>
        {/* <div className="select_wrapper">
          <ul>
            {genres.map((el) => (
              <li
                onClick={() => console.log(fetchByDecade("komedia"))}
                key={el}
              >
                {el}
              </li>
            ))}
          </ul>
          <p>{description}</p>
        </div> */}
        <nav className="filter_elements">
          <ul>
            {genres.map((el) => (
              <li key={el} onClick={() => fetchByDecade(el)}>
                {el}
              </li>
            ))}
          </ul>
        </nav>
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
    </HomeWrapper>
  );
};
