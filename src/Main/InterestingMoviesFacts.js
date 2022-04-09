import React from "react";
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
  return (
    <HomeWrapper>
      <FactWrapper>
        <BackButton />
        <FactImage>
          <img src="images/ciekawostki.png" />
        </FactImage>
        <h2>Ciekawostki</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <button className="btn">Button</button>
        <SugestionMovies />
      </FactWrapper>
    </HomeWrapper>
  );
};
