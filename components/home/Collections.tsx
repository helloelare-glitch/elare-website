import Image from "next/image";

const collections = [
  {
    title: "MEN",
    image: "/fashion1.jpg",
  },
  {
    title: "WOMEN",
    image: "/women.jpg",
  },
  {
    title: "COUPLES",
    image: "/couple.jpg",
  },
];

export default function Collections() {
  return (
    <section className="bg-[#0F0F0F] py-28">

      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-3 text-center uppercase tracking-[0.35em] text-[#D4AF37]">
          Featured Collections
        </p>

        <h2 className="mb-16 text-center text-5xl font-light text-white">
          Discover Luxury
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {collections.map((item) => (

            <div
              key={item.title}
              className="group cursor-pointer"
            >

              <div className="overflow-hidden rounded-3xl">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={700}
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <h3 className="mt-8 text-2xl tracking-[0.2em] text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-[#D4AF37]">
                Shop →
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}