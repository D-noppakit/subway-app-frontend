import { Inter } from "next/font/google";
import "./globals.css";
import HeaderOne from "@/components/HeaderOne";

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
