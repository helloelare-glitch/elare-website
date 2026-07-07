import {
  ShieldCheck,
  Shirt,
  PackageCheck,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Premium Fabrics",
    desc: "Comfortable, breathable and built to last.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checked",
    desc: "Every piece is carefully inspected before delivery.",
  },
  {
    icon: PackageCheck,
    title: "Premium Packaging",
    desc: "Luxury unboxing designed to impress.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    desc: "Better materials. Better future.",
  },
];

export default function WhyElare() {
  return (
    <section className="bg-[#0F0F0F] py-16 sm:py-20 lg:py-28">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}

        <p className="text-center text-xs uppercase tracking-[0.4em] text-[#C8A34D] sm:text-sm">
          WHY ELARE
        </p>

      <h2
        className="mt-5 text-center text-4xl text-white sm:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Crafted With Purpose
      </h2>

        {/* Features */}

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group premium-card rounded-[26px] border border-[#2A2A2A] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)] sm:p-8"
              >

                <Icon
                  size={38}
                  className="text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                />

                <h3
                  className="mt-5 text-lg leading-tight text-white transition-colors duration-300 group-hover:text-[#FFF7E1] sm:mt-6 sm:text-2xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300 sm:text-base">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}