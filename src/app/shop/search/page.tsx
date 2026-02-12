import React from 'react'
import SearchResult from './SearchResult'
import ProductFilters from '@/app/components/ProductFilters'

const page = async (props: { searchParams: { product: string } }) => {
    const { product } = await props.searchParams
    return (
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-8">
            <div className="flex flex-col lg:flex-row gap-8 relative">
                {/* <!-- Sidebar Filters --> */}
                <ProductFilters />
                {/* <!-- Product Content --> */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* <!-- Top Toolbar --> */}
                    <div
                        className="flex flex-col sm:flex-row justify-between items-<Star />t sm:items-center gap-4 bg-white dark:bg-background-dark p-4 rounded-xl border border-[#e6f4f4] dark:border-[#1a3a3a]">
                        <div>
                            <p className="text-sm text-gray-500">Showing {product} results</p>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <span className="text-sm font-medium text-gray-500 shrink-0">Sort by:</span>
                            <select
                                className="w-full sm:w-48 bg-background-light dark:bg-primary/10 border-none rounded-lg text-sm font-medium focus:ring-primary">
                                <option>Newest Arrivals</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Customer Rating</option>
                            </select>
                        </div>
                    </div>
                    {/* <!-- Product Grid --> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        <SearchResult product={product} />
                    </div>
                    {/* <!-- Pagination --> */}
                    {/* <div className="flex items-center justify-center gap-2 mt-8 py-4">
            <button
              className="size-10 rounded-lg flex items-center justify-center bg-white dark:bg-background-dark border border-[#e6f4f4] dark:border-[#1a3a3a] text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              className="size-10 rounded-lg flex items-center justify-center bg-primar font-bold">1</button>
            <button
              className="size-10 rounded-lg flex items-center justify-center bg-white dark:bg-background-dark border border-[#e6f4f4] dark:border-[#1a3a3a] font-medium hover:border-primary transition-colors">2</button>
            <button
              className="size-10 rounded-lg flex items-center justify-center bg-white dark:bg-background-dark border border-[#e6f4f4] dark:border-[#1a3a3a] font-medium hover:border-primary transition-colors">3</button>
            <div className="px-2 text-gray-400">...</div>
            <button
              className="size-10 rounded-lg flex items-center justify-center bg-white dark:bg-background-dark border border-[#e6f4f4] dark:border-[#1a3a3a] font-medium hover:border-primary transition-colors">8</button>
            <button
              className="size-10 rounded-lg flex items-center justify-center bg-white dark:bg-background-dark border border-[#e6f4f4] dark:border-[#1a3a3a] text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div> */}
                </div>
            </div>
        </main>
    )
}

export default page
