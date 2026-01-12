import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";



export const metadata: Metadata = {
  title: "Travel Trucks",
  description: "Campers of your dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <div className="container">

        <Header/>
        <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
