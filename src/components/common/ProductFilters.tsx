"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setMinPrice, setMaxPrice } from "@/lib/features/filterSlice"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const ProductFilters = () => {

    const MIN_LIMIT = 0;
    const MAX_LIMIT = 2000;

    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const product = searchParams.get("product")

    const dispatch = useAppDispatch()
    const { minPrice, maxPrice } = useAppSelector(
        (state) => state.filter
    )

    const getPercent = (value: number) => ((value - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100;

    return (
        <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-8 sticky top-25 self-start">
            {/* <!-- Price Filter --> */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 pr-1 text-right\">
                    نطاق السعر
                </label>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-6\">

                    {/* Inputs Display */}
                    <div className="flex flex-row-reverse gap-3 items-center" dir="rtl">
                        <div className="flex-1 flex flex-col gap-1.5">
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase text-right px-1">الى</span>
                            <div className="w-full text-sm font-bold border border-slate-200 dark:border-slate-700 dark:bg-slate-700 rounded-xl p-2.5 text-center text-green-600 dark:text-green-400 shadow-sm">
                                {maxPrice.toLocaleString()} <span className="text-[10px] font-normal opacity-70">ج.م</span>
                            </div>
                        </div>

                        <div className="mt-5 text-slate-300 dark:text-slate-600 font-light">—</div>

                        <div className="flex-1 flex flex-col gap-1.5">
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase text-right px-1">من</span>
                            <div className="w-full text-sm font-bold border border-slate-200 dark:border-slate-700 dark:bg-slate-700 rounded-xl p-2.5 text-center text-green-600 dark:text-green-400 shadow-sm">
                                {minPrice.toLocaleString()} <span className="text-[10px] font-normal opacity-70">ج.م</span>
                            </div>
                        </div>
                    </div>

                    {/* Custom Interactive Slider */}
                    <div className="relative h-6 flex items-center">
                        <div className="absolute w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
                        <div
                            className="absolute h-1.5 bg-green-600 dark:bg-green-500 rounded-full"
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
                            className="absolute w-full h-1.5 bg-transparent appearance-none pointer-events-none z-20 touch-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md\"
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
                            className="absolute w-full h-1.5 bg-transparent appearance-none pointer-events-none z-20 touch-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md\"
                        />
                    </div>
                    {/* Apply Button */}
                    <button
                        onClick={() => {
                            const params = new URLSearchParams()
                            if (product) params.set("product", product)
                            params.set("minPrice", String(minPrice))
                            params.set("maxPrice", String(maxPrice))
                            {
                                if (pathName === "/shop/search") {
                                    router.push(`/shop/search?${params.toString()}`)
                                }
                                else {
                                    router.push(`/shop/filter?minPrice=${minPrice}&maxPrice=${maxPrice}`)
                                }

                            }
                        }
                        }
                        className="w-full py-3 bg-green-600 dark:bg-green-600 text-white font-bold text-sm rounded-2xl hover:bg-green-700 dark:hover:bg-green-500 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95\"
                    >
                        تطبيق الفلتر
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default ProductFilters