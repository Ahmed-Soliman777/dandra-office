import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import FooterWrapper from "./components/Footer/FooterWrapper";
import { NextIntlClientProvider } from "next-intl";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dandra office",
  description: "Shop with Dandra office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <NavbarWrapper>
            <Navbar />
          </NavbarWrapper>
          <ToastContainer position="top-center" />
          <StoreProvider >
            {children}
          </StoreProvider>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
