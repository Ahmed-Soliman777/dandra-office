"use client"
import { useFavorites } from "@/hooks/useFavorites"
import { Favorite } from "@/utils/types";
import { useAppSelector } from "@/lib/hooks";
import FavoriteCardData from "../favorite-card-data/FavoriteCardData";
import { useEffect } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
const FavoriteCard = () => {

    const { token } = useAppSelector((state) => state.users)

    const { favorites, getFavorites } = useFavorites(token)

    useEffect(() => {
        if (token) {
            getFavorites()
        }
    }, [token, getFavorites])

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            {favorites.length ? (
                <div dir="rtl" className="px-6 lg:px-10 py-16 max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">المنتجات المفضلة</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-4"> {favorites.length === 1 ? "إعجاب واحد" : (favorites.length > 2 && favorites.length < 11) ? `${favorites.length} إعجابات` : `${favorites.length} إعجاب`}</p>
                        <div className="h-1.5 w-24 bg-linear-to-r from-green-600 to-green-400 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {favorites.map((favorite: Favorite) => (
                            <FavoriteCardData
                                key={favorite.id}
                                favorite={favorite}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="min-h-screen flex items-center justify-center px-6">
                    <div className="max-w-md w-full text-center">
                        <div className="w-24 h-24 mx-auto mb-6 bg-emerald-50 dark:bg-slate-800 rounded-full flex items-center justify-center">
                            <Heart size={48} className="text-slate-400 dark:text-slate-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">لم تضف أي منتجاه للمفضلة بعد</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">سابحث عن منتجات رائعة واحفظ على مفضلاتك</p>
                        <Link href="/shop" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 dark:hover:bg-green-500 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg">
                            اكتشف المنتجات
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FavoriteCard
