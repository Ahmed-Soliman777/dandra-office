import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0c1d1d] dark:text-gray-100 transition-colors duration-300">
      <Hero />
    </div>
  );
}
