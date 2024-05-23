// "use server";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import MobileNavbar from "@/components/MobileNavbar";
import Searchbar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Folka Travel",
  description: "Traveling app",
};
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="relative ">
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
