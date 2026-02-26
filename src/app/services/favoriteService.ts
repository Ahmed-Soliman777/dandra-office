import axios from "axios";
import { DOMAIN } from "@/app/utils/constants";

export const fetchFavoritesApi = async () => {
    const { data } = await axios.get(`${DOMAIN}/api/favorites`);
    return data;
};