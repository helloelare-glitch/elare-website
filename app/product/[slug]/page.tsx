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
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:py-16">

        {/* Product */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[620px_520px] lg:gap-12">

          {/* Gallery */}

          <ProductGallery
            images={product.images}
            title={product.title}
          />

          {/* Details */}

          <div className="flex flex-col">

            <Link
              href="/shop"
              className="mb-6 flex w-fit items-center gap-2 text-sm text-gray-400 transition hover:-translate-x-1 hover:text-[#D4AF37]"
            >
              <ArrowLeft size={17} />
              Continue Shopping
            </Link>

            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A34D] sm:text-sm">
              {product.brand}
            </p>

            <h1
              className="mt-3 text-3xl leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {product.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-end gap-3 sm:gap-5">

              <span className="text-3xl font-bold text-[#C8A34D] sm:text-4xl lg:text-5xl">
                ₹{product.discountPrice}
              </span>

              <span className="text-xl text-gray-500 line-through sm:text-2xl lg:text-3xl">
                ₹{product.price}
              </span>

            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 lg:text-lg lg:leading-9">
              {product.description}
            </p>

            <ProductActions product={product} />

          </div>

        </div>

        {/* Premium Features */}

        <div className="mt-14 overflow-hidden rounded-3xl border border-[#262626] bg-gradient-to-b from-[#161616] to-[#111111] sm:mt-20">

          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* Delivery */}

            <div className="group relative flex flex-col items-center justify-center overflow-hidden p-8 text-center sm:p-10">

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#D4AF3715] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="absolute right-0 top-8 bottom-8 hidden w-px bg-[#2A2A2A] md:block" />

              <Truck
                size={36}
                className="relative z-10 text-[#D4AF37] transition duration-500 group-hover:scale-110"
              />

              <h3 className="relative z-10 mt-5 text-lg font-medium text-white">
                Free Delivery
              </h3>

              <p className="relative z-10 mt-2 text-sm leading-6 text-gray-400">
                Across India on prepaid orders.
              </p>

            </div>

            {/* Returns */}

            <div className="group relative flex flex-col items-center justify-center overflow-hidden p-8 text-center sm:p-10">

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#D4AF3715] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="absolute right-0 top-8 bottom-8 hidden w-px bg-[#2A2A2A] md:block" />

              <RotateCcw
                size={36}
                className="relative z-10 text-[#D4AF37] transition duration-500 group-hover:scale-110"
              />

              <h3 className="relative z-10 mt-5 text-lg font-medium text-white">
                Easy Returns
              </h3>

              <p className="relative z-10 mt-2 text-sm leading-6 text-gray-400">
                Hassle-free within 7 days.
              </p>

            </div>

            {/* Authentic */}

            <div className="group relative flex flex-col items-center justify-center overflow-hidden p-8 text-center sm:p-10">

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#D4AF3715] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <ShieldCheck
                size={36}
                className="relative z-10 text-[#D4AF37] transition duration-500 group-hover:scale-110"
              />

              <h3 className="relative z-10 mt-5 text-lg font-medium text-white">
                Authentic Products
              </h3>

              <p className="relative z-10 mt-2 text-sm leading-6 text-gray-400">
                Crafted with genuine ElAre quality.
              </p>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}