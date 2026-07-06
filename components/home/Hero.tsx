import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0F0F0F]"
      style={{
        background: `
          radial-gradient(circle at top left,
          rgba(200,163,77,0.08),
          transparent 40%),
          #0F0F0F
        `,
      }}
    >
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:py-20">

        {/* Left Content */}

        <div className="order-2 lg:order-1">

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#C8A34D] sm:text-sm">
            Luxury Fashion
          </p>

          <h1
            className="leading-none text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block text-5xl sm:text-6xl lg:text-[5rem]">
              WEAR YOUR
            </span>

            <span className="mt-2 block text-5xl text-[#C8A34D] sm:text-6xl lg:text-[5rem]">
              STORY
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8">
            Premium clothing crafted with timeless design,
            exceptional quality, and complete authenticity.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/shop"
              className="flex items-center justify-center rounded-full bg-[#C8A34D] px-8 py-4 text-center font-semibold text-black transition hover:bg-[#D6B15C]"
            >
              Shop Collection
            </Link>

            <Link
              href="/about"
              className="flex items-center justify-center rounded-full border border-[#C8A34D] px-8 py-4 text-center font-semibold text-[#C8A34D] transition hover:bg-[#C8A34D] hover:text-black"
            >
              Our Story
            </Link>

          </div>

        </div>

        {/* Right Image */}

        <div className="order-1 lg:order-2">

          <div className="relative mx-auto h-[420px] w-full max-w-sm overflow-hidden rounded-[28px] border border-[#2A2A2A] sm:h-[520px] sm:max-w-md lg:h-[650px] lg:max-w-none">

            <Image
              src="/fashionboth.jpg"
              alt="ElAre Luxury Fashion"
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          </div>

        </div>

      </div>
    </section>
  );
}