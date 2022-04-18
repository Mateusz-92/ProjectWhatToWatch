import React from "react";
import { HomeWrapper } from "./Home";
import { ButtonMenu } from "./ButtonMenu";
import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";

const CreditsWrapper = styled.div`
  width: 10%;
  margin: 0 auto;
`;

export const Credits = () => {
  return (
    <>
    <LogoComponent/>
      <CreditsWrapper>
        <h1>Credits</h1>
        <p>Grafika</p>
        <p>Frontend</p>
        <p>Backend</p>
        <p>Code Review</p>
      </CreditsWrapper>
      <ButtonMenu/>
    </>
  );
};
