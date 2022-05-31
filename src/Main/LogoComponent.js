import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoComponent = () => {
  const Logo = styled.div`
    position: relative;
    width: 60px;
    margin-left: 5px;
    color: #3e3134;

    span {
      position: absolute;
      top: 5px;
      font-weight: 700;
      font-size: small;
      line-height: 1;
    }
    img {
      margin-top: 5px;
    }
  `;
  return (
    <Link to="/">
      <Logo>
        <img src="/images/logo.png" alt="logo" />
        <span>WHAT TO WATCH</span>
      </Logo>
    </Link>
  );
};
