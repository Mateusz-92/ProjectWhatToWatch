import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import { HomeWrapper } from "./Home";




const Shortcuts = styled.div`
background-color: #707070;
height: 100px;
position: absolute;
bottom : 1px;
`
const CarouselWrapper = styled.div`
height: 100px;
width: 100px;

`

export const Revolver
    = (props) => {
        return (
            < HomeWrapper >
                <img src="/images/logo.png" />
                <span>WHAT TO WHATCH</span>
                <button><img src="/images/list.png" /></button>
                <h2>Według jakiej kategorii szukasz filmu?</h2>
                <CarouselWrapper>
                    <Carousel>
                        <img src={props.thumbnail}></img>
                    </Carousel>
                </CarouselWrapper>

                <Shortcuts>
                    <button><img src="/images/home.png" /></button>
                    <button><img src="/images/settings.png" /></button>
                    <button><img src="/images/person.png" /></button>
                    <button><img src="/images/favourite.png" /></button>
                </Shortcuts>
            </HomeWrapper >
        )
    }
