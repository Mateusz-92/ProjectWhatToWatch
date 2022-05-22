import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const HambugerWrapper = styled.div`
  z-index: 100;
`;
const ListButton = styled.button`
  background-color: #f8c317;
  border: none;
  position: absolute;
  top: 1px;
  right: 0.25em;
  z-index: 100;
  img {
    z-index: 2;
  }
`;
const List = styled.div`
  position: absolute;
  width: 150px;
  top: 1px;
  right: 3.35em;
  background-color: #3e3134;
  color: #f8c317;
  z-index: 0;
  display: flex;
  justify-content: start;
  border-radius: 5%;
  z-index: 3;

  ul {
    list-style-type: none;
  }

  .links {
    text-decoration: none;
    color: #3e3134;
    color: #f8c317;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;
export const Hambuger = () => {
  const [toggle, setToggle] = useState(false);
  const toggleChanged = () => setToggle(!toggle);

  return (
    <HambugerWrapper>
      <ListButton onClick={toggleChanged}>
        <img src="/images/list.png" alt="list" />
      </ListButton>
      {toggle && (
        <List onClick={toggleChanged}>
          <ul>
            <li>
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="links" to="/funfacts">
                Ciekawostki
              </Link>
            </li>
            <li>
              <Link className="links" to="/Credits">
                O aplikacji
              </Link>
            </li>
          </ul>
        </List>
      )}
    </HambugerWrapper>
  );
};
