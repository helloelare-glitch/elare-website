import Image from "next/image";
export default function Hero() {
  return (
    <section
  className="relative overflow-hidden"
  style={{
    background: `
      radial-gradient(circle at top left,
      rgba(200,163,77,0.08),
      transparent 40%),
      #0F0F0F
    `,
  }}
>
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between px-8">

        {/* Left Side */}
        <div className="max-w-xl">

          <p className="mb-4 uppercase tracking-[0.4em] text-[#C8A34D]">
            Luxury Fashion
          </p>

          <h1
            className="leading-none text-white"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "5rem",
            }}
          >
            WEAR YOUR
            <br />
            <span className="text-[#C8A34D]">STORY</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Premium clothing crafted with timeless design,
            exceptional quality, and complete authenticity.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-full bg-[#C8A34D] px-8 py-4 font-semibold text-black transition hover:bg-[#D6B15C]">
              Shop Collection
            </button>

            <button className="rounded-full border border-[#C8A34D] px-8 py-4 font-semibold text-[#C8A34D] transition hover:bg-[#C8A34D] hover:text-black">
              Our Story
            </button>

          </div>

        </div>

        {/* Right Side */}

<div className="relative hidden h-[650px] w-[480px] overflow-hidden rounded-[36px] border border-[#2A2A2A] lg:block">

  <Image
    src="/fashionboth.jpg"
    alt="ElAre Luxury Fashion"
    fill
    priority
    className="object-cover transition duration-700 hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

</div>

      </div>
    </section>
  );
}