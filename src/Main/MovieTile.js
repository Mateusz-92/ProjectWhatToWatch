import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SugestionMoviesWrapper = styled.div`
  margin-top: 5px;
  height: 80%;
  width: 100%;

  div {
    width: 90%;
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
    font-size: 17px;
    font-weight: bold;
  }
  h3 {
    text-transform: uppercase;
  }
  .cover {
    height: 100%;
    max-height: 175px;
    width: 100%;

    @media (min-width: 768px) {
      max-height: 275px;
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
                props.thumbnail === ""
                  ? "https://via.placeholder.com/150x200.png?text=No+Image+Found"
                  : props.thumbnail
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
