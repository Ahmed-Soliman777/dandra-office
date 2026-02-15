import CategoryCards from "./components/CategoryCards";
import Hero from "./components/Hero/Hero";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0c1d1d] dark:text-gray-100 transition-colors duration-300">
      <Hero />
      <div className="mx-10 mb-10">
        <div className="relative mb-10">
          <h3 dir="rtl" className="text-2xl font-bold ">الفئات</h3>
          <div className="absolute border-2 right-0 w-25"></div>
        </div>
        <CategoryCards />
      </div>
      <div className="mx-10">
        <div className="relative mb-10">
          <h3 dir="rtl" className="text-2xl font-bold ">المنتجات</h3>
          <div className="absolute border-2 right-0 w-25"></div>
        </div>
        
        <ProductCard />
      </div>
    </div>
  );
}
