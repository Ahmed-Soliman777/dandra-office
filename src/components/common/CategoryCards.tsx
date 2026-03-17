"use client"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { category } from "../../utils/types"
import axios from "axios"
import Image from "next/image"
import { DOMAIN } from '../../utils/constants';
import Link from "next/link"

const CategoryCards = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<category[]>([])

    useEffect(() => {
        async function getAllcategories() {
            try {
                setLoading(true)
                const { data } = await axios.get(`${DOMAIN}/api/categories`)
                // console.log(data);
                setCategories(data.categories)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error(error);
                toast.error("حدث خطأ، حاول مرة أخرى")
            }
        }
        getAllcategories()
    }, [])

    if (loading) {
        return "Loading..."
    }

    return (
        <>
            <div className="flex gap-6 items-end overflow-x-auto pb-2" dir="rtl">
                {categories.map((category: category) => (
                    <Link href={`/categories/${category.id}`} key={category.id} className="group flex-0">
                        <div className="rounded-2xl w-24 h-24 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.05]">
                            {
                                category.categoryThumbnail &&
                                <Image src={category.categoryThumbnail}
                                    alt={category.categoryNameAr || "Category"}
                                    height={100}
                                    width={100}
                                    className="w-full h-full object-cover"
                                />
                            }
                        </div>
                        <p className="text-center text-sm font-medium text-slate-700 dark:text-slate-300 mt-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{category.categoryNameAr}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default CategoryCards
