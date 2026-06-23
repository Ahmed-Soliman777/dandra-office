import CategoryCards from "../components/common/CategoryCards";
import Hero from "../components/common/Hero/Hero";
import ProductCard from "../components/common/ProductCard";

export default async function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Hero />
      <div className="px-6 lg:px-10 py-20 bg-slate-50 dark:bg-slate-800/50">
        <div dir="rtl" className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col items-start">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">تصفح التصنيفات</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">اكتشف أفضل المنتجات في كل فئة</p>
            <div className="h-1.5 w-24 bg-linear-to-r from-green-600 to-green-400 rounded-full mt-4"></div>
          </div>
          <CategoryCards />
        </div>
      </div>
      <div dir="rtl" className="px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col items-start">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">أحدث المنتجات</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">تسوق من تشكيلتنا الحصرية المختارة بعناية</p>
            <div className="h-1.5 w-24 bg-linear-to-r from-green-600 to-green-400 rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
