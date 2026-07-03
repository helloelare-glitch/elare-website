import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Footer from "../components/layout/Footer";
import Collections from "../components/home/Collections";
import WhyElare from "../components/home/WhyElare";

export default function Home() {
  return (
  <>
  <Navbar />
  <Hero />
  <Collections />
  <WhyElare />
  <Footer />
</>
  );
}