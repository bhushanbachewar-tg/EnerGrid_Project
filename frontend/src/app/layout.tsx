import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit } from "next/font/google";

import Navbar from "../Components/Commons/Navbar";
import Footer from "../Components/Commons/Footer";
import ThemeProvider from "../Components/Commons/ThemeProvider";

import "../index.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "EnerGrid",
  description: "EnerGrid web app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body
        className={`${outfit.className} flex min-h-screen flex-col bg-background pt-16 font-sans text-primary antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
