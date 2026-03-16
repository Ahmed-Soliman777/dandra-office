"use client"
import { useState } from 'react';
import Link from 'next/link';
import { category } from '@/utils/types';
import { usePathname } from 'next/navigation';
import { useCategories } from '@/hooks/useCategories';
import CategoryTableBodyData from './CategoryTableBodyData';
import { useDebounce } from '@/hooks/useDebounce';

const CategoryTable = () => {

    const [search, setSearch] = useState<string>("")

    const pathName = usePathname()

    const { categories } = useCategories()

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    const debouncedSearch = useDebounce(search)

    return (
        <>
            {pathName === "/dashboard/manage-categories" &&
                <div className="mb-6">
                    <input
                        type='text'
                        placeholder='ابحث عن فئة...'
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            }
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/50">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">التصنيفات</h3>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-slate-700/30">
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-slate-600">
                                    التصنيف
                                </th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-slate-600">
                                    عدد المنتجات
                                </th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-slate-600">
                                    الإجراءات
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                            {pathName === "/dashboard" ? categories.slice(0, 3).map((category: category) => (
                                <tr key={category.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <CategoryTableBodyData
                                        category={category}
                                    />
                                </tr>
                            )) : categories.filter((category: category) => {
                                if (search.length === 0) return true
                                return category.categoryNameAr?.includes(debouncedSearch) || category.categoryNameAr?.includes(debouncedSearch)
                            }).map((category: category) => (
                                <tr key={category.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <CategoryTableBodyData
                                        category={category}
                                    />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                {pathName === "/dashboard" &&
                    <div className="px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/30">
                        <Link href={"/dashboard/manage-categories"} className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 text-sm">
                            عرض جميع التصنيفات →
                        </Link>
                    </div>
                }
            </div>
        </>
    )
}

export default CategoryTable
