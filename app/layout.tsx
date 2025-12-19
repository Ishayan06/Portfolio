// // app/layout.tsx
import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";
import { Nfc, NfcIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}


