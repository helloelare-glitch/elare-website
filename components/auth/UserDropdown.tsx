"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import {
  ChevronDown,
  User as UserIcon,
  Package,
  Heart,
  LogOut,
} from "lucide-react";

type Props = {
  user: User;
};

export default function UserDropdown({ user }: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setOpen(false);
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full border border-[#D4AF37] px-5 py-2 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
      >
        <UserIcon size={18} />

        <span className="hidden lg:block">
          {user.email?.split("@")[0]}
        </span>

        <ChevronDown
          size={16}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-[#2B2B2B] bg-[#161616] shadow-2xl">

          <div className="border-b border-[#2B2B2B] px-5 py-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Welcome
            </p>

            <p className="mt-2 truncate text-sm text-white">
              {user.email}
            </p>
          </div>

          <div className="py-2">

            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 text-white transition hover:bg-[#202020]"
            >
              <UserIcon size={18} />
              My Profile
            </Link>

            <Link
              href="/orders"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 text-white transition hover:bg-[#202020]"
            >
              <Package size={18} />
              My Orders
            </Link>

            <Link
              href="/wishlist"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 text-white transition hover:bg-[#202020]"
            >
              <Heart size={18} />
              Wishlist
            </Link>

          </div>

          <div className="border-t border-[#2B2B2B] p-2">

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>
        </div>
      )}
    </div>
  );
}