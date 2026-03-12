import AddProductForm from '@/components/features/dashboard/manage-products/add-product/AddProductForm'
import Link from 'next/link'

const page = () => {
    return (
        <>
            {/* Header Section */}
            <header className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">إضافة منتج جديد</h2>
                        <p className="text-gray-600 dark:text-gray-400">أكمل تفاصيل المنتج أدناه لتمكين عملائك من الشراء</p>
                    </div>
                    <Link
                        href={'/dashboard/manage-products'}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors">
                        ← رجوع إلى القائمة
                    </Link>
                </div>
            </header>
            <AddProductForm />
        </>
    )
}

export default page