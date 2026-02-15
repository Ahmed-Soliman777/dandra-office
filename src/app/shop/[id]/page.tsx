import { Star } from 'lucide-react'
import ProductDetails from './ProductDetails'
import AddReview from './AddReview'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Reviews from './Reviews'
import axios from 'axios'
import { DOMAIN } from '@/app/utils/constants'

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params

    const token = (await cookies()).get("token")?.value

    const { data } = await axios.get(`${DOMAIN}/api/products/${id}`)
    const totalComments: number = data.comments.length || 0

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <main className="max-w-7xl mx-auto px-6 py-8">


                <ProductDetails id={id} />

                {/* <!-- Social Proof Section: Reviews & Comments --> */}
                <section className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16" dir='rtl'>
                    <div className="max-w-4xl">
                        <h3 className="text-3xl font-800 mb-12 flex items-end gap-4">
                            آراء المستخدمين
                            <span className="text-slate-400 font-normal text-lg">({totalComments} {totalComments > 1 ? "تعليقات" : "تعليق"})</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            {/* <!-- Review Aggregate --> */}
                            <div className="md:col-span-4">
                                <div
                                    className="bg-primary/5 dark:bg-primary/10 p-8 rounded-2xl text-center border border-primary/10 sticky top-28">
                                    <p className="text-6xl font-800 text-primary mb-2">4.8</p>
                                    <div className="flex justify-center gap-1 mb-2 text-accent-bronze">
                                        <span className="material-symbols-outlined fill-accent-bronze"><Star fill='#FFD700' color='#FFD700' /></span>
                                        <span className="material-symbols-outlined fill-accent-bronze"><Star fill='#FFD700' color='#FFD700' /></span>
                                        <span className="material-symbols-outlined fill-accent-bronze"><Star fill='#FFD700' color='#FFD700' /></span>
                                        <span className="material-symbols-outlined fill-accent-bronze"><Star fill='#FFD700' color='#FFD700' /></span>
                                        <span className="material-symbols-outlined"><Star fill='#FFD700' color='#FFD700' /></span>
                                    </div>
                                    <div className="mt-8 space-y-3">
                                        <div className="flex items-center gap-2 text-xs">
                                            <span className="w-2">5</span>
                                            <div
                                                className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div className="w-[85%] h-full bg-accent-bronze"></div>
                                            </div>
                                            <span className="w-8 text-right font-bold text-slate-400">85%</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs">
                                            <span className="w-2">4</span>
                                            <div
                                                className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div className="w-[10%] h-full bg-accent-bronze"></div>
                                            </div>
                                            <span className="w-8 text-right font-bold text-slate-400">10%</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs opacity-40">
                                            <span className="w-2">3</span>
                                            <div
                                                className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div className="w-[3%] h-full bg-accent-bronze"></div>
                                            </div>
                                            <span className="w-8 text-right font-bold text-slate-400">3%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Comment List --> */}
                            <div className="md:col-span-8 space-y-8">
                                {/* <!-- Individual Review --> */}
                                <Reviews id={id} />
                                {/* <!-- Add a Comment --> */}
                                {token ? <AddReview productId={id} /> : <Link href='/login'>سجل دخولك لأضافة تجربتك</Link>}
                                {/* <AddReview token={token ?? ""} /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default page