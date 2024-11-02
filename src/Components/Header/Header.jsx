"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggleButton from "../ThemeToggleButton";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { user } = useUser();
  return (
    <header className="flex fixed top-0 left-0 w-full justify-between items-center px-10 py-8 z-50 dark:text-white text-black bg-[rgba(180,179,249,0.69)] dark:bg-[rgba(0,0,0,0.29)] dark:backdrop-blur-md backdrop-blur-md">
      <nav className="flex ">
        <ul className="flex  items-center list-none gap-14">
          <li className="relative py-2">
            <Link
              href="/"
              className="dark:text-white text-black font-bold text-4xl  "
            >
              Geo Market
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/about"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              About
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/products"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              Products
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/contact"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              Contact
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/blog"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              Blog
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/profile"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              Profile
            </Link>
          </li>
          <ThemeToggleButton />
        </ul>
      </nav>

      <div className="flex   items-center gap-10">
        <div className="flex items-center gap-4">
          {user && (
            <Image
              src={user.picture}
              alt="user image"
              width={25}
              height={25}
              className="rounded-full"
            />
          )}
          {user && (
            <p className="text-[#0d123e] dark:text-white text-xl  ">
              {user.name}
            </p>
          )}
        </div>
        {user && (
          <a
            href="/api/auth/logout"
            className="dark:bg-white bg-black dark:text-black text-white text-center tracking-wider uppercase rounded-md px-6 py-3 font-mono font-medium "
          >
            Logout
          </a>
        )}
      </div>
    </header>
  );
}
