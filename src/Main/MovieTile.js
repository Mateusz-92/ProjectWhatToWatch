import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  text-align: center;
  color: black;
  
  
  h3 {
    text-transform: uppercase;
  }
  .cover {
    height: 80%;
    max-height: 165px ;
    @media (min-width: 768px) {
      max-height: 70%;
    }
  }
`;
const SugestionMoviesWrapper = styled.div`
  margin-top: 0.5rem;
  height: 80%;
  width: 100%; 
 

  div {
    width: 95%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .links {
    text-decoration: none;
    color: black;
    font-size: larger;
    font-weight: 600;
    color: #3e3134;
  }
  span {
    display: block;
  }
`;

export const MovieTile = (props) => {
          return (
            
              <SugestionMoviesWrapper>
                  <Link to={`/movie/${props.redirect}`}>
                  <div key={props.id}>
                    <div className="cover">
                      <img src={props.thumbnail} />
                    </div>
                    <span>{props.title}</span>
                    <span>{props.year}</span>
                   
                  </div>
                  </Link>
              </SugestionMoviesWrapper> 
              
          )}

