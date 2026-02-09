import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // Caminho corrigido para ./components

export const metadata: Metadata = {
  title: "Bar do Amigo - Fidelidade",
  description: "Clube de benefícios Cousins Lounge Bar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}