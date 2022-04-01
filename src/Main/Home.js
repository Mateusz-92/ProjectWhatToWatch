import React from "react";
import styled from "styled-components";
import { blinkingLight, rolls } from "./Animation";
import { Link, Outlet } from "react-router-dom";
import { LogoComponent } from "./LogoComponent";

export const HomeWrapper = styled.div`
  background-color: #f8c317;
  color: #3E3134;
  /* display: flex ;
  flex-direction: column ; */
  box-sizing: border-box;
  height: 100vh;
  h2 {
    text-align: center;
    margin-left: 2.5%;
  }
  
`
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
  max-width: 100%;
  height: auto;
  
`
const ImageContent = styled.div`
  box-sizing: border-box;
  margin-left: 5%;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  
  .s_rol  {
    position: absolute;
    left: -8%;
    top: 5%;
    animation: ${rolls} 3s linear infinite ;
    max-width: 100%;
    max-height: 100%;
    
  }
  .b_rol  {
    position: absolute;
    right:1px;
    top: -10px;
    animation: ${rolls} 3s linear infinite ;
    max-width: 100%;
    max-height: 100%;
    
  }
  .camera {
    max-width: 100%;
    max-height: 100%;
    margin-top: 35%;
  }
  .lightWrapper{
    width: 40%;
  }
`
const CameraWrapper = styled.div`
    float: left;
    margin-left: 5px;
    position: relative ;
`
const LightWrapper = styled.div`
 float: left;
 margin-left:5px;
`

export const Home = (props) => {
  return (
    <HomeWrapper>
      <LogoComponent />
      <div>
        <h2>Lubisz stare filmy? <br />Podpowiemy Ci który obejrzeć </h2>
      </div>
      <Link to="/start"><ButtonWrapper >
        Rozpocznij wyszukiwanie
      </ButtonWrapper>
      </Link>
      <Outlet />
      <ImageContent>
        <CameraWrapper>
          <img className="camera" src="/images/camera2.png" />
          <img className="s_rol" src="/images/s_rol.png" />
          <img className="b_rol" src="/images/b_rol.png" />
        </CameraWrapper>
        <LightWrapper>
          <Image src="images/light.png" />
        </LightWrapper>
      </ImageContent>
    </HomeWrapper>
  );
};
