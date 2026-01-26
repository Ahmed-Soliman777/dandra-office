import { getTranslations } from "next-intl/server"
import Image from "next/image"
import heroImage from "../../../../public/hero-image.jpg"
const Hero = async () => {
    const t = await getTranslations('Hero')
    return (
        <div>
            <section className="px-6 lg:px-10 py-10">
                <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl shadow-primary/5">
                    <div className="flex flex-col lg:flex-row min-h-125">
                        <div className="flex-1 relative min-h-75 lg:min-h-full">
                            <div className="absolute inset-0 flex items-center justify-center bg-center bg-cover">
                                <Image height={585} src={heroImage} alt="hero image" />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-r from-white lg:from-transparent to-transparent">
                            </div>
                        </div>
                        <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center items-end gap-6">
                            <h3
                                className="px-3 py-1 bg-accent-peach/30 text-primary text-xl font-bold uppercase tracking-widest rounded-full">{t('hero-welcome')}</h3>
                            <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] text-[#0c1d1d] dark:text-white text-right">
                                {t('hero-about-title')}
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg text-right">
                                {t('hero-about')}
                            </p>
                            <div className="flex gap-4 pt-4">
                                <button
                                    className="px-8 py-4 bg-primary font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
                                    {t('hero-shop-btn')}
                                </button>
                                <button
                                    className="px-8 py-4 bg-white dark:bg-gray-700 text-[#0c1d1d] dark:text-white font-bold rounded-xl border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all">
                                    {t('hero-explore-btn')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Hero