import React from "react";
import { useEffect, useState } from "react";
import { fetchRandomFunFact } from "../Api/Movies";
import { ButtonMenu } from "./ButtonMenu";
import { SugestionMovies } from "./sugestionMovies";
import { HomeWrapper } from "./Home";
import styled from "styled-components";
import { MoviesCategory } from "./MoviesCategory";
import { LogoComponent } from "./LogoComponent";
import { MovieTile } from "./MovieTile";

const FactWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
 
  span{
     display: block ;
  }
  h3 {
    margin-left:1%;
    margin-bottom: 10px;
  }
  .movie_wrapper {
    width: 95%;
    margin: 0 auto;
    
  }
  .title{
    height: 10%;
  }
  .tile{
    float: left;
    width: 31%;
    text-align: center ;
    height: 90%;
    margin: 0 auto;
    margin-left: 1%;
  }
  .imgwrapper {
    width: 100%;
    height: 90%;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .btn {
    width: 95%;
    height: 4rem;
    border-radius: 1rem;
    background-color: #3e3134;
    margin: 0 auto;
    /* position: relative;
    left: 50%;
    transform: translateX(-50%); */
    text-transform: uppercase;
    color: #f8c317;
    margin-bottom: 2.5%;
  }
  .wrapper {
    width: 100%;
    margin: auto 0;
    text-align: center;
  }
  p {
    margin-top: 2.5%;
    margin-bottom: 2.5%;
  }
  h2 {
    font-size: 28px;
  }
`;
const FactImage = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-top: 2%;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const InterestingMoviesFacts = () => {
  const [fact, setFact] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchHandler = () => {
    fetchRandomFunFact().then((data) => {
      setIsLoading(false);
      setFact(data);
    });
  };
  useEffect(() => {
    fetchHandler();
  }, []);
  if (isLoading) return <div>loading...</div>;
  let cover = `https://wtwapi.azurewebsites.net${fact.image}`;
  return (
    <HomeWrapper>
      <LogoComponent/>
      <FactWrapper>
        <FactImage>
          <img src={cover} />
        </FactImage>
        <div className="wrapper">
          <h2>{fact.title}</h2>
          <p>{fact.content}</p>
          <button onClick={fetchHandler} className="btn">
            Losuj
          </button>
        </div>
        {/* <SugestionMovies /> */}
        <div className="movie_wrapper">
          <h3>Proponowane</h3>
          {fact.relatedMovies?.map((movie) => (
            <MovieTile
            redirect= {movie.id}
            key= {movie.id}
            thumbnail= {movie.thumbnail}
            title = {movie.title}
            year = {movie.year}
            ></MovieTile>
          ))}
        </div>
      </FactWrapper>
      <ButtonMenu/>
    </HomeWrapper>
  );
};
