"use client"
import { Comment, review } from '@/utils/types'
import ReviewActions from './ReviewActions'
import { useAppSelector } from '@/lib/hooks'
import { useProduct } from '@/hooks/id/useProduct'

const Reviews = ({ id }: { id: string }) => {

    const { userPayload } = useAppSelector(state => state.users)

    const { comments, reviews } = useProduct(id)

    return (
        <>
            {comments.map((comment: Comment) => {
                const userReview = reviews.findLast((review: review) => review?.user?.id === comment.user.id);
                return (
                    <div key={comment.id} className="flex justify-between">
                        <div className="space-y-2">
                            <h4 className="font-bold text-slate-900">{comment?.user?.username}</h4>
                            {userReview && userReview.reviewInNumbers > 0 && userReview.reviewInNumbers <= 5 && (
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className={`w-4 h-4 ${star <= userReview.reviewInNumbers
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
                                userPayload?.id === comment.user.id &&
                                <ReviewActions CommentId={comment.id && comment.id} comment={comment.comment} />
                            }
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Reviews
