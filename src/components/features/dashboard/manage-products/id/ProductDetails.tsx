"use client"
import CategoryName from '@/components/features/dashboard/CategoryName'
import { DOMAIN } from '@/utils/constants'
import { product } from '@/utils/types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const ProductDetails = ({ id }: { id: string }) => {
    const [product, setProduct] = useState<product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProduct() {
            try {
                setLoading(true);
                const { data } = await axios.get(`${DOMAIN}/api/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.error(error);
                toast.error("حدث خطأ أثناء جلب بيانات المنتج");
            } finally {
                setLoading(false);
            }
        }

        if (id) getProduct();
    }, [id]);

    async function deleteProduct() {
        try {
            setLoading(true);
            await axios.delete(`${DOMAIN}/api/products/${id}`);
            toast.success("تم حذف المنتج بنجاح")
        } catch (error) {
            console.error(error);
            toast.error("حدث خطأ");
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <div className="p-10 text-center text-gray-900 dark:text-white">جاري التحميل...</div>;
    if (!product) return <div className="p-10 text-center text-gray-900 dark:text-white">المنتج غير موجود</div>;

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Navigation */}
                <div className="mb-6 flex items-center justify-between">
                    <Link href="/dashboard/manage-products" className="text-sm font-semibold text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-1">
                        ← العودة
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">تفاصيل المنتج</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Image Gallery */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden p-6">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">صور المنتج</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {product.images && product.images.length > 0 ? (
                                    product.images.map((image, index) => (
                                        <div key={index} className="relative aspect-square border-2 border-gray-200 dark:border-slate-600 rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-700 hover:shadow-lg transition-shadow">
                                            <Image
                                                src={image}
                                                alt={`${product.productNameAr}-${index}`}
                                                fill
                                                className="object-contain p-2 hover:scale-105 transition-transform"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-2 md:col-span-3 text-gray-400 dark:text-gray-500 text-center py-16 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl">
                                        لا توجد صور متوفرة
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product Descriptions */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 space-y-6">
                            <div>
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">الوصف (بالعربية)</label>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{product.descriptionAr || "لا يوجد وصف"}</p>
                            </div>
                            <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">Description (English)</label>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{product.descriptionEn || "No description"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        {/* Product Info Card */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 space-y-6">
                            <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 border border-green-200 dark:border-green-700">
                                <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase mb-1">Product ID</p>
                                <p className="text-2xl font-bold text-green-700 dark:text-green-300">#{product.id}</p>
                            </div>

                            {/* Product Name */}
                            <div>
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">اسم المنتج</label>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">{product.productNameAr}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">{product.productNameEn}</p>
                            </div>

                            <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">السعر</label>
                                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{product.price} <span className="text-lg text-gray-500">ج.م</span></p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                                <label className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase mb-2 block">الكمية المتاحة</label>
                                <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{product.quantity}</p>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${(product.quantity) && (
                                            product.quantity > 10 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                product.quantity > 0 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400')
                                        }`}>
                                        {(product.quantity) && (product.quantity > 10 ? 'متوفر' : product.quantity > 0 ? 'محدود' : 'نفذ')}
                                    </span>
                                </div>
                            </div>

                            {/* Category */}
                            {product.categoryId && (
                                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-700">
                                    <label className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase mb-2 block">التصنيف</label>
                                    <p className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                                        <CategoryName id={product?.categoryId} />
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <Link
                                href={`/dashboard/manage-products/update-product/${id}`}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                تعديل البيانات
                            </Link>
                            <button
                                onClick={() => {
                                    if (window.confirm("متأكد من حذف المنتج نهائياً؟"))
                                        deleteProduct()
                                }}
                                className="w-full py-3 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                حذف المنتج
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails