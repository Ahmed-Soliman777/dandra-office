import Image from "next/image"
import RegisterImage from '../../../../public/register-image.jpg'
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { ArrowLeft, Lock, Mail, User2Icon, Verified } from "lucide-react"

const page = async () => {
    const t = await getTranslations("Register")
    const copyright = new Date()
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#0c1d1d] dark:text-gray-100 transition-colors duration-300 min-h-screen flex items-center justify-center p-0">

            <div className="flex w-full h-screen" dir="rtl">
                <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center">
                        <Image alt="register image" src={RegisterImage} className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
                    <div className="absolute top-8 right-8 lg:right-12">
                        <Link href="/">
                            <h1 className="text-xl font-extrabold tracking-tight">Dandra Office</h1>
                        </Link>
                    </div>
                    <div className="relative z-10 flex flex-col justify-end p-16 text-white w-full">
                        <div className="bg-primary/40 backdrop-blur-2xl p-8 rounded-2xl border border-white/20 max-w-lg">
                            <h2 className="text-4xl font-black mb-4">{t('join-us')}</h2>
                            <p className="text-lg text-white/90 leading-relaxed">
                                {t('join-us-paragraph')}
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full lg:w-1/2 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-24 relative">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-black text-[#0c1d1d] dark:text-white">{t("create-account")}</h2>
                        </div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300"
                                        htmlFor="username">{t("username-label")}</label>
                                    <div className="relative group">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><User2Icon /></span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                                            id="username" name="username" placeholder="Craftsman_99" type="text" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300" htmlFor="email">{t("email-label")}</label>
                                    <div className="relative group">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><Mail /></span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                                            id="email" name="email" placeholder="artisan@gallery.com" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300"
                                        htmlFor="password">{t("password-label")}</label>
                                    <div className="relative group">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><Lock /></span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                                            id="password" name="password" placeholder="••••••••" type="password" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300"
                                        htmlFor="confirm-password">{t("confirm-password-label")}</label>
                                    <div className="relative group">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><Verified /></span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                                            id="confirm-password" name="confirm-password" placeholder="••••••••"
                                            type="password" />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="w-full py-4 bg-primary border border-[#2323233d] font-black rounded-xl hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all"
                                type="submit">
                                {t("create-account-btn")}
                            </button>
                        </form>
                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100 dark:border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-gray-900 px-4 text-gray-400 font-bold tracking-widest">
                                    {t("have-an-account")}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-7">
                        <Link className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="/login">
                            {t("login")} <span className="material-symbols-outlined text-sm"><ArrowLeft /></span>
                        </Link>
                    </div>
                    <div className="absolute bottom-8 text-center w-full left-0 px-8">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">© {copyright.getUTCFullYear()} {t('copy-right')}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page