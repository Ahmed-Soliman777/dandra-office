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
            className="sticky top-0 z-50 bg-white backdrop-blur-lg shadow-sm border-b border-slate-100">
            <div dir="rtl" className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-8">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-bold tracking-tight text-green-600">دندرة أوفيس</h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors" href={'/shop'}>المتجر</Link>
                        <Link className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors" href={'/categories'}>التصنيفات</Link>
                    </nav>
                </div>
                <div className="flex-1 max-w-md hidden lg:block">
                    <SearchProduct />
                </div>
                <div className="flex items-center gap-4">

                    {payload ? (<>
                        <Link href={'/favorites'} className="p-2 rounded-full hover:bg-slate-100 transition-colors relative">
                            <span className="material-symbols-outlined"><Heart /></span>
                            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full"></span>
                        </Link>
                        <div className="h-8 w-px bg-slate-200 mx-1"></div>
                        <LogoutButton />
                    </>) : (<Link href={'/login'} className="rounded-lg border border-slate-300 py-2 px-5 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900">
                        تسجيل دخول
                    </Link>)}
                </div>
            </div>
        </header>
    )
}

export default Navbar