"use client";

import Link from "next/link";
import {
  X,
  User,
  ShoppingBag,
  Heart,
  Package,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { User as SupabaseUser } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type Props = {
  open: boolean;
  onClose: () => void;
  user: SupabaseUser | null;
};

export default function MobileDrawer({
  open,
  onClose,
  user,
}: Props) {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
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

  async function logout() {
    await supabase.auth.signOut();
    onClose();
  }

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm transition-all duration-300 md:hidden ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-0 flex h-full w-[330px] max-w-[88vw] flex-col border-l border-[#2A2A2A] bg-[#111111] shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#222] px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
              Menu
            </p>

            <h2 className="mt-1 text-xl font-semibold text-white">
              ElAre
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-[#333] p-2 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <X size={20} />
          </button>
        </div>

        {/* User */}

        {user ? (
          <div className="border-b border-[#222] px-6 py-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-xl font-bold text-black">
                {user.email?.charAt(0).toUpperCase()}
              </div>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                  Welcome
                </p>

                <p className="truncate text-sm text-white">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="border-b border-[#222] px-6 py-6">
            <Link
              href="/login"
              onClick={onClose}
              className="flex items-center justify-center rounded-full border border-[#D4AF37] py-3 font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              <User size={18} className="mr-2" />
              Login
            </Link>
          </div>
        )}

        {/* Navigation */}

        <nav className="flex-1 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl px-3 py-4 text-white transition hover:bg-[#191919] hover:text-[#D4AF37]"
            >
              <span>{item.title}</span>

              <ChevronRight size={18} />
            </Link>
          ))}

          {user && (
            <>
              <div className="my-4 border-t border-[#222]" />

              <Link
                href="/profile"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-3 py-4 text-white transition hover:bg-[#191919]"
              >
                <User size={18} />
                My Profile
              </Link>

              <Link
                href="/orders"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-3 py-4 text-white transition hover:bg-[#191919]"
              >
                <Package size={18} />
                Orders
              </Link>

              <Link
                href="/wishlist"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-3 py-4 text-white transition hover:bg-[#191919]"
              >
                <Heart size={18} />
                Wishlist
              </Link>

              <Link
                href="/cart"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-3 py-4 text-white transition hover:bg-[#191919]"
              >
                <ShoppingBag size={18} />
                Cart
              </Link>
            </>
          )}
        </nav>

        {/* Footer */}

        {user && (
          <div className="border-t border-[#222] p-5">
            <button
              onClick={logout}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-red-500 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}