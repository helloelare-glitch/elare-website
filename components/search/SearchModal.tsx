"use client";

import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";


type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({
  open,
  onClose,
}: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];

    return products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="mx-auto mt-20 w-[92%] max-w-2xl rounded-3xl border border-[#2A2A2A] bg-[#111111] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-semibold text-white">
            Search Products
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 transition hover:text-white"
          >
            <X />
          </button>

        </div>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-2xl border border-[#333] bg-[#181818] py-4 pl-12 pr-4 text-white outline-none transition focus:border-[#D4AF37]"
          />

        </div>

        <div className="mt-6 max-h-[420px] overflow-y-auto">

          {query && filtered.length === 0 && (
            <p className="py-12 text-center text-gray-400">
              No products found.
            </p>
          )}

          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              onClick={onClose}
              className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-[#1A1A1A]"
            >
              <Image
                src={product.images[0]}
                alt={product.title}
                width={70}
                height={90}
                className="rounded-xl object-cover"
              />

              <div className="flex-1">

                <h3 className="font-medium text-white">
                  {product.title}
                </h3>

                <p className="mt-1 text-[#D4AF37]">
                  ₹{product.discountPrice}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}