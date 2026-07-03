import Logo from "./Logo";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 px-8 py-5">
      <Logo />

      <div className="hidden gap-8 font-medium text-gray-700 md:flex">
        <a href="#">Shop</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="rounded-md bg-[#0B1F3A] px-5 py-2 text-white">
        Login
      </button>
    </nav>
  );
}