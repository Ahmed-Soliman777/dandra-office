"use client"
import ProductFilters from "@/app/components/ProductFilters"
import { DOMAIN } from "@/app/utils/constants"
import { product } from "@/app/utils/types"
import axios from "axios"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
const Category = ({ id }: { id: string }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getCategory = async () => {
            try {
                const response = await axios.get(`${DOMAIN}/api/categories/${id}`)
                setProducts(response?.data?.products);

            } catch (error) {
                toast.error("حدث خطأ، حاول مجدداً")
                console.error(error)
            }
        }
        getCategory()
    }, [id])
    return (
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-8" dir="rtl">
            <div className="flex flex-col lg:flex-row gap-8 relative">

                <aside className="w-full lg:w-64 shrink-0">
                    <ProductFilters />
                </aside>

                <div className="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 auto-rows-max">
                    {products?.map((product: product) => {
                        const productReviews = product.reviews || [];
                        const average = productReviews.length > 0
                            ? Math.round(productReviews.reduce((sum, r) => sum + r.reviewInNumbers, 0) / productReviews.length)
                            : 0;

                        return (
                            <Link
                                href={`/shop/${product.id}`}
                                key={product.id}
                                className="group relative bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                            >
                                {/* Image Section */}
                                <div className="relative aspect-square w-full overflow-hidden bg-gray-50 shrink-0">
                                    <Image
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        width={300}
                                        height={300}
                                        alt={product.productNameAr}
                                        src={product.images?.[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"}
                                    />
                                    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-green-600 text-white text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full uppercase">
                                        جديد
                                    </div>
                                    <button className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 size-7 sm:size-8 rounded-full bg-white/90 backdrop-blur-sm dark:bg-black/50 flex items-center justify-center text-gray-700 dark:text-white opacity-0 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                                        <Heart size={14} className="sm:size-4" />
                                    </button>
                                </div>

                                {/* Content Section */}
                                <div className="p-2 sm:p-3 flex flex-col grow">
                                    <h3 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100 line-clamp-2 mb-1 sm:mb-2">
                                        {product.productNameAr}
                                    </h3>

                                    <div className="flex items-center gap-1 mb-2 sm:mb-3">
                                        <div className="flex text-amber-400">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={10}
                                                    className="sm:size-3"
                                                    fill={star <= average ? "currentColor" : "none"}
                                                    strokeWidth={1.5}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-[8px] sm:text-[10px] text-gray-400 whitespace-nowrap">({productReviews.length})</span>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between gap-1">
                                        <p className="text-xs sm:text-sm md:text-base font-bold text-green-700 dark:text-green-500 truncate">
                                            {product.price} <span className="text-[8px] sm:text-[10px] font-normal text-gray-500">ج.م</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    )
}

export default Category