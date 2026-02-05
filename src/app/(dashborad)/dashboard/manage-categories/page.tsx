import React from 'react'
import CategoryTable from "../../components/CategoryTable"

const page = () => {
    return (
        <>
            <header className="mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة الفئات</h1>
                    <p className="text-gray-600 dark:text-gray-400">عرض وإدارة جميع فئات منتجاتك</p>
                </div>
            </header>
            <CategoryTable />
        </>
    )
}

export default page