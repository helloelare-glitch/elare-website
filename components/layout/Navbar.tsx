"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../Logo";
import MobileDrawer from "@/components/layout/MobileDrawer";
import SearchModal from "@/components/search/SearchModal";
import UserDropdown from "@/components/auth/UserDropdown";

import {
  Search,
  ShoppingBag,
  User,
  Menu,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();

  const { cart } = useCart();
  const { user } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navItems = [
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#2A2A2A] bg-[#0B0B0B]/95 shadow-[0_10px_40px_rgba(0,0,0,.45)] backdrop-blur-2xl"
            : "bg-[#0F0F0F]/80 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 lg:h-24 lg:px-12">

          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-12 lg:flex">

            {navItems.map((item) => {

              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group relative text-sm uppercase tracking-[0.28em] transition-all duration-300 ${
                    active
                      ? "text-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`}
                >
                  {item.title}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );

            })}

          </nav>

          {/* Right Section */}

          <div className="flex items-center gap-3">

            {/* Search */}

            <button
              onClick={() => setSearchOpen(true)}
              className="rounded-full border border-[#2A2A2A] p-2.5 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#181818]"
              aria-label="Search"
            >
              <Search
                size={20}
                className="text-white transition-all duration-300 hover:text-[#D4AF37]"
              />
            </button>

            {/* Cart */}

            <Link
              href="/cart"
              className="group relative rounded-full border border-[#2A2A2A] p-2.5 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#181818]"
            >
              <ShoppingBag
                size={20}
                className="text-white transition-all duration-300 group-hover:text-[#D4AF37]"
              />

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-black shadow-lg">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Desktop Login */}

            {user ? (
              <div className="hidden md:block">
                <UserDropdown user={user} />
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black md:flex"
              >
                <User size={18} />
                Login
              </Link>
            )}

            {/* Mobile Menu */}

            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-full border border-[#2A2A2A] p-2.5 text-white transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] lg:hidden"
            >
              <Menu size={24} />
            </button>

          </div>

        </div>

      </header>

      {/* Mobile Drawer */}

      <MobileDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        user={user}
      />

      {/* Search */}

      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

    </>
  );
}