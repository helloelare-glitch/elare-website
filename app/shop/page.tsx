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

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">

        {/* Heading */}

        <p className="uppercase tracking-[0.35em] text-[#C8A34D] text-xs sm:text-sm">
          ElAre
        </p>

        <h1
          className="mt-3 text-4xl leading-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Shop Collection
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Discover premium fashion crafted for every story.
        </p>

        {/* Search */}

        <div className="mt-8 sm:mt-10">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>

        {/* Categories */}

        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">

          {[
            { label: "All", value: "all" },
            { label: "Men", value: "men" },
            { label: "Women", value: "women" },
            { label: "Couple", value: "couple" },
          ].map((category) => (

            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 sm:px-6 sm:py-3 ${
                selectedCategory === category.value
                  ? "bg-[#C8A34D] text-black"
                  : "border border-[#333] hover:border-[#C8A34D]"
              }`}
            >
              {category.label}
            </button>

          ))}

        </div>

        {/* Products */}

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

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