import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import MovieApp from "./MovieApp";
import Home from "./component/Navbar/pages/Home";
import About from "./component/Navbar/pages/About";
import Contact from "./component/Navbar/pages/Contact";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<MovieApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



