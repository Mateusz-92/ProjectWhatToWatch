import React from 'react';
import styled, { keyframes } from "styled-components";


export const blinkingLight = () => {
    return keyframes`
      50% {
        opacity: 0.5;
      }
    `;
}