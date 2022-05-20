import React from "react";
import { HomeWrapper } from "./Home";
import { CoverWrapper } from "./CoverWrapper";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";
import { MovieFilterHeader } from "./MovieFilter";
import { MoviesWrapper } from "./MovieFilter";

const DropDownContainer = styled("div")`
  width: 90%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 20px;
  font-size: 12px;
  background-color: #e8b718;
  border: solid #e8b718;
  border-radius: 8px;
`;

const DropDownHeader = styled("div")`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  position: relative;
  img {
    height: 10px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const DropDownListContainer = styled("div")`
  max-height: 110px;
  overflow: scroll;
  border-radius: 0 0 8px 8px;
  margin-bottom: 5px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin-top: 0;
  padding-left: 1em;
  background-color: #e8b718;
  box-sizing: border-box;

  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;
const ListDescription = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
`;
export const Genres = ({
  dataList,
  handler,
  movieFilterHeader,
  backImage,
  fetch,
  startOption,
}) => {
  console.log("MovieFilter", dataList, handler);
  const [movies, setMovies] = useState([]);
  const [genres, SetGenre] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const fetchByDecade = (e) => {
    setSelectedOption(e);
    setIsOpen(false);

    handler(e).then((data) => {
      setMovies(data);
    });
  };

  useEffect(() => {
    fetch().then((data) => SetGenre(data));
  }, []);

  return (
    <HomeWrapper>
      <LogoComponent />
      <MovieFilterHeader>
        <h1>{movieFilterHeader}</h1>
        <img className="back_image" src={backImage} alt="back"></img>
      </MovieFilterHeader>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || [startOption]}
          <img src="/images/arrow_down.png" alt="arrow"></img>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            {genres.length > 0 && (
              <DropDownList>
                {genres?.map((el) => (
                  <ListItem
                    onClick={() => fetchByDecade(el.listName)}
                    key={el.listName}
                  >
                    {el.listName}
                  </ListItem>
                ))}
              </DropDownList>
            )}
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <ListDescription className="list_description">
        {
          genres[genres.map((el) => el.listName).indexOf(selectedOption)]
            ?.description
        }
      </ListDescription>
      {/* <span>{genres[1]?.description}</span> */}
      <MoviesWrapper>
        {movies.length > 0 && (
          <div className="movies">
            {movies.map((movie) => (
              <CoverWrapper
                key={movie.id}
                redirect={movie.id}
                thumbnail={movie.thumbnail}
                title={movie.title}
                year={movie.year}
              />
            ))}
          </div>
        )}
      </MoviesWrapper>
    </HomeWrapper>
  );
};
