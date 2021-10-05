import React from "react";
import styled from "styled-components";
import { HomeWrapper } from "./Home";


// stworzyć nowy element z img span, tak aby nie powtarzac kodu.

const Shortcuts = styled.div`
background-color: #707070;
height: 100px;
`
const Carousel = styled.div`
height: 200px;

`

export const SearchEngine = (props) => {
    return (
        < HomeWrapper >
            <img src="/images/logo.png" />
            <span>WHAT TO WHATCH</span>
            <button><img src="/images/list.png" /></button>
            <h2>Według jakiej kategorii szukasz filmu?</h2>
            <Carousel>
                {console.log(props.movie)}
                <img src={props.movie.thumbnail}></img>
                <img></img>
                <img></img>
            </Carousel>
            <Shortcuts>
                <button><img src="/images/home.png" /></button>
                <button><img src="/images/settings.png" /></button>
                <button><img src="/images/person.png" /></button>
                <button><img src="/images/favourite.png" /></button>
            </Shortcuts>
        </HomeWrapper >
    )
}
