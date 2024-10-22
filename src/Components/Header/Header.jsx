"use client";

import { logout } from "@/lib/action";
import "./Header.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result.success) {
        router.push("/login");
      } else {
        console.error("Logout failed", result.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
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
          <button onClick={handleLogout}>Log Out</button>
        </ul>
      </nav>
    </header>
  );
}
