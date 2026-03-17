import CategoryCards from '@/components/common/CategoryCards'

const page = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <div className="px-6 lg:px-10 py-16 max-w-7xl mx-auto" dir="rtl">
                <div className="mb-12">
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">جميع التصنيفات</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">اختر من بين مجموعة واسعة من الفئات</p>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
                </div>
                <CategoryCards />
            </div>
        </div>
    )
}

export default page
