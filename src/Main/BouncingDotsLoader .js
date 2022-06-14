import React from "react";
import styled from "styled-components";

const DotsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  .bouncing-loader {
    display: flex;
    justify-content: center;
  }

  .bouncing-loader > div {
    width: 16px;
    height: 16px;
    margin: 3px 6px;
    border-radius: 50%;
    background-color: #3e3134;
    opacity: 1;
    animation: bouncing-loader 0.6s infinite alternate;
  }
  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translateY(-16px);
    }
  }

  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const BouncingDotsLoader = (props) => {
  return (
    <DotsWrapper>
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </DotsWrapper>
  );
};

export default BouncingDotsLoader;
