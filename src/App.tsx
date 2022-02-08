import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../src/pages/Home";
import Movies from "./../src/pages/Movies";
import MoviesDetails from "./../src/pages/MoviesDetails";
import About from "./../src/pages/About";
import Header from "./../src/components/organisms/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular-movies" element={<Movies />} />
        <Route path="/movie-details/:id" element={<MoviesDetails />} />
        <Route path="/about-developer" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
