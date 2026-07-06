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
      <div className="overflow-hidden rounded-2xl border border-[#262626] bg-[#151515]">

        {/* Product Image */}

        <div className="relative aspect-[3/4] overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px)50vw,(max-width:1024px)50vw,33vw"
            className="premium-image object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Desktop CTA */}

          <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block">

            <span className="rounded-full border border-[#D4AF37]/70 bg-black/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
              View Product
            </span>

          </div>

        </div>

        {/* Details */}

        <div className="p-3 sm:p-5">

          {/* Gold Accent */}

          <div className="mb-3 h-[2px] w-8 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-14" />

          <h3 className="line-clamp-2 min-h-[42px] text-sm font-medium leading-5 text-white transition-colors duration-300 group-hover:text-[#FFF7E1] sm:text-lg sm:leading-6">

            {title}

          </h3>

          <div className="mt-3 flex items-center justify-between">

            <span className="text-base font-semibold text-[#D4AF37] sm:text-2xl">
              ₹{price}
            </span>

            <span className="hidden text-xs font-medium text-[#D4AF37] sm:block lg:hidden">
              View →
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}