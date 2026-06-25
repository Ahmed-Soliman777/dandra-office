import ProductDetails from '@/components/features/shop/id/ProductDetails'
import Reviews from '@/components/features/shop/id/Reviews'
import axios from 'axios'
import { DOMAIN } from '@/utils/constants'
import FavoriteButton from '@/components/features/shop/id/FavoriteButton'
import Path from '@/components/features/shop/id/Path'
import UsersReviews from '@/components/features/shop/id/UsersReviews'
import ReviewSection from '@/components/features/shop/id/ReviewSection'

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params

    const { data } = await axios.get(`${DOMAIN}/api/products/${id}`)
    const totalComments: number = data.comments.length || 0

    return (
        <div className="bg-background-light text-slate-900">
            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex justify-between mb-6">
                    <FavoriteButton id={id} />
                    <Path
                        categoryName={data.category.categoryNameAr}
                        productName={data.productNameAr}
                        categoryId={data.category.id}
                    />


                </div>

                <ProductDetails product={data} />

                <section className="mt-24 border-t border-slate-200 pt-16" dir='rtl'>
                    <div className="max-w-4xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                            <UsersReviews reviews={data.reviews} />

                            <div className="lg:col-span-8 space-y-12">

                                <div className="space-y-6 flex mb-6 gap-4 items-center">
                                    <h4 className="text-xl font-bold text-slate-900 border-r-4 mb-0 border-blue-600 pr-4">آراء العملاء</h4>
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
                                <Reviews id={id} />

                                <ReviewSection id={id} />

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default page