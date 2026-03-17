"use client"

import Link from "next/link"
import AddReview from "./AddReview"
import StarRating from "./StarRating"
import { useAppSelector } from "@/lib/hooks"

const ReviewSection = ({ id }: { id: string }) => {
    const { token } = useAppSelector((state) => state.users)
    return (
        <div className="mt-12">
            {token ? (
                <div className="bg-emerald-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                    <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-6">أضف تجربتك الخاصة</h5>

                    <StarRating productId={id} />

                    <AddReview productId={id} />
                </div>
            ) : (
                <Link
                    href='/login'
                    className="flex items-center justify-center p-8 border-2 border-slate-200 dark:border-slate-700 rounded-2xl text-green-600 font-bold hover:bg-green-50 dark:hover:bg-green-900/10 transition-all group"
                >
                    <span className="ml-2 group-hover:-translate-x-1 transition-transform">←</span>
                    سجل دخولك الآن لتتمكن من تقييم المنتج وإضافة تجربتك
                </Link>
            )}
        </div>
    )
}

export default ReviewSection
