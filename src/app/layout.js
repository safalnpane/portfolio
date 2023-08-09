// layout.js
import { Inter } from "next/font/google";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safal Neupane",
  description: "Full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
