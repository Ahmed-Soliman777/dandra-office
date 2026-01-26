import { getTranslations } from "next-intl/server"

const Footer = async () => {

    const CopyRightYear = new Date()

    const t = await getTranslations('Footer')

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-10">
                <div
                    className="border-t border-gray-100 dark:border-gray-800 pt-8 text-center text-sm text-gray-400 ">
                    <p>© {`${CopyRightYear.getFullYear()}`} {t('footer-copy-right')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer