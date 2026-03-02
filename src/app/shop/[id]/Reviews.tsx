"use client"

import { DOMAIN } from '@/app/utils/constants'
import { Comment, JWTPayload, review } from '@/app/utils/types'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import ReviewActions from './ReviewActions'

const Reviews = ({ id, payload }: { id: string, payload: JWTPayload | null }) => {

    const [loading, setLoading] = useState<boolean>(false)

    const [comments, setComments] = useState([])

    const [reviews, setReviews] = useState<review[]>([])

    useEffect(() => {
        async function getProductComments(id: string) {
            try {
                setLoading(true)
                const { data } = await axios.get(`${DOMAIN}/api/products/${id}`)
                setComments(data.comments)
                setReviews(data.reviews)
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
            {comments.map((comment: Comment) => {
                const userReview = reviews.findLast((review: review) => review?.user?.id === comment.user.id);
                return (
                    <div key={comment.id} className="flex justify-between">
                        <div className="space-y-2">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100">{comment?.user?.username}</h4>
                            {userReview && userReview.reviewInNumbers > 0 && userReview.reviewInNumbers <= 5 && (
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className={`w-4 h-4 ${
                                                star <= userReview.reviewInNumbers
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "fill-gray-200 text-gray-200"
                                            }`}
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            )}
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{comment.comment}</p>
                        </div>
                        <div>
                            {
                                payload?.id === comment.user.id &&
                                <ReviewActions CommentId={comment.id && comment.id} comment={comment.comment}/>
                            }
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Reviews
    