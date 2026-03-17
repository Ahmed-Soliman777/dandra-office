import { Comment, product, review } from "@/utils/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchProductDataById } from "@/services/id/ProductService";

export function useProduct(id: string) {
  const [product, setproduct] = useState<product[]>([]);

  const [comments, setComments] = useState<Comment[]>([]);

  const [reviews, setReviews] = useState<review[]>([]);

  const [loadingProduct, setLoadingProduct] = useState<boolean>();

  useEffect(() => {
    async function getProductComments(id: string) {
      try {
        setLoadingProduct(true);
        const data = await fetchProductDataById(id);
        setproduct(data);
        setComments(data.comments);
        setReviews(data.reviews);
        setLoadingProduct(false);
      } catch (error) {
        setLoadingProduct(false);
        console.error(error);
        toast.error("حدث خطأ أثناء تحميل التعليقات، حاول مجدداً");
      }
    }
    getProductComments(id);
  }, [id]);

  return { product, comments, reviews, loadingProduct };
}
