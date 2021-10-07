import React from "react";
import styled from "styled-components";
import { blinkingLight } from "./blinkingLight";
import { randomTimeLine } from "./blinkingLight";

export const HomeWrapper = styled.div`
  background-color: #f8c317;
  width: 430px;
  height: 950px;
  color: #707070;
`;

const ButtonWrapper = styled.button`
width: 368px;
height: 88px;
border-radius: 5px;
background-color: #707070;
color:  #f8c317;
`
const Image = styled.img`
position: relative;
bottom: 15vh;
animation: ${blinkingLight} ${randomTimeLine}s linear infinite;
color: red;


`
console.log({ randomTimeLine })
export const Home = (props) => {
    return (
        <HomeWrapper>
            <img src="/images/logo.png" />
            <span>WHAT TO WHATCH</span>
            <h2>Lubisz stare filmy? Podpowiemy Ci który obejrzeć </h2>
            <ButtonWrapper>Button</ButtonWrapper>
            <div>
                <img src="/images/camera.png" />
                <Image src="images/light.png" />
            </div>
        </HomeWrapper>
    );
};
