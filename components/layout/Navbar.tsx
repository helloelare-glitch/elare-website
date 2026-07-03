import Logo from "../Logo";
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

const menuItems = ["Shop", "Men", "Women", "About", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#0F0F0F]/90 backdrop-blur-xl">

      <div className="relative h-24 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Center Navigation */}
<nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-12">

  <Link href="/shop" className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]">
    Shop
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link href="/men" className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]">
    Men
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link href="/women" className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]">
    Women
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link href="/about" className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]">
    About
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link href="/contact" className="group relative text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#D4AF37]">
    Contact
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
  </Link>

</nav>

        {/* Right Side */}
        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-6">

          <Search
            size={20}
            className="cursor-pointer text-white transition hover:text-[#D4AF37]"
          />

          <ShoppingBag
            size={20}
            className="cursor-pointer text-white transition hover:text-[#D4AF37]"
          />

          <button className="flex items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-medium uppercase tracking-wider text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black">

            <User size={18} />

            Login

          </button>

        </div>

      </div>

    </header>
  );
}