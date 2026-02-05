"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DOMAIN } from '@/app/utils/constants';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { product } from '@/app/utils/types';
import { usePathname } from 'next/navigation';
import CategoryName from './CategoryName';
import Image from 'next/image';
const ProductsTable = () => {

  const [products, setProducts] = useState<product[]>([])

  async function deleteProduct(id: number) {
    try {
      const deletePrd = await axios.delete(`${DOMAIN}/api/products/${id}`)
      if (deletePrd) {
        setProducts((prevProducts) => prevProducts.filter((p: product) => p.id !== id))
      }
      toast.success("تم حذف المنتج")
    } catch (error) {
      console.error(error);
    }
  }

  const pathName = usePathname()
  const [search, setSearch] = useState<string>("")

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await axios.get(`${DOMAIN}/api/products`)
        setProducts(response.data.products);
      } catch (error) {
        toast.error("حدث خطأ")
        console.error(error);
      }
    }
    getProductsData()
  }, [])

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
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700 shrink-0 border border-gray-200 dark:border-slate-600">
                        {product.images &&
                          <Image
                            src={product.images[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"}
                            alt={product.productNameAr || "product image"}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        }
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{product.productNameAr}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {product.categoryId &&
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                        <CategoryName id={product?.categoryId} />
                      </span>
                    }
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{product.price} ج.م</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.quantity}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/manage-products/update-product/${product.id}`}
                        className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="تعديل">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      </Link>
                      <button
                        className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        onClick={() => {
                          if (product?.id) {
                            deleteProduct(product.id as number);
                          }
                        }}
                        title="حذف">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                      <Link
                        href={`/dashboard/manage-products/${product.id}`}
                        className="p-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors" title="عرض المنتج">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </Link>
                    </div>
                  </td>
                </tr>
              )) :
                products.filter((product: product) => {
                  if (search.length === 0) return true
                  return product.descriptionAr?.includes(search) || product.productNameAr?.includes(search)
                }).map((product: product) => (
                  <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700 shrink-0 border border-gray-200 dark:border-slate-600">
                          {(product.images && product.productNameAr) && (
                            <Image src={product.images[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"}
                              alt={product?.productNameAr || ""} height={100} width={100} className="w-full h-full object-cover" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">{product?.productNameAr}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {product.categoryId && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                          <CategoryName id={product?.categoryId} />
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{product.price} ج.م</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.quantity}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/dashboard/manage-products/update-product/${product.id}`}
                          className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="تعديل">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        </Link>
                        <button
                          className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                          onClick={() => {
                            if (product?.id) {
                              deleteProduct(product.id);
                            }
                          }}
                          title="حذف">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                        <Link
                          href={`/dashboard/manage-products/${product.id}`}
                          className="p-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors" title="عرض المنتج">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </Link>
                      </div>
                    </td>
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