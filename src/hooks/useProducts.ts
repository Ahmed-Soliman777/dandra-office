import { product } from "@/utils/types";
import { FetchProductsData } from "@/services/ProductsService";
import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState<product[]>([]);
  const [productLoading, setProductLoading] = useState<boolean>(false);

  useEffect(() => {
    async function GetProductsData() {
      setProductLoading(true);
      try {
        const data = await FetchProductsData();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setProductLoading(false);
      }
    }

    GetProductsData();
  }, []);

  return { products, productLoading };
}
