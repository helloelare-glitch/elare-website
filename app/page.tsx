import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Footer from "../components/layout/Footer";
import Collections from "../components/home/Collections";

export default function Home() {
  return (
  <>
    <Navbar />
    <Hero />
    <Collections />
    <Footer />
  </>
  );
}