import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import LoginImage from '../../../../public/login-img.jpg';
import LoginForm from './LoginForm';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function page() {
    const copyRightYear = new Date().getFullYear();
    const t = await getTranslations("LoginPage");
    const token = (await cookies()).get("token")?.value
    if (token) {
        redirect("/")
    }
    return (
        <div className="bg-white dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-stretch" dir='rtl'>

            <section className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center">
                    <Image src={LoginImage} alt={"login-img"} fill className="object-cover" />
                    <div className="absolute inset-0 bg-primary/20 backdrop-multiply"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between p-12">
                    <Link className="flex items-center gap-3 text-white" href="/">
                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/30">
                            <span className="text-2xl font-bold">Logo</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight">Dandra Office</h1>
                    </Link>
                    <div className="max-w-md bg-black/50 rounded-xl py-6 px-7 backdrop-blur-sm">
                        <h2 className="text-4xl font-bold text-white leading-tight mb-4">
                            {t("login-page-title-overlay")}
                        </h2>
                        <p className="text-white/80 text-lg">{t("login-page-paragraph-overlay")}</p>
                    </div>
                    <div className="text-white/60 text-sm">
                        © {copyRightYear} {t('login-page-copy-right')}
                    </div>
                </div>
            </section>


            <main className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20 bg-white dark:bg-slate-900">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-right lg:text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                            {t("login-page-welcome")} 👋
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">
                            {t("login-page-enter-data")}
                        </p>
                    </div>

                    <LoginForm
                        loginWelcome={t("login-page-welcome")}
                        emailLabel={t("login-page-email-label")}
                        passwordLabel={t("login-page-password-label")}
                        rememberLabel={t("login-page-remember")}
                        forgetPassword={t("login-page-forget-password")}
                        submitButton={t("login-page-welcome")}
                    />

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-medium">
                                {t("login-page-login-via")}
                            </span>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-bold text-slate-900 dark:text-white">
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-bold">
                            Apple
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        {t("login-page-dont-have-account")}
                        <Link className="font-extrabold text-primary hover:text-primary/80 transition-colors mx-2.5" href={"/register"}>
                            {t("login-page-create-account")}
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}