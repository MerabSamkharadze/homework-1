import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">Geo Cuisine</div>
      <nav>
        <ul className="Header-ul">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
}
