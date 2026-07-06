import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "MEN",
    image: "/fashion1.jpg",
    category: "men",
  },
  {
    title: "WOMEN",
    image: "/products/Cream Kurthi/women.jpg",
    category: "women",
  },
  {
    title: "COUPLES",
    image: "/products/Couple/couple.jpg",
    category: "couple",
  },
];

export default function Collections() {
  return (
    <section className="bg-[#0F0F0F] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}

        <p className="mb-3 text-center text-xs uppercase tracking-[0.35em] text-[#D4AF37] sm:text-sm">
          Featured Collections
        </p>

        <h2
          className="mb-12 text-center text-3xl font-light text-white sm:text-4xl lg:mb-16 lg:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Discover Luxury
        </h2>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {collections.map((item) => (

            <Link
              key={item.title}
              href={`/shop?category=${item.category}`}
              className="group block"
            >

              <div className="overflow-hidden rounded-3xl border border-[#262626] bg-[#151515] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#C8A34D]">

                <div className="overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={700}
                    className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px] lg:h-[520px]"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl tracking-[0.18em] text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 inline-flex items-center gap-2 text-[#D4AF37] transition-all duration-300 group-hover:translate-x-2">

                    Explore

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}