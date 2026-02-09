import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Bar do Amigo - Fidelidade",
  description: "Seu hub de diversão e recompensas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className="bg-black text-white antialiased min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}