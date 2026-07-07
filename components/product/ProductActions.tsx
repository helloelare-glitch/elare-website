"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import QuantitySelector from "./QuantitySelector";

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
      quantity,
      size: selectedSize,
    });

    toast.custom(() => (
      <div className="w-[320px] rounded-2xl border border-[#D4AF37] bg-[#111111] p-5 shadow-[0_0_30px_rgba(212,175,55,0.12)] sm:w-[360px]">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] text-lg font-bold text-black">
            ✓
          </div>

          <div>

            <p className="text-base font-semibold text-white">
              Added to Cart
            </p>

            <p className="mt-1 text-sm text-gray-400">
              {product.title}
            </p>

          </div>

        </div>

        <button
          onClick={() => {
  toast.dismiss();
  router.push("/cart");
}}
          className="premium-button mt-6 w-full rounded-full bg-[#D4AF37] py-3 font-semibold text-black transition-all duration-300 hover:bg-[#DDB95A]"
        >
          View Cart
        </button>

      </div>
    ));
  };

  return (
    <>
      {/* Size */}

      <div className="mt-8">

        <h3 className="mb-5 text-lg font-semibold text-white sm:text-xl">
          Select Size
        </h3>

        <div className="flex flex-wrap gap-3">

          {product.sizes.map((size) => (

            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`premium-button flex h-12 w-12 items-center justify-center rounded-xl border text-base font-medium transition-all duration-300 sm:h-14 sm:w-14 sm:text-lg ${
                selectedSize === size
                  ? "border-[#D4AF37] bg-[#D4AF37] text-black shadow-[0_0_16px_rgba(212,175,55,0.18)]"
                  : "border-[#2A2A2A] bg-[#151515] text-white hover:border-[#D4AF37]"
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
        className="premium-button mt-8 w-full rounded-full bg-[#D4AF37] py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-[#DDB95A] sm:mt-10 sm:max-w-[420px] sm:text-lg"
      >
        Add To Cart
      </button>
    </>
  );
}