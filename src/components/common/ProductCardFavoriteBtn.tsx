"use client"
import { DOMAIN } from "@/utils/constants"
import { Favorite, product } from "@/utils/types"
import { useFavorites } from "@/hooks/useFavorites"
import { useAppSelector } from "@/lib/hooks"
import axios from "axios"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const ProductCardFavoriteBtn = ({
    product,
    productLoading
}: {
    product: product;
    productLoading: boolean
}) => {

    const [loading, setLoading] = useState(false)

    const { token } = useAppSelector(state => state.users)

    const { favorites, setFavorites, getFavorites } = useFavorites(token)

    useEffect(() => {
        if (token) {
            getFavorites()
        }
    }, [token, getFavorites])

    async function toggleFavorite(productId: string) {
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

    useEffect(() => {
        if (token) {
            getFavorites()
        }
    }, [token, getFavorites])

    return (
        <button
            onClick={() => {
                if(product.id)toggleFavorite(product.id)
            }}
            disabled={productLoading}
            className="size-10 rounded-full bg-white/95 dark:bg-slate-800/95 flex items-center justify-center shadow-sm hover:scale-110 transition-all duration-200 backdrop-blur-sm disabled:opacity-50">
            <span>
                {
                    favorites.some((fav: Favorite) => fav.productId === product.id) ?
                        <Heart stroke={'#ef4444'} fill='#ef4444' /> :
                        <Heart className="text-slate-400" />
                }
            </span>
        </button>
    )
}

export default ProductCardFavoriteBtn
