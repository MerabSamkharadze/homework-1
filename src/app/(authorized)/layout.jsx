import "../globals.css";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export const metadata = {
  title: "Geo Market",
  description: "Geo Market Page",
};

function RootLayout({ children }) {
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  );
}

export default withPageAuthRequired(RootLayout);
