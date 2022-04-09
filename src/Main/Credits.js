import React from "react";
import { HomeWrapper } from "./Home";
import { BackButton } from "./BackButton";
import styled from "styled-components";

const CreditsWrapper = styled.div`
  width: 10%;
  margin: 0 auto;
`;

export const Credits = () => {
  return (
    <>
      <BackButton />
      <CreditsWrapper>
        <h1>Credits</h1>
        <p>Grafika</p>
        <p>Frontend</p>
        <p>Backend</p>
        <p>Code Review</p>
      </CreditsWrapper>
    </>
  );
};
