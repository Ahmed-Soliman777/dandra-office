"use client"
import { DOMAIN } from '@/utils/constants'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const CategoryName = ({ id }: { id: number }) => {

    const [category, setCategory] = useState<string>("")

    useEffect(() => {

        if (!id) return;

        const getCategoryName = async (id: number) => {
            try {
                const response = await axios.get(`${DOMAIN}/api/categories/${id}`)
                setCategory(response?.data?.categoryNameAr);
            } catch (error) {
                toast.error("حدث خطأ")
                console.error(error);
            }
        }
        getCategoryName(id)
    }, [id])
    return category || "NULL"
}

export default CategoryName