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

        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-24 text-center">

          <h1
            className="text-4xl sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your Cart
          </h1>

          <p className="mt-5 text-gray-400">
            Your shopping bag is empty.
          </p>

          <Link
            href="/shop"
            className="premium-button mt-8 rounded-full bg-[#C8A34D] px-8 py-4 font-semibold text-black"
          >
            Continue Shopping
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-20">

        <h1
          className="mb-8 text-4xl sm:mb-12 sm:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-10">

          {/* Products */}

          <div className="space-y-5">

            {cart.map((item) => (

              <div
                key={`${item.id}-${item.size}`}
                className="premium-card rounded-3xl border border-[#2A2A2A] bg-[#131313] p-4 sm:p-6"
              >

                {/* Mobile */}

                <div className="flex gap-4">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={110}
                    height={130}
                    className="rounded-2xl object-cover sm:w-[140px]"
                  />

                  <div className="flex flex-1 flex-col">

                    <h2 className="text-lg font-semibold sm:text-2xl">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      Size : {item.size}
                    </p>

                    <p className="mt-2 text-xl font-bold text-[#C8A34D] sm:text-2xl">
                      ₹{item.price}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-5">

                      <div className="flex items-center gap-3">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id, item.size)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#333] transition hover:border-[#C8A34D]"
                        >
                          −
                        </button>

                        <span className="w-5 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id, item.size)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#333] transition hover:border-[#C8A34D]"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.id, item.size)
                        }
                        className="text-red-400 transition hover:text-red-500"
                      >
                        <Trash2 size={20} />
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Summary */}

          <div className="premium-card h-fit rounded-3xl border border-[#2A2A2A] bg-[#131313] p-6 sm:p-8">

            <h2 className="text-2xl font-semibold sm:text-3xl">
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

            <div className="flex justify-between text-xl font-bold sm:text-2xl">

              <span>Total</span>

              <span className="text-[#C8A34D]">
                ₹{subtotal}
              </span>

            </div>

            <Link
  href="/checkout"
  className="premium-button mt-10 flex w-full items-center justify-center rounded-full bg-[#D4AF37] py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
>
  Proceed to Checkout
</Link>

          </div>

        </div>

      </section>

    </main>
  );
}