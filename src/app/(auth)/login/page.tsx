import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#0c1d1d] dark:text-gray-100 min-h-screen flex items-stretch">

            <section className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHyMJd3C0Qlb3B5akLB59KnC_F3d_GI5aYoEZ9Jo-dqcB1PcDm61TGqidZL623vZpJI-KFBVQkJNeI2X0Rj9lW1vjIWlCEfwiQdU6G_n1gUAjgnUW5C_1wauuN-YpGtjyLJiSR1BnQFszP30ojtdrdrJWnwF6kQ5oB5hwEvPb1e8GelkdpCvykNvteUYA9588xCN1bg1nw1G4ptfRC6lFBQZxNILf-xndt7UUAmZZ3PwnxZDmpf---qWecx7qkvGS5RB_0g2-7Sy8t');" }}>
                    <div className="absolute inset-0 bg-primary/20 backdrop-multiply"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between p-12">
                    <Link className="flex items-center gap-3 text-white" href="/">
                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/30">
                            <span className="material-symbols-outlined text-2xl">grid_view</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight">Artisan Gallery</h1>
                    </Link>
                    <div className="max-w-md">
                        <h2 className="text-4xl font-bold text-white leading-tight mb-4">Crafting memories through timeless design.
                        </h2>
                        <p className="text-white/80 text-lg">Join our community of collectors and discover unique pieces that tell a
                            story of heritage and artisanal excellence.</p>
                    </div>
                    <div className="text-white/60 text-sm">
                        © 2024 Artisan Gallery. Handcrafted htmlFor the modern home.
                    </div>
                </div>
            </section>
            <main className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20 bg-white dark:bg-gray-900">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left">
                        <div className="lg:hidden flex justify-center mb-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary text-white p-2 rounded-lg">
                                    <span className="material-symbols-outlined text-2xl">grid_view</span>
                                </div>
                                <h1 className="text-xl font-extrabold tracking-tight">Artisan Gallery</h1>
                            </div>
                        </div>
                        <h2 className="text-3xl font-extrabold text-[#0c1d1d] dark:text-white tracking-tight">Welcome Back</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Please enter your details to sign in to your account.
                        </p>
                    </div>
                    <form action="#" className="space-y-6" method="POST">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <span
                                    className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail</span>
                                <input
                                    className="block w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary transition-all"
                                    id="email" placeholder="name@example.com" required type="email" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <span
                                    className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">lock</span>
                                <input
                                    className="block w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary transition-all"
                                    id="password" placeholder="••••••••" required type="password" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" id="remember-me"
                                    name="remember-me" type="checkbox" />
                                <label className="ml-2 block text-sm text-gray-700 dark:text-gray-400" htmlFor="remember-me">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a className="font-bold text-primary hover:text-primary/80 transition-colors" href="#">
                                    htmlForgot Password?
                                </a>
                            </div>
                        </div>
                        <button
                            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-extrabold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-[0.98]"
                            type="submit">
                            Sign In
                        </button>
                    </form>
                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white dark:bg-gray-900 text-gray-500">Or continue with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-bold">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"></path>
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"></path>
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"></path>
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                                    fill="#EA4335"></path>
                            </svg>
                            Google
                        </button>
                        <button
                            className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-bold">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.63.75 3.34 1.79-3.11 1.86-2.62 6.13.53 7.39-.63 1.58-1.5 3.12-2.52 4.09zM12.03 7.25c-.02-2.23 1.51-4.07 3.5-4.25.19 2.29-1.89 4.29-3.5 4.25z">
                                </path>
                            </svg>
                            Apple
                        </button>
                    </div>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Don&apos;t have an account?
                        <a className="font-extrabold text-primary hover:text-primary/80 transition-colors" href="#">Create an
                            account</a>
                    </p>
                </div>
            </main>


        </div>
    )
}

export default page