"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DOMAIN } from '@/app/utils/constants';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { category } from '@/app/utils/types';
import { usePathname } from 'next/navigation';

const CategoryTable = () => {

    const [categories, setCategories] = useState([])

    const pathName = usePathname()

    useEffect(() => {
        const getProductsData = async () => {
            try {
                const response = await axios.get(`${DOMAIN}/api/categories`)
                // setCategories(response.data.categories);
                setCategories(response.data.categories);
                
            } catch (error) {
                toast.error("حدث خطأ")
                console.error(error);
            }
        }
        getProductsData()
    }, [])

    return (
        <div
            className="mt-10 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
            <div
                className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
                <h3 className="font-bold text-lg">التصنيفات</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-right">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                            <th
                                className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">
                                التصنيف</th>

                            <th
                                className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 text-right">
                                عدد المنتجات</th>
                            <th
                                className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 text-right">
                                حذف / تعديل</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {pathName === "/dashboard" ? categories.slice(0, 3).map((category: category) => (
                            <tr key={category.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-cover bg-center border border-gray-100 dark:border-gray-600"
                                            data-alt="Handcrafted ceramic vase"
                                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsD1gUdWsexl-Kgrzc7qCrfA5TqfQ5JbmoluVYAP_bNNpNpT47cHo_oqnhTj3cbtiUXK8k85WHeXD3zLN3mZ3-XXNLRn-hUiK23_Mq1z4wknTXH1KEBwco1SH1gJSULb-hv6OKzqEv7Zf6V_bQJ3Qu6tXW_U2jgNuat9cgUUY_SmsDtVkAYGv4s44AgXD5SPyzusnjh2aSV07VJL3dSMN3yCHmaZCBsYSpKTSRtp3AP2dpCBeA9upsipQ3CWajEIWXmZ6ore9VKePS')" }}>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">{category.categoryNameAr}</p>
                                            {/* <p className="text-xs text-gray-400">SKU: ART-0012</p> */}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="">
                                        <span className="text-sm font-medium">{category.products.length}</span>
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
                        )) : categories.map((category: category) => (
                            <tr key={category.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-cover bg-center border border-gray-100 dark:border-gray-600"
                                            data-alt="Handcrafted ceramic vase"
                                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsD1gUdWsexl-Kgrzc7qCrfA5TqfQ5JbmoluVYAP_bNNpNpT47cHo_oqnhTj3cbtiUXK8k85WHeXD3zLN3mZ3-XXNLRn-hUiK23_Mq1z4wknTXH1KEBwco1SH1gJSULb-hv6OKzqEv7Zf6V_bQJ3Qu6tXW_U2jgNuat9cgUUY_SmsDtVkAYGv4s44AgXD5SPyzusnjh2aSV07VJL3dSMN3yCHmaZCBsYSpKTSRtp3AP2dpCBeA9upsipQ3CWajEIWXmZ6ore9VKePS')" }}>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">{category.categoryNameAr}</p>
                                            {/* <p className="text-xs text-gray-400">SKU: ART-0012</p> */}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="">
                                        <span className="text-sm font-medium">{category.products.length}</span>
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
                    <Link href={"/dashboard/manage-categories"}>عرض جميع التصنيفات</Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryTable