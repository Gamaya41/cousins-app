import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // Importe corrigido para a pasta interna

export const metadata: Metadata = {
  title: "Cousins Lounge Bar",
  description: "Sistema de fidelidade e social para clientes VIP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}