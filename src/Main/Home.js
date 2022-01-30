import React from "react";
import styled from "styled-components";
import { blinkingLight } from "./blinkingLight";
import { Link, Outlet } from "react-router-dom";
import { LogoComponent } from "./LogoComponent";


export const HomeWrapper = styled.div`
  background-color: #f8c317;
  color: #3E3134;
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  max-width: 500px;
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
  animation: ${blinkingLight} 1.5s linear infinite;
  max-width: 90%;

`
const ImageContent = styled.div`
  box-sizing: border-box;
  margin-left: 1em;
  width: 100%;
  


  img {
    width: 15rem;
  }
  .camera {
    max-width: 90%;
  }
  .lightWrapper{
    width: 40%;
  }
`
const CameraWrapper = styled.div`
    width: 60%;
    float: left;
    margin-left: 5px;
`
const LightWrapper = styled.div`
 width: 35%;
 float: left;
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
        <CameraWrapper>
          <img className="camera" src="/images/camera.png" />
        </CameraWrapper>
        <LightWrapper>
          <Image src="images/light.png" />
        </LightWrapper>
      </ImageContent>
    </HomeWrapper>
  );
};
