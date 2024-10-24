import React from "react";
import "./Footer.css";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top2">
          <Link className="footer-logo" href="/">
            Geo Market
          </Link>
          <div className="title2">November 8-9</div>
          <div className="title2">Live and Virtual</div>
        </div>

        <div className="footer-content">
          <div className="footer-1-links">
            <nav className="footer-nav">
              <ul className="footer-ul">
                <li>
                  <Link className="Link" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="Link" href="/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="Link" href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="Link" href="/blog">
                    Blog
                  </Link>
                </li>

                <li>
                  <Link className="Link" href="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-social">
            <div className="social-logos">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e8103_Facebook.svg"
                alt="Facebook Logo"
              />
            </div>
            <div className="social-logos">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e8104_instagram-logo.svg"
                alt="Instagram Logo"
              />
            </div>

            <div className="social-logos">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e8105_social-media-social-media-logo-twitter.svg"
                alt="Twitter Logo"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="small-text">Powered by</div>
            <h1>KaDi</h1>
            <div className="small-text">
              Designed by{" "}
              <a href="http://junostudio.design" className="white-text">
                Juno
              </a>
            </div>
          </div>
          <div className="footer-horizontal-links-2">
            <p className="footer-link-small">Licensing</p>
            <p className="footer-link-small">Styleguide</p>
            <p className="footer-link-small">Instructions</p>
            <p className="footer-link-small">Changelog</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
