import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="flex h-[90vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-[#0B1F3A]">
          Welcome to ElAre
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Premium clothing crafted with quality, transparency, and timeless
          style.
        </p>

        <button className="mt-10 rounded-lg bg-[#0B1F3A] px-8 py-4 text-white transition hover:bg-[#17345f]">
          Coming Soon
        </button>
      </section>
    </main>
  );
}