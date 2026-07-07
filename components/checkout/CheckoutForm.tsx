"use client";

import { useState } from "react";
import PaymentMethod from "./PaymentMethod";

export default function CheckoutForm() {
  const [payment, setPayment] = useState("cod");

  return (
    <div className="rounded-[32px] border border-[#262626] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-6 sm:p-8 lg:p-10">

      <h2
        className="text-3xl sm:text-4xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Delivery Details
      </h2>

      <p className="mt-3 text-gray-400">
        Please enter your shipping information.
      </p>

      <div className="mt-10 grid gap-6">

        <input
          type="text"
          placeholder="Full Name"
          className="rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
        />

        <textarea
          rows={4}
          placeholder="House No, Street, Area"
          className="resize-none rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
        />

        <div className="grid gap-6 sm:grid-cols-2">

          <input
            type="text"
            placeholder="City"
            className="rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
          />

          <input
            type="text"
            placeholder="State"
            className="rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
          />

        </div>

        <input
          type="text"
          placeholder="Pincode"
          className="rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
        />

      </div>

      <PaymentMethod
        payment={payment}
        setPayment={setPayment}
      />

    </div>
  );
}