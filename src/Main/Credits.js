import React from "react";
import { HomeWrapper } from "./Home";
import { ButtonMenu } from "./ButtonMenu";
import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";

const CreditsWrapper = styled.div`
  width: 10%;
  margin: 0 auto;
  color: #3e3134;
`;

export const Credits = () => {
  return (
    <>
      <LogoComponent />
      <CreditsWrapper>
        <p>CREDITS</p>
        <p>Grafika</p>
        <p>Frontend</p>
        <p>Backend</p>
        <p>Code Review</p>
      </CreditsWrapper>
    </>
  );
};
