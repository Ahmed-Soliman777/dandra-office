"use client"
import { useFavorites } from "@/hooks/useFavorites"
import { Favorite } from "@/utils/types";
import { useAppSelector } from "@/lib/hooks";
import FavoriteCardData from "../favorite-card-data/FavoriteCardData";
import { useEffect } from "react";
const FavoriteCard = () => {

    const { token } = useAppSelector((state) => state.users)

    const { favorites, getFavorites } = useFavorites(token)

    useEffect(() => {
        if (token) {
            getFavorites()
        }
    }, [token, getFavorites])

    return (
        <div>
            {
                favorites.length ?
                    favorites.map((favorite: Favorite) => (
                        <div dir='rtl' key={favorite.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
                            <FavoriteCardData
                                favorite={favorite}
                            />
                        </div>
                    ))
                    :
                    <p className="flex justify-center items-center lg:h-100">لا يوجد بيانات</p>
            }
        </div>
    )
}

export default FavoriteCard
