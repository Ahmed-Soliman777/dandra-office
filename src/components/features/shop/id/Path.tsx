import { ChevronLeft, Home } from 'lucide-react'
import Link from 'next/link'

const Path = ({ categoryName, productName, categoryId }: { categoryName: string, productName: string, categoryId: number }) => {

    return (
        <nav dir="rtl" className="flex items-center gap-3 text-sm overflow-x-auto whitespace-nowrap pb-2">
            <Link className="text-slate-500 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-1" href="/">
                <Home size={16} /> الرئيسية
            </Link>

            <ChevronLeft size={14} className="text-slate-400 rotate-0" />

            {categoryName ? (
                <Link
                    className="text-slate-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    href={`/categories/${categoryId}`}
                >
                    {categoryName}
                </Link>
            ) : (
                <div className="h-4 w-16 bg-slate-200 dark:bg-slate-800 animate-pulse rounded"></div>
            )}

            <ChevronLeft size={14} className="text-slate-400" />

            <span className="text-slate-900 dark:text-white font-semibold truncate">
                {productName}
            </span>
        </nav>
    )
}

export default Path
