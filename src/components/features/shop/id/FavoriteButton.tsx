"use client"
import { useFavorites } from "@/hooks/useFavorites"
import { DOMAIN } from "@/utils/constants";
import { Favorite } from "@/utils/types";
import { useAppSelector } from "@/lib/hooks";
import axios from "axios";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FavoriteButton = ({ id }: { id: string }) => {

    const [loading, setLoading] = useState<boolean>(false)

    const { token } = useAppSelector((state) => state.users)

    const { favorites, setFavorites, getFavorites } = useFavorites(token);

    const isFavorite = favorites.some(fav => fav.productId === id);

    useEffect(() => {
        if (token) {
            getFavorites();
        }
    }, [token, getFavorites]);

    async function toggleFavorite() {
        if (!token) return toast.info("يرجى تسجيل الدخول أولاً");

        try {
            setLoading(true)
            if (!isFavorite) {
                const res = await axios.post(`${DOMAIN}/api/favorites`, { productId: parseInt(id) })
                setFavorites(prev => [...prev, { productId: id } as Favorite])
                toast.success(res.data.message)
                setLoading(false)
            }
            else {
                const res = await axios.delete(`${DOMAIN}/api/favorites`, { data: { productId: parseInt(id) } })
                setFavorites(prev => prev.filter(fav => fav.productId !== id))
                toast.success(res.data.message)
                setLoading(false)
            }
        } catch (error) {
            console.error(error)
            toast.error("حدث خطأ، حاول مجدداً")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-40">

            <button
                onClick={toggleFavorite}
                disabled={loading}
                className="w-full py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all disabled:opacity-50"
            >
                {loading ? (
                    <div className="w-6 h-6 border-2 border-slate-300 border-t-primary rounded-full animate-spin"></div>
                ) : (
                    <div className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                        <Heart
                            size={22}
                            className="transition-colors"
                            fill={isFavorite ? "#ef4444" : "none"}
                            stroke={isFavorite ? "#ef4444" : "currentColor"}
                        />
                        {isFavorite ? "في المفضلة" : "إضافة للمفضلة"}
                    </div>
                )}
            </button>
        </div>
    )
}

export default FavoriteButton
