"use client";

import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import SearchBar from "@/components/search/SearchBar";
import { products } from "@/data/products";
import { useRouter } from "next/navigation";

type Props = {
  initialCategory: string;
};

export default function ShopClient({
  initialCategory,
}: Props) {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] =
    useState(initialCategory);

  const [searchQuery, setSearchQuery] =
    useState("");

  const changeCategory = (category: string) => {
    setSelectedCategory(category);

    if (category === "all") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${category}`);
    }
  };

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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20">

        {/* Heading */}

        <p className="text-xs uppercase tracking-[0.35em] text-[#C8A34D] sm:text-sm">
          ElAre
        </p>

        <h1
          className="mt-3 text-3xl leading-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Shop Collection
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base">
          Discover premium fashion crafted for every story.
        </p>

        {/* Search */}

        <div className="mt-6 sm:mt-10">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>

        {/* Categories */}

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-4">

          {[
            {
              label: "All",
              value: "all",
            },
            {
              label: "Men",
              value: "men",
            },
            {
              label: "Women",
              value: "women",
            },
            {
              label: "Couple",
              value: "couple",
            },
          ].map((category) => (

            <button
              key={category.value}
              onClick={() => changeCategory(category.value)}
              className={`premium-button rounded-full px-4 py-2 text-xs transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
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

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">

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