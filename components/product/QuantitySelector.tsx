"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="w-fit">

      <h3 className="mb-4 text-xl font-semibold text-white">
        Quantity
      </h3>

      <div className="flex h-14 w-52 overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#111111]">

        {/* Minus */}

        <button
          onClick={decrease}
          className="flex w-16 items-center justify-center border-r border-[#2A2A2A] transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#C8A34D]"
        >
          <Minus size={18} strokeWidth={2.2} />
        </button>

        {/* Quantity */}

        <div className="flex flex-1 items-center justify-center text-xl font-semibold text-white">
          {quantity}
        </div>

        {/* Plus */}

        <button
          onClick={increase}
          className="flex w-16 items-center justify-center border-l border-[#2A2A2A] transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#C8A34D]"
        >
          <Plus size={18} strokeWidth={2.2} />
        </button>

      </div>

    </div>
  );
}