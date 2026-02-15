import { verifyTokenForPage } from "@/app/utils/verifyToken"
import { Heart } from "lucide-react"
import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import LogoutButton from "./LogoutButton"
import SearchProduct from "../SearchProduct"

const Navbar = async () => {

    const token = (await cookies()).get("token")?.value || ""

    const payload = verifyTokenForPage(token)

    return (
        <header
            className="sticky top-0 z-50 bg-[#f5f5f5] dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e6f4f4] dark:border-gray-800">
            <div dir="rtl" className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-8">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-extrabold tracking-tight text-green-700">دندرة أوفيس</h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-semibold hover:text-primary transition-colors" href={'/shop'}>المتجر</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors" href={'/categories'}>التصنيفات</Link>
                    </nav>
                </div>
                <div className="flex-1 max-w-md hidden lg:block">
                        <SearchProduct />
                </div>
                <div className="flex items-center gap-4">

                    {payload ? (<>
                        <button className="p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors relative">
                            <span className="material-symbols-outlined"><Heart /></span>
                            <span className="absolute top-1 right-1 size-2 bg-accent-bronze rounded-full"></span>
                        </button>
                        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
                        <button className="flex items-center gap-2 pl-2">
                            <div
                                className="size-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
                                <Image width={25} height={25} className="w-full h-full object-cover" alt="User profile avatar placeholder"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmKt4K7sFyXcEfHpAoa9nKlsUq0Pc7SrG7QpC-XsmZwKll3ge2qoH9MH5Y14658sg15MR4p8jZbEiFNGhU0X6O7_m7LfIdaz-3G3bTdnUKPGfQRNN7r12wkw50eVVGYoWWS7NguMBcrt3EwBIMFGGFcxrJ7CB2s8iUXH0lz8SwwPa1TVp-a9nVQ6ObPhklsyXcK__ot3RbukUUWe5IbN2_rWkyAW4R3oJ6zh8qnhSQMRvatienxZF3CpMiuv_7p87uMVuMOTnDSe7O" />
                            </div>
                        </button>
                        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
                        <LogoutButton />
                    </>) : (<Link href={'/login'} className="rounded-full border border-zinc-300 py-2 px-5 hover:bg-white dark:hover:bg-gray-800 transition-colors relative">
                        تسجيل دخول
                        <span className="absolute top-1 right-1 size-2 bg-accent-bronze rounded-full"></span>
                    </Link>)}
                </div>
            </div>
        </header>
    )
}

export default Navbar