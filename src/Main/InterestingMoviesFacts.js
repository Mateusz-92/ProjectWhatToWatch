import React from "react";
import { useEffect, useState } from "react";
import { fetchRandomFunFact } from "../Api/Movies";
import { SugestionMovies } from "./sugestionMovies";
import { BackButton } from "./BackButton";
import { HomeWrapper } from "./Home";
import styled from "styled-components";

const FactWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  .btn {
    width: 75%;
    height: 5rem;
    border-radius: 1rem;
    background-color: #3e3134;
    margin: 0 auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    color: #f8c317;
    margin-bottom: 2.5%;
  }
  p {
    margin-top: 2.5%;
    margin-bottom: 2.5%;
  }
`;
const FactImage = styled.div`
  max-width: 40%;
  max-height: 100%;

  img {
    width: 100%;
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
  return (
    <HomeWrapper>
      <FactWrapper>
        <BackButton />
        <FactImage>
          <img src="/images/Ciekawostki.png" />
        </FactImage>
        <h2>{fact.title}</h2>
        <p>{fact.content}</p>
        <button onClick={fetchHandler} className="btn">
          Losuj
        </button>
        <SugestionMovies />
      </FactWrapper>
    </HomeWrapper>
  );
};
