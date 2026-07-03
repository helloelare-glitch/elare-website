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
    <section className="bg-[#0F0F0F] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <p className="text-center uppercase tracking-[0.35em] text-[#C8A34D]">
          Why ElAre
        </p>

        <h2
          className="mt-5 text-center text-5xl text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Crafted With Purpose
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[28px] border border-[#262626] bg-[#151515] p-10 transition duration-300 hover:border-[#C8A34D]"
              >
                <Icon
                  size={40}
                  className="text-[#C8A34D]"
                />

                <h3 className="mt-8 text-2xl text-white">
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
  );
}