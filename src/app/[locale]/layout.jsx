import "../globals.css";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata = {
  title: "Geo Market",
  description: "Geo Market Page",
};

async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <UserProvider>
        <body className="dark:bg-black ">
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </UserProvider>
    </html>
  );
}

export default withPageAuthRequired(LocaleLayout);
