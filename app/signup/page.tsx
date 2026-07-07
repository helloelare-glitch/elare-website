"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Loader2,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!form.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.fullName,
        },
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully!");

    router.push("/");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F0F0F] text-white">

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 py-10 lg:px-8">

        <div className="grid w-full overflow-hidden rounded-[40px] border border-[#2A2A2A] bg-[#151515] shadow-[0_35px_120px_rgba(0,0,0,0.45)] lg:grid-cols-2">

{/* LEFT PANEL */}

<div className="relative hidden min-h-[820px] overflow-hidden lg:block">

  <Image
    src="/images/signup-banner.jpg"
    alt="ElAre"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/35" />

  <div className="absolute inset-0 flex flex-col justify-end p-16">

    <div className="rounded-[28px] border border-white/10 bg-black/45 p-8 backdrop-blur-xl">

      <p className="text-xs uppercase tracking-[0.45em] text-[#D4AF37]">
        PREMIUM MEMBERSHIP
      </p>

      <h2
        className="mt-5 text-6xl leading-none"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Welcome to
        <br />
        ElAre
      </h2>

      <p className="mt-6 leading-8 text-gray-300">
        Experience premium fashion with exclusive collections,
        effortless ordering and timeless craftsmanship.
      </p>

    </div>

  </div>

</div>

{/* RIGHT PANEL */}

<div className="flex items-center justify-center p-8 sm:p-12 lg:p-16">

  <div className="w-full max-w-lg">

    <p className="text-center text-xs uppercase tracking-[0.45em] text-[#D4AF37]">
      CREATE ACCOUNT
    </p>

    <h2
      className="mt-6 text-center text-6xl leading-tight"
      style={{
        fontFamily: "var(--font-heading)",
      }}
    >
      Join
      <br />
      ElAre
    </h2>

    <p className="mt-6 text-center leading-8 text-gray-400">
      Create your account and unlock a premium shopping experience.
    </p>

    <form
      onSubmit={handleSignup}
      className="mt-12 space-y-6"
    >
      <input
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        type="text"
        placeholder="Full Name"
        className="w-full rounded-2xl border border-[#333] bg-[#101010] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#D4AF37]"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        placeholder="Email Address"
        className="w-full rounded-2xl border border-[#333] bg-[#101010] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#D4AF37]"
      />

      <input
        name="password"
        value={form.password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
        className="w-full rounded-2xl border border-[#333] bg-[#101010] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#D4AF37]"
      />

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[#D4AF37] py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2
              size={20}
              className="animate-spin"
            />
            Creating Account...
          </>
        ) : (
          <>
            Create Account
            <ArrowRight
              size={18}
              strokeWidth={2.5}
            />
          </>
        )}
      </button>

      <div className="flex items-center gap-4 py-2">

        <div className="h-px flex-1 bg-[#2A2A2A]" />

        <span className="text-sm text-gray-500">
          OR
        </span>

        <div className="h-px flex-1 bg-[#2A2A2A]" />

      </div>

      <button
        type="button"
        className="w-full rounded-full border border-[#333] py-4 transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
      >
        Continue with Google
      </button>

      <p className="pt-2 text-center text-gray-400">

        Already have an account?{" "}

        <Link
          href="/login"
          className="font-semibold text-[#D4AF37] hover:underline"
        >
          Login
        </Link>

      </p>

    </form>

          </div>

        </div>

      </div>

      </section>

    </main>
  );
}