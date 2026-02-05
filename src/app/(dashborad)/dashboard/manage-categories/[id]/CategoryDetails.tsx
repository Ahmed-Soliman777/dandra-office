"use client"
import CategoryName from '@/app/(dashborad)/components/CategoryName'
import { DOMAIN } from '@/app/utils/constants'
import { product } from '@/app/utils/types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CategoryDetails = ({ id }: { id: string }) => {

    const [categoryNameAr, setCategoryNameAr] = useState<string>("")
    const [categoryImage, setCategoryImage] = useState<string>("")
    const [categoryProducts, setCategoryProducts] = useState<product[]>([])

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function GetCategoryName(id: string) {
            try {
                setLoading(true)
                const response = await axios.get(`${DOMAIN}/api/categories/${id}`)
                setCategoryNameAr(response.data.categoryNameAr)
                setCategoryImage(response.data.categoryThumbnail)
                setCategoryProducts(response.data.products)
                setLoading(false)
            } catch (error) {
                console.error(error);
                toast.error("حدث خطأ")
                setLoading(false)
            }
        }
        GetCategoryName(id)
    }, [id])

    async function deleteProduct(id: number) {
        try {
            await axios.delete(`${DOMAIN}/api/products/${id}`)

            setCategoryProducts((prevProduct) => {
                return prevProduct.filter((product) => product.id !== id)
            })

            toast.success("تم حذف المنتج بنجاح")
        } catch (error) {
            console.error(error);
            toast.error("حدث خطأ")
        }
    }

    if (loading) {
        return <div className="text-center p-10 text-gray-900 dark:text-white">
            جاري التحميل...
        </div>
    }

    return (
        <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900">
            {/* Hero Section */}
            <section className="relative h-80 w-full flex items-center justify-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${categoryImage})` }}
                >
                    <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60 backdrop-blur-sm"></div>
                </div>

                <div className="relative z-10 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        {categoryNameAr}
                    </h1>
                    <p className="text-gray-100 text-lg drop-shadow">
                        استكشف جميع المنتجات في هذه الفئة
                    </p>
                </div>
            </section>

            {/* Products Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">المنتجات</h2>
                        <p className="text-gray-600 dark:text-gray-400">إدارة منتجات هذه الفئة</p>
                    </div>
                    <span className="bg-linear-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                        {categoryProducts?.length || 0} منتج
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" dir="rtl">
                    {categoryProducts?.map((product: product) => (
                        <div key={product.id} className="group bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full hover:border-green-300 dark:hover:border-green-600">

                            <div className="relative aspect-video w-full bg-gray-100 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                                {product?.images?.[0] ? (
                                    <Image
                                        src={product.images[0]}
                                        alt={product.productNameAr || "صورة المنتج"}
                                        fill
                                        className="object-contain p-3 group-hover:scale-105 transition-transform"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-xs text-slate-400 dark:text-slate-500">لا توجد صورة</div>
                                )}

                                <div className="absolute top-2 right-2 bg-slate-900/80 dark:bg-slate-950/80 text-white text-[11px] px-2 py-1 rounded-md backdrop-blur-sm">
                                    مُعرف: #{product.id}
                                </div>
                            </div>

                            <div className="p-4 flex flex-col grow">
                                <div className="mb-3">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 line-clamp-2">
                                        {product.productNameAr}
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400"><CategoryName id={product.categoryId as number} /> </p>
                                </div>

                                <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-0.5">السعر</span>
                                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                                            {product.price} <small className="text-xs font-normal text-slate-600 dark:text-slate-400">ج.م</small>
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-0.5">الحالة</span>
                                        {
                                            (product.quantity ?? 0) > 5 ?
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700">
                                                    متوفر
                                                </span> : (product.quantity ?? 0) < 5 && (product.quantity ?? 0) > 0 ? <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-700">
                                                    محدود
                                                </span> :
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-700">
                                                        نفذ
                                                    </span>
                                        }

                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 mt-auto pt-3 border-t border-gray-200 dark:border-slate-600">
                                    <Link href={`/dashboard/manage-products/${product.id}`} className="flex items-center justify-center gap-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 py-2 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        عرض
                                    </Link>

                                    <button
                                        className="flex items-center justify-center gap-2 text-sm font-medium bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 py-2 rounded-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all"
                                        onClick={() => {
                                            if (product.id) {
                                                if (window.confirm("سيتم حذف المنتج نهائياً"))
                                                    deleteProduct(product.id)
                                            }
                                        }}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        حذف
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {(!categoryProducts || categoryProducts.length === 0) && (
                    <div className="text-center py-20">
                        <svg className="w-20 h-20 text-gray-300 dark:text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">لا توجد منتجات في هذه الفئة</p>
                        <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">ابدأ بإضافة منتجات جديدة لهذه الفئة</p>
                    </div>
                )}
            </section>
        </main>
    )
}

export default CategoryDetails