"use client";

import "./UnAuthHeader.css";
import Link from "next/link";

export default function UnAuthHeader() {
  return (
    <header className="Header">
      <Link className="Header-logo Link" href="/">
        Geo Market
      </Link>
      <nav>
        <button className="header-button">Registration</button>
      </nav>
    </header>
  );
}
