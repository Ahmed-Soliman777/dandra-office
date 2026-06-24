"use client"
import ProductCardData from "@/components/common/ProductCardData"
import ProductCardFavoriteBtn from "@/components/common/ProductCardFavoriteBtn"
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
        <main className={`px-4 lg:px-8 py-8 min-h-[calc(100vh-167px)]`} dir="rtl">
            <div className="grid grid-cols-6 gap-5">
                {products?.map((product: product) => {
                    return (
                        <div className="relative" key={product.id}>
                            <div className="absolute top-4 right-4 z-10">
                                <div className="absolute top-4 right-4 z-10">
                                    <ProductCardFavoriteBtn
                                        product={product}
                                    />
                                </div>
                            </div>
                            <ProductCardData product={product} />
                        </div>
                    );
                })}
            </div>
        </main>
    )
}

export default Category