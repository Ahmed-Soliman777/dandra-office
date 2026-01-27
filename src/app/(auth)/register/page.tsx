import Image from "next/image"
import RegisterImage from '../../../../public/register-image.jpg'
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import RegisterForm from "./RegisterForm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const page = async () => {
    const t = await getTranslations("Register")
    const copyright = new Date()
    const token = await (await cookies()).get("token")?.value
    if (token) {
        redirect("/")
    }
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

                        <RegisterForm
                            usernameLabel={t("username-label")}
                            emailLabel={t("email-label")}
                            passwordLabel={t("password-label")}
                            confirmPasswordLabel={t("confirm-password-label")}
                            createAccountBtn={t("create-account-btn")}
                        />

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