import { review } from '@/utils/types'
import { Star } from 'lucide-react'

const UsersReviews = ({ reviews }: { reviews: review[] }) => {

    const averageRating = reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.reviewInNumbers, 0) / reviews.length).toFixed(1) : "0.0";

    const starCounts = [0, 0, 0, 0, 0];
    reviews.forEach((r) => {
        if (r.reviewInNumbers >= 1 && r.reviewInNumbers <= 5) {
            starCounts[r.reviewInNumbers - 1]++;
        }
    });

    return (

        <div className="lg:col-span-4 top-28">
            <div className="bg-white p-8 rounded-4xl border border-slate-100 shadow-xl shadow-slate-200/50 text-center">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">متوسط التقييم</h3>
                <p className="text-7xl font-black text-slate-900 mb-2 tracking-tighter">{averageRating}</p>

                <div className="flex justify-center gap-1.5 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                            key={s}
                            size={20}
                            fill={s <= Math.round(parseFloat(averageRating)) ? "#FFD700" : "none"}
                            color="#FFD700"
                            strokeWidth={s <= Math.floor(parseFloat(averageRating)) ? 0
                                :
                                2} />
                    ))}
                </div>
                
                {/* <div className="space-y-4 pt-6 border-t border-slate-50">
                    {[
                        { star: "5", percent: `${(starCounts[4] / reviews.length * 100).toFixed(1) || 0}`, color: "bg-amber-400" },
                        { star: "4", percent: `${(starCounts[3] / reviews.length * 100).toFixed(1) || 0}`, color: "bg-amber-400" },
                        { star: "3", percent: `${(starCounts[2] / reviews.length * 100).toFixed(1) || 0}`, color: "bg-slate-300" },
                        { star: "2", percent: `${(starCounts[1] / reviews.length * 100).toFixed(1) || 0}`, color: "bg-slate-300" },
                        { star: "1", percent: `${(starCounts[0] / reviews.length * 100).toFixed(1) || 0}`, color: "bg-slate-300" },
                    ].map((item) => (
                        <div key={item.star} className="flex items-center gap-3 group text-xs font-bold">
                            <span className="w-2 text-slate-600">{item.star}</span>
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${item.color} transition-all duration-700 ease-out rounded-full`}
                                    style={{ width: `${item.percent}%` }}
                                ></div>
                            </div>
                            <span className="w-8 text-right text-slate-400">{item.percent}%</span>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default UsersReviews
