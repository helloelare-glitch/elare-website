import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Go to Home"
      className="inline-block rounded-xl transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.25)]"
    >
      <Image
        src="/logo.png"
        alt="ElAre"
        width={90}
        height={90}
        priority
        className="h-16 w-auto sm:h-20 lg:h-24"
      />
    </Link>
  );
}