"use client";

import "./Header.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie =
      "accessToken=; expires=Thu, 01 Dec 2004 19:25:33 UTC; path=/;";
    document.cookie =
      "refreshToken=; expires=Thu, 01 DEC 2004 19:25:33 UTC; path=/;";

    router.push("/auth/login");
  };

  return (
    <header className="Header">
      <Link className="Header-logo Link" href="/">
        Geo Market
      </Link>
      <nav>
        <ul className="Header-ul">
          <li>
            <Link className="Link" href="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="Link" href="/blog">
              Blog
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
            <Link className="Link" href="/about">
              About
            </Link>
          </li>
            <button onClick={handleLogout}>
              Log Out
            </button>
        </ul>
      </nav>
    </header>
  );
}
