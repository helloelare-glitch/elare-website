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

        <p className="text-center text-xs uppercase tracking-[0.35em] text-[#C8A34D] sm:text-sm">
          Why ElAre
        </p>

        <h2
          className="mt-4 text-center text-3xl text-white sm:text-4xl lg:mt-5 lg:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Crafted With Purpose
        </h2>

        {/* Features */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group premium-card rounded-3xl border border-[#262626] bg-[#151515] p-6 sm:p-8 lg:p-10"
              >

                <Icon
                  size={36}
                  className="text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />

                <h3 className="mt-6 text-xl font-medium text-white transition-colors duration-300 group-hover:text-[#FFF7E1] sm:text-2xl">
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