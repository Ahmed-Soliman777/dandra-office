"use client"
import { useEffect } from "react";
import { useFavorites } from "@/hooks/useFavorites"
import { Favorite } from "@/utils/types";
import { toast } from "react-toastify";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
const FavoriteCard = () => {
    
    const {token} = useAppSelector((state)=> state.users)

    const { favorites, setFavorites, getFavorites, loadingFav } = useFavorites(token)

    useEffect(() => {
        if (token) {
            getFavorites()
        }
    }, [token, getFavorites])

    async function toggleFavorite(productId: number) {

        const previousFavorites = [...favorites];

        try {

            const res = await axios.delete(`${DOMAIN}/api/favorites`, { data: { productId } })
            toast.success(res.data.message)
            setFavorites(prev => prev.filter(fav => fav.productId !== productId))

        } catch (error) {
            console.error(error)
            setFavorites(previousFavorites)
            toast.error("حدث خطأ، حاول مجدداً")
        }
    }

    if (loadingFav) {
        return <div className="flex justify-center items-center h-screen">جاري التحميل...</div>
    }

    return (
        <div>
            {
                favorites.length ?
                    favorites.map((favorite: Favorite) => (
                        <div dir='rtl' key={favorite.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        toggleFavorite(Number(favorite.product?.id))
                                    }}
                                    className="z-20 absolute top-4 right-4 size-10 rounded-full bg-white/95 dark:bg-slate-800/95 flex items-center justify-center shadow-sm hover:scale-110 transition-all duration-200 backdrop-blur-sm disabled:opacity-50">
                                    <span>
                                        {
                                            (() => {
                                                const isFavorite = favorites.some((fav: Favorite) => fav.productId === favorite.product?.id)
                                                return (
                                                    <Heart
                                                        fill={isFavorite ? "#ef4444" : "none"}
                                                        stroke={isFavorite ? "#ef4444" : "currentColor"}
                                                    />
                                                )
                                            })()
                                        }
                                    </span>
                                </button>
                                <Link
                                    href={`/shop/${favorite.product?.id}`}
                                    className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-all duration-200 hover:scale-[1.01] flex flex-col">
                                    <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-700">
                                        {
                                            favorite.product?.images &&
                                            <Image className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                width={100}
                                                height={50}
                                                alt={favorite.product?.productNameAr || "منتج"}
                                                src={favorite.product?.images[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"} />
                                        }
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-3 gap-2">
                                            <div className="flex flex-col flex-1">
                                                <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">{favorite.product?.productNameAr}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                    :
                    <p className="flex justify-center items-center lg:h-100">لا يوجد بيانات</p>
            }
        </div>
    )
}

export default FavoriteCard
