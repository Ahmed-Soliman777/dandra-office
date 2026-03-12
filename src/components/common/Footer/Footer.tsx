import { getTranslations } from "next-intl/server"

const Footer = async () => {

    const CopyRightYear = new Date()

    const t = await getTranslations('Footer')

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-auto\">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center text-sm text-slate-600 dark:text-slate-400\"><p>© {`${CopyRightYear.getFullYear()}`} {t('footer-copy-right')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer