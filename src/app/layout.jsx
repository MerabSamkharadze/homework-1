import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Geo Market",
  description: "Georgian E-comerce ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="dark:bg-black">
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
