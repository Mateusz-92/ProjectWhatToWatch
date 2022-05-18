import { keyframes } from "styled-components";

export const blinkingLight = () => {
  return keyframes`
      15%{
        opacity:0.4;
      }
      30%{
        opacity:1;
      }
      40%{
        opacity:0.4;
      }
      45%{
        opacity:1;
      }
    `;
};

export const rolls = () => {
  return keyframes`
  0%{
    transform: rotate(-360deg) ;
  }
  `;
};
