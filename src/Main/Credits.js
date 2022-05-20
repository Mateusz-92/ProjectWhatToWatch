import React from "react";
import { HomeWrapper } from "./Home";
import { useState, useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";

const CreditsWrapper = styled.div`
  width: 95%;
  height: 350px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: auto;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  @media (min-width: 768px) {
    width: 700px;
    height: 400px;
  }
  h2 {
    position: absolute;
    top: 5px;
  }

  .credits {
    color: white;
  }

  span {
    display: block;
    text-align: center;
  }

  .type {
    font-size: x-large;
  }
  .name {
    font-size: xx-large;
    font-weight: bold;
  }
  .contact {
    font-size: small;
  }
`;

export const Credits = () => {
  const items = [
    {
      type: "Frontend",
      name: "Mateusz Zasada",
      contact: "github.com/Mateusz-92",
    },
    {
      type: "Backend",
      name: "Marcin Mojski",
      contact: "x",
    },
    {
      type: "Grafika",
      name: "y",
      contact: "y",
    },
    {
      type: "Code Review #1",
      name: "z",
      contact: "z",
    },
    {
      type: "Code Review #2",
      name: "z",
      contact: "z",
    },
  ];
  const [index, SetIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 4000;
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => SetIndex((index) => (index + 1) % Object.keys(items).length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <HomeWrapper>
      <LogoComponent />

      <CreditsWrapper>
        <h2>Credits</h2>
        <div className="credits">
          <span className="type">{items[index].type}</span>
          <span className="name">{items[index].name}</span>
          <span className="contact">{items[index].contact}</span>
        </div>
      </CreditsWrapper>
    </HomeWrapper>
  );
};
