    "use client"
import { DOMAIN } from "@/app/utils/constants"
import { Favorite, productDetails } from "@/app/utils/types"
import axios from "axios"
import { ChevronLeft, Heart, Home } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Image from "next/image"
import { useFavorites } from "@/app/hooks/useFavorites"

const ProductDetails = ({ id, token }: { id: string, token: string | undefined }) => {
    const [product, setProduct] = useState({} as productDetails)
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedImage, setSelectedImage] = useState(0);

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
            <nav dir="rtl" className="flex items-center gap-3 text-sm mb-10 overflow-x-auto whitespace-nowrap pb-2">
                <Link className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1" href="/">
                    <Home size={16} /> الرئيسية
                </Link>

                <ChevronLeft size={14} className="text-slate-400 rotate-0" />

                {product?.category?.categoryNameAr ? (
                    <Link
                        className="text-slate-500 hover:text-primary transition-colors"
                        href={`/categories/${product?.category?.id}`}
                    >
                        {product?.category?.categoryNameAr}
                    </Link>
                ) : (
                    <div className="h-4 w-16 bg-slate-200 dark:bg-slate-800 animate-pulse rounded"></div>
                )}

                <ChevronLeft size={14} className="text-slate-400" />

                <span className="text-slate-900 dark:text-white font-semibold truncate">
                    {product?.productNameAr}
                </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className="lg:col-span-7 space-y-6">
                    <div className="relative aspect-square md:aspect-4/5 max-h-150 w-full rounded-4xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-inner group">
                        <div className="relative w-full h-100 md:h-112.5 lg:h-125 max-w-125 mx-auto rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg group">
                            <Image
                                fill
                                priority
                                className="object-contain p-6 transition-all duration-700 ease-in-out group-hover:scale-105"
                                alt={product?.productNameAr || "صورة المنتج"}
                                src={product?.images?.[selectedImage] || "/placeholder.png"}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                            />
                        </div>

                        <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            عرض كامل الشاشة
                        </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {product?.images?.map((image: string, index: number) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${selectedImage === index
                                    ? "border-primary ring-4 ring-primary/10 shadow-lg scale-95"
                                    : "border-slate-100 dark:border-slate-800 hover:border-slate-300 opacity-70 hover:opacity-100"
                                    }`}
                            >
                                <Image
                                    fill
                                    className="object-cover"
                                    alt={`صورة مصغرة ${index + 1}`}
                                    src={image}
                                    sizes="100px"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- الجزء الأيمن: تفاصيل المنتج --- */}
                <div className="lg:col-span-5" dir="rtl">
                    <div className="sticky top-28">
                        {/* اسم المنتج والبراند */}
                        <div className="mb-8">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                                {product?.category?.categoryNameAr}
                            </span>
                            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                                {product?.productNameAr}
                            </h1>
                        </div>

                        {/* السعر والتقييم السريع */}
                        <div className="flex flex-col gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-4">
                                <span className="text-4xl font-black text-primary tracking-tighter">
                                    {product?.price?.toLocaleString()} <span className="text-lg font-bold">ج.م</span>
                                </span>
                            </div>

                        </div>

                        {/* الوصف */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">عن المنتج:</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                {product?.descriptionAr}
                            </p>
                        </div>

                        {/* الأزرار (Buttons) */}
                        <div className="flex flex-col gap-4">

                            <button
                                onClick={toggleFavorite}
                                disabled={loading}
                                className="w-full py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all disabled:opacity-50"
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-2 border-slate-300 border-t-primary rounded-full animate-spin"></div>
                                ) : (
                                    <div className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                                        <Heart
                                            size={22}
                                            className="transition-colors"
                                            fill={isFavorite ? "#ef4444" : "none"}
                                            stroke={isFavorite ? "#ef4444" : "currentColor"}
                                        />
                                        {isFavorite ? "في المفضلة" : "إضافة للمفضلة"}
                                    </div>
                                )}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails