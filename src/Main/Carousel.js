import React, { useState, TouchEvent } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const TypeOfSearch = styled.div`
  width: 100%;
  background-color: #f8c317;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
   padding-top: 1em; 
   padding-bottom: 2em;
   /* border: 2px solid green; */
   height : 100%;
`

const ButtonLeft = styled.button`
  width: 0;
  height: 0;
  border-top: 45px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 45px solid #3e3134;
  margin: 45px auto 0;
  position: absolute;
  bottom: 130px;
  left: 0px;
  background-color: #ffd756;
  border-left: #ffd756;
  display: none;
`;
const ButtonRight = styled.button`
  width: 0;
  height: 0;
  border-top: 45px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 45px solid #3e3134;
  margin: 45px auto 0;
  position: absolute;
  bottom: 130px;
  right: 0px;
  background-color: #ffd756;
  border-right: #ffd756;
  display: none;
`;
const ActuallType = styled.div`
  /* width: 15rem;
  height: 16rem; */
  width: 50%;
  height: 75%;
  background-color: #ffd756;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  /* border: 2px solid blue; */
  

  &:hover ${ButtonLeft} {
    display: block;
  }
  &:hover ${ButtonRight} {
    display: block;
  }
  .picture {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 2.5rem;
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 5px;
  }

  span {
     /* display: inline-block; */
    position: absolute;
    bottom: 0;
    left: 4rem;
    width: 7rem;
    height: 2rem;
    text-align: center;
    /* border: solid white 2px; */
    justify-content: flex-end;
  }
  .links{
    text-decoration: none;
    color: black;
    /* text-transform: uppercase; */
  }
`;
export const Carousel = (props) => {
  const textOfSearch = ["Gatunek", "Rok produkcji", "Polecane", "Losowy"];

  const [index, SetIndex] = useState(0);

  const NextTypeHandler = () => {
    SetIndex((index) => (index + 1) % textOfSearch.length);
  };
  const PrevTypeHandler = () => {
    SetIndex((index) => {
      if (index === 0) {
        return index = textOfSearch.length - 1
      }
      else {
        return (index - 1) % textOfSearch.length;
      }
    });
  };


  return (
    <>
      <TypeOfSearch>
        <ActuallType >
          <ButtonLeft onClick={PrevTypeHandler} />
          <ButtonRight onClick={NextTypeHandler} />
          <img className="picture" src="/images/select_tag.png"></img>
          <Link className="links" to={textOfSearch[index]}>
            <span>{textOfSearch[index]}</span>
          </Link>
          <Outlet />
        </ActuallType>
      </TypeOfSearch>
    </>
  );
};
