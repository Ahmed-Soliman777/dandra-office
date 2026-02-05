"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DOMAIN } from '@/app/utils/constants'
import { AddCategoryDTO } from '@/app/utils/dtos'
import Loading from '@/app/loading'
import Image from 'next/image'
import Link from 'next/link'
import { ImageDownIcon } from 'lucide-react'

const AddCategoryForm = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const [categoryNameEn, setCategoryNameEn] = useState<string>('')
    const [categoryNameAr, setCategoryNameAr] = useState<string>('')

    const [categoryImages, setCategoryImages] = useState<File>()

    const uploadImagesToCloudinary = async (file: File) => {
        let uploadImagesUrls: string = ''

        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string)
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData)
        const { secure_url } = await response.data
        uploadImagesUrls = secure_url

        return uploadImagesUrls
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        let imageUrl: string = ""

        if (categoryImages) {
            imageUrl = await uploadImagesToCloudinary(categoryImages)
        }

        const categoryPayload: AddCategoryDTO = {
            categoryNameAr,
            categoryNameEn,
            categoryThumbnail: imageUrl
        }

        if (categoryNameAr === "") { return toast.error("اسم الفئة مطلوب") }
        if (categoryNameEn === "") { return toast.error("اسم الفئة مطلوب") }

        try {
            setLoading(true)
            await axios.post(`${DOMAIN}/api/categories`, categoryPayload)
            toast.success("نم اضافة فئة جديدة")
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
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">معلومات الفئة الأساسية</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">يرجى تعبئة كافة الحقول المطلوبة باللغتين العربية والإنجليزية لضمان عرض أفضل</p>
                    </div>
                    <form className="p-6 space-y-8" onSubmit={handleFormSubmit}>
                        {/* Category Name Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-gray-900 dark:text-white">اسم الفئة (بالعربية)</span>
                                <input
                                    value={categoryNameAr}
                                    onChange={(e) => setCategoryNameAr(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="مثال: العاب" type="text" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold mb-2 block text-gray-900 dark:text-white">Category Name (English)</span>
                                <input
                                    value={categoryNameEn}
                                    onChange={(e) => setCategoryNameEn(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-left"
                                    dir="ltr" placeholder="e.g. Toys" type="text" />
                            </label>
                        </div>

                        {/* Image Uploader */}
                        <div className='w-full p-6 rounded-lg border-2 border-dashed border-gray-300 dark:border-slate-600 hover:border-gray-400 dark:hover:border-slate-500 transition-colors'>
                            <label className='cursor-pointer text-center block'>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">صور الفئة</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">الصور بصيغة JPG أو PNG لا تتعدى 2 ميجا بايت</p>
                                    <div className="text-4xl flex items-center justify-center mt-4 text-gray-400"><ImageDownIcon /></div>
                                </div>
                                <input
                                    className='hidden'
                                    placeholder='اضف صور'
                                    onChange={(e) => {
                                        if (e.target.files === null) return ""
                                        const file: File = e.target.files[0]
                                        setCategoryImages(file)
                                    }}
                                    type="file" accept='image/*' />
                            </label>
                            <div className="flex flex-wrap gap-4 mt-6">
                                {categoryImages && (
                                    <div className="relative group w-24 h-24 border-2 border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden shadow-sm">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />

                                        <button
                                            type="button"
                                            onClick={() => setCategoryImages(undefined)}
                                            className="absolute top-1 right-1 z-20 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-transform hover:scale-110 shadow-md"
                                            title="حذف الصورة"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        <Image
                                            src={URL.createObjectURL(categoryImages)}
                                            alt="category preview"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-end pt-6 gap-4 border-t border-gray-200 dark:border-slate-700">
                            <Link
                                href={'/dashboard/manage-categories'}
                                className="px-6 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                >
                                إلغاء
                            </Link>
                            <button
                                className="px-8 py-3 bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 text-white rounded-lg font-bold text-base shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] active:scale-100 transition-all"
                                type="submit">
                                حفظ الفئة
                            </button>
                        </div>
                    </form>
                </div>

                {/* Category Preview Card */}
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50 rounded-xl flex flex-col md:flex-row items-center gap-6">
                    <div className="w-32 h-32 bg-gray-200 dark:bg-slate-700 rounded-lg shrink-0 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFe_lDtTDEYM7FB8JWEcCyEwYHuQdjWeZTVwm-skLSxUbruTl1DwQThxsh4X2qLqPYUdBPdrfVyQT9cUkgZ7FR78SpXlAhHzgLzhRImv3z2cRffmf82uCPfd0tSR5gd-rUZBr7CrPRNiRz5knVbEfQNAwu1BvoYUxlS_4AZ1G_ZD7Cg7FA-iOrHk8uTQEAPAMxtXQZfiVocKGdpyo8vfTy8ZqZbWotcnuV6WSWfAm5HO1vy-nkqE4ymKLBkGijMXX4AVfIuX324IcE")' }}>
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-right">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">كيف تظهر الفئات للعملاء؟</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mt-2">بمجرد الضغط على زر الحفظ، سيتم تدقيق بيانات الفئة ونشرها في المتجر للبدء في تلقي الطلبات.</p>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            href="/"
                            className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg text-xs font-bold border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                            معاينة المتجر</Link>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default AddCategoryForm
