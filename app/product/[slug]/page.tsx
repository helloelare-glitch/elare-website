import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

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

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 py-20 lg:grid-cols-2">

        {/* Product Image */}

        <div className="overflow-hidden rounded-3xl border border-[#2A2A2A]">

          <Image
            src={product.images[0]}
            alt={product.title}
            width={700}
            height={900}
            className="h-full w-full object-cover"
          />

        </div>

        {/* Product Details */}

        <div>

          <p className="uppercase tracking-[0.3em] text-[#C8A34D]">
            {product.brand}
          </p>

          <h1
            className="mt-4 text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {product.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">

            <span className="text-4xl font-bold text-[#C8A34D]">
              ₹{product.discountPrice}
            </span>

            <span className="text-2xl text-gray-500 line-through">
              ₹{product.price}
            </span>

          </div>

          <p className="mt-8 leading-8 text-gray-400">
            {product.description}
          </p>

          <h3 className="mt-10 text-lg font-semibold">
            Select Size
          </h3>

          <div className="mt-4 flex gap-3">

            {product.sizes.map((size) => (
              <button
                key={size}
                className="rounded-lg border border-[#333] px-6 py-3 hover:border-[#C8A34D]"
              >
                {size}
              </button>
            ))}

          </div>

          <button className="mt-12 w-full rounded-full bg-[#C8A34D] py-4 text-lg font-semibold text-black transition hover:bg-[#D6B15C]">
            Add To Cart
          </button>

        </div>

      </div>

    </main>
  );
}