"use client";

import { usePathname } from "next/navigation";
import useAuth from "@/app/hooks/useAuth";

export default function AuthWrapper({ children }) {
  const pathname = usePathname();
  useAuth(pathname);

  return <>{children}</>;
}
