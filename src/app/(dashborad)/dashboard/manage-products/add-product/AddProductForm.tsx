"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DOMAIN } from '@/app/utils/constants'
import { AddNewProduct } from '@/app/utils/dtos'

const AddProductForm = () => {

    // const [Loading, setLoading] = useState<boolean>(false)

    const [productNameAr, setProductNameAr] = useState<string>("")
    const [productNameEn, setProductNameEn] = useState<string>("")

    const [productDescAr, setProductDescAr] = useState<string>("")
    const [productDescEn, setProductDescEn] = useState<string>("")

    const [price, setPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(0)

    const [productCategory, setProductCategory] = useState<string>("")
    const [productImages, setProductImages] = useState<File[]>([])

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
            categoryId: 1,
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

        console.log(productPayload);

        try {
            await axios.post(`${DOMAIN}/api/products`, productPayload)
            toast.success("نم اضافة منتج جديد")
        } catch (error) {
            toast.error("حدث خطأ")
            console.error(error);
        }
    }

    return (
        <main className="flex-1 flex flex-col min-w-0">
            {/* <!-- Form Content --> */}
            <div className="px-6 lg:px-10 pb-20">
                <div
                    className="bg-white dark:bg-[#1a2e2e] rounded-xl shadow-sm border border-[#cfe7e7] dark:border-[#2a4444] overflow-hidden">
                    <div className="p-6 border-b border-[#cfe7e7] dark:border-[#2a4444]">
                        <h3 className="text-lg font-bold">معلومات المنتج الأساسية</h3>
                        <p className="text-sm text-[#4c9a9a]">يرجى تعبئة كافة الحقول المطلوبة باللغتين العربية والإنجليزية
                            لضمان عرض أفضل</p>
                    </div>
                    <form className="p-6 space-y-8" onSubmit={handleFormSubmit}>
                        {/* <!-- Product Name Grid --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-[#0d1b1b] dark:text-white">اسم المنتج
                                    (بالعربية)</span>
                                <input
                                    value={productNameAr}
                                    onChange={(e) => setProductNameAr(e.target.value)}
                                    className="w-full h-14 bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl px-4 text-[#0d1b1b] dark:text-white placeholder:text-[#4c9a9a] focus:ring-primary focus:border-primary"
                                    placeholder="مثال: آيفون 15 برو" type="text" />
                            </label>
                            <label className="block">
                                <span
                                    className="text-sm font-semibold mb-2 block text-[#0d1b1b] dark:text-white text-right">Product
                                    Name (English)</span>
                                <input
                                    value={productNameEn}
                                    onChange={(e) => setProductNameEn(e.target.value)}
                                    className="w-full h-14 bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl px-4 text-[#0d1b1b] dark:text-white placeholder:text-[#4c9a9a] focus:ring-primary focus:border-primary text-left"
                                    dir="ltr" placeholder="e.g. iPhone 15 Pro" type="text" />
                            </label>
                        </div>
                        {/* <!-- Quantity & Quantity --> */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block">سعر المنتج </span>
                                <div className="relative">
                                    <input
                                        value={price}
                                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                                        className="w-full h-14 bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl px-4 focus:ring-primary focus:border-primary"
                                        placeholder="0.00" type="text" />
                                    <span
                                        className="absolute inset-y-0 left-4 flex items-center text-[#4c9a9a] font-bold">ج.م</span>
                                </div>
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block">الكمية المتوفرة</span>
                                <input
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="w-full h-14 bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl px-4 focus:ring-primary focus:border-primary"
                                    placeholder="مثال: 50" type="number" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block">الفئة</span>
                                <select
                                    value={productCategory}
                                    onChange={(e) => setProductCategory(e.target.value)}
                                    className="w-full h-14 bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl px-4 focus:ring-primary focus:border-primary appearance-none">
                                    <option value="">اختر الفئة</option>
                                    <option value="electronics">إلكترونيات</option>
                                    <option value="fashion">أزياء وملابس</option>
                                    <option value="home">المنزل والمطبخ</option>
                                    <option value="beauty">الجمال والعناية</option>
                                </select>
                            </label>
                        </div>
                        {/* <!-- Descriptions --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-[#0d1b1b] dark:text-white">وصف المنتج
                                    (بالعربية)</span>
                                <textarea
                                    value={productDescAr}
                                    onChange={(e) => setProductDescAr(e.target.value)}
                                    className="w-full bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl p-4 text-[#0d1b1b] dark:text-white placeholder:text-[#4c9a9a] focus:ring-primary focus:border-primary"
                                    placeholder="اكتب وصفاً تفصيلياً للمنتج ومميزاته..." rows={6}></textarea>
                            </label>
                            <label className="block">
                                <span
                                    className="text-sm font-semibold mb-2 block text-[#0d1b1b] dark:text-white text-right">Product
                                    Description (English)</span>
                                <textarea
                                    value={productDescEn}
                                    onChange={(e) => setProductDescEn(e.target.value)}
                                    className="w-full bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl p-4 text-[#0d1b1b] dark:text-white placeholder:text-[#4c9a9a] focus:ring-primary focus:border-primary text-left"
                                    dir="ltr" placeholder="Write a detailed description of the product..."
                                    rows={6}></textarea>
                            </label>
                        </div>
                        {/* <!-- Image Uploader --> */}
                        <div>
                            <label >
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 className="text-sm font-bold">صور المنتج (بحد أقصى 5)</h4>
                                        <p className="text-xs text-[#4c9a9a]">الصور بصيغة JPG أو PNG لا تتعدى 2 ميجا بايت</p>
                                    </div>
                                </div>
                                <input
                                    // value={productImages}
                                    onChange={(e) => {
                                        if (e.target.files === null) return ""
                                        const files: File[] = Array.from(e.target.files)
                                        setProductImages(files)
                                    }}
                                    type="file" accept='image/*' multiple />
                            </label>
                        </div>
                        {/* <!-- Submit Button --> */}
                        <div
                            className="flex items-center justify-end pt-6 gap-4 border-t border-[#cfe7e7] dark:border-[#2a4444]">
                            <button
                                className="px-8 py-3 rounded-xl font-bold text-[#4c9a9a] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                type="button">
                                إلغاء
                            </button>
                            <button
                                className="bg-primary text-[#102222] px-12 py-3 rounded-xl font-black text-lg shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-100 transition-all"
                                type="submit">
                                حفظ المنتج
                            </button>
                        </div>
                    </form>
                </div>
                {/* <!-- Product Preview Card (Simplified) --> */}
                <div
                    className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl flex flex-col md:flex-row items-center gap-6">
                    <div
                        className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-cover bg-center"
                            data-alt="Product preview placeholder with abstract shapes"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFe_lDtTDEYM7FB8JWEcCyEwYHuQdjWeZTVwm-skLSxUbruTl1DwQThxsh4X2qLqPYUdBPdrfVyQT9cUkgZ7FR78SpXlAhHzgLzhRImv3z2cRffmf82uCPfd0tSR5gd-rUZBr7CrPRNiRz5knVbEfQNAwu1BvoYUxlS_4AZ1G_ZD7Cg7FA-iOrHk8uTQEAPAMxtXQZfiVocKGdpyo8vfTy8ZqZbWotcnuV6WSWfAm5HO1vy-nkqE4ymKLBkGijMXX4AVfIuX324IcE")' }}>
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-right">
                        <h4 className="text-xl font-bold text-[#0d1b1b] dark:text-white">كيف يظهر المنتج للعملاء؟</h4>
                        <p className="text-sm text-[#4c9a9a] max-w-md">بمجرد الضغط على زر الحفظ، سيتم تدقيق بيانات المنتج
                            ونشرها في المتجر للبدء في تلقي الطلبات.</p>
                    </div>
                    <div className="flex gap-2">
                        <div
                            className="px-4 py-2 bg-white dark:bg-[#1a2e2e] rounded-lg text-xs font-bold border border-[#cfe7e7] dark:border-[#2a4444]">
                            معاينة المتجر</div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default AddProductForm