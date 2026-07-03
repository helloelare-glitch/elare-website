import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="ElAre"
      width={120}
      height={120}
      priority
      className="h-14 w-auto"
    />
  );
}