"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Favorite, product, review } from '@/utils/types'
import { toast } from 'react-toastify'
import { DOMAIN } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Star } from 'lucide-react'
import Loading from '@/app/loading'
import { useSearchParams } from 'next/navigation'
import { useFavorites } from '@/hooks/useFavorites'

const SearchResult = ({ product, token }: { product: string, token: string | undefined }) => {
    const [products, setProducts] = useState<product[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const { favorites, setFavorites, getFavorites } = useFavorites(token)

    const params = useSearchParams()

    const minPrice = params.get('minPrice')
    const maxPrice = params.get('maxPrice')

    useEffect(() => {
        if (token) {
            getFavorites()
        }
    }, [token, getFavorites])

    useEffect(() => {
        async function getSearchResult(product: string) {
            try {
                setLoading(true)
                const { data } = await axios.get(`${DOMAIN}/api/products/search?product=${product}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
                setProducts(data);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error(error);
                toast.error(`حدث خطأ، حاول مجدداً`)
            }
        }
        getSearchResult(product)
    }, [product, minPrice, maxPrice])

    async function toggleFavorite(productId: number) {
        if (!token) return toast.info("يرجى تسجيل الدخول أولاً");

        const isFavorite = favorites.some(fav => fav.productId === productId);
        const previousFavorites = [...favorites];

        try {
            if (!isFavorite) {
                setFavorites(prev => [...prev, { productId } as Favorite])
            } else {
                setFavorites(prev => prev.filter(fav => fav.productId !== productId))
            }

            setLoading(true)

            if (!isFavorite) {
                const res = await axios.post(`${DOMAIN}/api/favorites`, { productId })
                toast.success(res.data.message)
            } else {
                const res = await axios.delete(`${DOMAIN}/api/favorites`, { data: { productId } })
                toast.success(res.data.message)
            }
        } catch (error) {
            console.error(error)
            setFavorites(previousFavorites)
            toast.error("حدث خطأ، حاول مجدداً")
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className="">
            {products.length > 0 ? (products?.map((product: product) => {
                const productReviews = product.reviews || [];
                
                const average = productReviews.length > 0
                    ? productReviews.reduce((sum: number, review: review) => sum + review.reviewInNumbers, 0) / productReviews.length
                    : 0;


                return (
                    <div key={product.id} className="relative group">
                        <button
                            onClick={() => {
                                toggleFavorite(Number(product.id))
                            }}
                            className="absolute top-3 right-3 z-20 size-10 rounded-full bg-white/90 dark:bg-background-dark/90 flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform"
                        >
                            {
                                favorites.some((fav: Favorite) => fav.productId === product.id) ?
                                    <Heart stroke={'#ef4444'} fill='#ef4444' /> :
                                    <Heart className="text-slate-400" />
                            }
                        </button>

                        <Link
                            href={`/shop/${product.id}`}
                            className="bg-white dark:bg-background-dark rounded-xl border border-[#e6f4f4] dark:border-[#1a3a3a] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative aspect-square overflow-hidden bg-[#f0f5f5]">
                                {product.images && (
                                    <Image
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        width={400}
                                        height={400}
                                        alt={product.productNameAr || "منتج"}
                                        src={product.images[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"}
                                    />
                                )}
                            </div>

                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-sm font-bold">{product.productNameAr}</h3>
                                    <p className="text-lg font-bold text-primary whitespace-nowrap">{product.price} جنيه</p>
                                </div>

                                <div className="flex items-center gap-2 mt-auto">
                                    <div className="flex text-yellow-400 gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                size={16}
                                                fill={star <= Math.round(average) ? "currentColor" : "none"}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400">({productReviews.length})</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })) :
                <div className="text center">
                    لا يوجد نتائج
                </div>
            }
        </div>
    );
}

export default SearchResult
