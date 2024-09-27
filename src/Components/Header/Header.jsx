import React from "react";
import "./Header.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Content from "../Content/Content";
import About from "../About/About";

export default function Header() {
  return (
    <Router>
      <header className="Header">
        <div className="Header-logo">Geo Cuisine</div>
        <nav>
          <ul className="Header-ul">
            <li>
              <Link className="Link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="Link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="Link" to="/contact">
                Contact
              </Link>
            </li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Content />}></Route>
      </Routes>
    </Router>
  );
}
