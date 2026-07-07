import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";

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
    >
      <body className="bg-[#0F0F0F] text-white antialiased">

<AuthProvider>

  <CartProvider>

    <Navbar />

    {children}

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