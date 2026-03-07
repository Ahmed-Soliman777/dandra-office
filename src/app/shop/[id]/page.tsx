import ProductDetails from './ProductDetails'
import AddReview from './AddReview'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Reviews from './Reviews'
import axios from 'axios'
import { DOMAIN } from '@/app/utils/constants'
import { verifyTokenForPage } from '@/app/utils/verifyToken'
import StarRating from './StarRating'
import FavoriteButton from './FavoriteButton'
import Path from './Path'
import UsersReviews from './UsersReviews'

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params

    const token = (await cookies()).get("token")?.value as string

    const payload = verifyTokenForPage(token || "")

    const { data } = await axios.get(`${DOMAIN}/api/products/${id}`)
    const totalComments: number = data.comments.length || 0

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex justify-between mb-6">
                    <FavoriteButton id={id} token={token} />
                    <Path
                        categoryName={data.category.categoryNameAr}
                        productName={data.productNameAr}
                        categoryId={data.category.id}
                    />


                </div>

                <ProductDetails product={data} />

                <section className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16" dir='rtl'>
                    <div className="max-w-4xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                            <UsersReviews reviews={data.reviews} />

                            <div className="lg:col-span-8 space-y-12">

                                <div className="space-y-6 flex mb-6 gap-4 items-center">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white border-r-4 mb-0 border-blue-600 pr-4">آراء العملاء</h4>
                                    <span className="text-slate-400 font-normaltext-sm">({
                                        (totalComments > 2 && totalComments < 11) ? `${totalComments} تعليق`
                                            :
                                            totalComments === 2 ? "تعليقان"
                                                :
                                                totalComments === 1 ? "تعليق واحد"
                                                    :
                                                    `${totalComments} تعليق`})
                                    </span>
                                </div>
                                <Reviews id={id} payload={payload} />

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