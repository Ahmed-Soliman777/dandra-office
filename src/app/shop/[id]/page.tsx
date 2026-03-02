import { Star } from 'lucide-react'
import ProductDetails from './ProductDetails'
import AddReview from './AddReview'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Reviews from './Reviews'
import axios from 'axios'
import { DOMAIN } from '@/app/utils/constants'
import { verifyTokenForPage } from '@/app/utils/verifyToken'
import StarRating from './StarRating'

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params

    const token = (await cookies()).get("token")?.value as string

    const payload = verifyTokenForPage(token || "")

    const { data } = await axios.get(`${DOMAIN}/api/products/${id}`)
    const totalComments: number = data.comments.length || 0

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <main className="max-w-7xl mx-auto px-6 py-8">

                <ProductDetails id={id} token={token && token || undefined} />

                <section className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16" dir='rtl'>
                    <div className="max-w-4xl">
                        <h3 className="text-3xl font-800 mb-12 flex items-end gap-4">
                            آراء المستخدمين
                            <span className="text-slate-400 font-normal text-lg">({totalComments} {totalComments > 1 ? "تعليقات" : "تعليق"})</span>
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                            <div className="lg:col-span-4 sticky top-28">
                                <div className="bg-white dark:bg-slate-900 p-8 rounded-4xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none text-center">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">متوسط التقييم</h3>
                                    <p className="text-7xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">4.8</p>

                                    {/* النجوم (عرض فقط) */}
                                    <div className="flex justify-center gap-1.5 mb-6">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} size={20} fill={s <= 4 ? "#FFD700" : "none"} color="#FFD700" strokeWidth={s <= 4 ? 0 : 2} />
                                        ))}
                                    </div>

                                    {/* أشرطة التقييم التفصيلية */}
                                    <div className="space-y-4 pt-6 border-t border-slate-50 dark:border-slate-800">
                                        {[
                                            { star: "5", percent: "85", color: "bg-amber-400" },
                                            { star: "4", percent: "10", color: "bg-amber-400" },
                                            { star: "3", percent: "3", color: "bg-slate-300" },
                                            { star: "2", percent: "2", color: "bg-slate-300" },
                                            { star: "1", percent: "0", color: "bg-slate-300" },
                                        ].map((item) => (
                                            <div key={item.star} className="flex items-center gap-3 group text-xs font-bold">
                                                <span className="w-2 text-slate-600 dark:text-slate-400">{item.star}</span>
                                                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full ${item.color} transition-all duration-700 ease-out rounded-full`}
                                                        style={{ width: `${item.percent}%` }}
                                                    ></div>
                                                </div>
                                                <span className="w-8 text-right text-slate-400">{item.percent}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-8 space-y-12">

                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-8 border-r-4 border-blue-600 pr-4">آراء العملاء</h4>
                                    <Reviews id={id} payload={payload} />
                                </div>

                                <div className="mt-12">
                                    {token ? (
                                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-4xl border-2 border-dashed border-slate-200 dark:border-slate-800 transition-colors hover:border-blue-200 dark:hover:border-blue-900/40">
                                            <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-6">أضف تجربتك الخاصة</h5>

                                            <StarRating productId={id} payload={payload?.id} />

                                            <AddReview productId={id} />
                                        </div>
                                    ) : (
                                        <Link
                                            href='/login'
                                            className="flex items-center justify-center p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-blue-600 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group"
                                        >
                                            <span className="ml-2 group-hover:-translate-x-1 transition-transform">←</span>
                                            سجل دخولك الآن لتتمكن من تقييم المنتج وإضافة تجربتك
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default page