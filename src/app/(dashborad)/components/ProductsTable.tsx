"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DOMAIN } from '@/app/utils/constants';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { product } from '@/app/utils/types';
import { usePathname } from 'next/navigation';
import CategoryName from './CategoryName';
const ProductsTable = () => {

  const [products, setProducts] = useState([])

  const pathName = usePathname()

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
    <div
      className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
      <div
        className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
        <h3 className="font-bold text-lg">المنتجات</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-right">
          <thead>
            <tr className="bg-gray-50/50 dark:bg-gray-800/50">
              <th
                className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">
                المنتج</th>
              <th
                className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">
                التصنيف</th>
              <th
                className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 text-right">
                السعر</th>
              <th
                className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 text-center">
                الكمية</th>
              <th
                className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 text-right">
                حذف / تعديل</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {pathName === "/dashboard" ? products.slice(0, 3).map((product: product) => (
              <tr key={product.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-cover bg-center border border-gray-100 dark:border-gray-600"
                      data-alt={product.productNameAr}
                      style={{ backgroundImage: `${product?.images[0]}` || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000" }}>
                    </div>
                    <div>
                      <p className="font-bold text-sm">{product.productNameAr}</p>
                      {/* <p className="text-xs text-gray-400">SKU: ART-0012</p> */}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full uppercase tracking-wider"><CategoryName id={product?.categoryId} /></span>
                </td>
                <td className="p-4 text-right">
                  <p className="font-bold text-sm">{product.price}  <span className='mx-1.5'>ج.م</span></p>
                </td>
                <td className="p-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium">{product.quantity}</span>
                    {/* <div
                      className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                      <div className="bg-primary h-full w-[40%]"></div>
                    </div> */}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div
                    className="flex-row-reverse justify-end gap-2 transition-opacity">
                    <button
                      className="p-2 text-accent-bronze hover:bg-accent-bronze/10 rounded-lg transition-colors"
                      title="تعديل">
                      <span className="material-symbols-outlined">تعديل</span>
                    </button>
                    <button className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                      title="حذف">
                      <span className="material-symbols-outlined">حذف</span>
                    </button>
                  </div>
                </td>
              </tr>)) :
              products.map((product: product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-cover bg-center border border-gray-100 dark:border-gray-600"
                        data-alt={product.productNameAr}
                        style={{ backgroundImage: `${product?.images[0]}` || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000" }}>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Ethereal Blue Vase</p>
                        <p className="text-xs text-gray-400">SKU: ART-0012</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full uppercase tracking-wider">Ceramics</span>
                  </td>
                  <td className="p-4 text-right">
                    <p className="font-bold text-sm">{product.price}ج.م</p>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium">{product.quantity}</span>
                      <div
                        className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                        <div className="bg-primary h-full w-[40%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div
                      className="flex-row-reverse justify-end gap-2 transition-opacity">
                      <button
                        className="p-2 text-accent-bronze hover:bg-accent-bronze/10 rounded-lg transition-colors"
                        title="تعديل">
                        <span className="material-symbols-outlined">تعديل</span>
                      </button>
                      <button className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                        title="حذف">
                        <span className="material-symbols-outlined">حذف</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            {/* <!-- Row 1 --> */}
          </tbody>
        </table>
      </div>
      {/* <!-- Pagination --> */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-700 ">
        {/* <p className="text-xs text-gray-400">Showing 1 to 10 of 1,482 entries</p>
            <div className="flex gap-1">
              <button
                className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
                disabled>Previous</button>
              <button className="px-3 py-1 rounded bg-primary text-xs font-bold">1</button>
              <button
                className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800">2</button>
              <button
                className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800">3</button>
              <button
                className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800">Next</button>
            </div> */}
        <div className="text-center">
          <Link href={"/dashboard/manage-products"}>عرض جميع المنتجات</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductsTable