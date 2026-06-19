import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import LoginImage from '../../../../public/login-img.jpg';
import LoginForm from '@/components/features/auth/login/LoginForm';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { ArrowLeft } from 'lucide-react';

export default async function page() {
    const copyRightYear = new Date().getFullYear();
    const t = await getTranslations("LoginPage");
    const token = (await cookies()).get("token")?.value
    if (token) {
        redirect("/")
    }
    return (
        <div className="bg-white dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-stretch overflow-hidden" dir='rtl'>

            {/* Left Side - Hero Image Section (Desktop Only) */}
            <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-linear-to-br from-green-600 via-green-700 to-teal-900">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image 
                        src={LoginImage} 
                        alt="login-illustration" 
                        fill 
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
                        <div className="flex flex-col">
                            <h1 className="text-lg lg:text-xl font-extrabold tracking-tight">دندرة أوفيس</h1>
                        </div>
                    </Link>

                    {/* Main Message */}
                    <div className="max-w-sm">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                {t("login-page-title-overlay")}
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                {t("login-page-paragraph-overlay")}
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-white/60 text-xs">
                        <span>© {copyRightYear} {t('login-page-copy-right')}</span>
                    </div>
                </div>
            </section>

            {/* Right Side - Login Form Section */}
            <main className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 bg-white dark:bg-slate-900 overflow-y-auto">
                <div className="w-full max-w-sm space-y-8">
                    
                    {/* Mobile Header Logo */}
                    <Link 
                        className="flex lg:hidden items-center gap-2 text-green-600 dark:text-green-400 hover:opacity-80 transition-opacity w-fit" 
                        href="/"
                    >
                        <div>
                            <h1 className="text-lg font-extrabold tracking-tight">دندرة أوفيس</h1>
                        </div>
                    </Link>

                    {/* Section Header */}
                    <div className="space-y-3 pt-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                            {t("login-page-welcome")} 
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                            {t("login-page-enter-data")}
                        </p>
                    </div>

                    {/* Login Form */}
                    <div className="pt-4">
                        <LoginForm
                            loginWelcome={t("login-page-welcome")}
                            emailLabel={t("login-page-email-label")}
                            passwordLabel={t("login-page-password-label")}
                            rememberLabel={t("login-page-remember")}
                            forgetPassword={t("login-page-forget-password")}
                            submitButton={t("login-page-welcome")}
                        />
                    </div>

                    {/* Sign Up Link */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-center text-slate-600 dark:text-slate-400 text-sm mb-4">
                            {t("login-page-dont-have-account")}
                        </p>
                        <Link 
                            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 rounded-xl font-bold hover:bg-green-50 dark:hover:bg-green-900/10 transition-all active:scale-95" 
                            href="/register"
                        >
                            {t("login-page-create-account")}
                            <ArrowLeft size={18} />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}