import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesCategory } from "./Main/MoviesCategory";
import { Home } from "./Main/Home";
import { YearOfProductions } from "./Main/YearOfProductions";
import { Recommended } from "./Main/Recommended";
import { Movie } from "./Main/Movie";
import { InterestingMoviesFacts } from "./Main/InterestingMoviesFacts";
import { Credits } from "./Main/Credits";
import { RandomMovie } from "./Main/RandomMovie";
import { TrialGenre } from "./Main/TrialGenre2";
import { TrialRank } from "./Main/TrialRank";
import { Layout } from "./Main/Layout";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="start" element={<MoviesCategory />} />
        {/* <Route path="/genres" element={<Genre />} /> */}
        <Route path="/year" element={<YearOfProductions />} />
        <Route path="/ourfavourites" element={<Recommended />} />
        <Route path="/random" element={<RandomMovie />} />
        <Route path="movie/:id" element={<Movie />} />
        {/* <Route path="/rank" element={<Rank />} /> */}
        <Route path="/funfacts" element={<InterestingMoviesFacts />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/genres" element={<TrialGenre />} />
        <Route path="/rank" element={<TrialRank />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  rootElement
);
// ), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
