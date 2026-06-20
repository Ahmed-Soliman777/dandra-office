import Image from "next/image"
import RegisterImage from '../../../../public/register-image.jpg'
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import RegisterForm from "@/components/features/auth/register/RegisterForm"
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
        <div className="bg-white dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-stretch overflow-hidden" dir="rtl">

            {/* Left Side - Hero Image Section (Desktop Only) */}
            <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-linear-to-br from-green-600 via-green-700 to-teal-900">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image 
                        alt="register-illustration" 
                        src={RegisterImage} 
                        // fill
                        className="object-cover opacity-60" 
                        priority
                    />
                    {/* linear Overlays */}
                    <div className="absolute inset-0 bg-linear-to-b from-green-600/40 via-green-700/50 to-green-900/70"></div>
                    <div className="absolute inset-0 bg-linear-to-r from-green-900/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12">
                    {/* Logo and Brand */}
                    <Link 
                        className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity group w-fit" 
                        href="/"
                    >
                            <h1 className="text-lg lg:text-xl font-extrabold tracking-tight">دندرة أوفيس</h1>
                    </Link>

                    {/* Main Message */}
                    <div className="max-w-sm">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                {t("join-us")}
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                {t("join-us-paragraph")}
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-white/60 text-xs">
                        <span>© {copyright.getUTCFullYear()} {t('copy-right')}</span>
                    </div>
                </div>
            </section>

            {/* Right Side - Registration Form Section */}
            <main className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8  bg-white dark:bg-slate-900 overflow-y-auto">
                <div className="w-full max-w-sm space-y-8">
                    
                    {/* Mobile Header Logo */}
                    <Link 
                        className="flex lg:hidden items-center gap-2 text-green-600 dark:text-green-400 hover:opacity-80 transition-opacity w-fit" 
                        href="/"
                    >
                            <h1 className="text-lg font-extrabold tracking-tight">دندرة أوفيس</h1>
                    </Link>

                    {/* Section Header */}
                    <div className="space-y-3 pt-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                            {t("create-account")}
                        </h2>
                    </div>

                    {/* Registration Form */}
                    <div className="">
                        <RegisterForm
                            usernameLabel={t("username-label")}
                            emailLabel={t("email-label")}
                            passwordLabel={t("password-label")}
                            confirmPasswordLabel={t("confirm-password-label")}
                            createAccountBtn={t("create-account-btn")}
                        />
                    </div>

                    {/* Login Link */}
                    <div className="flex items-center gap-2">
                        <p className="text-slate-600 dark:text-slate-400 text-sm ">
                            {t("have-an-account")}
                        </p>
                        <Link 
                            className="font-bold text-green-600" 
                            href="/login"
                        >
                            {t("login")}
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page