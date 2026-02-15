"use client"

import { DOMAIN } from '@/app/utils/constants'
import { Comment } from '@/app/utils/types'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const Reviews = ({ id }: { id: string }) => {

    const [loading, setLoading] = useState<boolean>(false)

    const [comments, setComments] = useState([])

    useEffect(() => {
        async function getProductComments(id: string) {
            try {
                setLoading(true)
                const { data } = await axios.get(`${DOMAIN}/api/products/${id}`)
                setComments(data.comments)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error(error);
                toast.error("حدث خطأ أثناء تحميل التعليقات، حاول مجدداً")
            }
        }
        getProductComments(id)
    }, [id])

    if (loading) {
        return 'تحميل...'
    }

    return (
        <>
            {comments.map((comment: Comment) => (
                <div key={comment.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100">{comment?.user?.username}</h4>
                        {/* <span className="text-xs text-slate-400">2 days ago</span> */}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{comment.comment}</p>
                </div>
            ))}
        </>
    )
}

export default Reviews
