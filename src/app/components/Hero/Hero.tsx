import { getTranslations } from "next-intl/server"
import Image from "next/image"
import heroImage from "../../../../public/hero-image.jpg"
const Hero = async () => {
    const t = await getTranslations('Hero')
    return (
        <div>
            <section className="px-6 lg:px-10 py-10">
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="flex flex-col lg:flex-row min-h-96 lg:min-h-80">
                        <div className="flex-1 relative min-h-64 lg:min-h-full">
                            <div className="absolute inset-0 flex items-center justify-center bg-center bg-cover">
                                <Image height={585} src={heroImage} alt="hero image" />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-r from-white lg:from-transparent to-transparent"></div>
                        </div>
                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center items-end gap-6">
                            <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest rounded-full">
                                {t('hero-welcome')}
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white text-right">
                                {t('hero-about-title')}
                            </h2>
                            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-lg text-right leading-relaxed">
                                {t('hero-about')}
                            </p>
                            <div className="flex gap-4 pt-4 w-full justify-end">
                                <button
                                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-200 hover:scale-[1.02] active:scale-98 shadow-sm">
                                    {t('hero-shop-btn')}
                                </button>
                                <button
                                    className="px-8 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-[1.02] active:scale-98">
                                    {t('hero-explore-btn')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero