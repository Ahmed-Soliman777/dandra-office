import HomePageComponent from "@/components/features/HomePageComponent";
import CategoryCards from "../components/common/CategoryCards";
import Hero from "../components/common/Hero/Hero";
import ProductCard from "../components/common/ProductCard";

export default async function Home() {

  return (
    <div className="bg-white font-display text-slate-900 transition-colors duration-300">
      <Hero />
      <HomePageComponent componentTitle="تصفح التصنيفات" componentPg="اكتشف أفضل المنتجات في كل فئة">
        <CategoryCards />
      </HomePageComponent>
      <HomePageComponent componentTitle="أحدث المنتجات" componentPg="تسوق من تشكيلتنا الحصرية المختارة بعناية">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <ProductCard />
        </div>
      </HomePageComponent>
    </div>
  );
}
