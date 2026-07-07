"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

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

    if (found) {
      setOrder(found);
    }
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

      <section className="border-b border-[#262626]">

        <div className="mx-auto max-w-7xl px-5 py-16">

          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            ORDER DETAILS
          </p>

          <h1
            className="mt-5 text-5xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            {order.orderId}
          </h1>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          {/* Products */}

          <div className="rounded-[30px] border border-[#262626] bg-[#151515] p-8">

            <h2 className="mb-8 text-3xl">
              Ordered Items
            </h2>

            <div className="space-y-6">

              {order.items.map((item) => (

                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-5"
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={110}
                    height={140}
                    className="rounded-3xl object-cover shadow-xl"
                  />

                  <div>

                    <h3 className="text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      Size : {item.size}
                    </p>

                    <p className="text-gray-400">
                      Qty : {item.quantity}
                    </p>

                    <p className="mt-2 text-[#D4AF37]">
                      ₹{item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Summary */}

          <div className="space-y-6">

            <div className="rounded-[30px] border border-[#262626] bg-[#151515] p-8">

              <h2 className="text-2xl">
                Order Summary
              </h2>

              <div className="mt-8 space-y-5">

                <div className="flex justify-between">
                  <span>Status</span>

                  <span className="text-green-400">
                    {order.status}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Payment</span>

                  <span>{order.payment}</span>
                </div>

                <div className="flex justify-between">
                  <span>Total</span>

                  <span className="text-[#D4AF37]">
                    ₹{order.total}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Date</span>

                  <span>
                    {new Date(
                      order.date
                    ).toLocaleDateString()}
                  </span>
                </div>

              </div>

            </div>

            <div className="rounded-[30px] border border-[#262626] bg-[#151515] p-8">

              <h2 className="text-2xl">
                Delivery Address
              </h2>

              <div className="mt-6 space-y-2 text-gray-300">

                <p>{order.customer.fullName}</p>

                <p>{order.customer.mobile}</p>

                <p>{order.customer.email}</p>

                <p>{order.customer.address}</p>

                <p>
                  {order.customer.city},{" "}
                  {order.customer.state}
                </p>

                <p>{order.customer.pincode}</p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}