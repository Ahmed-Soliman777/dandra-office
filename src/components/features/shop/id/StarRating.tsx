"use client"
import { DOMAIN } from '@/utils/constants';
import { review } from '@/utils/types';
import { useAppSelector } from '@/lib/hooks';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const StarRating = ({ productId }: { productId: string }) => {

    const [hover, setHover] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);
    const [userRating, setUserRating] = useState<number | null>(null);
    const [hasRated, setHasRated] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [reviewId, setReviewId] = useState<number | null>(null);

    const { userPayload } = useAppSelector(state => state.users)

    useEffect(() => {
        if (!userPayload) {
            return
        }
        async function profile() {
            try {
                const { data } = await axios.get(`${DOMAIN}/api/users/profile/${Number(userPayload?.id)}`)
                const userProductReview = data.reviews.findLast((review: review) => review.productId === Number(productId));

                if (userProductReview) {
                    setHasRated(true);
                    setUserRating(userProductReview.reviewInNumbers);
                    setReviewId(userProductReview.id);
                } else {
                    setHasRated(false);
                    setUserRating(null);
                    setReviewId(null);
                }

            } catch (error) {
                console.error(error);
            }
        }
        profile()
    }, [userPayload, productId])


    async function AddRating() {
        try {
            const { data } = await axios.post(`${DOMAIN}/api/reviews`, { productId: Number(productId), reviewInNumbers: Number(rating) })
            toast.success(`${data.message}`)
            setUserRating(rating);
            setHasRated(true);
            setRating(0);
            setIsEditing(false);
        } catch (error) {
            console.error(error);
            toast.error("حدث خطأ، حاول مجدداً")
        }
    }

    async function EditRating(newRating: number) {
        try {
            const { data } = await axios.put(`${DOMAIN}/api/reviews/${reviewId}`, { reviewInNumbers: Number(newRating) })
            toast.success(`${data.message}`)
            setUserRating(newRating);
            setRating(0);
            setIsEditing(false);
        } catch (error) {
            console.error(error);
            toast.error("حدث خطأ، حاول مجدداً")
        }
    }

    return (
        <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
            {hasRated && userRating ? (
                <div
                    className="w-full text-center transition-all duration-200"
                    onMouseEnter={() => setIsEditing(true)}
                    onMouseLeave={() => { setIsEditing(false); setRating(0); setHover(0); }}
                >
                    <span className="text-sm font-medium text-gray-600 mb-1 block">
                        {isEditing ? "تعديل تقييمك" : `تقييمك للمنتج: ${userRating} من 5 نجوم`}
                    </span>

                    <div className="flex items-center justify-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`transition-all duration-150 active:scale-90 focus:outline-none ${isEditing ? "cursor-pointer" : "cursor-default"}`}
                                onClick={() => {
                                    if (isEditing) {
                                        EditRating(star);
                                    }
                                }}
                                onMouseEnter={() => isEditing && setHover(star)}
                                onMouseLeave={() => isEditing && setHover(0)}
                            >
                                <svg
                                    className={`w-10 h-10 transition-colors duration-200 ${isEditing
                                        ? star <= (hover || rating)
                                            ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
                                            : "fill-gray-200 text-gray-200"
                                        : star <= userRating!
                                            ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
                                            : "fill-gray-200 text-gray-200"
                                        }`}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            </button>
                        ))}
                    </div>

                    {isEditing && (
                        <p className="text-xs font-semibold text-gray-500 mt-2">
                            مرر المؤشر فوق النجوم للتعديل
                        </p>
                    )}
                </div>
            ) : (
                <div>
                    <span className="text-sm font-medium text-gray-600 mb-1 block">ما هو تقييمك للمنتج؟</span>

                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className="transition-transform duration-150 active:scale-90 focus:outline-none"
                                onClick={() => { setRating(star); AddRating() }}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}

                            >
                                <svg
                                    className={`w-10 h-10 transition-colors duration-200 ${star <= (hover || rating)
                                        ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
                                        : "fill-gray-200 text-gray-200"
                                        }`}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            </button>
                        ))}
                    </div>

                    <div className="mt-2 h-5">
                        {rating > 0 && (
                            <p className="text-xs font-semibold text-blue-600 animate-fade-in">
                                لقد اخترت {rating} من 5 نجوم
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>

    );
};

export default StarRating;