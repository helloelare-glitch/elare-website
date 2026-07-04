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
    <Link href={`/product/${slug}`} className="block">
      <div className="group overflow-hidden rounded-[20px] border border-[#262626] bg-[#151515] transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A34D] hover:shadow-[0_12px_40px_rgba(200,163,77,0.15)]">

        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
          />
        </div>

        {/* Product Details */}
        <div className="p-4 sm:p-5 lg:p-6">

          <h3 className="line-clamp-2 text-base font-medium text-white sm:text-lg lg:text-xl">
            {title}
          </h3>

          <p className="mt-2 text-lg font-semibold text-[#C8A34D] sm:text-xl">
            ₹{price}
          </p>

        </div>

      </div>
    </Link>
  );
}