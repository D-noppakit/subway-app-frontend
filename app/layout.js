import { Kanit } from '@next/font/google';
const kanit = Kanit({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['thai', 'latin'], // Specify the subsets you need
});
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

export const metadata = {
  title: "Subway",
  description: "Subway",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <html lang="en">
        <body className={`${kanit.className} h-full w-full overflow-auto`}>
          {children}
        </body>
      </html>
    </>
  );
}
