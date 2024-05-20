"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/cartContext';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <CartProvider>
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
    </CartProvider>
  );
}
