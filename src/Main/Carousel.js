import React, { useState, TouchEvent } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const TypeOfSearch = styled.div`
  width: 100%;
  background-color: #f8c317;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
  height: 100%;
`;

const ButtonLeft = styled.button`
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 30px solid #3e3134;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 10px;
  background-color: #ffd756;
  border-left: #ffd756;
`;
const ButtonRight = styled.button`
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 30px solid #3e3134;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 10px;
  background-color: #ffd756;
  border-right: #ffd756;
`;
const ActuallType = styled.div`
  width: 70%;
  height: 75%;
  background-color: #ffd756;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  .picture {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
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
    justify-content: flex-end;
  }
  .links {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: larger;
    font-weight: 800;
    color: #3e3134;
  }
`;
export const Carousel = (props) => {
  const items = [
    {
      name: "Gatunek",
      redirect: "Genre",
      image: "/images/genre.png",
    },
    {
      name: "Rok produkcji",
      redirect: "YearOfProduction",
      image: "/images/year_of_production.png",
    },
    {
      name: "Polecane",
      redirect: "Recommended",
      image: "/images/recommended.png",
    },
    {
      name: "Losowy",
      redirect: "Random",
      image: "/images/select_tag.png",
    },
    {
      name: "Ranking",
      redirect: "YearOfProduction",
      image: "/images/rank.png",
    },
  ];

  const [index, SetIndex] = useState(0);
  const NextTypeHandler = () => {
    SetIndex((index) => (index + 1) % Object.keys(items).length);
  };
  const PrevTypeHandler = () => {
    SetIndex((index) => {
      if (index === 0) {
        return (index = Object.keys(items).length - 1);
      } else {
        return (index - 1) % Object.keys(items).length;
      }
    });
  };
  return (
    <>
      <TypeOfSearch>
        <ActuallType>
          <ButtonLeft onClick={PrevTypeHandler} />
          <ButtonRight onClick={NextTypeHandler} />
          <Link className="links" to={items[index].redirect}>
            <img className="picture" src={items[index].image}></img>
            <span>{items[index].name}</span>
          </Link>
          <Outlet />
        </ActuallType>
      </TypeOfSearch>
    </>
  );
};
