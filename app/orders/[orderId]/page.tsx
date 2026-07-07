"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Package2,
  CalendarDays,
  MapPin,
  User,
  Phone,
  Mail,
} from "lucide-react";
type Order = {
  orderId: string;
  date: string;
  total: number;
  status: string;
  payment: string;
  customer: {
    fullName: string;
    mobile: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: {
    id: number;
    title: string;
    image: string;
    size: string;
    quantity: number;
    price: number;
  }[];
};

export default function OrderDetailsPage() {
  const { orderId } = useParams();

  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const orders: Order[] = JSON.parse(
      localStorage.getItem("elare-orders") || "[]"
    );

    const found = orders.find(
      (o) => o.orderId === orderId
    );

    if (found) setOrder(found);
  }, [orderId]);

  if (!order) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0F0F0F] text-white">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-[#262626]">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">

          <Link
            href="/orders"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#D4AF37]"
          >
            <ArrowLeft size={18} />
            Back to Orders
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.45em] text-[#D4AF37]">
            ORDER DETAILS
          </p>

          <h1
            className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Order
            <br />
            <span className="text-[#D4AF37]">
              Confirmed
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-400">
              <CheckCircle2 size={18} />
              {order.status}
            </span>

            <span className="text-gray-400">
              {new Date(order.date).toLocaleDateString("en-IN",{
                day:"numeric",
                month:"long",
                year:"numeric",
              })}
            </span>

          </div>

          <div className="mt-8 rounded-3xl border border-[#2A2A2A] bg-[#181818]/70 p-6 backdrop-blur-md">

            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              ORDER NUMBER
            </p>

            <h2 className="mt-3 break-all text-2xl font-semibold text-[#D4AF37]">
              {order.orderId}
            </h2>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* PRODUCTS */}

          <div className="space-y-6">

            <div className="flex items-center gap-3">

              <Package2 className="text-[#D4AF37]" />

              <h2
                className="text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ordered Items
              </h2>

            </div>

            {order.items.map((item) => (

              <div
                key={`${item.id}-${item.size}`}
                className="rounded-[32px] border border-[#262626] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-5 transition hover:border-[#D4AF37]"
              >

                <div className="flex flex-col gap-5 sm:flex-row">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={150}
                    className="h-28 w-24 rounded-3xl object-cover shadow-xl sm:h-36 sm:w-28"
                  />

                  <div className="flex flex-1 flex-col justify-center">

                    <h3
                      className="text-xl leading-7 sm:text-2xl"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h3>

<div className="mt-5 flex flex-wrap gap-6">

  <div>

    <p className="text-xs uppercase tracking-wider text-gray-500">
      Size
    </p>

    <p className="mt-2 text-lg">
      {item.size}
    </p>

  </div>

  <div>

    <p className="text-xs uppercase tracking-wider text-gray-500">
      Quantity
    </p>

    <p className="mt-2 text-lg">
      {item.quantity}
    </p>

  </div>

</div>

<p className="mt-6 text-3xl font-semibold text-[#D4AF37]">
  ₹{item.price}
</p>

                  </div>

                </div>

              </div>

            ))}
          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-6">

            <div className="rounded-[32px] border border-[#262626] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-7">

              <div className="flex items-center gap-3">

                <CalendarDays className="text-[#D4AF37]" />

                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Order Summary
                </h2>

              </div>

              <div className="mt-8 space-y-6">

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    Status
                  </span>

                  <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                    ✓ {order.status}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    Payment
                  </span>

                  <span className="text-white">
                    {order.payment}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    Ordered On
                  </span>

                  <span className="text-white">
                    {new Date(order.date).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </span>

                </div>

                <div className="border-t border-[#2A2A2A]" />

                <div className="flex items-center justify-between">

                  <span className="text-lg">
                    Total
                  </span>

                  <span className="text-3xl font-semibold text-[#D4AF37]">
                    ₹{order.total}
                  </span>

                </div>

              </div>

            </div>

            <div className="rounded-[32px] border border-[#262626] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-7">

              <div className="flex items-center gap-3">

                <MapPin className="text-[#D4AF37]" />

                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Delivery Address
                </h2>

              </div>

              <div className="mt-7 space-y-4 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Customer
                  </p>

                  <p className="mt-2 text-lg">
                    {order.customer.fullName}
                  </p>

                </div>

                <div className="border-t border-[#2A2A2A]" />

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Mobile
                  </p>

                  <p className="mt-2">
                    {order.customer.mobile}
                  </p>

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Email
                  </p>

                  <p className="mt-2 break-all">
                    {order.customer.email}
                  </p>

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Address
                  </p>

                  <p className="mt-2 leading-7 text-gray-300">
                    {order.customer.address}
                    <br />
                    {order.customer.city},{" "}
                    {order.customer.state}
                    <br />
                    {order.customer.pincode}
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Bottom CTA */}

      <section className="border-t border-[#262626]">

        <div className="mx-auto max-w-5xl px-5 py-20 text-center">

          <h2
            className="text-4xl leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Thank You For
            <br />

            <span className="text-[#D4AF37]">
              Choosing ElAre
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            We're preparing your premium order with care.
            You'll receive shipping updates as soon as your package is ready.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/orders"
              className="rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              View All Orders
            </Link>

            <Link
              href="/shop"
              className="premium-button rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}