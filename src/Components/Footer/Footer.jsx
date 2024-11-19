import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Header");
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return (
    <footer className="bg-[rgba(180,179,249,0.69)] dark:bg-gray-900 text-black dark:text-gray-300 py-5 font-sans transition-colors duration-300 ">
      <div className="max-w-screen-xl mx-auto px-5">
        {/* Footer Content */}
        <div className="flex justify-between items-start flex-wrap mb-5">
          <nav className="flex gap-8 mb-4 md:mb-0">
            <ul className="flex gap-8 list-none">
              <li>
                <Link
                  href="/about"
                  className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {t("profile")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-5">
            <div className="bg-gray-500  dark:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-700 transition duration-300">
              <img
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e8103_Facebook.svg"
                alt="Facebook Logo"
                className="w-4 h-4 invert dark:invert-0 transition-transform transform hover:scale-110"
              />
            </div>
            <div className="bg-gray-500  dark:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 dark:hover:bg-red-400 transition duration-300">
              <img
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e8104_instagram-logo.svg"
                alt="Instagram Logo"
                className="w-4 h-4 invert dark:invert-0 transition-transform transform hover:scale-110"
              />
            </div>
            <div className="bg-gray-500  dark:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-400 dark:hover:bg-blue-400 transition duration-300">
              <img
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e8105_social-media-social-media-logo-twitter.svg"
                alt="Twitter Logo"
                className="w-4 h-4 invert dark:invert-0 transition-transform transform hover:scale-110"
              />
            </div>
          </div>
        </div>
        <p className="text-center">&copy; {t("rights")}.</p>
        <p className="text-center"> {formattedDate}</p>
      </div>
    </footer>
  );
}
