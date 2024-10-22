import { NextResponse } from "next/server";
import { refreshAccessToken } from "@/lib/action";

export async function middleware(request) {
  const token = request.cookies.get("accessToken");
  const { pathname } = request.nextUrl;

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token) {
    const refreshResult = await refreshAccessToken();

    if (refreshResult.success) {
      return NextResponse.next();
    } else {
      if (pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|assets|public|favicon.ico).*)"],
};
