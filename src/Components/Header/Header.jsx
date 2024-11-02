"use client";

import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import ThemeToggleButton from "../ThemeToggleButton";

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
            <Link className="Link " href="/profile">
              Profile
            </Link>
          </li>
          <ThemeToggleButton />
        </ul>

        <Link className="Header-logo Link" href="/">
          Geo Market
        </Link>
      </nav>
      <div>
        <div className="flex gap-3">
          {user && (
            <Image
              src={user.picture}
              alt="user image"
              width={25}
              height={25}
              className="user mb-3 rounded-full overflow-hidden"
            />
          )}{" "}
          {user && <p className="user mb-3 "> {user.name}</p>}
        </div>
        {user && (
          <a className="header-button" href="/api/auth/logout">
            Logout
          </a>
        )}
      </div>
    </header>
  );
}
