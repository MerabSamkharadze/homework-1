import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <nav>
          <ul className="Footer-nav">
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
          </ul>
        </nav>

        <ul className="Footer-links">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>
            <Link className="Link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
