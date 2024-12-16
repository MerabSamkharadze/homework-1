import Link from "next/link";

import "./styles.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <div className="container ">{children}</div>
    </>
  );
}
