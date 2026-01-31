import React from 'react'
import AddProductForm from './AddProductForm'
import Link from 'next/link'

const page = () => {
    return (
        <>
            {/* <!-- Header Section --> */}
            <header className="p-6 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-[#0d1b1b] dark:text-white">إضافة منتج جديد
                        </h2>
                        <p className="text-[#4c9a9a] mt-1">أكمل تفاصيل المنتج أدناه لتمكين عملائك من الشراء</p>
                    </div>
                    <Link
                        href={'/dashboard/manage-products'}
                        className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1a2e2e] border border-[#cfe7e7] dark:border-[#2a4444] rounded-xl text-sm font-bold text-[#0d1b1b] dark:text-white hover:bg-gray-50 transition-colors">
                        رجوع إلى القائمة
                    </Link>
                </div>
            </header>
            <AddProductForm />
        </>
    )
}

export default page