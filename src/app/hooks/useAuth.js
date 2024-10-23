"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/lib/action";

export default function useAuth(pathname) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await getCookie();

        if (token && pathname === "/login") {
          await router.push("/");
        } else if (!token && pathname !== "/login") {
          await router.push("/login");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, [pathname, router]);
}
