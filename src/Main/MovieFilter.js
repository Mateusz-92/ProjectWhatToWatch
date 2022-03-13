import React from "react";
import { BackButton } from "./BackButton";
import { HomeWrapper } from "./Home";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieFilterHeader = styled.div`
 h1 {
     margin-left: 2.5%;
     margin-top: 2%;
 }
 .clock {
     position: absolute;
     right: 2px;
     top: 0px;
     max-width: 80%;
     opacity: 90%;
 }

 .type_of_filter{
    margin-top: 0.5rem;
    margin-left: 2.5%;
    }
`
const MovieFilterWrapper = styled.div`
margin-top: 5rem;






.filter_elements{
    font-size: x-large;
    padding: 0.5em;
    font-weight: 700;
    margin-bottom: 110px;
    display: grid;
    grid-template-columns: auto auto auto auto auto  ;
    
}
`
const Filter = styled.div`
  background-color: ${props => props.selected ? 'red' : '#ffd756'};
  /* border: ${props => props.selected ? 'solid black 1px' : '#ffd756'}; */
/* width: 50px;
height: 50px; */
border-radius: 40%;
text-align: center;
line-height:50px;
padding: 2px;
font-size: large;
font-weight: bold;
margin-right: .3rem;
margin-top: .5rem;
z-index: 2;




`
const CoverWrapper = styled.div`
/* margin: auto; */
padding-bottom: 2px;
.links{
    text-decoration: none;
    color: black;
    font-size: larger;
    font-weight: 600;
    color: #3E3134;
    
  }


.cover {
    width: 90%;
    height: 60%;
    
    /* float: left; */
}
.thumbnail {
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    

}
.title{
    width: 90%;
     margin-bottom: 2rem;
    text-align: center;
    
}
`
const MoviesWrapper = styled.div`
margin-left:2.5%;


.movies{
    display: grid;
grid-template-columns: 1fr 1fr;
}
`

export const MovieFilter = ({ dataList, handler, movieFilterHeader, typeOfFilter }) => {
    console.log('MovieFilter', dataList, handler)
    const [movies, setMovies] = useState([])
    const [selectedValue, setSelectedValue] = useState('');
    // const [isOff, setIsOff] = useState(true);
    // const active = { backgroundColor: isOff ? '' : 'blue' };
    //  const dataList = props.dataList; // jest to rowne {dataList}
    // const {dataList} = props;  ten sam efekt co w argumetach MovieFilter;

    const fetchByDecade = (decade) => {
        setSelectedValue(decade.name);
        handler(decade.queryValue)
            .then(data => {
                setMovies(data)
            })
    }
    return (
        <HomeWrapper>
            <BackButton />
            <MovieFilterHeader>
                <h1>{movieFilterHeader}</h1>
                <img className="clock" src="/images/clock.png" ></img>
                <span className="type_of_filter">{typeOfFilter}</span>
            </MovieFilterHeader>
            <MovieFilterWrapper>

                <div className="filter_elements">

                    {dataList.map(el => (
                        <Filter
                            selected={el.name === selectedValue}
                            key={el.name}
                            onClick={() => fetchByDecade(el)}
                        >{el.name}</Filter>
                    ))}
                </div>
            </MovieFilterWrapper>

            <MoviesWrapper>
                {movies.length > 0 && (
                    <div className="movies">
                        {movies.map(movie => (
                            <>

                                <CoverWrapper >
                                    <Link className="links" to={{ pathname: `${movie.id}` }} >
                                        <div class="cover">
                                            <img className="thumbnail" src={movie.thumbnail}></img>
                                        </div>
                                        <div className="title" key={movie.id}>{movie.title}
                                            <span>{movie.year}</span>
                                        </div>
                                    </Link>
                                </CoverWrapper>

                            </>
                        ))}
                    </div>
                )}
            </MoviesWrapper>

        </HomeWrapper >


    )
}
