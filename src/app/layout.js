// layout.js
import Navigation from "../components/Navigation";
import "./global.css";

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
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
