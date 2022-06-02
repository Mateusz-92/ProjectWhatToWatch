import React from "react";
import { HomeWrapper } from "./Home";
import { CoverWrapper } from "./CoverWrapper";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { MovieFilterHeader } from "./MovieFilter";
import { MoviesWrapper } from "./MovieFilter";

const DropDownContainer = styled("div")`
  width: 90%;
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 20px;
  font-size: 12px;
  background-color: #e8b718;
  border: solid #e8b718;
  border-radius: 8px;
`;

const DropDownHeader = styled("div")`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  img {
    height: 10px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const DropDownListContainer = styled("div")`
  max-height: 170px;
  overflow: scroll;
  border-radius: 0 0 8px 8px;
  margin-bottom: 5px;
  font-size: 18px;
  cursor: pointer;
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
  font-weight: bold;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 1em;
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
  getFetch,
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
    getFetch().then((data) => SetGenre(data));
  }, []);

  return (
    <HomeWrapper>
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
