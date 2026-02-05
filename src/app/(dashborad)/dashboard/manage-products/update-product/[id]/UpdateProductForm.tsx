"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DOMAIN } from '@/app/utils/constants'
import { UpdateProductDTO } from '@/app/utils/dtos'
import { category } from '@/app/utils/types'
import Loading from '@/app/loading'
import Image from 'next/image'
import Link from 'next/link'
import { ImageDownIcon } from 'lucide-react'

const UpdateProductForm = ({ id }: { id: string }) => {

    const [loading, setLoading] = useState<boolean>(false)

    const [categoryNameEn, setCategoryNameEn] = useState<category[]>([])

    const [productNameAr, setProductNameAr] = useState<string>("")
    const [productNameEn, setProductNameEn] = useState<string>("")

    const [productDescAr, setProductDescAr] = useState<string>("")
    const [productDescEn, setProductDescEn] = useState<string>("")

    const [price, setPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(0)

    const [productCategory, setProductCategory] = useState<number>(0)
    const [productImages, setProductImages] = useState<string[]>([])
    const [newProductImages, setNewProductImages] = useState<File[]>([])

    useEffect(() => {
        async function getCategoryList() {
            const response = await axios.get(`${DOMAIN}/api/categories`)
            setCategoryNameEn(response.data.categories);
        }
        getCategoryList()
    }, [])

    useEffect(() => {
        async function getProductData(id: number) {
            try {
                const { data } = await axios.get(`${DOMAIN}/api/products/${id}`)
                setProductNameAr(data.productNameAr)
                setProductNameEn(data.productNameEn)
                setQuantity(data.quantity)
                setPrice(data.price)
                setProductDescAr(data.descriptionAr)
                setProductDescEn(data.descriptionEn)
                setProductCategory(data.categoryId)
                setProductImages(data.images)

                console.log(data);

            } catch (error) {
                console.error(error);
                toast.error(`حدث خطأ`)
            }
        }
        getProductData(Number(id))
    }, [id])



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

        let uploadUrls: string[] = []

        if (newProductImages.length > 0) {
            uploadUrls = await uploadImagesToCloudinary(newProductImages)
        }

        const ImageArray = [...productImages, ...uploadUrls]

        const productPayload: UpdateProductDTO = {
            categoryId: productCategory,
            images: ImageArray,
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
            await axios.put(`${DOMAIN}/api/products/${id}`, productPayload)
            toast.success("تم تحديث المنتج بنجاح")
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
                                        value={price === 0 ? "" : price}
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
                                    value={quantity === 0 ? "" : quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="w-full h-14 bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl px-4 focus:ring-primary focus:border-primary"
                                    placeholder="مثال: 50" type="number" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block">الفئة</span>
                                <select
                                    value={productCategory}
                                    onChange={(e) => setProductCategory(Number(e.target.value))}
                                    className="w-full h-14 bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl px-4 focus:ring-primary focus:border-primary appearance-none">
                                    <option value="">اختر الفئة</option>
                                    {categoryNameEn.map((category: category) => (
                                        <option key={category.id} value={category.id}>{category.categoryNameAr}</option>
                                    ))}
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
                        <div className='w-full p-5 pb-0 rounded border border-[#0003] mx-auto'>
                            <label className='cursor-pointer text-center'>
                                <div className="">
                                    <div>
                                        <h4 className="text-sm font-bold">صور المنتج (بحد أقصى 5)</h4>
                                        <p className="text-xs text-[#4c9a9a]">الصور بصيغة JPG أو PNG لا تتعدى 2 ميجا بايت</p>
                                        <div className="text-3xl flex items-center justify-center mt-3.5"><ImageDownIcon /></div>
                                    </div>
                                </div>
                                <input
                                    className='hidden'
                                    placeholder='اضف صور'
                                    onChange={(e) => {
                                        if (e.target.files === null) return ""
                                        const files: File[] = Array.from(e.target.files)
                                        setNewProductImages((prevImages: File[]): File[] => {
                                            const compineImage: File[] = [...prevImages, ...files]
                                            return compineImage
                                        })
                                    }}
                                    type="file" accept='image/*' multiple />
                            </label>

                            <div className="flex flex-wrap gap-4 mt-4">
                                {productImages.map((url) => (
                                    <div key={`${url}`} className="relative group w-24 h-24 border-2 border-blue-100 rounded-xl overflow-hidden shadow-sm">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors z-10" />
                                        <button
                                            type="button"
                                            onClick={() => setProductImages(productImages.filter((imgUrl) => imgUrl !== url))}
                                            className="absolute top-1 right-1 z-20 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-transform hover:scale-110 shadow-md"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                        <Image src={url} alt="old-product" fill className='object-cover' />
                                        <span className="absolute bottom-0 left-0 bg-blue-500 text-[10px] text-white px-1 z-20">قديمة</span>
                                    </div>
                                ))}

                                {newProductImages.map((file, index) => {
                                    const imageUrl = URL.createObjectURL(file);
                                    return (
                                        <div key={`new-${index}`} className="relative group w-24 h-24 border-2 border-green-100 rounded-xl overflow-hidden shadow-sm">
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors z-10" />
                                            <button
                                                type="button"
                                                onClick={() => setNewProductImages(newProductImages.filter((_, i) => i !== index))}
                                                className="absolute top-1 right-1 z-20 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-transform hover:scale-110 shadow-md"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <Image
                                                src={imageUrl}
                                                alt="new-product"
                                                fill
                                                className="object-cover"
                                                onLoadingComplete={() => URL.revokeObjectURL(imageUrl)}
                                            />
                                            <span className="absolute bottom-0 left-0 bg-green-500 text-[10px] text-white px-1 z-20">جديدة</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* <!-- Submit Button --> */}
                        <div
                            className="flex items-center justify-end pt-6 gap-4 border-t border-[#cfe7e7] dark:border-[#2a4444]">
                            <Link
                                href={'/dashboard/manage-products'}
                                className="px-8 py-3 rounded-xl font-bold text-[#4c9a9a] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                type="button">
                                إلغاء
                            </Link>
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
                        <Link
                            href="/shop"
                            className="px-4 py-2 bg-white dark:bg-[#1a2e2e] rounded-lg text-xs font-bold border border-[#cfe7e7] dark:border-[#2a4444]">
                            معاينة المتجر</Link>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default UpdateProductForm