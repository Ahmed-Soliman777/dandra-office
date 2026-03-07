import { ArrowLeft} from "lucide-react"
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import ForgetPasswordForm from "./ForgetPasswordForm"

const page = async () => {

    const copyRightYear = new Date()

    const t = await getTranslations("ForgetPasswordPage")

    return (
        <div className="bg-white dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
            <header
                className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-bold tracking-tight">دندرة أوفيس</h1>
                    </div>
                </div>
            </header>
            <main className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-xl">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900 dark:text-white">{t("reset-password")}</h2>
                        </div>
                        <ForgetPasswordForm />
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