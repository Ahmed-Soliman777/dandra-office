import { DOMAIN } from "@/utils/constants";
import axios from "axios";
export async function fetchProductDataById(id: string) {
  const { data } = await axios.get(`${DOMAIN}/api/products/${id}`);
  return data;
}
