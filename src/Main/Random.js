import { HomeWrapper } from "./Home";
import { RandomMovie } from "./RandomMovie";
import { ButtonMenu } from "./ButtonMenu";
import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";

// const HomeRandomWrapper = styled(HomeWrapper)`
//   height: 85vh;
// `;

// const RandomHeader = styled.div`
//   height: 20%;
//   margin-bottom: 2%;
//   margin-top: 2%;
//   position: relative;

//   .bcg_img {
//     height: 100%;
//     position: absolute;
//     right: 2.5%;
//     bottom: 1px;
//     opacity: 80%;
//     @media (min-width: 768px) {
//       height: 140%;
//     }
//   }
//   span {
//     font-size: large;
//     color: #332525;
//     font-weight: 500;
//   }
//   .list_wrapper {
//     margin-left: 2.5%;
//   }
//   .line {
//     margin-right: 5px;
//   }
//   h1 {
//     margin-left: 2.5%;
//     font-size: 50px;
//   }
// `;
// export const btnwrapper = styled.div`
//   margin-top: 400px;
// `;

export const Random = () => {
  return <RandomMovie></RandomMovie>;
};
