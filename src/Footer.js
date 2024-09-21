import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <nav>
          <ul className="Footer-nav">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>

        <ul className="Footer-links">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact</li>
        </ul>

        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
