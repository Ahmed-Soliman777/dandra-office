import { fetchCategoriesApi } from "@/services/CategoriesService";
import { category } from "@/utils/types";
import { useEffect, useState } from "react";

export function useCategories() {
  const [categories, setCategories] = useState<category[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(false);

  useEffect(() => {
    async function GetCategoriesData() {
      setCategoriesLoading(true);
      try {
        const data = await fetchCategoriesApi();
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setCategoriesLoading(false);
      }
    }
    GetCategoriesData();
  }, []);
  return { categories, setCategories, categoriesLoading };
}
