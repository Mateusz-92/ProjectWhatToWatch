import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const BackWrapper = styled.div`
  margin-left: 2.5%;

  button {
    background-color: #f8c317;
    border: none;
    font-weight: bold;
  }

  button :hover {
    background-color: #ffd756;
  }
  span {
    font-weight: 900;
  }
  .backLink {
    text-decoration: none;
    color: #3e3134;
  }
`;
export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <BackWrapper>
      <button onClick={() => navigate(-1)}>
        <img src="/images/back_icon.png"></img>BACK
      </button>
    </BackWrapper>
  );
};
