"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { product } from '@/utils/types';
import { usePathname } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import ProductTableBodyData from './ProductTableBodyData';
import { useDebounce } from '@/hooks/useDebounce';
const ProductsTable = () => {

  const { products } = useProducts()

  const pathName = usePathname()
  const [search, setSearch] = useState<string>("")

  const debouncedSearch = useDebounce(search)

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return (
    <>
      {/* Search Bar - Products Page Only */}
      {pathName === "/dashboard/manage-products" &&
        <div className="mb-6">
          <input
            type='text'
            placeholder='ابحث عن منتج...'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
            value={search}
            onChange={handleSearch}
          />
        </div>
      }

      {/* Products Table Card */}
      <div
        className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:bg-slate-700/50">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">المنتجات</h3>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-gray-50 dark:bg-slate-700/30">
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-slate-600">
                  المنتج
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-slate-600">
                  التصنيف
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-slate-600">
                  السعر
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-slate-600">
                  الكمية
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-slate-600">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {pathName === "/dashboard" ? products.slice(0, 3).map((product: product) => (
                <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                  <ProductTableBodyData
                    product={product}
                  />
                </tr>
              )) :
                products.filter((product: product) => {
                  if (search.length === 0) return true
                  return product.descriptionAr?.includes(debouncedSearch) || product.productNameAr?.includes(debouncedSearch)
                }).map((product: product) => (
                  <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                    <ProductTableBodyData
                      product={product}
                    />
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        {pathName === "/dashboard" &&
          <div className="px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/30">
            <Link href={"/dashboard/manage-products"} className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 text-sm">
              عرض جميع المنتجات →
            </Link>
          </div>
        }
      </div>
    </>
  )
}

export default ProductsTable