import React from "react";
import styled from "styled-components";
import { blinkingLight } from "./blinkingLight";
import { Link, Outlet } from "react-router-dom";
import { LogoComponent } from "./LogoComponent";


export const HomeWrapper = styled.div`
  background-color: #f8c317;
  width: 30rem;
  color: #3E3134;
  position: relative;
  box-sizing: border-box;
   height: 100vh; // problem z długością 
   
 
  
  h2 {
    text-align: center;
  }
  
`;

const ButtonWrapper = styled.button`
  width: 90%;
  height: 5rem;
  border-radius: 1rem;
  background-color: #3E3134;
  color: #f8c317;
  padding: 2em ;
  position: relative;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    margin: 1em 0em 1em;
`
const Image = styled.img`
  position: absolute;
  top: 1rem;
  left: 16rem;
  animation: ${blinkingLight} 1.5s linear infinite;
  color: red;
  max-width: 8rem;

`
const ImageContent = styled.div`
margin-top: 1rem;
  position: relative;
  box-sizing: border-box;
  margin-left: 1em;
  


  img {
    width: 15rem;
  }
  .camera {
    max-width: 100%;
  }
`


export const Home = (props) => {
  return (
    <HomeWrapper>
      <LogoComponent />
      <div>
        <h2>Lubisz stare filmy? <br />Podpowiemy Ci który obejrzeć </h2>
      </div>
      <Link to="/revolver"><ButtonWrapper >
        Rozpocznij wyszukiwanie
      </ButtonWrapper>
      </Link>
      <Outlet />
      <ImageContent>
        <img className="camera" src="/images/camera.png" />
        <Image src="images/light.png" />
      </ImageContent>
    </HomeWrapper>
  );
};
