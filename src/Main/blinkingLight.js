
import { keyframes } from "styled-components";


export const blinkingLight = () => {
  return keyframes`
      15%{
        opacity:0.6;
      }
      30%{
        opacity:1;
      }
      40%{
        opacity:0.6;
      }
      45%{
        opacity:1;
      }
    `;
}
