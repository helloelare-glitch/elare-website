import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductActions from "@/components/product/ProductActions";

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
        <div className="grid items-start gap-12 lg:grid-cols-[620px_520px]">

          {/* Product Gallery */}
          <ProductGallery
            images={product.images}
            title={product.title}
          />

          {/* Product Details */}
          <div className="flex flex-col justify-start pt-2">

            {/* Brand */}
            <p className="uppercase tracking-[0.35em] text-[#C8A34D]">
              {product.brand}
            </p>

            {/* Title */}
            <h1
              className="mt-3 text-6xl leading-[1.08]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {product.title}
            </h1>

            {/* Price */}
            <div className="mt-6 flex items-end gap-5">
              <span className="text-5xl font-bold text-[#C8A34D]">
                ₹{product.discountPrice}
              </span>

              <span className="mb-1 text-3xl text-gray-500 line-through">
                ₹{product.price}
              </span>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-md text-lg leading-9 text-gray-400">
              {product.description}
            </p>

            {/* Product Actions */}
            <ProductActions product={product} />

            {/* Features */}
            <div className="mt-10 rounded-2xl border border-[#262626] bg-[#131313] p-6">

              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-lg">🚚</span>
                <span>Free Delivery Across India</span>
              </div>

              <div className="mt-4 flex items-center gap-3 text-gray-300">
                <span className="text-lg">↩️</span>
                <span>Easy 7-Day Returns</span>
              </div>

              <div className="mt-4 flex items-center gap-3 text-gray-300">
                <span className="text-lg">✓</span>
                <span>100% Authentic ElAre Product</span>
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}