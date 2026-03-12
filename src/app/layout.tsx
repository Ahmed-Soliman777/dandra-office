import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "../components/common/Navbar/NavbarWrapper";
import FooterWrapper from "../components/common/Footer/FooterWrapper";
import { NextIntlClientProvider } from "next-intl";
import Footer from "../components/common/Footer/Footer";
import Navbar from "../components/common/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import StoreProvider from "./StoreProvider";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "../utils/verifyToken";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const token = (await cookies()).get("token")?.value;

  const payload = verifyTokenForPage(token || "")

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
          <StoreProvider initialToken={token} initialPayload={payload && payload}>
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
