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

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setOpen(false);
  }

  const menuItems = [
    {
      title: "My Profile",
      href: "/profile",
      icon: UserIcon,
    },
    {
      title: "My Orders",
      href: "/orders",
      icon: Package,
    },
    {
      title: "Wishlist",
      href: "/wishlist",
      icon: Heart,
    },
  ];

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      {/* Button */}

      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-3 rounded-full border border-[#D4AF37] bg-[#111] px-5 py-2.5 text-[#D4AF37] transition-all duration-300 hover:bg-[#171717] hover:shadow-[0_0_22px_rgba(212,175,55,.35)]"
      >
        <UserIcon
          size={18}
          className="transition-all duration-300 group-hover:scale-110"
        />

        <span className="hidden lg:block font-medium">
          {user.email?.split("@")[0]}
        </span>

        <ChevronDown
          size={16}
          className={`transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      <div
        className={`absolute right-0 mt-4 w-80 origin-top-right overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111111]/95 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.65)] transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100 scale-100"
            : "pointer-events-none -translate-y-3 opacity-0 scale-95"
        }`}
      >
        {/* Header */}

        <div className="border-b border-[#242424] px-6 py-5">

          <p className="text-xs uppercase tracking-[0.45em] text-[#D4AF37]">
            Welcome
          </p>

          <p className="mt-3 truncate text-sm text-white">
            {user.email}
          </p>

        </div>

        {/* Menu */}

        <div className="p-3">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group mb-2 flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#191919] hover:shadow-[0_0_18px_rgba(212,175,55,.18)]"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-[#1B1B1B] p-2 transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">
                    <Icon size={18} />
                  </div>

                  <span className="text-white transition-all duration-300 group-hover:text-[#D4AF37]">
                    {item.title}
                  </span>

                </div>

                <ChevronDown
                  size={15}
                  className="-rotate-90 text-[#666] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                />

              </Link>
            );

          })}

        </div>

        {/* Footer */}

        <div className="border-t border-[#242424] p-3">

          <button
            onClick={handleLogout}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/30 px-4 py-3 text-red-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,.35)]"
          >
            <LogOut
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            Logout

          </button>

        </div>

      </div>
    </div>
  );
}