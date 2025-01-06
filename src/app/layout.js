import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "MuseConnect",
  description: "음악과 팬을 잇는 서비스",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
