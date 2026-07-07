import {
  ShieldCheck,
  Sparkles,
  Leaf,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Premium Design",
    desc: "Every piece is thoughtfully designed to blend timeless style with everyday comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    desc: "We carefully select fabrics and inspect every product before it reaches you.",
  },
  {
    icon: Leaf,
    title: "Responsible Fashion",
    desc: "We believe fashion should respect both people and the planet wherever possible.",
  },
  {
    icon: HeartHandshake,
    title: "Built on Trust",
    desc: "Every order is packed with care because every customer becomes part of the ElAre story.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

{/* Hero */}

<section className="relative overflow-hidden border-b border-[#262626]">

  {/* Background Glow */}

  <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#C8A34D]/10 blur-[140px]" />

  <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-36">

    <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C8A34D] sm:text-sm">
      ABOUT ELARE
    </p>

    <h1
      className="max-w-5xl text-5xl leading-none sm:text-6xl lg:text-8xl"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      Fashion That
      <br />

      <span className="text-[#D4AF37]">
        Tells Your Story
      </span>

    </h1>

    <p className="mt-10 max-w-3xl text-lg font-light leading-9 tracking-[0.02em] text-gray-300 lg:text-xl">

      ElAre creates premium clothing designed for people who value
      quality, confidence and timeless style. Every collection is
      thoughtfully crafted to become a part of your journey.

    </p>

    <div className="mt-14 flex flex-col gap-4 sm:flex-row">

      <a
        href="/shop"
        className="premium-button rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
      >
        Explore Collection
      </a>

      <a
        href="#story"
        className="rounded-full border border-[#444] px-10 py-4 transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
      >
        Our Story
      </a>

    </div>

  </div>

</section>

<section
  id="story"
  className="mx-auto max-w-7xl px-5 py-24 sm:px-8"
>

  <div className="grid items-center gap-20 lg:grid-cols-2">

    <div>

      <p className="text-xs uppercase tracking-[0.35em] text-[#C8A34D]">
        OUR PHILOSOPHY
      </p>

      <h2
        className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        We Don't Follow
        <br />

        Trends.
      </h2>

      <h2
        className="mt-2 text-4xl leading-tight text-[#D4AF37] sm:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        We Create
        Timeless Essentials.
      </h2>

    </div>

    <div className="space-y-8 text-lg leading-9 text-gray-400">

      <p>

        Before creating ElAre, we chose to listen first.

        We asked people what they truly wanted from a fashion brand.

      </p>

      <p>

        The answer wasn't louder logos or fast-changing trends.

        It was better quality, better fabrics, better experiences
        and clothing people could wear with confidence.

      </p>

      <p>

        That's the foundation of ElAre.

        Every stitch, every fabric and every detail exists to create
        clothing you'll genuinely enjoy wearing.

      </p>

    </div>

  </div>

</section>

      {/* Values */}

      <section className="bg-[#111111] py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C8A34D]">
            WHY ELARE
          </p>

          <h2
            className="mt-5 text-center text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Crafted With Purpose
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group premium-card rounded-[30px] border border-[#2A2A2A] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)]"
                >

                  <Icon
  size={38}
  className="text-[#D4AF37] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
/>

                  <h3
  className="mt-6 text-2xl text-white"
  style={{ fontFamily: "var(--font-heading)" }}
>
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Closing */}

      <section className="mx-auto max-w-5xl px-5 py-24 text-center">

        <h2
          className="text-5xl sm:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Wear Your Story.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Every stitch, every fabric and every detail is created with one goal:
          helping you express yourself with confidence.
        </p>

      </section>
      {/* Statistics */}

<section className="border-y border-[#262626] bg-[#111111]">

  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 py-20 text-center sm:grid-cols-4 sm:px-8">

    <div>

      <h3
        className="text-5xl text-[#D4AF37]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        100%
      </h3>

      <p className="mt-4 uppercase tracking-[0.18em] text-gray-400">
        Quality Checked
      </p>

    </div>

    <div>

      <h3
        className="text-5xl text-[#D4AF37]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Premium
      </h3>

      <p className="mt-4 uppercase tracking-[0.18em] text-gray-400">
        Fabrics
      </p>

    </div>

    <div>

      <h3
        className="text-5xl text-[#D4AF37]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        7 Days
      </h3>

      <p className="mt-4 uppercase tracking-[0.18em] text-gray-400">
        Easy Returns
      </p>

    </div>

    <div>

      <h3
        className="text-5xl text-[#D4AF37]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Made
      </h3>

      <p className="mt-4 uppercase tracking-[0.18em] text-gray-400">
        With Care
      </p>

    </div>

  </div>

</section>

    </main>
  );
}
