import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// ); // powyzej bez routingu
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Revolver } from "./Main/Revolver";
import { Home } from "./Main/Home";
import { TypeOfFilm } from "./Main/TypeOfFilm";
import { YearOfProduction } from "./Main/YearOfProduction";
import { Recommended } from "./Main/Recommended"
import { Random } from './Main/Random';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="revolver" element={<Revolver />} />
      <Route path="revolver/Gatunek" element={<TypeOfFilm />} />
      <Route path="revolver/Rok%20produkcji" element={<YearOfProduction />} />
      <Route path="revolver/Polecane" element={<Recommended />} />
      <Route path="revolver/Losowy" element={<Random />} />


    </Routes>
  </BrowserRouter>,
  rootElement
);
// ), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
