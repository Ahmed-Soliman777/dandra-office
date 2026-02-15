"use client"
import { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
import { DOMAIN } from '../utils/constants'
import Loading from '../loading'
import { Heart, Star } from 'lucide-react'
import Link from 'next/link'
import { product, review } from '../utils/types'
import { CldImage } from 'next-cloudinary'
import { usePathname } from 'next/navigation'

const ProductCard = () => {

    const pathName = usePathname()

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${DOMAIN}/api/products`)
                setProducts(response.data.products)

            } catch (error) {
                toast.error("حدث خطأ أثناء تحميل البيانات")
                console.error(error);
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            {pathName === "/shop" ? products?.map((product: product) => (
                <Link
                    href={`/shop/${product.id}`}
                    key={product.id}
                    className="group bg-white dark:bg-background-dark rounded-xl border border-[#e6f4f4] dark:border-[#1a3a3a] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="relative aspect-square overflow-hidden bg-[#f0f5f5]">
                        {
                            product.images &&
                            <CldImage className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                width={100}
                                height={50}
                                alt={product.productNameAr || "منتج"}
                                src={product.images[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"} />
                        }
                        <button
                            className="absolute top-3 right-3 size-10 rounded-full bg-white/90 dark:bg-background-dark/90 flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined filled-heart"><Heart /></span>
                        </button>
                        <div
                            className="absolute top-3 left-3 bg-primary text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">New</div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                        <div className="flex justify-between items-<Star />t mb-1">
                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold">{product.productNameAr}</h3>
                            </div>
                            <p className="text-lg font-bold text-primary">{product.price} جنيه</p>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-yellow-400">
                                {(() => {
                                    const productReviews = product.reviews || [];
                                    if (productReviews.length === 0) return 0;
                                    const average = productReviews.reduce((sum: number, review: review) => sum + review.reviewInNumbers, 0) / productReviews.length;
                                    return (
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={16}
                                                    fill={star <= Math.round(average) ? "currentColor" : "none"}
                                                />
                                            ))}
                                        </div>
                                    );
                                })()}
                            </div>
                            <span className="text-xs text-gray-400">({(product.reviews || []).length})</span>
                        </div>
                    </div>

                </Link>
            )) :
                products?.slice(0, 10).map((product: product) => (
                    <div dir='rtl' key={product.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <Link
                            href={`/shop/${product.id}`}
                            className="group bg-white dark:bg-background-dark rounded-xl border border-[#e6f4f4] dark:border-[#1a3a3a] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-[#f0f5f5]">
                                {
                                    product.images &&
                                    <CldImage className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        width={100}
                                        height={50}
                                        alt={product.productNameAr || "منتج"}
                                        src={product.images[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"} />
                                }
                                <button
                                    className="absolute top-3 right-3 size-10 rounded-full bg-white/90 dark:bg-background-dark/90 flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined filled-heart"><Heart /></span>
                                </button>
                                <div
                                    className="absolute top-3 left-3 bg-primary text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">New</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex justify-between items-<Star />t mb-1">
                                    <div className="flex flex-col">
                                        <h3 className="text-sm font-bold">{product.productNameAr}</h3>
                                    </div>
                                    <p className="text-lg font-bold text-primary">{product.price} جنيه</p>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex text-yellow-400">
                                        {(() => {
                                            const productReviews = product.reviews || [];
                                            if (productReviews.length === 0) return 0;
                                            const average = productReviews.reduce((sum: number, review: review) => sum + review.reviewInNumbers, 0) / productReviews.length;
                                            return (
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star
                                                            key={star}
                                                            size={16}
                                                            fill={star <= Math.round(average) ? "currentColor" : "none"}
                                                        />
                                                    ))}
                                                </div>
                                            );
                                        })()}
                                    </div>
                                    <span className="text-xs text-gray-400">({(product.reviews || []).length})</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default ProductCard