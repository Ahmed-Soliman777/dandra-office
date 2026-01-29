import ProductDetails from './ProductDetails'

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <main className="max-w-7xl mx-auto px-6 py-8">
                

                <ProductDetails id={id} />

                {/* <!-- Social Proof Section: Reviews & Comments --> */}
                <section className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16">
                    <div className="max-w-4xl">
                        <h3 className="text-3xl font-800 mb-12 flex items-center gap-4">
                            Community Reviews
                            <span className="text-slate-400 font-normal text-lg">(24 comments)</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            {/* <!-- Review Aggregate --> */}
                            <div className="md:col-span-4">
                                <div
                                    className="bg-primary/5 dark:bg-primary/10 p-8 rounded-2xl text-center border border-primary/10 sticky top-28">
                                    <p className="text-6xl font-800 text-primary mb-2">4.8</p>
                                    <div className="flex justify-center gap-1 mb-2 text-accent-bronze">
                                        <span className="material-symbols-outlined fill-accent-bronze">star</span>
                                        <span className="material-symbols-outlined fill-accent-bronze">star</span>
                                        <span className="material-symbols-outlined fill-accent-bronze">star</span>
                                        <span className="material-symbols-outlined fill-accent-bronze">star</span>
                                        <span className="material-symbols-outlined">star_half</span>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-500">Based on 124 verified reviews</p>
                                    <div className="mt-8 space-y-3">
                                        <div className="flex items-center gap-2 text-xs">
                                            <span className="w-2">5</span>
                                            <div
                                                className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div className="w-[85%] h-full bg-accent-bronze"></div>
                                            </div>
                                            <span className="w-8 text-right font-bold text-slate-400">85%</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs">
                                            <span className="w-2">4</span>
                                            <div
                                                className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div className="w-[10%] h-full bg-accent-bronze"></div>
                                            </div>
                                            <span className="w-8 text-right font-bold text-slate-400">10%</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs opacity-40">
                                            <span className="w-2">3</span>
                                            <div
                                                className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div className="w-[3%] h-full bg-accent-bronze"></div>
                                            </div>
                                            <span className="w-8 text-right font-bold text-slate-400">3%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Comment List --> */}
                            <div className="md:col-span-8 space-y-8">
                                {/* <!-- Individual Review --> */}
                                <div className="flex gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
                                    <div className="shrink-0">
                                        <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border-2 border-white dark:border-slate-900"
                                            data-alt="Reviewer profile photo"
                                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWYVv8HgT63q4h1kcztM2EdxQyPWCIm2U4vyFrUOYx1dMkHwhDUQy4f0TgjHoz2xqBAl8ofOhy6QWKU4MflwYD8FGjblM1XTmCeMVDTD8BapSu4no1SS3emksq4avdIk8zztq_HGuACWrfJ08vxlMq5jsZ5YZ0hTT98TfLV6njOfoqeQcrsN54efPAk5ZD9HzRznMMzrs0CSNZWVJ6g2g4FGjFaANpk7uTbPGka7FYWlsPQzMBemy_R-7S4PCYXYAxkNeZeiE0kjec');" }}>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100">Elena Petrov</h4>
                                            <span className="text-xs text-slate-400">2 days ago</span>
                                        </div>
                                        <div className="flex gap-0.5 text-accent-bronze text-sm">
                                            <span className="material-symbols-outlined text-[16px] fill-accent-bronze">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-accent-bronze">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-accent-bronze">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-accent-bronze">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-accent-bronze">star</span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">The quality of the
                                            leather is even better in person. You can really smell the authenticity of the
                                            material. The packaging was also exquisite. Truly a masterpiece.</p>
                                    </div>
                                </div>
                                {/* <!-- Individual Review 2 --> */}
                                <div className="flex gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
                                    <div className="shrink-0">
                                        <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border-2 border-white dark:border-slate-900"
                                            data-alt="Reviewer profile photo"
                                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfi2FM_k2pMVZ7LaBseahzx3veXUnATckvu3OrfkMPjt45igQqSB3ab4G38BkpM9MDf6v-VvB3UrScxWJBduKjnjWd8h8E0GGmhqGkEkULqrPao57u0gXh57VENwgTIzdhMXllEQsggSKuSygtz5JlCVD7r73fIwPqRbzCTnZxg-FseL-aUmZnOjgCKBAHKFY7uDFY1YRozTHpRy90lkda5XupmDL6-gEb_o38tlXKmAli6Huoli3EuSF7wrFlH3iP-Fsk10vpg4rm');" }}>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100">Omar Al-Sayed</h4>
                                            <span className="text-xs text-slate-400">1 week ago</span>
                                        </div>
                                        <div className="flex gap-0.5 text-accent-bronze text-sm">
                                            <span className="material-symbols-outlined text-[16px] fill-accent-bronze">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-accent-bronze">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-accent-bronze">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-accent-bronze">star</span>
                                            <span className="material-symbols-outlined text-[16px]">star</span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Elegant and
                                            practical. Fits my laptop perfectly and the strap is very comfortable for daily
                                            commute. Highly recommended for professionals looking for character.</p>
                                    </div>
                                </div>
                                {/* <!-- Add a Comment --> */}
                                <div className="pt-8">
                                    <h4 className="font-bold text-lg mb-4">Add your thoughts</h4>
                                    <div
                                        className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                                        <div className="flex gap-1 mb-4 text-slate-300">
                                            <span
                                                className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors">star</span>
                                            <span
                                                className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors">star</span>
                                            <span
                                                className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors">star</span>
                                            <span
                                                className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors">star</span>
                                            <span
                                                className="material-symbols-outlined cursor-pointer hover:text-accent-bronze transition-colors">star</span>
                                        </div>
                                        <textarea
                                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 mb-4"
                                            placeholder="What's your experience with this artisan piece?" rows={4}></textarea>
                                        <div className="flex justify-end">
                                            <button
                                                className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors">Post
                                                Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default page