"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <section className="relative mx-auto flex min-h-screen max-w-md items-center justify-center px-5 py-16">

        <div className="w-full rounded-[36px] border border-[#2A2A2A] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-8 shadow-2xl">

          <p className="text-center text-xs uppercase tracking-[0.45em] text-[#D4AF37]">
            ELARE
          </p>

          <h1
            className="mt-6 text-center text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Welcome
            <br />
            Back
          </h1>

          <p className="mt-5 text-center leading-8 text-gray-400">
            Sign in to continue your premium
            ElAre journey.
          </p>

          <div className="mt-10 space-y-5">

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            />

            <button className="premium-button flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] py-4 font-semibold text-black transition hover:scale-[1.02]">

              Login

              <ArrowRight size={18} />

            </button>

          </div>

          <div className="my-8 flex items-center">

            <div className="h-px flex-1 bg-[#2A2A2A]" />

            <span className="px-4 text-sm text-gray-500">
              OR
            </span>

            <div className="h-px flex-1 bg-[#2A2A2A]" />

          </div>

          <button className="flex w-full items-center justify-center rounded-full border border-[#333] py-4 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">

            Continue with Google

          </button>

          <p className="mt-8 text-center text-gray-400">

            Don't have an account?{" "}

            <Link
              href="/signup"
              className="font-semibold text-[#D4AF37]"
            >
              Create Account
            </Link>

          </p>

        </div>

      </section>

    </main>
  );
}