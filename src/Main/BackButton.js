import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const BackWrapper = styled.div`
    margin-left: 2.5%;
    button {
background-color: #f8c317;
border: none;
}
button :hover{
    background-color:  #FFD756;
}
span {
    font-weight: 900;
    
}
.backLink{
    text-decoration: none;
    color: #3E3134;

}

`

export const BackButton = () => {
    return (
        <BackWrapper>
            <Link className="backLink" to="/revolver">
                <button><img src="/images/back_icon.png"></img></button>
                <span>BACK</span>
            </Link>
        </BackWrapper>
    )
}