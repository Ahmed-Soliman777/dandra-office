import { useState, useCallback } from "react";
import { fetchFavoritesApi } from "../services/favoriteService";
import { Favorite } from "../utils/types";

export const useFavorites = (token: string | undefined) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loadingFav, setLoadingFav] = useState<boolean>(false);

  const getFavorites = useCallback(async () => {
    if (!token) return;
    try {
      setLoadingFav(true);
      const data = await fetchFavoritesApi();
      setFavorites(data);
    } catch (error) {
      console.error("Error fetching favorites", error);
    } finally {
      setLoadingFav(false);
    }
  }, [token]);

  return { favorites, setFavorites, getFavorites, loadingFav };
};
