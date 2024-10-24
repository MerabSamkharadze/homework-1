"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/lib/action";

export default function useAuth(pathname) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await getCookie();

        if (token && pathname === "/login") {
          await router.push("/");
        } else if (!token && pathname !== "/login") {
          setIsAuthenticated(false);
          await router.push("/login");
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, [pathname, router]);

  return { isAuthenticated };
}
