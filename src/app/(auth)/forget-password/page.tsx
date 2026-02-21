import { ArrowLeft, ArrowRight, Mail } from "lucide-react"
import { getTranslations } from "next-intl/server"
import Link from "next/link"

const page = async () => {

    const copyRightYear = new Date()

    const t = await getTranslations("ForgetPasswordPage")

    return (
        <div className="bg-white dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
            <header
                className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <span className="material-symbols-outlined text-2xl text-white">logo</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight">Dandra Office</h1>
                    </div>
                </div>
            </header>
            <main className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-xl">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900 dark:text-white">{t("reset-password")}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {t("reset-password-paragraph")}
                            </p>
                        </div>
                        <form className="space-y-6">
                            <div dir="rtl" className="space-y-2 ">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 m-1"
                                    htmlFor="email">{t("email-label")}</label>
                                <div className="relative group">
                                    <span
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"><Mail size={18} /></span>
                                    <input
                                        className="w-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-xl pl-12 pr-4 py-3.5 text-sm transition-all outline-none placeholder-slate-400"
                                        id="email" name="email" placeholder="name@example.com" required type="email" />
                                </div>
                            </div>
                            <button
                                className="w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                                type="submit">
                                <span>{t('send-reset-link')}</span>
                                <span className="material-symbols-outlined text-lg"><ArrowRight size={18} /></span>
                            </button>
                        </form>
                        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
                            <Link className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                href="/login">
                                <span className="material-symbols-outlined text-sm"><ArrowLeft size={16} /></span>
                                {t("back-to-login")}
                            </Link>
                        </div>
                    </div>
                    <p className="text-center mt-8 text-xs text-slate-600 dark:text-slate-500">
                        ©{`${copyRightYear.getUTCFullYear()}`} {t("copy-right")}
                    </p>
                </div>
            </main>
            <div className="h-10"></div>
        </div>
    )
}

export default page