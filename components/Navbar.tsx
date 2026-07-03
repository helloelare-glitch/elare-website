import Logo from "./Logo";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-[#2A2A2A] bg-[#111111] px-8 py-5">
      <Logo />

      <div className="hidden gap-8 font-medium text-white md:flex">
        <a href="#">Shop</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="rounded-md bg-[#C8A34D] px-5 py-2 font-semibold text-black transition hover:bg-[#d9b867]">
        Login
      </button>
    </nav>
  );
}