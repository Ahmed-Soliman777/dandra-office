import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* <!-- Breadcrumbs --> */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                    <Link className="hover:text-primary" href="#">Home</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <Link className="hover:text-primary" href="#">Handcrafted Goods</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-slate-900 dark:text-slate-200 font-medium">Sahara Leather Collection</span>
                </nav>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* <!-- Left Side: Gallery --> */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="aspect-4/5 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 group shadow-sm">
                            <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                data-alt="Main product shot of a high-end tan leather bag"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnFl80S9VCE8l6RB8-hC8d9QiQ6Exodgh00N2mrqbj1Ux_yzIMOp8iHJfPgms8uqEximnKXC9_Gjplw60bQW9UjSGC0QpM9TU779ZQboXPHEpVKxhS_2ZEDf_It7woFlyvqeZdwCHFMzMyg0W6iOt8fZP8LJ_BXQRO6k4QaL6PGK90GmUdBxN4luSxIs_qCvordQVgdr5o7fUDN4FxDTmQ2R7-h75w4zwo5Q4PzCevSSsNvcpr_fz7rYUNWM_YooyuqoMQoblCYsvk');" }}>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 border-2 border-primary overflow-hidden"
                                data-alt="Close up texture of the leather"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQgiJuHFQ5ZBlI7bO2GLNl-5foV5A86P_wSIoq2MvwNodpAe3EE-kwRgrfP1Ju5gJdw4VMqvEAw5_jBO1N-gzTlRfbdIcYg49FKfjlwC6xnAKj4xCV3RNKylQHo-iAj90-VuVxjbLycpmJ2Ht5aIi3UfpINkKiW-yMcanDIszL_Q-XpJQX6a6a92Vu8zELgTZXKzB7sLIWD2RecHB7gX6iTqCBkDend9YVdTEK4NG9Q_ArvBJ-h8pFbuqQtIp6oqM9SCL0GVw8yZiQ');" }}>
                            </div>
                            <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden"
                                data-alt="Side view of the handcrafted bag"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1bVUY-ZCiS-xn0LqwKGhIvbwVP0EJ7ACJX_CbTdiBhFCeESSlVjB2rgLstHrmYEobudHFRC2PvPrVkaZ6wJU8xoe6gS8Xy8Q6kheemCtobjj8cyW8aipVNzF4QF9D3vsv5qrgpho7H1OU0kism2-K_SAXYp94uqkR6ud9RaAXnd1VXIVVH_D6jVkpvs2TfZADkTmYyfs5DLC803lzEstjcWMgg7QrVpPRQEA7EyFAYSTUv7gA7cpntMiJUFRwCcjqnTeAZlnrzVT3');" }}>
                            </div>
                            <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden"
                                data-alt="Interior lining of the luxury bag"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvVUYmW3KtWlnTiQmTC1m1S3tABbRwKGdUQdH2qSAd472WiaWXouCCV0Cj1ZuSW_IJbu5UjIdysOjCy2oRKhqNfsXQWY9fx8JonshiF2X0BAsOGOn0ZzUiSZQ7wNh9yTw_EYrN4iSqgdgH0w55hgqBaNpHVRKhKIkJRlksdRBhTkQgOEAL_5AKUJHq5wFtqE59Nx-PlQWBRnlI_A5ujl752GITbq9X97aewi7WjnIqqZfLTNENGGGH0hwdZ95cJ6y_TpY8QXbG5UxR');" }}>
                            </div>
                            <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden"
                                data-alt="Artisan stitching detail of the strap"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAL3CC96ikEOTTN3aXolKsd3_c_M-UYtHccOpmlPgCt0MHlzwgJsWcEyhAZe_I4klsF49AJgK9UMLFsuyQ1Hf8wST6WkdNXECmtoa0SILRSDwmEmbG-8MyKLGwWObzghqv3XKgE_noajE7c9plza6lqR4_lHK1f3GrVesDiq_Q_YLAOFu_RSjU_xyOUu52n8n-eeLoAlPMa2Y6pp0yRACUuawh3Sdpucttvftbl8271vU2kHVBuQPGjMEBsuiVSFr_0UNM623mNlNua');" }}>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Right Side: Product Details --> */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span
                                    className="px-2 py-1 bg-accent-bronze/10 text-accent-bronze text-[10px] font-bold uppercase tracking-wider rounded">Limited
                                    Edition</span>
                                <span className="flex items-center gap-1 text-accent-bronze">
                                    <span className="material-symbols-outlined text-sm fill-accent-bronze">verified</span>
                                    <span className="text-xs font-bold">Certified Artisan</span>
                                </span>
                            </div>
                            <h2 className="text-4xl font-800 text-slate-900 dark:text-white leading-tight mb-1">Premium Handcrafted
                                Leather Bag</h2>
                            <h3 className="text-2xl font-semibold text-slate-400 dark:text-slate-500 mb-6" dir="rtl">حقيبة جلدية
                                فاخرة مصنوعة يدوياً</h3>
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-3xl font-800 text-primary">$249.00</span>
                                <span className="text-lg text-slate-400 line-through">$310.00</span>
                            </div>
                            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>This exquisite piece is forged from sustainable vegetable-tanned leather, sourced from
                                    family-run tanneries in Morocco. Every stitch tells a story of generation-old craftsmanship,
                                    blending timeless aesthetics with modern utility.</p>
                                <div
                                    className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-green-500">inventory_2</span>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-slate-100">In Stock</p>
                                            <p className="text-xs">Only 4 items remaining</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1">
                                        <button className="text-lg font-bold hover:text-primary">-</button>
                                        <span className="text-sm font-bold w-4 text-center">1</span>
                                        <button className="text-lg font-bold hover:text-primary">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto pt-8 flex gap-4">
                            <button
                                className="flex-1 bg-primary text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">shopping_bag</span>
                                Add to Cart
                            </button>
                            <button
                                className="w-16 h-full border-2 border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center hover:border-accent-bronze hover:text-accent-bronze transition-colors">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
                                <span className="material-symbols-outlined text-primary mb-2">public</span>
                                <p className="text-xs font-bold uppercase tracking-wide">Global Shipping</p>
                            </div>
                            <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
                                <span className="material-symbols-outlined text-primary mb-2">lock</span>
                                <p className="text-xs font-bold uppercase tracking-wide">Secure Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
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