"use client";

import { useState } from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#0F0F0F]/90 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:h-24 lg:px-8">

          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-12 md:flex">

            <Link
              href="/shop"
              className="group relative text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:text-[#D4AF37]"
            >
              Shop
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/about"
              className="group relative text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:text-[#D4AF37]"
            >
              About
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/contact"
              className="group relative text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:text-[#D4AF37]"
            >
              Contact
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </Link>

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <Search
              size={20}
              className="premium-icon cursor-pointer text-white transition-all duration-300 hover:text-[#D4AF37]"
            />

            <Link
              href="/cart"
              className="relative"
            >

              <ShoppingBag
                size={20}
                className="premium-icon text-white transition-all duration-300 hover:text-[#D4AF37]"
              />

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-black">
                  {totalItems}
                </span>
              )}

            </Link>

            {/* Desktop Login */}

            <button className="premium-button hidden items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-medium uppercase tracking-wider text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black md:flex">

              <User
                size={18}
                className="premium-icon"
              />

              Login

            </button>

            {/* Mobile Menu */}

            <button
              onClick={() => setMenuOpen(true)}
              className="premium-icon text-white md:hidden"
            >
              <Menu size={28} />
            </button>

          </div>

        </div>

      </header>

      {/* Mobile Drawer */}

      <div
        className={`fixed inset-0 z-[999] bg-black/60 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      >

        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-72 border-l border-[#262626] bg-[#111111] p-8 transition-transform duration-300 ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          <button
            onClick={() => setMenuOpen(false)}
            className="premium-icon mb-10"
          >
            <X className="text-white" />
          </button>

          <nav className="flex flex-col gap-7">

            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/shop" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (

              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white transition-all duration-300 hover:translate-x-2 hover:text-[#D4AF37]"
              >
                {item.name}
              </Link>

            ))}

            <button className="premium-button mt-8 rounded-full border border-[#D4AF37] py-3 font-medium text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black">

              Login

            </button>

          </nav>

        </div>

      </div>

    </>
  );
}