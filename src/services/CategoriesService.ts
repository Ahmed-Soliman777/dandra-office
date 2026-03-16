import { DOMAIN } from "@/utils/constants";
import axios from "axios";

export async function fetchCategoriesApi() {
  const { data } = await axios.get(`${DOMAIN}/api/categories`);
  return data.categories;
}
