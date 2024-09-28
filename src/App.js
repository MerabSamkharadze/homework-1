import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./Components/Content/Content";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Temporary from "./Components/Temporary/Temporary";

export default function App() {
  return (
    <div className="App">
      <Router basename="/homework-1">
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/assignment-3" element={<Temporary />} />
          <Route path="/" element={<Content />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
