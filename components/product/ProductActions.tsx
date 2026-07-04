"use client";
import { toast } from "sonner";
import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

type ProductActionsProps = {
  product: {
    id: number;
    slug: string;
    title: string;
    discountPrice: number;
    images: string[];
    sizes: string[];
  };
};

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      slug: product.slug,
      title: product.title,
      image: product.images[0],
      price: product.discountPrice,
      quantity: quantity,
      size: selectedSize,
    });

    toast.custom((t) => (
  <div className="w-[360px] rounded-2xl border border-[#C8A34D] bg-[#111111] p-5 shadow-2xl">

    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A34D] text-black">
        ✓
      </div>

      <div>

        <p className="font-semibold text-white">
          Added to Cart
        </p>

        <p className="text-sm text-gray-400">
          {product.title}
        </p>

      </div>

    </div>

    <button
      onClick={() => router.push("/cart")}
      className="mt-5 w-full rounded-full bg-[#C8A34D] py-3 font-semibold text-black transition hover:bg-[#D6B15C]"
    >
      View Cart
    </button>

  </div>
));
  };

  return (
    <>
      {/* Size */}
      <div className="mt-10">

        <h3 className="mb-4 text-xl font-semibold">
          Select Size
        </h3>

        <div className="flex gap-4">

          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`flex h-14 w-14 items-center justify-center rounded-xl border text-lg transition-all duration-300 ${
                selectedSize === size
                  ? "border-[#C8A34D] bg-[#C8A34D] text-black"
                  : "border-[#2A2A2A] hover:border-[#C8A34D]"
              }`}
            >
              {size}
            </button>
          ))}

        </div>

      </div>

      {/* Quantity */}

      <div className="mt-8">
        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>

      {/* Add To Cart */}

      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-10 w-[420px] rounded-full bg-[#C8A34D] py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#D6B15C]"
      >
        Add To Cart
      </button>
    </>
  );
}