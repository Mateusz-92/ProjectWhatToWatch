import React from "react";
import { LogoComponent } from "./LogoComponent";
import { ButtonMenu } from "./ButtonMenu";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  /* position: relative; */
  /* height: 100%auto; */
  main {
    padding-bottom: 90px;
  }
`;

export const Layout = (props) => {
  return (
    <LayoutWrapper>
      <LogoComponent />
      <main>{props.children}</main>
      <ButtonMenu />
    </LayoutWrapper>
  );
};
