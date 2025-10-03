import type { Metadata } from "next";
import { Amarante, Karla } from "next/font/google";
import "./globals.css";

const amarante = Amarante({
  variable: "--font-amarante",
  subsets: ["latin"],
  weight: "400",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Over the Garden Wall e-vite",
  description: "We're here to burgle yer turts!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${amarante.variable} ${karla.variable}`}>
        {children}
      </body>
    </html>
  );
}
