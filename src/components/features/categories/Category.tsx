"use client"
import ProductCard from "@/components/common/ProductCard"
import { DOMAIN } from "@/utils/constants"
import { product } from "@/utils/types"
import axios from "axios"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
const Category = ({ id }: { id: string }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getCategory = async () => {
            try {
                const response = await axios.get(`${DOMAIN}/api/categories/${id}`)
                setProducts(response?.data?.products);

            } catch (error) {
                toast.error("حدث خطأ، حاول مجدداً")
                console.error(error)
            }
        }
        getCategory()
    }, [id])
    return (
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-8" dir="rtl">
            <div>
                {products?.map((product: product) => {
                    return (
                        <ProductCard key={product.id} />
                    );
                })}
            </div>
        </main>
    )
}

export default Category