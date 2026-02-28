"use client"
import { DOMAIN } from "@/app/utils/constants"
import { Favorite, productDetails } from "@/app/utils/types"
import axios from "axios"
import { ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Image from "next/image"
import { useFavorites } from "@/app/hooks/useFavorites"

const ProductDetails = ({ id, token }: { id: string, token: string | undefined }) => {
    const [product, setProduct] = useState({} as productDetails)
    const [loading, setLoading] = useState<boolean>(false)

    const { favorites, setFavorites, getFavorites } = useFavorites(token);

    const isFavorite = favorites.some(fav => fav.productId === Number(id));

    useEffect(() => {
        async function getProduct() {
            try {
                const product = await axios.get(`${DOMAIN}/api/products/${id}`)
                setProduct(product.data)
            } catch (error) {
                toast.error("حدث خطأ، حاول مجدداً")
                console.error(error)
            }
        }
        getProduct()
    }, [id])

    useEffect(() => {
        if (token) {
            getFavorites();
        }
    }, [token, getFavorites]);

    async function toggleFavorite() {
        if (!token) return toast.info("يرجى تسجيل الدخول أولاً");

        try {
            setLoading(true)
            if (!isFavorite) {
                const res = await axios.post(`${DOMAIN}/api/favorites`, { productId: parseInt(id) })
                setFavorites(prev => [...prev, { productId: parseInt(id) } as Favorite])
                toast.success(res.data.message)
                setLoading(false)
            }
            else {
                const res = await axios.delete(`${DOMAIN}/api/favorites`, { data: { productId: parseInt(id) } })
                setFavorites(prev => prev.filter(fav => fav.productId !== parseInt(id)))
                toast.success(res.data.message)
                setLoading(false)
            }
        } catch (error) {
            console.error(error)
            toast.error("حدث خطأ، حاول مجدداً")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <nav dir="rtl" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <Link className="hover:text-primary" href="/">الرئيسية</Link>
                <span className="material-symbols-outlined text-xs"><ArrowLeft /></span>
                {product?.category?.categoryNameEn ? (
                    <Link
                        className="hover:text-primary"
                        href={`/categories/${product?.category?.id}`}
                    >
                        {product?.category?.categoryNameAr}
                    </Link>
                ) : (
                    <span className="animate-pulse bg-slate-200 h-4 w-20 rounded"></span>
                )}
                <span className="material-symbols-outlined text-xs"><ArrowLeft /></span>
                <span className="text-slate-900 dark:text-slate-200 font-medium">{product?.productNameAr}</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* <!-- Left Side: Gallery --> */}
                <div className="lg:col-span-7 space-y-4">
                    <div className="aspect-4/5 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 group shadow-sm">
                        <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                        >
                            <Image
                                width={1000}
                                height={200}
                                alt={product?.productNameAr || ""}
                                src={product?.images?.[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product?.images?.length > 0 && product?.images?.map((image: string, index: number) => (
                            <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 border-2 border-primary overflow-hidden" key={image || index}
                            >
                                <Image
                                    width={200}
                                    height={200}
                                    alt={product?.productNameAr || ""}
                                    src={image || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* <!-- Right Side: Product Details --> */}
                <div className="lg:col-span-5 flex flex-col">
                    <div className="mb-6" dir="rtl">
                        <h2 className="text-2xl font-semibold mb-6">{product?.productNameAr || product?.productNameEn}</h2>
                        <div className="flex items-baseline gap-4 mb-8">
                            {/*todo create discount */}
                            <span className="text-3xl font-800 text-primary">{product?.price} جنيه</span>
                        </div>
                        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>{product?.descriptionAr || product?.descriptionEn}</p>
                            <button
                                onClick={toggleFavorite}
                                disabled={loading}
                                className="w-full px-2 py-5 border-2 border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center hover:border-primary transition-colors cursor-pointer disabled:opacity-50"
                            >
                                <div className="flex items-center gap-3">
                                    {loading ? (
                                        <span className="animate-pulse bg-slate-200 h-4 w-20 rounded"></span>
                                    ) : (
                                        <>
                                            <Heart
                                                size={25}
                                                fill={isFavorite ? "red" : "none"}
                                                stroke={isFavorite ? "red" : "currentColor"}
                                            />
                                            {isFavorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
                                        </>
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails