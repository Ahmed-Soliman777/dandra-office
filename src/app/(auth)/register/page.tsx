import React from 'react'

const page = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#0c1d1d] dark:text-gray-100 transition-colors duration-300 min-h-screen flex items-center justify-center p-0">

            <div className="flex w-full min-h-screen">
                <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center"
                        data-alt="Close up of artisan hands working with clay on a pottery wheel"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSR-jvLUIjdVMP3FeVkgwEY3jqu7pvWoXrNmfCbDbBjJ4md6rLJk81OlV2yaIp8jP9dBsTHxHeGobAkze5Zjr_g87pmSMGD3i1Gp8-TPNIMjIzV6pQXm7Zrw_ArUpPUm20Bt0q5kTxn_uNWsNFt3qSZ7TaDdxquI9w21etkizQbGc-Geo1P3cgafkF9pO-18E3ZaBjuafKjkczjsBd5QTUbPVGXV5dsfLCDbAwCUEaBPcpb72703tQRCeJkGy3HTawa1EIGhOi0kKA');" }}>
                    </div>
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
                    <div className="relative z-10 flex flex-col justify-end p-16 text-white w-full">
                        <div className="bg-primary/40 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-lg">
                            <h2 className="text-4xl font-black mb-4">Join the Collective.</h2>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Become part of a global community connecting master artisans with collectors who appreciate the
                                soul behind every piece.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full lg:w-1/2 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-24 relative">
                    <div className="absolute top-8 left-8 lg:left-12">
                        <a className="flex items-center gap-3 group" href="#">
                            <div className="bg-primary text-white p-2 rounded-lg group-hover:shadow-lg transition-all">
                                <span className="material-symbols-outlined text-2xl">grid_view</span>
                            </div>
                            <h1 className="text-xl font-extrabold tracking-tight">Artisan Gallery</h1>
                        </a>
                    </div>
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-black text-[#0c1d1d] dark:text-white">Create Account</h2>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">Join our artisan marketplace today.</p>
                        </div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300"
                                        htmlFor="username">Username</label>
                                    <div className="relative group">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">person</span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                                            id="username" name="username" placeholder="Craftsman_99" type="text" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300" htmlFor="email">Email
                                        Address</label>
                                    <div className="relative group">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">mail</span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                                            id="email" name="email" placeholder="artisan@gallery.com" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300"
                                        htmlFor="password">Password</label>
                                    <div className="relative group">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">lock</span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                                            id="password" name="password" placeholder="••••••••" type="password" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300"
                                        htmlFor="confirm-password">Confirm Password</label>
                                    <div className="relative group">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">verified_user</span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                                            id="confirm-password" name="confirm-password" placeholder="••••••••"
                                            type="password" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 pt-2">
                                <div className="flex items-center h-5">
                                    <input className="size-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                                        id="terms" name="terms" type="checkbox" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                                    I agree to the <a className="text-primary font-bold hover:underline" href="#">Terms of
                                        Service</a> and <a className="text-primary font-bold hover:underline" href="#">Privacy
                                            Policy</a>.
                                </div>
                            </div>
                            <button
                                className="w-full py-4 bg-primary text-white font-black rounded-xl hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all"
                                type="submit">
                                Create Account
                            </button>
                        </form>
                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100 dark:border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-gray-900 px-4 text-gray-400 font-bold tracking-widest">Already
                                    have an account?</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="#">
                                Log in <span className="material-symbols-outlined text-sm">arrow_htmlForward</span>
                            </a>
                        </div>
                    </div>
                    <div className="absolute bottom-8 text-center w-full left-0 px-8">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2024 Artisan Gallery. Handcrafted
                            Digital Experience.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page