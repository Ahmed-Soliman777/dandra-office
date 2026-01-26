import { Heart, Search } from "lucide-react"
import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {

    const t = await getTranslations("Navbar")

    return (
        <header
            className="sticky top-0 z-50 bg-[#f5f5f5] dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e6f4f4] dark:border-gray-800">
            <div dir="rtl" className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-8">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary  p-2 rounded-lg">
                            <span className="material-symbols-outlined text-2xl">logo</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight text-green-700">Dandra Office</h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-semibold hover:text-primary transition-colors" href={'/shop'}>{t('nav-store')}</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors" href={'/categories'}>{t('nav-categories')}</Link>
                    </nav>
                </div>
                <div className="flex-1 max-w-md hidden lg:block">
                    <div className="relative group">
                        <span
                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary "><Search /></span>
                        <input
                            className="w-full bg-white dark:bg-gray-800 border-none rounded-xl pl-2 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all text-right"
                            placeholder={`${t('nav-search')}`} type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href={'/login'} className="rounded-full border border-zinc-300 py-2 px-5 hover:bg-white dark:hover:bg-gray-800 transition-colors relative">
                        {t('nav-login-btn')}
                        <span className="absolute top-1 right-1 size-2 bg-accent-bronze rounded-full"></span>
                    </Link>
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
                </div>
            </div>
        </header>
    )
}

export default Navbar