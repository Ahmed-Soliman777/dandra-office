import { ArrowLeft, ArrowRight, Mail } from "lucide-react"
import { getTranslations } from "next-intl/server"
import Link from "next/link"

const page = async () => {

    const copyRightYear = new Date()

    const t = await getTranslations("ForgetPasswordPage")

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#0c1d1d] dark:text-gray-100 h-screen flex flex-col transition-colors duration-300">
            <header
                className="w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e6f4f4] dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary p-2 rounded-lg">
                            <span className="material-symbols-outlined text-2xl">logo</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight">Dandra Office</h1>
                    </div>
                </div>
            </header>
            <main className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-110">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-primary/5 p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-extrabold tracking-tight mb-3 text-gray-900 dark:text-white">{t("reset-password")}
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                {t("reset-password-paragraph")}
                            </p>
                        </div>
                        <form className="space-y-6">
                            <div dir="rtl" className="space-y-2 ">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 m-1"
                                    htmlFor="email">{t("email-label")}</label>
                                <div className="relative group">
                                    <span
                                        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><Mail /></span>
                                    <input
                                        className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-primary/20 focus:ring-0 rounded-xl pl-12 pr-4 py-3.5 text-sm transition-all outline-none"
                                        id="email" name="email" placeholder="name@example.com" required type="email" />
                                </div>
                            </div>
                            <button
                                className="w-full bg-primary hover:bg-primary/90 font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                type="submit">
                                <span>{t('send-reset-link')}</span>
                                <span className="material-symbols-outlined text-lg"><ArrowRight /></span>
                            </button>
                        </form>
                        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700 text-center">
                            <Link className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors"
                                href="/login">
                                <span className="material-symbols-outlined text-sm"><ArrowLeft /></span>
                                {t("back-to-login")}
                            </Link>
                        </div>
                    </div>
                    <p className="text-center mt-8 text-xs text-gray-400">
                        ©{`${copyRightYear.getUTCFullYear()}`} {t("copy-right")}
                    </p>
                </div>
            </main>
            <div className="h-10"></div>
        </div>
    )
}

export default page