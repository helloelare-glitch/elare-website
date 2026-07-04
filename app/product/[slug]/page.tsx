import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductActions from "@/components/product/ProductActions";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

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

<div className="mt-20 border-y border-[#262626] py-10">

  <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

    {/* Delivery */}

    <div className="flex items-start gap-4">

      <Truck
        size={38}
        strokeWidth={1.8}
        className="mt-1 text-[#C8A34D]"
      />

      <div>

        <h3 className="text-base font-medium tracking-wide text-white">
          Free Delivery
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-400">
          Across India
        </p>

      </div>

    </div>

    {/* Returns */}

    <div className="flex items-start gap-4">

      <RotateCcw
        size={38}
        strokeWidth={1.8}
        className="mt-1 text-[#C8A34D]"
      />

      <div>

        <h3 className="text-base font-medium tracking-wide text-white">
          Easy Returns
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-400">
          Hassle-free within 7 Days
        </p>

      </div>

    </div>

    {/* Authentic */}

    <div className="flex items-start gap-4">

      <ShieldCheck
        size={38}
        strokeWidth={1.8}
        className="mt-1 text-[#C8A34D]"
      />

      <div>

        <h3 className="text-base font-medium tracking-wide text-white">
          100% Authentic
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-400">
          Genuine ElAre Product
        </p>

      </div>

    </div>

  </div>

</div>

      </section>
    </main>
  );
}