import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="Header">
      <Link className="Header-logo Link" href="/">
        Geo Cuisine
      </Link>
      <nav>
        <ul className="Header-ul">
          <li>
            <Link className="Link" href="/">
              Home
            </Link>
          </li>
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
            <Link className="Link" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="Link" href="/about">
              About
            </Link>
          </li>

          {/* <li>
            <Link className="Link" href="/assignment-3">
              assignment-3
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
