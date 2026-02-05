"use client"
import { DOMAIN } from "@/app/utils/constants"
import { productDetails } from "@/app/utils/types"
import axios from "axios"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { CldImage } from 'next-cloudinary';

const ProductDetails = ({ id }: { id: string }) => {
    const [product, setProduct] = useState({} as productDetails)
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
    return (
        <>
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <Link className="hover:text-primary" href="/">Home</Link>
                <span className="material-symbols-outlined text-xs"><ArrowRight /></span>
                {product?.category?.categoryNameEn ? (
                    <Link
                        className="hover:text-primary"
                        href={`/categories/${product.category.id}`}
                    >
                        {product.category.categoryNameAr}
                    </Link>
                ) : (
                    <span className="animate-pulse bg-slate-200 h-4 w-20 rounded"></span>
                )}
                <span className="material-symbols-outlined text-xs"><ArrowRight /></span>
                <span className="text-slate-900 dark:text-slate-200 font-medium">{product?.productNameAr}</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* <!-- Left Side: Gallery --> */}
                <div className="lg:col-span-7 space-y-4">
                    <div className="aspect-4/5 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 group shadow-sm">
                        <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                        // data-alt={product.productNameEn || product.productNameAr}
                        // style={{ backgroundImage: `url(${product.images?.[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"});` }}
                        >
                            <CldImage
                                width={1000}
                                height={200}
                                alt={product?.productNameAr}
                                src={product?.images[0]}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images?.length > 0 && product.images?.map((image: string) => (
                            <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 border-2 border-primary overflow-hidden" key={image}
                            // data-alt="Close up texture of the leather"
                            // style={{ backgroundImage: `url(${image})` }}
                            >
                                <CldImage
                                    width={200}
                                    height={200}
                                    alt={product?.productNameAr}
                                    src={image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* <!-- Right Side: Product Details --> */}
                <div className="lg:col-span-5 flex flex-col">
                    <div className="mb-6" dir="rtl">
                        {/* <div className="flex items-center gap-2 mb-2">
                        <span
                            className="px-2 py-1 bg-accent-bronze/10 text-accent-bronze text-[10px] font-bold uppercase tracking-wider rounded">Limited
                            Edition</span>
                        <span className="flex items-center gap-1 text-accent-bronze">
                            <span className="material-symbols-outlined text-sm fill-accent-bronze">verified</span>
                            <span className="text-xs font-bold">Certified Artisan</span>
                        </span>
                    </div> */}
                        {/* <h2 className="text-4xl font-800 text-slate-900 dark leading-tight mb-1">Premium Handcrafted
                        Leather Bag</h2> */}
                        <h2 className="text-2xl font-semibold mb-6">{product?.productNameAr || product?.productNameEn}</h2>
                        <div className="flex items-baseline gap-4 mb-8">
                            {/*todo create discount */}
                            <span className="text-3xl font-800 text-primary">{product?.price} جنيه</span>
                            {/* <span className="text-lg text-slate-400 line-through">$310.00</span> */}
                        </div>
                        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>{product?.descriptionAr || product?.descriptionEn}</p>
                            <button
                                className="px-2 py-5 h-full border-2 border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center hover:border-accent-bronze hover:text-accent-bronze transition-colors">
                                <div className="material-symbols-outlined flex items-center gap-3" ><Heart size={25} /> إضافة الى المفضلة </div>
                            </button>
                            {/* <div
                            className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500">inventory_2</span>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">In Stock</p>
                                    <p className="text-xs">Only 4 items remaining</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1">
                                <button className="text-lg font-bold hover:text-primary">-</button>
                                <span className="text-sm font-bold w-4 text-center">1</span>
                                <button className="text-lg font-bold hover:text-primary">+</button>
                            </div>
                        </div> */}
                        </div>
                    </div>
                    <div className="mt-auto pt-8 flex gap-4" dir="rtl">
                        {/* <button
                        className="flex-1 bg-primary font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        Add to Cart
                    </button> */}
                        {/* <button
                        className="px-2 py-5 h-full border-2 border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center hover:border-accent-bronze hover:text-accent-bronze transition-colors">
                        <div className="material-symbols-outlined flex items-center gap-3" ><Heart size={25}/> إضافة الى المفضلة </div>
                    </button> */}
                    </div>
                    {/* <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
                        <span className="material-symbols-outlined text-primary mb-2">public</span>
                        <p className="text-xs font-bold uppercase tracking-wide">Global Shipping</p>
                    </div>
                    <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
                        <span className="material-symbols-outlined text-primary mb-2">lock</span>
                        <p className="text-xs font-bold uppercase tracking-wide">Secure Payments</p>
                    </div>
                </div> */}
                </div>
            </div>
        </>
    )
}

export default ProductDetails