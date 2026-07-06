import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  slug: string;
};

export default function ProductCard({
  image,
  title,
  price,
  slug,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${slug}`}
      className="group premium-card block"
    >
      <div className="overflow-hidden rounded-[24px] border border-[#262626] bg-[#151515]">

        {/* Product Image */}

        <div className="relative aspect-[3/4] overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
            className="premium-image object-cover object-top"
          />

          {/* Luxury Gradient */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          {/* View Product */}

          <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block">

            <span className="rounded-full border border-[#D4AF37]/70 bg-black/55 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Product
            </span>

          </div>

        </div>

        {/* Product Details */}

        <div className="p-5">

          {/* Gold Accent */}

          <div className="mb-4 h-[2px] w-10 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-16" />

          <h3 className="line-clamp-2 text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#FFF7E1] sm:text-xl">
            {title}
          </h3>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-xl font-semibold text-[#D4AF37] sm:text-2xl">
              ₹{price}
            </span>

            {/* Mobile CTA */}

            <span className="text-sm font-medium text-[#D4AF37] lg:hidden">
              View →
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}