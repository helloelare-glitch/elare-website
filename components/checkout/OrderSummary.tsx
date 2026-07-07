"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
  const { cart, clearCart } = useCart();

const router = useRouter();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handlePlaceOrder = () => {
  const order = {
    orderId: `ELA-${Date.now()}`,
    date: new Date().toISOString(),
    items: cart,
    total: subtotal,
    status: "Confirmed",
  };

  localStorage.setItem(
    "elare-last-order",
    JSON.stringify(order)
  );

  const previousOrders = JSON.parse(
    localStorage.getItem("elare-orders") || "[]"
  );

  localStorage.setItem(
    "elare-orders",
    JSON.stringify([order, ...previousOrders])
  );

  clearCart();

  router.push("/order-success");
};

  return (
    <div className="sticky top-28 h-fit rounded-[32px] border border-[#262626] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-6 sm:p-8">

      <h2
        className="text-3xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Order Summary
      </h2>

      <div className="mt-8 space-y-6">

        {cart.length === 0 ? (
          <p className="text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex gap-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={100}
                className="rounded-2xl object-cover"
              />

              <div className="flex-1">

                <h3 className="line-clamp-2 text-base text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Size: {item.size}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Qty: {item.quantity}
                </p>

                <p className="mt-2 font-semibold text-[#D4AF37]">
                  ₹{item.price * item.quantity}
                </p>

              </div>

            </div>
          ))
        )}

      </div>

      <div className="my-8 border-t border-[#333]" />

      <div className="space-y-4">

        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Shipping</span>
          <span className="text-green-400">
            FREE
          </span>
        </div>

        <div className="border-t border-[#333] pt-4" />

        <div className="flex justify-between text-2xl font-semibold">

          <span>Total</span>

          <span className="text-[#D4AF37]">
            ₹{subtotal}
          </span>

        </div>

      </div>

<button
  onClick={handlePlaceOrder}
  disabled={cart.length === 0}
  className="premium-button mt-10 flex w-full items-center justify-center rounded-full bg-[#D4AF37] py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
>
  Place Order
</button>

    </div>
  );
}