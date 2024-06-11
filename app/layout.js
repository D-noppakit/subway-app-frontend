import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subway",
  description: "Subway",
};

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body className={inter.className + " " + "h-full w-full"}>{children}</body>
    </html>
  );
}
