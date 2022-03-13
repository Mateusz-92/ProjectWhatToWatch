import React, { useState, TouchEvent } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const TypeOfSearch = styled.div`
  width: 100%;
  background-color: #f8c317;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  margin-bottom:3rem;
   height : 100%;
`

const ButtonLeft = styled.button`
  width: 0;
  height: 0;
  border-top: 45px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 45px solid #3e3134;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffd756;
  border-left: #ffd756;
`;
const ButtonRight = styled.button`
  width: 0;
  height: 0;
  border-top: 45px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 45px solid #3e3134;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  background-color: #ffd756;
  border-right: #ffd756;

`;
const ActuallType = styled.div`
  /* width: 15rem;
  height: 16rem; */
  width: 70%;
  height: 75%;
  background-color: #ffd756;
  position: relative;
  left: 50%;
  transform: translateX(-50%) ;
;  /* border: 2px solid blue; */
  


  .picture {
    position: absolute;
    top: 0;
    bottom:0;
    right:0;
    left: 0;
    max-width: 100%;
    max-height: 50%;
    margin: auto auto;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    /* border: solid white 2px; */
    justify-content: flex-end;
  }
  .links{
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: larger;
    font-weight: 800;
    color: #3E3134;
    
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
