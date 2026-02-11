"use client"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { category } from "../utils/types"
import axios from "axios"
import Image from "next/image"
import { DOMAIN } from './../utils/constants';
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
            <div className="flex gap-2.5 items-end" dir="rtl">
                {categories.map((category: category) => (
                    <Link href={`/categories/${category.id}`} key={category.id}>
                        <div className="rounded-full w-20 h-20 border border-[#0003] overflow-hidden inset-1 shadow">
                            {
                                category.categoryThumbnail &&
                                <Image src={category.categoryThumbnail}
                                    alt={category.categoryNameAr || "Category"}
                                    height={100}
                                    width={100}
                                />
                            }
                        </div>
                        <p className="text-center">{category.categoryNameAr}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default CategoryCards
