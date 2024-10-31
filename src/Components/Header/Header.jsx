"use client";

import "./Header.css";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { user } = useUser();
  return (
    <header className="Header">
      <nav>
        <ul className="Header-ul">
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

        <Link className="Header-logo Link" href="/">
          Geo Market
        </Link>
      </nav>
      <div>
        {user && (
          <a className="header-button" href="/api/auth/logout">
            Logout
          </a>
        )}
        {user && <p className="user"> {user.name}</p>}
      </div>
    </header>
  );
}
