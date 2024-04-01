import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shi Hong's Portfolio",
  description: "Welcome to my portfolio. Discover my projects and learn more about my work.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
        
      </html>
    </>
  );
}
