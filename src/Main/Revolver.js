import React from "react";
import styled from "styled-components";
import { HomeWrapper } from "./Home"
import { Carousel } from "./Carousel";
import { LogoComponent } from "./LogoComponent";
import { Link } from "react-router-dom";



const Shortcuts = styled.div`
background-color: #3E3134;
height: 5rem;
width: 100%;
display: flex;
justify-content: space-evenly;
align-self: flex-end;
margin-top: 2em;


        

button{
    background-color: #3E3134;
    border: none;
    padding: 0px;  
}


`
const QuestionMark = styled.img`
height: 15em;
max-width: 100%;
position: absolute;
top: 0.15em;
right: 1em;
opacity: 70%;
z-index: 1;
`
const ListButton = styled.button`
    background-color: #f8c317;
    border: none;
    position: absolute;
    top: 1px;
    right: 0.25em;
`
const QuestionHeader = styled.h2`
text-align: center;
color: #3E3134;
`
const linkStyle = {
    display: "flex",
}
const RevolverWrapper = styled(HomeWrapper)`
display : flex;
flex-direction: column;
/* height: 650px 100%; */
/* border : 2px solid black; */
/* margin: 0 auto; */
`

export const Revolver
    = (props) => {
        return (
            <div>
                <RevolverWrapper>
                    <LogoComponent></LogoComponent>
                    <ListButton ><img src="/images/list.png" /></ListButton>
                    <QuestionHeader>Według jakiej  <br></br> kategorii szukasz <br></br> filmu?</QuestionHeader>
                    <QuestionMark src="/images/question_mark.png" />
                    <Carousel />
                    <Shortcuts>
                        <Link to="/" style={linkStyle}>
                            <button><img src="/images/home.png" /></button>
                        </Link>
                        <button><img src="/images/settings.png" /></button>
                        <button><img src="/images/person.png" /></button>
                        <button><img src="/images/favourite.png" /></button>
                    </Shortcuts>

                </RevolverWrapper>
            </div>
        )
    }
