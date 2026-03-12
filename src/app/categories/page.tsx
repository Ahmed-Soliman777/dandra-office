import CategoryCards from '@/components/common/CategoryCards'

const page = () => {
    return (
        <div className="px-6 lg:px-10 py-16 h-screen">
            <div dir="rtl" className="mb-12">
                <div className="relative inline-block">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">الفئات</h3>
                    <div className="h-1 w-16 bg-linear-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
            </div>
            <CategoryCards />
        </div>
    )
}

export default page
