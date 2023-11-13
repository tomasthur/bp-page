import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Navigation from "@/components/Navigation";

const font = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PB HOUSE",
  description: "PB - The House Makers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#fcfcfd] scroll-smooth">
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
