import { toast } from 'react-toastify'
import ProductCard from '@/components/common/ProductCard'
import ProductFilters from '@/components/common/ProductFilters'
import { DOMAIN } from '@/utils/constants'

async function CountProducts() {
  const res = await fetch(`${DOMAIN}/api/products`)
  if (!res.ok) {
    toast.error("حدث خطأ، حاول مرة أخرى")
  }
  return res.json()
}

const Page = async () => {

  const { products } = await CountProducts()

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-8" dir="rtl">
      <div className="flex flex-col lg:flex-row gap-8 relative">
        {/* <!-- Sidebar Filters --> */}
        <ProductFilters />
        {/* <!-- Product Content --> */}
        <div className="flex-1 flex flex-col gap-6">
          {/* <!-- Top Toolbar --> */}
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">جميع المنتجات</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">عرض {products.length} من النتائج</p>
            </div>
          </div>
          {/* <!-- Product Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <ProductCard />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page