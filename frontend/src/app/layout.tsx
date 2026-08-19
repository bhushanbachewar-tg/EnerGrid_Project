import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "../Components/Commons/Navbar";
import Footer from "../Components/Commons/Footer";

import "../index.css";

export const metadata: Metadata = {
  title: "EnerGrid",
  description: "EnerGrid web app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-ener-navy pt-16 text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

