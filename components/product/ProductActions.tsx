"use client";

import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "@/context/CartContext";

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

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      slug: product.slug,
      title: product.title,
      image: product.images[0],
      price: product.discountPrice,
      quantity,
      size: selectedSize,
    });

    console.log("Added to cart");
  };

  return (
    <>
      <div className="mt-10">

        <h3 className="mb-4 text-xl font-semibold">
          Select Size
        </h3>

        <div className="flex gap-4">

          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex h-14 w-14 items-center justify-center rounded-xl border text-lg transition-all duration-300 ${
                selectedSize === size
                  ? "bg-[#C8A34D] text-black border-[#C8A34D]"
                  : "border-[#2A2A2A] hover:border-[#C8A34D]"
              }`}
            >
              {size}
            </button>
          ))}

        </div>

      </div>

      <div className="mt-8">
        <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
/>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-10 w-[420px] rounded-full bg-[#C8A34D] py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#D6B15C]"
      >
        Add To Cart
      </button>
    </>
  );
}