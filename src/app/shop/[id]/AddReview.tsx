"use client"
import { DOMAIN } from '@/app/utils/constants'
import axios from 'axios'
// import { Star } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const AddReview = ({ productId }: { productId: string }) => {

    const [loading, setLoading] = useState<boolean>(false)

    // const [review, setReview] = useState<number | null>(null)
    const [comment, setComment] = useState<string>("")

    async function addComment() {
        if (comment) {
            try {
                setLoading(true)
                const { data } = await axios.post(`${DOMAIN}/api/comments`, { productId: Number(productId), comment })
                setLoading(false)
                toast.success(`${data.message}`)
            } catch (error) {
                setLoading(false)
                console.error(error);
                toast.error("حدث خطأ، حاول مجدداً")
            }
        }
    }

    // async function addReview() {
    //     if (review) {
    //         try {
    //             setLoading(true)
    //             const { data } = await axios.post(`${DOMAIN}/api/reviews`, { review })
    //             setLoading(false)
    //             toast.info(`${data.message}`)
    //         } catch (error) {
    //             setLoading(false)
    //             console.error(error);
    //             toast.error("حدث خطأ، حاول مجدداً")
    //         }
    //     }
    // }

    return (
        <div className="pt-8">
            <h4 className="font-bold text-lg mb-4">ضيف تجربتك</h4>
            <div
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                {/* <div className="flex gap-1 mb-4 text-slate-300">
                    <span
                        className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors"><Star /></span>
                    <span
                        className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors"><Star /></span>
                    <span
                        className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors"><Star /></span>
                    <span
                        className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors"><Star /></span>
                    <span
                        className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors"><Star /></span>
                </div> */}
                <textarea
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 mb-4"
                    placeholder="احكيلنا تجربتك مع دندرة أوفيس.."
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <div className="flex justify-end">
                    <button onClick={addComment}
                        disabled={loading === true ? true : comment.length === 0 ? true : false}
                        className={`px-8 py-3 bg-primary font-bold rounded-xl hover:bg-primary/90 transition-colors border border-gray-300 ${loading ? 'text-gray-500' : comment.length === 0 ? 'text-gray-500' : 'text-black'}`}>{loading === true ? "تحميل..." : "شارك التجربة"}</button>
                </div>
            </div>
        </div>
    )
}

export default AddReview
