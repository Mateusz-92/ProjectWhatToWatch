import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2%;
  padding-bottom: 2px;
  height: 100%;
  .links {
    text-decoration: none;
    color: black;
    font-size: larger;
    font-weight: 600;
    color: #3e3134;
    /* height: 20%; */
  }
  .cover {
    width: 100%;
    height: 75%;
    max-height: 283.16px;
  }
  .thumbnail {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .title {
    width: 90%;
    margin-top: 2px;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
  }
  .span_overflow {
    display: -webkit-box;
    /* margin: 0 auto; */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CoverWrapper = ({ redirect, thumbnail, title, year }) => {
  return (
    <Wrapper>
      <Link className="links" to={`/movie/${redirect}`}>
        <div className="cover">
          <img className="thumbnail" src={thumbnail}></img>
        </div>
        <div className="title">
          <span className="span_overflow">{title}</span>
          <span>{year}</span>
        </div>
      </Link>
    </Wrapper>
  );
};
