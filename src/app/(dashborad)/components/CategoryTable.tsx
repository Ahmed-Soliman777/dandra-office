"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DOMAIN } from '@/app/utils/constants';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { category } from '@/app/utils/types';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const CategoryTable = () => {

    const [categories, setCategories] = useState([])

    const [search, setSearch] = useState<string>("")

    const pathName = usePathname()

    useEffect(() => {
        const getProductsData = async () => {
            try {
                const response = await axios.get(`${DOMAIN}/api/categories`)
                setCategories(response.data.categories);
                console.log(response.data.categories);
            } catch (error) {
                toast.error("حدث خطأ")
                console.error(error);
            }
        }
        getProductsData()
    }, [])

    async function deleteCategory(id: number) {
        try {
            await axios.delete(`${DOMAIN}/api/categories/${id}`)

            setCategories((prevCat) => {
                return prevCat.filter((cat: category) => cat.id !== id)
            })

            toast.success("تم حذف الفئة بنجاح")

        } catch (error) {
            console.error(error);
            toast.error("حدث خطأ")
        }
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

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
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700 shrink-0 border border-gray-200 dark:border-slate-600">
                                                {category?.categoryThumbnail && category.categoryThumbnail.startsWith("http") ? (
                                                    <Image
                                                        src={category.categoryThumbnail}
                                                        alt={category.categoryNameEn || "category image"}
                                                        width={100}
                                                        height={100}
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-slate-600">
                                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white text-sm">{category.categoryNameAr}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {category.products &&
                                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full inline-block">{category.products.length}</span>
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Link
                                                href={`/dashboard/manage-categories/update-categories/${category.id}`}
                                                className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="تعديل">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                            </Link>
                                            <button className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                onClick={() => {
                                                    if (category.id) {
                                                        deleteCategory(category.id)
                                                    }
                                                }} title="حذف">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                            <Link
                                                href={`/dashboard/manage-categories/${category.id}`}
                                                className="p-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors" title="عرض الفئة">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            )) : categories.filter((category: category) => {
                                if (search.length === 0) return true
                                return category.categoryNameAr?.includes(search) || category.categoryNameAr?.includes(search)
                            }).map((category: category) => (
                                <tr key={category.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700 shrink-0 border border-gray-200 dark:border-slate-600">
                                                {category?.categoryThumbnail && category.categoryThumbnail.startsWith("http") ? (
                                                    <Image
                                                        src={category.categoryThumbnail}
                                                        alt={category.categoryNameEn || "category image"}
                                                        width={100}
                                                        height={100}
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-slate-600">
                                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white text-sm">{category.categoryNameAr}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {category.products &&
                                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full inline-block">{category.products.length}</span>
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Link
                                                href={`/dashboard/manage-categories/update-categories/${category.id}`}
                                                className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="تعديل">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                            </Link>
                                            <button className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                onClick={() => {
                                                    if (category.id) {
                                                        deleteCategory(category.id)
                                                    }
                                                }} title="حذف">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                            <Link
                                                href={`/dashboard/manage-categories/${category.id}`}
                                                className="p-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors" title="عرض الفئة">
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
