import React from "react";
import styled from "styled-components";
import { blinkingLight } from "./blinkingLight";

export const HomeWrapper = styled.div`
  background-color: #f8c317;
  width: 430px;
  height: 950px;
  color: #707070;

  h2 {
    text-align: center;
  }
 body {
     background-color: black;
 }
 
`;

const ButtonWrapper = styled.button`
width: 368px;
height: 88px;
border-radius: 5px;
background-color: #707070;
color:  #f8c317;
margin: 20px 0 0 20px;
`
const Image = styled.img`
position: relative;
bottom: 100px ;
animation: ${blinkingLight} 1.5s linear infinite;
color: red;
margin-left: 20px;
`
const ImageContent = styled.div`
margin-top: 100px;
margin-left: 20px;
`

export const Home = (props) => {
    return (
        <HomeWrapper>
            <img src="/images/logo.png" />
            <span>WHAT TO WHATCH</span>
            <h2>Lubisz stare filmy? Podpowiemy Ci który obejrzeć </h2>
            <ButtonWrapper>Button</ButtonWrapper>
            <ImageContent>
                <img src="/images/camera.png" />
                <Image src="images/light.png" />
            </ImageContent>
        </HomeWrapper>
    );
};
