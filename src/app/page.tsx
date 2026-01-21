import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Hero/Hero";
import Navbar from "./_components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0c1d1d] dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
