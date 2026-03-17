"use client"
import { DOMAIN } from '@/utils/constants'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

const AddReview = ({ productId }: { productId: string }) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [comment, setComment] = useState<string>("")

    async function addComment() {
        // Better validation
        if (!comment.trim()) {
            toast.error("الرجاء ترك رسالة لا فارغة")
            return
        }

        if (comment.trim().length < 5) {
            toast.error("الرسالة يجب أن تكون 5 أحرف على الأقل")
            return
        }

        try {
            setLoading(true)
            await axios.post(`${DOMAIN}/api/comments`, { productId: Number(productId), comment })
            setLoading(false)
            toast.success("شكراً على تعليقك! تم نشر تعليقك بنجاح")
            setComment("")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (error) {
            setLoading(false)
            console.error(error);
            toast.error("حدث خطأ، حاول مجدداً")
        }
    }

    return (
        <div className="pt-8">
            <h4 className="font-bold text-lg mb-4">ضيف تجربتك</h4>
            <div
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <textarea
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-green-500/20 focus:border-transparent mb-4 transition-all outline-none"
                    placeholder="احكيلنا تجربتك مع دندرة أوفيس.."
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <div className="flex justify-end">
                    <button onClick={addComment}
                        disabled={loading === true ? true : comment.length === 0 ? true : false}
                        className={`px-8 py-3 bg-green-600 font-bold rounded-2xl hover:bg-green-700 dark:hover:bg-green-500 transition-all duration-300 hover:scale-[1.02] border border-slate-200 dark:border-slate-700 ${loading ? 'text-gray-500' : 'text-white'}`}>{loading === true ? "تحميل..." : "شارك التجربة"}</button>
                </div>
            </div>
        </div>
    )
}

export default AddReview
