import React from "react";
import styled from "styled-components";
import { HomeWrapper } from "./Home";
import { Carousel } from "./Carousel";

const QuestionMark = styled.div`
  position: absolute;
  top: 3rem;
  right: 20px;
  z-index: 1;
  @media (min-width: 400px) {
    max-width: 100%;
    left: 60%;
  }

  img {
    height: 200px;
  }
`;

const QuestionHeader = styled.h2`
  text-align: center;
  color: #3e3134;
  margin-top: 1em;
  margin-bottom: 1em;
  z-index: 10;
`;
const MoviesCategoryWrapper = styled(HomeWrapper)`
  display: flex;
  flex-direction: column;
  height: 65vh;
  position: relative;
`;
const HeaderWrapper = styled.div`
  position: relative;
`;
export const MoviesCategory = (props) => {
  return (
    <MoviesCategoryWrapper>
      <HeaderWrapper></HeaderWrapper>
      <QuestionHeader>
        Według jakiej <br></br> kategorii szukasz <br></br> filmu?
      </QuestionHeader>
      <QuestionMark>
        <img src="/images/question_mark.png" alt="question" />
      </QuestionMark>
      <Carousel />
    </MoviesCategoryWrapper>
  );
};
