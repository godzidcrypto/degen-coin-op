import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
