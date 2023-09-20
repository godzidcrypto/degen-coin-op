import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "@next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--lato-font",
});

const maistro = localFont({
  src: "../public/fonts/Maistro.ttf",
  variable: "--maistro-font",
});

export const metadata: Metadata = {
  title: "Degen Coin Op",
  description: "The Best Solana People Making The Best Games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${lato.variable} ${maistro.variable}`}>
        <Navbar />
        <main className="font-maistro tracking-[0.2em] overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
