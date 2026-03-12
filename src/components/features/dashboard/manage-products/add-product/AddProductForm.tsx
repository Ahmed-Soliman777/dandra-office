"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DOMAIN } from '@/utils/constants'
import { AddNewProduct } from '@/utils/dtos'
import { category } from '@/utils/types'
import Loading from '@/app/loading'
import Image from 'next/image'
import Link from 'next/link'
import { ImageDownIcon } from 'lucide-react'

const AddProductForm = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const [categoryNameEn, setCategoryNameEn] = useState<category[]>([])

    const [productNameAr, setProductNameAr] = useState<string>("")
    const [productNameEn, setProductNameEn] = useState<string>("")

    const [productDescAr, setProductDescAr] = useState<string>("")
    const [productDescEn, setProductDescEn] = useState<string>("")

    const [price, setPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(0)

    const [productCategory, setProductCategory] = useState<number>(0)
    const [productImages, setProductImages] = useState<File[]>([])

    useEffect(() => {
        async function getCategoryList() {
            const response = await axios.get(`${DOMAIN}/api/categories`)
            setCategoryNameEn(response.data.categories);
        }
        getCategoryList()
    }, [])

    const uploadImagesToCloudinary = async (files: File[]) => {
        const uploadImagesUrls: string[] = []

        for (const file of files) {
            const formData = new FormData()

            formData.append("file", file)
            formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string)

            const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData)

            const { secure_url } = await response.data
            uploadImagesUrls.push(secure_url)
        }

        return uploadImagesUrls
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const imagesUrls: string[] = await uploadImagesToCloudinary(productImages)

        const productPayload: AddNewProduct = {
            categoryId: productCategory,
            images: imagesUrls,
            quantity: Number(quantity),
            price: Number(price),
            productNameAr,
            productNameEn,
            descriptionAr: productDescAr,
            descriptionEn: productDescEn
        }

        if (productNameAr === "") { return toast.error("اسم المنتج مطلوب") }
        if (productNameEn === "") { return toast.error("اسم المنتج مطلوب") }
        if (price === null) { return toast.error("سعر المنتج مطلوب") }
        if (quantity === null) { return toast.error("كمية المنتج مطلوبة") }
        if (productCategory === null) { return toast.error("فئة المنتج مطلوبة") }

        try {
            setLoading(true)
            await axios.post(`${DOMAIN}/api/products`, productPayload)
            toast.success("نم اضافة منتج جديد")
            setLoading(false)
        } catch (error) {
            toast.error("حدث خطأ")
            console.error(error);
            setLoading(false)
        }
    }

    if (loading === true) return <Loading />

    return (
        <main className="flex-1 flex flex-col min-w-0">
            {/* Form Content */}
            <div className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/50">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">معلومات المنتج الأساسية</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">يرجى تعبئة كافة الحقول المطلوبة باللغتين العربية والإنجليزية لضمان عرض أفضل</p>
                    </div>
                    <form className="p-6 space-y-8" onSubmit={handleFormSubmit}>
                        {/* Product Name Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-gray-900 dark:text-white">اسم المنتج (بالعربية)</span>
                                <input
                                    value={productNameAr}
                                    onChange={(e) => setProductNameAr(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="مثال: آيفون 15 برو" type="text" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-gray-900 dark:text-white">Product Name (English)</span>
                                <input
                                    value={productNameEn}
                                    onChange={(e) => setProductNameEn(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-left"
                                    dir="ltr" placeholder="e.g. iPhone 15 Pro" type="text" />
                            </label>
                        </div>
                        {/* Price, Quantity & Category */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-gray-900 dark:text-white">سعر المنتج</span>
                                <div className="relative">
                                    <input
                                        value={price === 0 ? "" : price}
                                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="0.00" type="text" />
                                    <span className="absolute inset-y-0 left-4 flex items-center text-gray-500 dark:text-gray-400 font-bold">ج.م</span>
                                </div>
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-gray-900 dark:text-white">الكمية المتوفرة</span>
                                <input
                                    value={quantity === 0 ? "" : quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="مثال: 50" type="number" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-gray-900 dark:text-white">الفئة</span>
                                <select
                                    value={productCategory}
                                    onChange={(e) => setProductCategory(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none">
                                    <option value="">اختر الفئة</option>
                                    {categoryNameEn.map((category: category) => (
                                        <option key={category.id} value={category.id}>{category.categoryNameAr}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        {/* Descriptions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-gray-900 dark:text-white">وصف المنتج (بالعربية)</span>
                                <textarea
                                    value={productDescAr}
                                    onChange={(e) => setProductDescAr(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="اكتب وصفاً تفصيلياً للمنتج ومميزاته..." rows={6}></textarea>
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-gray-900 dark:text-white">Product Description (English)</span>
                                <textarea
                                    value={productDescEn}
                                    onChange={(e) => setProductDescEn(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-left"
                                    dir="ltr" placeholder="Write a detailed description of the product..."
                                    rows={6}></textarea>
                            </label>
                        </div>
                        {/* Image Uploader */}
                        <div className='w-full p-6 rounded-lg border-2 border-dashed border-gray-300 dark:border-slate-600 hover:border-gray-400 dark:hover:border-slate-500 transition-colors'>
                            <label className='cursor-pointer text-center block'>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">صور المنتج (بحد أقصى 5)</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">الصور بصيغة JPG أو PNG لا تتعدى 2 ميجا بايت</p>
                                    <div className="text-4xl flex items-center justify-center mt-4 text-gray-400"><ImageDownIcon /></div>
                                </div>
                                <input
                                    className='hidden'
                                    placeholder='اضف صور'
                                    onChange={(e) => {
                                        if (e.target.files === null) return ""
                                        const files: File[] = Array.from(e.target.files)
                                        setProductImages((prevImages: File[]): File[] => {
                                            const compineImage: File[] = [...prevImages, ...files]
                                            return compineImage
                                        })
                                    }}
                                    type="file" accept='image/*' multiple />
                            </label>
                            <div className="flex flex-wrap gap-4 mt-6">
                                {productImages.map((image: File, index: number) => {
                                    const imageUrl = URL.createObjectURL(image);

                                    return (
                                        <div key={index} className="relative group w-24 h-24 border-2 border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden shadow-sm">
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setProductImages(productImages.filter((_, i) => i !== index));
                                                }}
                                                className="absolute top-1 right-1 z-20 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-transform hover:scale-110 shadow-md"
                                                title="حذف الصورة"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                            <Image
                                                src={imageUrl}
                                                alt={`product-${index}`}
                                                fill
                                                className="object-cover"
                                                onLoadingComplete={() => URL.revokeObjectURL(imageUrl)}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="flex items-center justify-end pt-6 gap-4 border-t border-gray-200 dark:border-slate-700">
                            <Link
                                href={'/dashboard/manage-products'}
                                className="px-6 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                >
                                إلغاء
                            </Link>
                            <button
                                className="px-8 py-3 bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 text-white rounded-lg font-bold text-base shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] active:scale-100 transition-all"
                                type="submit">
                                حفظ المنتج
                            </button>
                        </div>
                    </form>
                </div>
                {/* Product Preview Card */}
                <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50 rounded-xl flex flex-col md:flex-row items-center gap-6">
                    <div className="w-32 h-32 bg-gray-200 dark:bg-slate-700 rounded-lg shrink-0 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFe_lDtTDEYM7FB8JWEcCyEwYHuQdjWeZTVwm-skLSxUbruTl1DwQThxsh4X2qLqPYUdBPdrfVyQT9cUkgZ7FR78SpXlAhHzgLzhRImv3z2cRffmf82uCPfd0tSR5gd-rUZBr7CrPRNiRz5knVbEfQNAwu1BvoYUxlS_4AZ1G_ZD7Cg7FA-iOrHk8uTQEAPAMxtXQZfiVocKGdpyo8vfTy8ZqZbWotcnuV6WSWfAm5HO1vy-nkqE4ymKLBkGijMXX4AVfIuX324IcE")' }}>
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-right">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">كيف يظهر المنتج للعملاء؟</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mt-2">بمجرد الضغط على زر الحفظ، سيتم تدقيق بيانات المنتج ونشرها في المتجر للبدء في تلقي الطلبات.</p>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            href="/shop"
                            className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg text-xs font-bold border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                            معاينة المتجر</Link>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default AddProductForm