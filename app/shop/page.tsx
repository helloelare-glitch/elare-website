"use client";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import SearchBar from "@/components/search/SearchBar";

export default function ShopPage() {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === "all" ||
    product.category === selectedCategory;

  const matchesSearch =
    product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

  return matchesCategory && matchesSearch;
});

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <section className="mx-auto max-w-7xl px-8 py-24">

        <p className="uppercase tracking-[0.35em] text-[#C8A34D]">
          ElAre
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
        <div className="mt-10">
        <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
        />
        </div>

        {/* Category Buttons */}
        <div className="mt-14 flex flex-wrap gap-4">

  {/* All */}

  <button
    onClick={() => setSelectedCategory("all")}
    className={`rounded-full px-6 py-3 transition-all duration-300 ${
      selectedCategory === "all"
        ? "bg-[#C8A34D] text-black"
        : "border border-[#333] hover:border-[#C8A34D]"
    }`}
  >
    All
  </button>

  {/* Men */}

  <button
    onClick={() => setSelectedCategory("men")}
    className={`rounded-full px-6 py-3 transition-all duration-300 ${
      selectedCategory === "men"
        ? "bg-[#C8A34D] text-black"
        : "border border-[#333] hover:border-[#C8A34D]"
    }`}
  >
    Men
  </button>

  {/* Women */}

  <button
    onClick={() => setSelectedCategory("women")}
    className={`rounded-full px-6 py-3 transition-all duration-300 ${
      selectedCategory === "women"
        ? "bg-[#C8A34D] text-black"
        : "border border-[#333] hover:border-[#C8A34D]"
    }`}
  >
    Women
  </button>

  {/* Couple */}

  <button
    onClick={() => setSelectedCategory("couple")}
    className={`rounded-full px-6 py-3 transition-all duration-300 ${
      selectedCategory === "couple"
        ? "bg-[#C8A34D] text-black"
        : "border border-[#333] hover:border-[#C8A34D]"
    }`}
  >
    Couple
  </button>

</div>

        {/* Products */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
  key={product.id}
  slug={product.slug}
  image={product.images[0]}
  title={product.title}
  price={product.discountPrice}
/>
          ))}
        </div>

      </section>
    </main>
  );
}