import React from 'react'
import CategoryTable from "../../components/CategoryTable"
import Link from 'next/link'

const page = () => {
    return (
        <>
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة الفئات</h1>
                    <p className="text-gray-600 dark:text-gray-400">عرض وإدارة جميع فئات منتجاتك</p>
                </div>
                <Link
                    href={'/dashboard/manage-categories/add-category'}
                    className="flex items-center justify-center gap-2 px-4 py-2  bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md">
                    <span>+ إضافة فئة</span>
                </Link>
            </header>
            <CategoryTable />
        </>
    )
}

export default page