"use client";

import { usePathname } from "next/navigation";
import useAuth from "@/app/hooks/useAuth";
import Loader from "../Loader/Loader";

export default function AuthWrapper({ children }) {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth(pathname);

  if (!isAuthenticated) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "white",
        }}
      >
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}
