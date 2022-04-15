import React from "react";
// import ReactDOM from 'react-dom';
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// ); // powyzej bez routingu
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesCategory } from "./Main/MoviesCategory";
import { Home } from "./Main/Home";
import { Genre } from "./Main/Genre";
import { YearOfProductions } from "./Main/YearOfProductions";
import { Recommended } from "./Main/Recommended";
import { Random } from "./Main/Random";
import { Movie } from "./Main/Movie";
import { Rank } from "./Main/Rank";
import { InterestingMoviesFacts } from "./Main/InterestingMoviesFacts";
import { Credits } from "./Main/Credits";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="start" element={<MoviesCategory />} />
      <Route path="start/Genre" element={<Genre />} />
      <Route path="start/YearOfProduction" element={<YearOfProductions />} />
      <Route path="start/Recommended" element={<Recommended />} />
      <Route path="start/Random" element={<Random />} />
      <Route path="start/Genre/:id" element={<Movie />} />
      <Route path="movie/:id" element={<Movie />} />
      <Route path="start/YearOfProduction/:id" element={<Movie />} />
      <Route path="start/Rank" element={<Rank />} />
      <Route path="start/Rank/:id" element={<Movie />} />
      <Route path="start/Recommended/:id" element={<Movie />} />
      <Route path="/start/Recommended/" element={<Recommended />} />
      <Route path="/Interesting_facts" element={<InterestingMoviesFacts />} />
      <Route path="/Credits" element={<Credits />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
// ), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
