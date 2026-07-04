"use client";

import Logo from "../Logo";
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#0F0F0F]/90 backdrop-blur-xl">

      <div className="relative mx-auto h-24 max-w-7xl">

        {/* Logo */}

        <div className="absolute left-2 top-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Center Navigation */}

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-12 md:flex">

          <Link
            href="/shop"
            className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]"
          >
            Shop
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/men"
            className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]"
          >
            Men
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/women"
            className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]"
          >
            Women
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]"
          >
            About
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contact"
            className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]"
          >
            Contact
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </nav>

        {/* Right Side */}

        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-6">

          <Search
            size={20}
            className="cursor-pointer text-white transition hover:text-[#D4AF37]"
          />

          <Link
            href="/cart"
            className="relative transition hover:text-[#D4AF37]"
          >
            <ShoppingBag
              size={20}
              className="text-white transition hover:text-[#D4AF37]"
            />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-black">
                {totalItems}
              </span>
            )}
          </Link>

          <button className="flex items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-medium uppercase tracking-wider text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black">

            <User size={18} />

            Login

          </button>

        </div>

      </div>

    </header>
  );
}