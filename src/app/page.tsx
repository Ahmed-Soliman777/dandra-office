import CategoryCards from "./components/CategoryCards";
import Hero from "./components/Hero/Hero";
import ProductCard from "./components/ProductCard";
import { cookies } from "next/headers";

export default async function Home() {

  const token = (await cookies()).get("token")?.value

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Hero />
      <div className="px-6 lg:px-10 py-16">
        <div dir="rtl" className="mb-12">
          <div className="relative inline-block">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">الفئات</h3>
            <div className="h-1 w-16 bg-linear-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>
        <CategoryCards />
      </div>
      <div dir="rtl" className="px-6 lg:px-10 pb-16">
        <div className="mb-12">
          <div className="relative inline-block">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">المنتجات</h3>
            <div className="h-1 w-16 bg-linear-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>
        <ProductCard token={token ? token : ""} />
      </div>
    </div>
  );
}
