"use client";

import { Link } from "@/i18n/routing";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import ThemeToggleButton from "../ThemeToggleButton";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const t = useTranslations("Header");

  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (locale) => {
    setIsOpen(false);

    router.push(`/${locale}${pathname.slice(3)}`);
  };

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
              {t("about")}
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/products"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              {t("products")}
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/contact"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              {t("contact")}
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/blog"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              {t("blog")}
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/pricing"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              {t("pricing")}
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              href="/profile"
              className="dark:text-white text-black font-bold text-2xl  "
            >
              {t("profile")}
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
            {t("logout")}
          </a>
        )}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {pathname.includes("/ka") ? "ქართული" : "English"}
          </button>
          {isOpen && (
            <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-40 overflow-hidden">
              <button
                onClick={() => changeLanguage("en")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("ka")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                ქართული
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
