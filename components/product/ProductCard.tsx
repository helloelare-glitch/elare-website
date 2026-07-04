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
  <Link href={`/product/${slug}`}>
    <div className="group overflow-hidden rounded-[24px] border border-[#262626] bg-[#151515] transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A34D]">

      <div className="relative h-[420px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="text-xl font-medium text-white">
          {title}
        </h3>

        <p className="mt-2 text-xl font-semibold text-[#C8A34D]">
          ₹{price}
        </p>

      </div>

    </div>
  </Link>
);
}