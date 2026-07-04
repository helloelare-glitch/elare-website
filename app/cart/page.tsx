"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#0F0F0F] text-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center py-28">

          <h1
            className="text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your Cart
          </h1>

          <p className="mt-6 text-gray-400">
            Your shopping bag is empty.
          </p>

          <Link
            href="/shop"
            className="mt-10 rounded-full bg-[#C8A34D] px-8 py-4 font-semibold text-black"
          >
            Continue Shopping
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      <section className="mx-auto max-w-7xl px-8 py-20">

        <h1
          className="mb-12 text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Shopping Cart
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

          {/* LEFT */}

          <div className="space-y-6">

            {cart.map((item) => (

              <div
                key={`${item.id}-${item.size}`}
                className="flex items-center gap-6 rounded-3xl border border-[#2A2A2A] bg-[#131313] p-6"
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  width={140}
                  height={160}
                  className="rounded-2xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-gray-400">
                    Size : {item.size}
                  </p>

                  <p className="mt-2 text-[#C8A34D] text-2xl font-bold">
                    ₹{item.price}
                  </p>

                  <div className="mt-6 flex items-center gap-4">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-10 w-10 rounded-lg border border-[#333]"
                    >
                      −
                    </button>

                    <span className="text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-10 w-10 rounded-lg border border-[#333]"
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 transition hover:text-red-500"
                >
                  <Trash2 />
                </button>

              </div>

            ))}

          </div>

          {/* RIGHT */}

          <div className="h-fit rounded-3xl border border-[#2A2A2A] bg-[#131313] p-8">

            <h2 className="text-3xl font-semibold">
              Order Summary
            </h2>

            <div className="mt-8 flex justify-between">

              <span className="text-gray-400">
                Subtotal
              </span>

              <span>
                ₹{subtotal}
              </span>

            </div>

            <div className="mt-4 flex justify-between">

              <span className="text-gray-400">
                Shipping
              </span>

              <span className="text-green-400">
                FREE
              </span>

            </div>

            <div className="my-8 border-t border-[#333]" />

            <div className="flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span className="text-[#C8A34D]">
                ₹{subtotal}
              </span>

            </div>

            <button className="mt-10 w-full rounded-full bg-[#C8A34D] py-4 text-lg font-semibold text-black transition hover:bg-[#D6B15C]">

              Proceed to Checkout

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}