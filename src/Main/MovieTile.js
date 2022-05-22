import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SugestionMoviesWrapper = styled.div`
  height: 75%;
  width: 100%;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  div {
    /* width: 90%; */
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    min-height: 150px;
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
    font-size: 17px;
    font-weight: bold;
    display: -webkit-box;
    /* margin: 0 auto; */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .cover {
    height: 100%;
    /* max-height: 175px; */
    /* width: 100%; */
    margin: auto auto;

    @media (min-width: 768px) {
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3e3134;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const MovieTile = (props) => {
  const navigate = useNavigate();
  return (
    <SugestionMoviesWrapper key={props.id}>
      <StyledLink
        to={`/movie/${props.redirect}`}
        onClick={() => navigate.go(0)}
      >
        <div>
          <div className="cover">
            <img
              className="thumbnail"
              src={
                props.thumbnail === "" ? "/images/noimg.png" : props.thumbnail
              }
              alt="plakat-film"
            ></img>
          </div>
          <span>{props.title}</span>
          <span>{props.year}</span>
        </div>
      </StyledLink>
    </SugestionMoviesWrapper>
  );
};
