"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PackageCheck } from "lucide-react";

type Order = {
  orderId: string;
  date: string;
  total: number;
  status: string;

  items: {
    id: number;
    title: string;
    image: string;
    size: string;
    quantity: number;
    price: number;
  }[];
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("elare-orders") || "[]"
    );

    setOrders(savedOrders);
  }, []);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-[#262626]">

        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:py-24">

          <p className="text-xs uppercase tracking-[0.45em] text-[#C8A34D]">
            MY ORDERS
          </p>

          <h1
            className="mt-6 text-5xl leading-none sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your ElAre
            <br />

            <span className="text-[#D4AF37]">
              Journey
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
  From your first purchase to your latest arrival,
  every ElAre order is beautifully organized in one place.
</p>

<div className="mt-8 inline-flex items-center rounded-full border border-[#2A2A2A] bg-[#171717]/70 px-5 py-3 backdrop-blur-md">
  <span className="text-sm text-gray-300">
    {orders.length} Order{orders.length !== 1 ? "s" : ""} • Premium Experience
  </span>
</div>

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:py-20">

        {orders.length === 0 ? (

          <div className="rounded-[32px] border border-[#262626] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-12 text-center">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#D4AF37]/10">

              <PackageCheck
                size={42}
                className="text-[#D4AF37]"
              />

            </div>

            <h2
              className="mt-8 text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              No Orders Yet
            </h2>

            <p className="mx-auto mt-5 max-w-md leading-8 text-gray-400">
              Once you place your first order,
              it will appear here with tracking,
              delivery details and order history.
            </p>

            <Link
              href="/shop"
              className="premium-button mt-10 inline-flex rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black"
            >
              Explore Collection
            </Link>

          </div>

        ) : (

          <div className="space-y-6">

            {orders.map((order) => {

              const firstItem = order.items[0];

              return (

                <Link
                  key={order.orderId}
                  href={`/orders/${order.orderId}`}
                  className="group relative overflow-hidden block rounded-[30px] border border-[#262626] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_25px_60px_rgba(212,175,55,0.08)] sm:p-8"
                >
<div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
  <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#D4AF37]/5 blur-3xl" />
</div>
                  <div className="flex items-start gap-4 sm:gap-6">

<Image
  src={firstItem.image}
  alt={firstItem.title}
  width={110}
  height={140}
  className="rounded-3xl object-cover shadow-xl"
/>

                    <div className="flex flex-1 flex-col">

                      <div className="flex items-center justify-between">

                        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-400">
                          ✓ {order.status}
                        </span>

                        <span className="text-xl font-semibold text-[#D4AF37]">
                          ₹{order.total}
                        </span>

                      </div>

                      <h2
                        className="mt-4 line-clamp-2 text-lg leading-7 sm:text-2xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {firstItem.title}
                      </h2>

                      <p className="mt-2 text-gray-400">
                        Size {firstItem.size} • Qty {firstItem.quantity}
                      </p>

                      {order.items.length > 1 && (

                        <p className="mt-2 text-sm text-[#D4AF37]">
                          +{order.items.length - 1} more item(s)
                        </p>

                      )}
                    <div className="mt-6 border-t border-[#2A2A2A]" />
<div className="mt-6">

  {/* Mobile Layout */}

  <div className="block sm:hidden">

    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
      Order Number
    </p>

    <p className="mt-2 break-all font-mono text-sm text-white">
      {order.orderId}
    </p>

    <p className="mt-2 text-sm text-gray-500">
      {new Date(order.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
    </p>

    <div className="mt-5">

      <div className="flex items-center justify-center gap-2 rounded-full border border-[#D4AF37] py-3 text-sm font-medium text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">

        View Details

        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />

      </div>

    </div>

  </div>

  {/* Desktop Layout */}

  <div className="hidden items-center justify-between sm:flex">

    <div>

      <p className="text-xs uppercase tracking-wider text-gray-500">
        Order
      </p>

      <p className="mt-1 text-sm text-gray-300">
        {order.orderId}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {new Date(order.date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>

    </div>

    <span className="flex items-center gap-2 rounded-full border border-[#D4AF37] px-5 py-2 text-sm font-medium text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">

      View Details

      <ArrowRight
        size={16}
        className="transition group-hover:translate-x-1"
      />

    </span>

  </div>

</div>

                    </div>

                  </div>

                </Link>

              );

            })}

          </div>

        )}

      </section>

    </main>
  );
}