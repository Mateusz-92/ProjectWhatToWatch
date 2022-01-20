import React from "react";
import styled from "styled-components";

export const LogoComponent = () => {
    const Logo = styled.div`
    position: relative;
    width:100px;
    margin-left: 1em;

    span {
        position: absolute;
        top: 1px;
        font-weight: 700;
    }
    img {
        margin-top: 5px;
    }
    `
    return (
        <Logo>
            <img src="/images/logo.png" />
            <span>WHAT TO WHATCH</span>
        </Logo>

    )
}