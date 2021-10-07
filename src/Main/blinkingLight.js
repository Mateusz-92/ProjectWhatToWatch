
import { keyframes } from "styled-components";


export const blinkingLight = () => {
  return keyframes`
      50%{
        opacity:0.2;
      }
      70%{
        opacity:1;
      }
      90%{
        opacity:0.4;
      }
    `;
}
export let randomTimeLine = Math.floor(Math.random() * 10 + 1);