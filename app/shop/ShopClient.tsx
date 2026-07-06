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

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">

        <p className="text-xs uppercase tracking-[0.35em] text-[#C8A34D] sm:text-sm">
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

        <div className="mt-8 sm:mt-10">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">

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
              onClick={() =>
                changeCategory(category.value)
              }
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