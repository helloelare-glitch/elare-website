"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

type Order = {
  orderId: string;
  date: string;
  total: number;
  status: string;
};

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem(
      "elare-last-order"
    );

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      <section className="relative overflow-hidden">

        {/* Gold Glow */}

        <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-5 text-center">

          {/* Success Icon */}

          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">

            <CheckCircle2
              size={60}
              className="text-[#D4AF37]"
            />

          </div>

          <p className="mt-10 text-xs uppercase tracking-[0.45em] text-[#D4AF37]">
            ORDER CONFIRMED
          </p>

          <h1
            className="mt-5 text-5xl leading-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Thank You
            <br />

            <span className="text-[#D4AF37]">
              For Your Order
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-400">
            Your order has been placed successfully.
            <br />
            We're preparing your premium ElAre experience.
          </p>

          {/* Order Card */}

          <div className="mt-14 w-full max-w-xl rounded-[30px] border border-[#262626] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-8">

            <div className="flex items-center justify-between">

              <span className="text-gray-400">
                Order Number
              </span>

              <span className="font-semibold text-[#D4AF37]">
                {order?.orderId ?? "-"}
              </span>

            </div>

            <div className="mt-5 flex items-center justify-between">

              <span className="text-gray-400">
                Status
              </span>

              <span className="text-green-400">
                {order?.status ?? "Confirmed"}
              </span>

            </div>

            <div className="mt-5 flex items-center justify-between">

              <span className="text-gray-400">
                Total
              </span>

              <span className="font-semibold text-[#D4AF37]">
                ₹{order?.total ?? 0}
              </span>

            </div>

            <div className="mt-5 flex items-center justify-between">

              <span className="text-gray-400">
                Date
              </span>

              <span>
                {order
                  ? new Date(order.date).toLocaleDateString(
                      "en-IN"
                    )
                  : "-"}
              </span>

            </div>

            <div className="my-6 border-t border-[#333]" />

            <div className="space-y-4 text-left">

              <p className="text-gray-300">
                ✓ Order Confirmed
              </p>

              <p className="text-gray-300">
                ✓ Secure Payment
              </p>

              <p className="text-gray-300">
                ✓ Shipping updates will be shared soon
              </p>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-14 flex flex-col gap-5 sm:flex-row">

            <Link
              href="/shop"
              className="premium-button flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Continue Shopping

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/orders"
              className="flex items-center justify-center gap-3 rounded-full border border-[#D4AF37] px-10 py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              <ShoppingBag size={18} />

              My Orders
            </Link>

          </div>

          <p className="mt-12 text-sm text-gray-500">
            Need help?
            Contact us anytime at

            <span className="ml-2 text-[#D4AF37]">
              hello@elare.in
            </span>

          </p>

        </div>

      </section>

    </main>
  );
}