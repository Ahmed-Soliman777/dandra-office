import { verifyTokenForPage } from "@/utils/verifyToken"
import { Heart } from "lucide-react"
import { cookies } from "next/headers"
import Link from "next/link"
import LogoutButton from "./LogoutButton"
import SearchProduct from "../SearchProduct"

const Navbar = async () => {

    const token = (await cookies()).get("token")?.value || ""

    const payload = verifyTokenForPage(token)

    return (
        <header
            className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800\">
            <div dir="rtl" className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-8">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">دندرة أوفيس</h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href={'/shop'}>المتجر</Link>
                        <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href={'/categories'}>التصنيفات</Link>
                    </nav>
                </div>
                <div className="flex-1 max-w-md hidden lg:block">
                    <SearchProduct />
                </div>
                <div className="flex items-center gap-4">

                    {payload ? (<>
                        <Link href={'/favorites'} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
                            <span className="material-symbols-outlined"><Heart /></span>
                            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full"></span>
                        </Link>
                        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
                        <LogoutButton />
                    </>) : (<Link href={'/login'} className="rounded-lg border border-slate-300 dark:border-slate-600 py-2 px-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-900 dark:text-slate-100">
                        تسجيل دخول
                    </Link>)}
                </div>
            </div>
        </header>
    )
}

export default Navbar