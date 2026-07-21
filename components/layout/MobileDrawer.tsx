"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  User,
  ShoppingBag,
  Heart,
  Package,
  LogOut,
  Home,
  Info,
  Phone,
  ChevronRight,
} from "lucide-react";

import { User as SupabaseUser } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type Props = {
  open: boolean;
  onClose: () => void;
  user: SupabaseUser | null;
};

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Shop",
    href: "/shop",
    icon: ShoppingBag,
  },
  {
    title: "About",
    href: "/about",
    icon: Info,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

export default function MobileDrawer({
  open,
  onClose,
  user,
}: Props) {
  const pathname = usePathname();

  async function logout() {
    await supabase.auth.signOut();
    onClose();
  }

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[999] bg-black/75 backdrop-blur-md transition-all duration-300 md:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-0 flex h-full w-[300px] max-w-[92vw] flex-col border-l border-[#262626] bg-[#0D0D0D] shadow-[0_0_60px_rgba(0,0,0,0.8)] transition-all duration-500 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* HEADER */}

        <div className="relative border-b border-[#222] px-6 pb-8 pt-8">

          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full border border-[#333] p-2 text-gray-300 transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <X size={18} />
          </button>

          <div className="text-center">

            <p className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37]">
              ELARE
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-wide text-white">
              Wear Your Story
            </h2>

          </div>

        </div>

        {/* USER */}

        <div className="border-b border-[#222] px-6 py-8">

          {user ? (
            <div className="flex flex-col items-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-gradient-to-br from-[#D4AF37] to-[#B89126] text-3xl font-bold text-black shadow-lg">

                {user.email?.charAt(0).toUpperCase()}

              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
                Welcome Back
              </p>

              <p className="mt-2 max-w-[240px] truncate text-center text-sm text-gray-300">
                {user.email}
              </p>

            </div>
          ) : (
            <>

              <p className="mb-5 text-center text-sm text-gray-400">
                Sign in to access your orders, wishlist and profile.
              </p>

              <Link
                href="/login"
                onClick={onClose}
                className="flex items-center justify-center rounded-full border border-[#D4AF37] py-3 text-sm font-medium uppercase tracking-widest text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                <User size={18} className="mr-2" />
                Login
              </Link>

            </>
          )}

        </div>

        {/* NAVIGATION */}

        <nav className="flex-1 overflow-y-auto px-5 py-6">

          <p className="mb-4 px-3 text-xs uppercase tracking-[0.4em] text-[#666]">
            Navigation
          </p>

          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className={`group mb-2 flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 ${
                  active
                    ? "border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]"
                    : "border border-transparent text-white hover:border-[#2A2A2A] hover:bg-[#171717]"
                }`}
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`rounded-xl p-2 transition-all ${
                      active
                        ? "bg-[#D4AF37] text-black"
                        : "bg-[#191919] text-gray-300 group-hover:text-[#D4AF37]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <span className="text-sm tracking-wide">
                    {item.title}
                  </span>

                </div>

                <ChevronRight
                  size={18}
                  className={`transition-transform duration-300 ${
                    active
                      ? "translate-x-1 text-[#D4AF37]"
                      : "text-gray-500 group-hover:translate-x-1"
                  }`}
                />
              </Link>
            );
          })}

          {user && (
            <>
              <div className="my-6 border-t border-[#222]" />

              <Link
                href="/profile"
                onClick={onClose}
                className={`group mb-2 flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 ${
                  pathname === "/profile"
                    ? "border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]"
                    : "border border-transparent text-white hover:border-[#2A2A2A] hover:bg-[#171717]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-[#191919] p-2">
                    <User size={18} />
                  </div>
                  <span className="text-sm tracking-wide">My Profile</span>
                </div>

                <ChevronRight size={18} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/orders"
                onClick={onClose}
                className={`group mb-2 flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 ${
                  pathname === "/orders"
                    ? "border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]"
                    : "border border-transparent text-white hover:border-[#2A2A2A] hover:bg-[#171717]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-[#191919] p-2">
                    <Package size={18} />
                  </div>
                  <span className="text-sm tracking-wide">Orders</span>
                </div>

                <ChevronRight size={18} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/wishlist"
                onClick={onClose}
                className={`group mb-2 flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 ${
                  pathname === "/wishlist"
                    ? "border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]"
                    : "border border-transparent text-white hover:border-[#2A2A2A] hover:bg-[#171717]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-[#191919] p-2">
                    <Heart size={18} />
                  </div>
                  <span className="text-sm tracking-wide">Wishlist</span>
                </div>

                <ChevronRight size={18} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/cart"
                onClick={onClose}
                className={`group mb-2 flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 ${
                  pathname === "/cart"
                    ? "border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]"
                    : "border border-transparent text-white hover:border-[#2A2A2A] hover:bg-[#171717]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-[#191919] p-2">
                    <ShoppingBag size={18} />
                  </div>
                  <span className="text-sm tracking-wide">Cart</span>
                </div>

                <ChevronRight size={18} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </>
          )}
        </nav>

        {/* FOOTER */}

        <div className="border-t border-[#222] px-6 py-6">

          {user ? (
            <button
              onClick={logout}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-red-500/50 py-3 text-sm font-medium text-red-400 transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              <LogOut size={18} />
              Logout
            </button>
          ) : (
            <p className="text-center text-xs tracking-[0.3em] text-[#666] uppercase">
              ELARE • Premium Fashion
            </p>
          )}

        </div>

      </aside>
    </div>
  );
}