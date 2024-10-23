"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/lib/action"; // Adjust the path if necessary

export default function useAuth(pathname) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await getCookie();

        // If token exists and the current path is "/login", prevent redirection
        if (token && pathname === "/login") {
          await router.push("/");
        }
        // If no token exists and user is not on "/login" page, redirect to login
        else if (!token && pathname !== "/login") {
          await router.push("/login");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, [pathname, router]);
}
