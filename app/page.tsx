import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />

      <section className="flex h-[90vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-[#C8A34D]">
          Welcome to ElAre
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Premium clothing crafted with quality, transparency, and timeless
          style.
        </p>

        <button className="mt-10 rounded-lg bg-[#C8A34D] px-8 py-4 font-semibold text-black transition hover:bg-[#d9b867]">
          Coming Soon
        </button>
      </section>
    </main>
  );
}