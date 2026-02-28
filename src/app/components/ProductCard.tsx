"use client"
import { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
import { DOMAIN } from '../utils/constants'
import Loading from '../loading'
import { Heart, Star } from 'lucide-react'
import Link from 'next/link'
import { Favorite, product, review } from '../utils/types'
import { CldImage } from 'next-cloudinary'
import { usePathname } from 'next/navigation'
import { useFavorites } from '../hooks/useFavorites'

const ProductCard = ({ token }: { token: string }) => {

    const pathName = usePathname()

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    // const [favorites, setFavorites] = useState<Favorite[]>([])
    const { favorites, getFavorites } = useFavorites(token)
    const [productId, setProductId] = useState<number | undefined>(undefined)

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

    useEffect(() => {
        if (token) {
            getFavorites()
        }
    }, [token, getFavorites])

    async function addToFavorite() {
        if (productId) {
            try {
                setLoading(true)
                const { data } = await axios.post(`${DOMAIN}/api/favorites`, { productId })
                toast.success(data.message)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error(error);
                toast.error("حدث خطأ، حاول مجدداً")
            }
        }
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            {pathName === "/shop" ? products?.map((product: product) => (
                <Link
                    href={`/shop/${product.id}`}
                    key={product.id}
                    className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-all duration-200 hover:scale-[1.01] flex flex-col">
                    <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-700">
                        {
                            product.images &&
                            <CldImage className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                width={100}
                                height={50}
                                alt={product.productNameAr || "منتج"}
                                src={product.images[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"} />
                        }
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setProductId(product.id)
                                const isAlreadyFavorite = favorites.some((fav: Favorite) => fav.productId === product.id)
                                if (!isAlreadyFavorite) {
                                    setProductId(product.id);
                                    addToFavorite();
                                }
                            }}
                            className="absolute top-4 right-4 size-10 rounded-full bg-white/95 dark:bg-slate-800/95 flex items-center justify-center shadow-sm hover:scale-110 transition-all duration-200 backdrop-blur-sm">
                            <span>
                                {
                                    favorites.some((fav: Favorite) => fav.productId === product.id) ?
                                        <Heart stroke={'#ef4444'} fill='#ef4444' /> :
                                        <Heart className="text-slate-400" />
                                }
                            </span>
                        </button>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-3 gap-2">
                            <div className="flex flex-col flex-1">
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">{product.productNameAr}</h3>
                            </div>
                            <p className="text-lg font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">{product.price} جنيه</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex text-amber-400">
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
                    <div dir='rtl' key={product.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <Link
                            href={`/shop/${product.id}`}
                            className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-all duration-200 hover:scale-[1.01] flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-700">
                                {
                                    product.images &&
                                    <CldImage className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        width={100}
                                        height={50}
                                        alt={product.productNameAr || "منتج"}
                                        src={product.images[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"} />
                                }
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setProductId(product.id)
                                        const isAlreadyFavorite = favorites.some((fav: Favorite) => fav.productId === product.id)
                                        if (!isAlreadyFavorite) {
                                            setProductId(product.id);
                                            addToFavorite();
                                        }
                                    }}
                                    className="absolute top-4 right-4 size-10 rounded-full bg-white/95 dark:bg-slate-800/95 flex items-center justify-center shadow-sm hover:scale-110 transition-all duration-200 backdrop-blur-sm">
                                    <span>
                                        {
                                            favorites.some((fav: Favorite) => fav.productId === product.id) ?
                                                <Heart stroke={'#ef4444'} fill='#ef4444' /> :
                                                <Heart className="text-slate-400" />
                                        }
                                    </span>
                                </button>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-3 gap-2">
                                    <div className="flex flex-col flex-1">
                                        <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">{product.productNameAr}</h3>
                                    </div>
                                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">{product.price} جنيه</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex text-amber-400">
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
                                    <span className="text-xs text-slate-500 dark:text-slate-400">({(product.reviews || []).length})</span>
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