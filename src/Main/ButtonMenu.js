import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Buttons = styled.div`
  background-color: #3e3134;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0px;

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
    <Buttons>
      <Link to="/" style={linkStyle}>
        <button>
          <img src="/images/home.png" />
        </button>
      </Link>
      <Link to="/ourfavourites" style={linkStyle}>
        <button>
          <img src="/images/favourite.png" />
        </button>
      </Link>
      <Link to="/funfacts" style={linkStyle}>
        <button>
          <img src="/images/funfact.png" />
        </button>
      </Link>
      <Link to="/Credits" style={linkStyle}>
        <button>
          <img src="/images/person.png" />
        </button>
      </Link>
    </Buttons>
  );
};
