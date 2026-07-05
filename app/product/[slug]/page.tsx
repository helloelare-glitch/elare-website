import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductActions from "@/components/product/ProductActions";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <section className="mx-auto max-w-7xl px-8 py-16">

        {/* Product Section */}

        <div className="grid items-start gap-12 lg:grid-cols-[620px_520px]">

          {/* Product Gallery */}

          <ProductGallery
            images={product.images}
            title={product.title}
          />

{/* Product Details */}

<div className="flex flex-col justify-start pt-2">

  {/* Continue Shopping */}

  <Link
    href="/shop"
    className="mb-8 flex w-fit items-center gap-2 text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-x-1 hover:text-[#D4AF37]"
  >
    <ArrowLeft
      size={17}
      strokeWidth={2}
    />

    Continue Shopping

  </Link>

  {/* Brand */}

  <p className="uppercase tracking-[0.35em] text-[#C8A34D]">
    {product.brand}
  </p>

            <h1
              className="mt-3 text-6xl leading-[1.08]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {product.title}
            </h1>

            <div className="mt-6 flex items-end gap-5">

              <span className="text-5xl font-bold text-[#C8A34D]">
                ₹{product.discountPrice}
              </span>

              <span className="mb-1 text-3xl text-gray-500 line-through">
                ₹{product.price}
              </span>

            </div>

            <p className="mt-7 max-w-md text-lg leading-9 text-gray-400">
              {product.description}
            </p>

            <ProductActions product={product} />

          </div>

        </div>

{/* Premium Features */}

<div className="mt-20 overflow-hidden rounded-3xl border border-[#262626] bg-gradient-to-b from-[#161616] to-[#111111]">

  <div className="grid grid-cols-1 md:grid-cols-3">

    {/* Delivery */}

    <div className="group relative overflow-hidden flex flex-col items-center justify-center p-10 text-center">

      {/* Gold Sweep */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#D4AF3715] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      {/* Divider */}
      <span className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-[#2A2A2A]" />

      <Truck
        size={38}
        strokeWidth={1.8}
        className="relative z-10 text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:text-[#FFD76A]"
      />

      <h3 className="relative z-10 mt-5 text-lg font-medium tracking-wide text-white transition-colors duration-500 group-hover:text-[#FFF5D7]">
        Free Delivery
      </h3>

      <p className="relative z-10 mt-2 text-sm leading-6 text-gray-400 transition-colors duration-500 group-hover:text-gray-200">
        Across India on prepaid orders.
      </p>

    </div>

    {/* Returns */}

    <div className="group relative overflow-hidden flex flex-col items-center justify-center p-10 text-center">

      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#D4AF3715] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      <span className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-[#2A2A2A]" />

      <RotateCcw
        size={38}
        strokeWidth={1.8}
        className="relative z-10 text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:text-[#FFD76A]"
      />

      <h3 className="relative z-10 mt-5 text-lg font-medium tracking-wide text-white transition-colors duration-500 group-hover:text-[#FFF5D7]">
        Easy Returns
      </h3>

      <p className="relative z-10 mt-2 text-sm leading-6 text-gray-400 transition-colors duration-500 group-hover:text-gray-200">
        Hassle-free within 7 days.
      </p>

    </div>

    {/* Authentic */}

    <div className="group relative overflow-hidden flex flex-col items-center justify-center p-10 text-center">

      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#D4AF3715] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      <ShieldCheck
        size={38}
        strokeWidth={1.8}
        className="relative z-10 text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:text-[#FFD76A]"
      />

      <h3 className="relative z-10 mt-5 text-lg font-medium tracking-wide text-white transition-colors duration-500 group-hover:text-[#FFF5D7]">
        Authentic Products
      </h3>

      <p className="relative z-10 mt-2 text-sm leading-6 text-gray-400 transition-colors duration-500 group-hover:text-gray-200">
        Crafted with genuine ElAre quality.
      </p>

    </div>

  </div>

</div>

      </section>
    </main>
  );
}