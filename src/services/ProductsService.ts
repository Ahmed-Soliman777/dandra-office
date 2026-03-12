import { DOMAIN } from "@/utils/constants";
import axios from "axios";

export const FetchProductsData = async () => {
  try {
    const { data } = await axios.get(`${DOMAIN}/api/products`);
    return data.products;
  } catch (error) {
    return error;
  }
};
