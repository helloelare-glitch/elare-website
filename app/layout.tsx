import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "ElAre | Wear Your Story",
  description:
    "Premium clothing crafted with timeless design, exceptional quality and authenticity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#0F0F0F] text-white antialiased">
        <AuthProvider>
          <CartProvider>
            <Navbar />

            <main className="min-h-screen">
              {children}
            </main>

            <Toaster
              position="bottom-right"
              richColors
              theme="dark"
            />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}