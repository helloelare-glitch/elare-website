"use client";

import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export default function QuantitySelector({
  quantity,
  setQuantity,
}: QuantitySelectorProps) {
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

        <button
          onClick={decrease}
          className="flex w-16 items-center justify-center border-r border-[#2A2A2A] transition hover:bg-[#1A1A1A] hover:text-[#C8A34D]"
        >
          <Minus size={18} />
        </button>

        <div className="flex flex-1 items-center justify-center text-xl font-semibold">
          {quantity}
        </div>

        <button
          onClick={increase}
          className="flex w-16 items-center justify-center border-l border-[#2A2A2A] transition hover:bg-[#1A1A1A] hover:text-[#C8A34D]"
        >
          <Plus size={18} />
        </button>

      </div>

    </div>
  );
}