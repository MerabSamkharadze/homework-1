import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <Link className="Header-logo Link" to="/">
        Geo Cuisine
      </Link>
      <nav>
        <ul className="Header-ul">
          <li>
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Link" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="Link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="Link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="Link" to="/about">
              About
            </Link>
          </li>

          {/* <li>
            <Link className="Link" to="/assignment-3">
              assignment-3
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
