"use client";

import "./unAuthHeader.css";
import Link from "next/link";

export default function UnAuthHeader() {
  return (
    <header className="Header">
      <Link className="Header-logo Link" href="/">
        Geo Market
      </Link>
      <nav>
        <ul className="Header-ul">
          <button>Registration</button>
        </ul>
      </nav>
    </header>
  );
}
