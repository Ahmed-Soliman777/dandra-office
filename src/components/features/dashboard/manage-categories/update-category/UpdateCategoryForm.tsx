"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DOMAIN } from '@/utils/constants'
import { UpdateCategoryDTO } from '@/utils/dtos'
import Loading from '@/app/loading'
import Image from 'next/image'
import Link from 'next/link'
import { ImageDownIcon, Trash2, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const UpdateCategoryForm = ({ id }: { id: string }) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)
    const [categoryNameEn, setCategoryNameEn] = useState<string>('')
    const [categoryNameAr, setCategoryNameAr] = useState<string>('')

    const [categoryImages, setCategoryImages] = useState<File | undefined>()
    const [oldImageUrl, setOldImageUrl] = useState<string>('')

    useEffect(() => {
        async function getCategoryData() {
            try {
                setLoading(true)
                const { data } = await axios.get(`${DOMAIN}/api/categories/${id}`)
                setCategoryNameAr(data.categoryNameAr)
                setCategoryNameEn(data.categoryNameEn)
                setOldImageUrl(data.categoryThumbnail?.startsWith("http") ? data.categoryThumbnail : "")
            } catch (error) {
                console.error(error);
                toast.error("فشل في جلب البيانات")
            } finally {
                setLoading(false)
            }
        }
        if (id) getCategoryData()
    }, [id])

    const uploadToCloudinary = async (file: File) => {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string)
        const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData)
        return res.data.secure_url
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!categoryNameAr || !categoryNameEn) return toast.error("الأسماء مطلوبة")

        try {
            setLoading(true)
            let finalImageUrl = oldImageUrl

            if (categoryImages) {
                finalImageUrl = await uploadToCloudinary(categoryImages)
            }

            const payload: UpdateCategoryDTO = {
                categoryNameAr,
                categoryNameEn,
                categoryThumbnail: finalImageUrl
            }

            await axios.put(`${DOMAIN}/api/categories/${id}`, payload)
            toast.success("تم التحديث بنجاح")
            router.push('/dashboard/manage-categories')
            router.refresh()
        } catch (error) {
            console.error(error);
            toast.error("حدث خطأ أثناء الحفظ")
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <Loading />

    return (
        <main className="flex-1 flex flex-col p-6 lg:p-10">
            <div className="bg-white dark:bg-[#1a2e2e] rounded-xl shadow-sm border border-[#cfe7e7] dark:border-[#2a4444] overflow-hidden">
                <form className="p-6 space-y-8" onSubmit={handleFormSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="block">
                            <span className="text-sm font-semibold mb-2 block">اسم الفئة (بالعربية)</span>
                            <input value={categoryNameAr} onChange={(e) => setCategoryNameAr(e.target.value)} className="w-full h-14 bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl px-4" type="text" />
                        </label>
                        <label className="block text-right">
                            <span className="text-sm font-semibold mb-2 block">Category Name (EN)</span>
                            <input value={categoryNameEn} onChange={(e) => setCategoryNameEn(e.target.value)} className="w-full h-14 bg-[#f8fcfc] dark:bg-[#102222] border-[#cfe7e7] dark:border-[#2a4444] rounded-xl px-4 text-left" dir="ltr" type="text" />
                        </label>
                    </div>

                    <div className='w-full p-6 rounded-xl border-2 border-dashed border-[#cfe7e7] dark:border-[#2a4444] bg-[#f8fcfc] dark:bg-[#102222]'>

                        {!oldImageUrl && !categoryImages && (
                            <label className='cursor-pointer flex flex-col items-center justify-center space-y-2'>
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <ImageDownIcon size={32} />
                                </div>
                                <span className="font-bold text-sm">اضغط لرفع صورة جديدة</span>
                                <input className='hidden' type="file" accept='image/*' onChange={(e) => e.target.files && setCategoryImages(e.target.files[0])} />
                            </label>
                        )}

                        <div className="flex flex-wrap gap-6 justify-center">
                            {oldImageUrl && (
                                <div className="relative w-40 h-40 border-2 border-gray-300 rounded-xl overflow-hidden group">
                                    <Image src={oldImageUrl} alt="Old" fill className="object-cover opacity-80" />
                                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                                        <button
                                            type="button"
                                            onClick={() => { if (confirm("حذف الصورة نهائياً؟")) setOldImageUrl("") }}
                                            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-1 text-xs"
                                        >
                                            <Trash2 size={16} /> حذف الحالية
                                        </button>
                                        <span className="text-white text-[10px] mt-2 font-bold">يجب الحذف لرفع جديد</span>
                                    </div>
                                </div>
                            )}

                            {categoryImages && (
                                <div className="relative w-40 h-40 border-2 border-primary rounded-xl overflow-hidden shadow-xl animate-in fade-in zoom-in">
                                    <Image src={URL.createObjectURL(categoryImages)} alt="New" fill className="object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => setCategoryImages(undefined)}
                                        className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1 hover:bg-black"
                                    >
                                        <X size={18} />
                                    </button>
                                    <div className="absolute bottom-0 inset-x-0 bg-primary text-[#102222] text-[10px] text-center font-bold py-1">صورة جديدة</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4 pt-6 border-t border-[#cfe7e7] dark:border-[#2a4444]">
                        <Link href='/dashboard/manage-categories' className="px-6 py-2 text-[#4c9a9a]">إلغاء</Link>
                        <button disabled={loading} className="bg-primary text-[#102222] px-10 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform disabled:opacity-50" type="submit">
                            {loading ? "جاري المعالجة..." : "حفظ التعديلات"}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default UpdateCategoryForm