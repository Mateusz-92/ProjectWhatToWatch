import React from "react";
import { BackButton } from "./BackButton";
import { getMovieByDecade } from "../Api/Movies";
import { HomeWrapper } from "./Home";
import { useState } from "react";
import styled from "styled-components";

const YearOfProductionHeader = styled.div`
 h1 {
     margin-left: 2.5%;
     margin-top: 2%;
 }
 .clock {
     position: absolute;
     right: 2px;
     top: 0px;
     max-width: 80%;
     opacity: 50%;
 }
`
const YearsOfProductionWrapper = styled.div`
margin-left: 2.5%;
margin-right: 2.5%;



.XXcentury{
    margin-top: 0.5rem;
    }
.ten_years{
    display:flex;
}
.century{
    font-size: x-large;
    padding: 0.5em;
    font-weight: 700;
    
}
`
export const Years = styled.div`
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
z-index: 1;


`
const CoverWrapper = styled.div`

.cover {
    width: 40%;
    height: 50%;
    /* float: left; */
}
.thumbnail {
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    

}
`


export const YearOfProduction = () => {
    const [movies, setMovies] = useState([])
    // const [isOff, setIsOff] = useState(true);
    // const active = { backgroundColor: isOff ? '' : 'blue' };




    const fetchByDecade = (decade) => {
        getMovieByDecade(decade)
            .then(data => {
                setMovies(data)
            })

    }


    return (
        <HomeWrapper>
            <BackButton />
            <YearOfProductionHeader>
                <h1>Year YearOfProduction</h1>
                <img className="clock" src="/images/clock.png"></img>
            </YearOfProductionHeader>
            <YearsOfProductionWrapper>

                <div class="XXcentury">
                    <span className="century">XX</span>
                    <div className="ten_years">
                        <Years onClick={() => { fetchByDecade(1910) }}>'10</Years>
                        <Years onClick={() => { fetchByDecade(1920) }}>'20</Years>
                        <Years onClick={() => { fetchByDecade(1930) }}>'30</Years>
                        <Years onClick={() => { fetchByDecade(1940) }}>'40</Years>
                        <Years onClick={() => { fetchByDecade(1950) }}>'50</Years>
                    </div>
                    <div className="ten_years">
                        <Years onClick={() => { fetchByDecade(1960) }}>'60</Years>
                        <Years onClick={() => { fetchByDecade(1970) }}>'70</Years>
                        <Years onClick={() => { fetchByDecade(1980) }}>'80</Years>
                        <Years onClick={() => { fetchByDecade(1990) }}>'90</Years>
                        <Years onClick={() => { fetchByDecade(2000) }}>'00</Years>
                    </div>
                </div>
            </YearsOfProductionWrapper>

            <div>
                {movies.length > 0 && (
                    <div>
                        {movies.map(movie => (
                            <>
                                <CoverWrapper>
                                    <div class="cover">
                                        <img className="thumbnail" src={movie.thumbnail}></img>
                                    </div>
                                    <div className="title" key={movie.id}>{movie.title}
                                        <span>{movie.year}</span>
                                    </div>
                                </CoverWrapper>
                            </>
                        ))}
                    </div>
                )}
            </div>

        </HomeWrapper >


    )
}
