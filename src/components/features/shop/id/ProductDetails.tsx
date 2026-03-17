"use client"
import { productDetails } from "@/utils/types"
import { useState } from "react"
import Image from "next/image"

const ProductDetails = ({ product }: { product: productDetails }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <>
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
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {product?.images?.map((image: string, index: number) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${selectedImage === index
                                    ? "border-green-600 ring-4 ring-green-600/10 shadow-lg scale-95"
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
                            <span className="text-green-600 dark:text-green-400 font-bold text-sm tracking-widest uppercase mb-2 block">
                                {product?.category?.categoryNameAr}
                            </span>
                            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                                {product?.productNameAr}
                            </h1>
                        </div>

                        {/* السعر والتقييم السريع */}
                        <div className="flex flex-col gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-4">
                                <span className="text-4xl font-black text-green-600 dark:text-green-400 tracking-tighter">
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

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails