import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
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
  );
}
