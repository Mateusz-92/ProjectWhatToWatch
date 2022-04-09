import React from "react";
import styled from "styled-components";
import { HomeWrapper } from "./Home";
import { Carousel } from "./Carousel";
import { LogoComponent } from "./LogoComponent";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Shortcuts = styled.div`
  background-color: #3e3134;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0px;
  margin-top: 0.5em;

  button {
    background-color: #3e3134;
    border: none;
    padding: 0px;
  }
`;
const QuestionMark = styled.div`
  opacity: 70%;
  max-width: 60%;
  position: absolute;
  top: 3rem;
  right: 0;
  z-index: 1;

  img {
    max-width: 90%;
  }
`;
const ListButton = styled.button`
  background-color: #f8c317;
  border: none;
  position: absolute;
  top: 1px;
  right: 0.25em;
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
const QuestionHeader = styled.h2`
  text-align: center;
  color: #3e3134;
  margin-top: 1em;
  margin-bottom: 1em;
`;
const linkStyle = {
  display: "flex",
};
const MoviesCategoryWrapper = styled(HomeWrapper)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;
const HeaderWrapper = styled.div`
  position: relative;
`;
export const MoviesCategory = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleChanged = () => setToggle(!toggle);
  return (
    <div>
      <MoviesCategoryWrapper>
        <HeaderWrapper>
          <LogoComponent></LogoComponent>
        </HeaderWrapper>
        <ListButton onClick={toggleChanged}>
          <img src="/images/list.png" />
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
                <Link className="links" to="/Interesting_Facts">
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
        <QuestionHeader>
          Według jakiej <br></br> kategorii szukasz <br></br> filmu?
        </QuestionHeader>
        <QuestionMark>
          <img src="/images/question_mark.png" />
        </QuestionMark>
        <Carousel />
        <Shortcuts>
          <Link to="/" style={linkStyle}>
            <button>
              <img src="/images/home.png" />
            </button>
          </Link>
          <Link to="/Interesting_Facts">
            <button>
              <img src="/images/settings.png" />
            </button>
          </Link>
          <Link to="/Credits">
            <button>
              <img src="/images/person.png" />
            </button>
          </Link>
          <Link to="/start/Recommended">
            <button>
              <img src="/images/favourite.png" />
            </button>
          </Link>
        </Shortcuts>
      </MoviesCategoryWrapper>
    </div>
  );
};
