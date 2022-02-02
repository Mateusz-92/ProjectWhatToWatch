import React from "react";
import { BackButton } from "./BackButton";
import { HomeWrapper } from "./Home";
import { Link } from "react-router-dom";
import styled from "styled-components";

const YearOfProductionHeader = styled.div`
 h1{
     margin-left: 2.5%;
     margin-top: 2%;
 }
 .clock{
     position: absolute;
     right: 2px;
     top: 0px;
     max-width: 80%;
     opacity: 50%;
 }
`
const YearsOfProductionWrapper = styled.div`
margin-left: 5%;

.XXcentury{
    margin-top: 0.5rem;
    }
.ten_years{
    display:flex;
}
.century{
    font-size: x-large;
    /* text-align: center; */
    padding: 0.5em;
    font-weight: 700;
}
`
const Years = styled.div`
width: 60px;
height: 60px;
border-radius: 20%;
background-color: white;
text-align: center;
line-height:60px;
padding: 2px;
font-size: large;
font-weight: bold;
background-color: #ffd756;
margin-right: .5rem;
margin-top: .5rem;


`
export const YearOfProduction = () => {
    return (
        <HomeWrapper>
            <BackButton />
            <YearOfProductionHeader>
                <h1>Lata produkcji</h1>
                <img className="clock" src="/images/clock.png"></img>
            </YearOfProductionHeader>
            <YearsOfProductionWrapper>
                <div className="XIXcentury">
                    <span className="century">XIX</span>
                    <Years>'90</Years>
                </div>
                <div class="XXcentury">
                    <span className="century">XX</span>
                    <div className="ten_years">
                        <Years>'00</Years>
                        <Years>'10</Years>
                        <Years>'20</Years>
                        <Years>'30</Years>
                        <Years>'40</Years>
                    </div>
                    <div className="ten_years">
                        <Years>'50</Years>
                        <Years>'60</Years>
                        <Years>'70</Years>
                        <Years>'80</Years>
                        <Years>'90</Years>
                    </div>
                </div>
            </YearsOfProductionWrapper>
        </HomeWrapper>

    )
}