import Image from "next/image";

export default function Logo() {
  return (
    <Image
  src="/logo.png"
  alt="ElAre"
  width={90}
  height={90}
  priority
  className="h-25 w-auto"
/>
  );
}