import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    title: "Premium Black Tee",
    price: "₹999",
    image: "/man.jpg",
  },
  {
    title: "Elegant Kurthi",
    price: "₹1499",
    image: "/kurthi.jpg",
  },
  {
    title: "Couple Collection",
    price: "₹2499",
    image: "/couple.jpg",
  },
  {
    title: "Classic White Tee",
    price: "₹899",
    image: "/man.jpg",
  },
  {
    title: "Premium Kurthi",
    price: "₹1699",
    image: "/kurthi.jpg",
  },
  {
    title: "Matching Couple Set",
    price: "₹2799",
    image: "/couple.jpg",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      <section className="mx-auto max-w-7xl px-8 py-24">

        <p className="uppercase tracking-[0.35em] text-[#C8A34D]">
          ElAre Collection
        </p>

        <h1
          className="mt-4 text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Shop Collection
        </h1>

        <p className="mt-6 max-w-xl text-gray-400">
          Discover premium fashion crafted for every story.
        </p>

        {/* Category Buttons */}

        <div className="mt-14 flex flex-wrap gap-4">

          <button className="rounded-full bg-[#C8A34D] px-6 py-3 text-black">
            All
          </button>

          <button className="rounded-full border border-[#333] px-6 py-3 hover:border-[#C8A34D]">
            Men
          </button>

          <button className="rounded-full border border-[#333] px-6 py-3 hover:border-[#C8A34D]">
            Women
          </button>

          <button className="rounded-full border border-[#333] px-6 py-3 hover:border-[#C8A34D]">
            Kurthi
          </button>

          <button className="rounded-full border border-[#333] px-6 py-3 hover:border-[#C8A34D]">
            Couple
          </button>

        </div>

        {/* Products */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <ProductCard
              key={product.title}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}

        </div>

      </section>

    </main>
  );
}