import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonWrapper = styled.div`
  padding-top: 85px;
`;
const Buttons = styled.div`
  background-color: #3e3134;
  padding-top: 5px;
  padding-bottom: 5px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* position: -webkit-sticky; */

  button {
    background-color: #3e3134;
    border: none;
    padding: 0px;
  }
`;
const linkStyle = {
  display: "flex",
};
export const ButtonMenu = () => {
  return (
    <ButtonWrapper>
      <Buttons>
        <Link to="/" style={linkStyle}>
          <button>
            <img src="/images/home.png" alt="home" />
          </button>
        </Link>
        <Link to="/ourfavourites" style={linkStyle}>
          <button>
            <img src="/images/favourite.png" alt="favourite" />
          </button>
        </Link>
        <Link to="/funfacts" style={linkStyle}>
          <button>
            <img src="/images/funfact.png" alt="funfact" />
          </button>
        </Link>
        <Link to="/Credits" style={linkStyle}>
          <button>
            <img src="/images/person.png" alt="person" />
          </button>
        </Link>
      </Buttons>
    </ButtonWrapper>
  );
};
