import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";

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

      <section className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid items-start gap-20 lg:grid-cols-[640px_520px]">

          {/* Product Gallery */}

          <ProductGallery
            images={product.images}
            title={product.title}
          />

          {/* Product Details */}

          <div className="pt-2">

            <p className="uppercase tracking-[0.35em] text-[#C8A34D]">
              {product.brand}
            </p>

            <h1
              className="mt-4 text-6xl leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {product.title}
            </h1>

            {/* Price */}

            <div className="mt-8 flex items-center gap-5">

              <span className="text-5xl font-bold text-[#C8A34D]">
                ₹{product.discountPrice}
              </span>

              <span className="text-3xl text-gray-500 line-through">
                ₹{product.price}
              </span>

            </div>

            {/* Rating

            <div className="mt-6 flex items-center gap-3">

              <span className="text-[#C8A34D] text-lg">
                ★★★★★
              </span>

              <span className="text-gray-400">
                4.8 (124 Reviews)
              </span>

            </div> */}

            {/* Description */}

            <p className="mt-8 max-w-lg text-lg leading-9 text-gray-400">
              {product.description}
            </p>

            {/* Size */}

            <div className="mt-12">

              <h3 className="mb-5 text-xl font-semibold">
                Select Size
              </h3>

              <div className="flex gap-4">

                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#2A2A2A] text-lg transition-all duration-300 hover:border-[#C8A34D] hover:text-[#C8A34D]"
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

            {/* Add To Cart */}

            <button className="mt-16 w-80 rounded-full bg-[#C8A34D] py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#D6B15C]">

              Add To Cart

            </button>

            {/* Features */}

            <div className="mt-14 space-y-4 border-t border-[#262626] pt-8">

              <div className="flex items-center gap-3 text-gray-300">
                🚚 <span>Free Delivery Across India</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                ↩️ <span>Easy 7-Day Returns</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                ✓ <span>100% Authentic ElAre Product</span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}