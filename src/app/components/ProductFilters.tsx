"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { DOMAIN } from "../utils/constants"
import { usePathname } from "next/navigation"
import { CategoriesData } from "../utils/types"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setMinPrice, setMaxPrice } from "@/lib/features/filterSlice"
import { useRouter, useSearchParams } from "next/navigation"

const ProductFilters = () => {

    const MIN_LIMIT = 0;
    const MAX_LIMIT = 2000;

    const router = useRouter()
    const searchParams = useSearchParams()

    const product = searchParams.get("product")

    const dispatch = useAppDispatch()
    const { minPrice, maxPrice } = useAppSelector(
        (state) => state.filter
    )

    const getPercent = (value: number) => ((value - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100;

    const [isChecked, setIsChecked] = useState(false)
    const [categories, setCategories] = useState([])

    const pathName = usePathname()

    useEffect(() => {
        const categoriesData = async () => {
            try {
                const res = await axios.get(`${DOMAIN}/api/categories`)
                setCategories(res.data.categories)
            } catch (err) {
                console.error(err)
            }
        }
        categoriesData()
    }, [])

    return (
        <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-8 sticky top-25 self-start">

            {/* <!-- Categories --> */}
            {pathName.startsWith("/categories") === false && <div className="flex flex-col gap-2">
                <label
                    className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Categories</label>
                <div
                    className="flex flex-col bg-white dark:bg-background-dark p-2 rounded-xl border border-[#e6f4f4] dark:border-[#1a3a3a]">
                    {categories.map((category: CategoriesData) => (
                        <label
                            key={category.id}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-light dark:hover:bg-primary/10 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                className="h-5 w-5 rounded border-[#cdeaea] text-primary focus:ring-primary focus:ring-offset-0 bg-transparent"
                            />
                            <span className="text-sm font-medium">{category.categoryNameAr}</span>
                        </label>
                    ))}
                </div>
            </div>}

            {/* <!-- Price Filter --> */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 pr-1 text-right">
                    نطاق السعر
                </label>

                <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-6">

                    {/* Inputs Display */}
                    <div className="flex flex-row-reverse gap-3 items-center" dir="rtl">
                        <div className="flex-1 flex flex-col gap-1.5">
                            <span className="text-[10px] text-gray-400 font-bold uppercase text-right px-1">الى</span>
                            <div className="w-full text-sm font-bold border-2 border-gray-50 dark:border-gray-800 dark:bg-gray-800 rounded-xl p-2.5 text-center text-green-700 dark:text-gray-200 shadow-sm">
                                {maxPrice.toLocaleString()} <span className="text-[10px] font-normal opacity-70">ج.م</span>
                            </div>
                        </div>

                        <div className="mt-5 text-gray-300 dark:text-gray-700 font-light">—</div>

                        <div className="flex-1 flex flex-col gap-1.5">
                            <span className="text-[10px] text-gray-400 font-bold uppercase text-right px-1">من</span>
                            <div className="w-full text-sm font-bold border-2 border-gray-50 dark:border-gray-800 dark:bg-gray-800 rounded-xl p-2.5 text-center dark:text-green-500 shadow-sm">
                                {minPrice.toLocaleString()} <span className="text-[10px] font-normal opacity-70">ج.م</span>
                            </div>
                        </div>
                    </div>

                    {/* Custom Interactive Slider */}
                    <div className="relative h-6 flex items-center">
                        <div className="absolute w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full" />
                        <div
                            className="absolute h-1.5 bg-green-600 rounded-full"
                            style={{
                                right: `${getPercent(minPrice)}%`,
                                left: `${100 - getPercent(maxPrice)}%`
                            }}
                        />

                        {/* Range Inputs */}
                        <input
                            type="range"
                            min={MIN_LIMIT}
                            max={MAX_LIMIT}
                            value={minPrice}
                            onChange={(e) => {
                                const value = Math.min(Number(e.target.value), maxPrice - 100);
                                dispatch(setMinPrice(value));
                            }}
                            className="absolute w-full h-1.5 bg-transparent appearance-none pointer-events-none z-20 touch-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                        />
                        <input
                            type="range"
                            min={MIN_LIMIT}
                            max={MAX_LIMIT}
                            value={maxPrice}
                            onChange={(e) => {
                                const value = Math.max(Number(e.target.value), minPrice + 100);
                                dispatch(setMaxPrice(value));
                            }}
                            className="absolute w-full h-1.5 bg-transparent appearance-none pointer-events-none z-20 touch-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                        />
                    </div>
                    {/* Apply Button */}
                    <button
                        onClick={() => {
                            const params = new URLSearchParams()
                            if (product) params.set("product", product)
                            params.set("minPrice", String(minPrice))
                            params.set("maxPrice", String(maxPrice))
                            router.push(`/shop/search?${params.toString()}`)
                        }
                        }
                        className="w-full py-3 bg-gray-900 dark:bg-green-600 text-white font-bold text-sm rounded-xl hover:bg-green-700 dark:hover:bg-green-500 transition-all shadow-md active:scale-95"
                    >
                        تطبيق الفلتر
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default ProductFilters