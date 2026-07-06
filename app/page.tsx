import Hero from "../components/home/Hero";
import Footer from "../components/layout/Footer";
import Collections from "../components/home/Collections";
import WhyElare from "../components/home/WhyElare";

export default function Home() {
  return (
    <main className="bg-[#0F0F0F]">

      <Hero />

      <section className="animate-in fade-in duration-700">
        <Collections />
      </section>

      <section className="animate-in fade-in duration-700 delay-150">
        <WhyElare />
      </section>

      <Footer />

    </main>
  );
}