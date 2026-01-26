import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
            <main className="max-w-1440px mx-auto px-6 lg:px-12 py-10">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* <!-- Sidebar Navigation --> */}
                    <aside className="w-full lg:w-72 shrink-0">
                        <div className="sticky top-28 space-y-8">
                            <div>
                                <h1 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Account Settings
                                </h1>
                                <nav className="space-y-1">
                                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-all group"
                                        href="#">
                                        <span className="material-symbols-outlined group-hover:text-primary">person</span>
                                        <span className="font-medium">Profile Settings</span>
                                    </Link>
                                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-all group"
                                        href="#">
                                        <span className="material-symbols-outlined group-hover:text-primary">package_2</span>
                                        <span className="font-medium">Order History</span>
                                    </Link>
                                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary transition-all"
                                        href="#">
                                        <span className="material-symbols-outlined filled-icon">favorite</span>
                                        <span className="font-bold">My Favorites</span>
                                    </Link>
                                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-all group"
                                        href="#">
                                        <span className="material-symbols-outlined group-hover:text-primary">reviews</span>
                                        <span className="font-medium">My Reviews</span>
                                    </Link>
                                </nav>
                            </div>
                            <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20">
                                <p className="text-accent text-sm font-bold mb-2">Member Rewards</p>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">You have 450 points
                                    to spend on your next artisan purchase.</p>
                                <button className="text-xs font-bold underline text-accent decoration-2">View Rewards</button>
                            </div>
                        </div>
                    </aside>
                    {/* <!-- Main Content Area --> */}
                    <section className="flex-1">
                        {/* <!-- Heading --> */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                            <div>
                                <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">My Favorites
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                    <span className="font-bold text-primary">12 Items</span> curated in your collection
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-bold hover:bg-slate-50 transition-colors">
                                    <span className="material-symbols-outlined text-lg">share</span>
                                    Share List
                                </button>
                                <button
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-red-50 hover:text-red-600 transition-all">
                                    <span className="material-symbols-outlined text-lg">delete_sweep</span>
                                    Clear All
                                </button>
                            </div>
                        </div>
                        {/* <!-- Product Grid --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {/* <!-- Card 1 --> */}
                            <div
                                className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden ambient-shadow card-hover transition-all duration-300">
                                <div className="relative aspect-4/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        data-alt="Handcrafted leather tote bag"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-NKJpUwTnp6D87ptNOknlqI7IeGK8F3i2mJ5pIMg84OkUv-oE4namxR8NCp16vd4kq5GeMSe9Az4-KuGUj7Ujl1uSSnMRd3TZwGIyOZfKz5dd7KnP2iOjyL-Wb0RIEBTaP_3UZZzooE6T6zHkiYcJx1QQLQdbditP0WFfZbhsg1QDoqkApq2zQNIDcILqMOcCyMbomzKRlDBPIooiuKPv6MTtmFbFOn-zSdYMpuIij-asMEH2WVG1GQhHkVhFm41ZdFbluDzfaqfi');" }}>
                                    </div>
                                    <button
                                        className="absolute top-4 right-4 size-10 flex items-center justify-center bg-white/90 backdrop-blur rounded-full text-primary shadow-lg hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined filled-icon">favorite</span>
                                    </button>
                                    <div
                                        className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                        In Stock</div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">Leather
                                                Goods</p>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                                                Handcrafted Leather Tote</h3>
                                        </div>
                                        <p className="text-xl font-black text-primary">$120</p>
                                    </div>
                                    <div className="flex items-center gap-1 mb-6">
                                        <span className="material-symbols-outlined text-accent text-sm filled-icon">star</span>
                                        <span className="text-sm font-bold">4.8</span>
                                        <span className="text-xs text-slate-400 ml-1">(120 reviews)</span>
                                    </div>
                                    <div className="mt-auto grid grid-cols-5 gap-2">
                                        <button
                                            className="col-span-4 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                            Add to Cart
                                        </button>
                                        <button
                                            className="col-span-1 bg-slate-100 dark:bg-slate-700 flex items-center justify-center rounded-lg text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card 2 --> */}
                            <div
                                className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden ambient-shadow card-hover transition-all duration-300">
                                <div className="relative aspect-4/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        data-alt="Minimalist ceramic vase set"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnqhW9YFSxYQTc9waxnGmssCtcKHsxLp0yMo8e-3n4FywLAURK6W0vPeFiMiF5C7duG7a5CclcU0ZF4sEbI1YMn8JkHqzEaF8dtpvcf8BK6n5wMMeRxZ73psZIJ7aMjNuTbPdgGuBOLOGTLkp_E4CVbZYqPufmndAnEMDrmUhycXcFyj_9qmpuR_TqreuX6yLe73ynyQsmn_gEPrs8AE3YEZtYdCd_-mAfCX7rlDG55X-WT-SQhfQGyPFNXCuAH6bqwa-WhG1lUCL2');" }}>
                                    </div>
                                    <button
                                        className="absolute top-4 right-4 size-10 flex items-center justify-center bg-white/90 backdrop-blur rounded-full text-primary shadow-lg">
                                        <span className="material-symbols-outlined filled-icon">favorite</span>
                                    </button>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">Ceramics
                                            </p>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Ceramic
                                                Vase Set</h3>
                                        </div>
                                        <p className="text-xl font-black text-primary">$85</p>
                                    </div>
                                    <div className="flex items-center gap-1 mb-6">
                                        <span className="material-symbols-outlined text-accent text-sm filled-icon">star</span>
                                        <span className="text-sm font-bold">4.9</span>
                                        <span className="text-xs text-slate-400 ml-1">(85 reviews)</span>
                                    </div>
                                    <div className="mt-auto grid grid-cols-5 gap-2">
                                        <button
                                            className="col-span-4 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                            Add to Cart
                                        </button>
                                        <button
                                            className="col-span-1 bg-slate-100 dark:bg-slate-700 flex items-center justify-center rounded-lg text-slate-500 hover:text-red-500 transition-all">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card 3 --> */}
                            <div
                                className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden ambient-shadow card-hover transition-all duration-300">
                                <div className="relative aspect-4/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        data-alt="Silk patterned scarf"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8FxdPuQxTqh37wd1qcfgV0h3H5vi0YRc9AFYtaVsXcw1GtiRY4aL5zAuK0Db0AsZY4AmEYDdOq9PdOpz8MmPLj5uh3sOSdNjqCxTEZerwmHD7MQPYYEufSDKPyNdBJdfkutJxILQFfpLupWhDioW16-TIz2Rbwl4VNz3lrdQHid4lgAsX4yCjvqKRs5-bS4e0EOxFCZPkdqOtV3ooCAwJg9ZxB1dBKUekifxYepLpjNXpu-cO2d_y8wqQcaqfwyYsLWi56G8TvpcO');" }}>
                                    </div>
                                    <button
                                        className="absolute top-4 right-4 size-10 flex items-center justify-center bg-white/90 backdrop-blur rounded-full text-primary shadow-lg">
                                        <span className="material-symbols-outlined filled-icon">favorite</span>
                                    </button>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">
                                                Accessories</p>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Silk
                                                Patterned Scarf</h3>
                                        </div>
                                        <p className="text-xl font-black text-primary">$45</p>
                                    </div>
                                    <div className="flex items-center gap-1 mb-6">
                                        <span className="material-symbols-outlined text-accent text-sm filled-icon">star</span>
                                        <span className="text-sm font-bold">4.7</span>
                                        <span className="text-xs text-slate-400 ml-1">(64 reviews)</span>
                                    </div>
                                    <div className="mt-auto grid grid-cols-5 gap-2">
                                        <button
                                            className="col-span-4 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                            Add to Cart
                                        </button>
                                        <button
                                            className="col-span-1 bg-slate-100 dark:bg-slate-700 flex items-center justify-center rounded-lg text-slate-500 hover:text-red-500 transition-all">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card 4 --> */}
                            <div
                                className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden ambient-shadow card-hover transition-all duration-300">
                                <div className="relative aspect-4/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        data-alt="Handcrafted oak chair"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtBO7ml0phMm2mBGSwYWo3j25Rwsxf7BSKlwSD8NtwfEN5S79xxwhjIg7zSUd7gCgHXDRI5_u3hrjsH_uydybWQZZ7HL0ooKrZJ4VCAWS1wD68Qrmb0t1bZQJ0oy6d30MczC8obZQefsrIU1mGhB3jMaF3P2VKAEkR3gV_B39ZK969eFIvmZ76QtP3kK4jewtPYgKEJ-_j7y4b7JNJOgduyFqaaBl14_Oj1JWEH2r-ax0cO_F_Hp3jagRru8EO8B5YWDCHXAw_VFn7');" }}>
                                    </div>
                                    <button
                                        className="absolute top-4 right-4 size-10 flex items-center justify-center bg-white/90 backdrop-blur rounded-full text-primary shadow-lg">
                                        <span className="material-symbols-outlined filled-icon">favorite</span>
                                    </button>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">Furniture
                                            </p>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                                                Minimalist Oak Chair</h3>
                                        </div>
                                        <p className="text-xl font-black text-primary">$210</p>
                                    </div>
                                    <div className="flex items-center gap-1 mb-6">
                                        <span className="material-symbols-outlined text-accent text-sm filled-icon">star</span>
                                        <span className="text-sm font-bold">5.0</span>
                                        <span className="text-xs text-slate-400 ml-1">(32 reviews)</span>
                                    </div>
                                    <div className="mt-auto grid grid-cols-5 gap-2">
                                        <button
                                            className="col-span-4 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                            Add to Cart
                                        </button>
                                        <button
                                            className="col-span-1 bg-slate-100 dark:bg-slate-700 flex items-center justify-center rounded-lg text-slate-500 hover:text-red-500 transition-all">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card 5 --> */}
                            <div
                                className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden ambient-shadow card-hover transition-all duration-300">
                                <div className="relative aspect-4/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        data-alt="Abstract wall art"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7iWJq2eyMfWnlnOlxTaKkwdAVdMZAzzqTieuKQlNeqfkqqP8v1Ub0-FU1FzQFH2VcJwYPE2fd_JJiJIqIlARlNJ8aT9g8eNgfC4972TuMV25oLjT-8nNXMZREIpwdQNLKZmdJrA1VdIwWR4Jekad-zMwY7xv8rTQjHqZn7D1OEcjo3RZ6oHJKDoPnKmaei_TAxbUha9uFklJzkcy62FByb07S9AIHCH_DQd3YoTqYpQ5_UKndHbTonp3vumL4Xu8dnjlSqPz4PfTA');" }}>
                                    </div>
                                    <button
                                        className="absolute top-4 right-4 size-10 flex items-center justify-center bg-white/90 backdrop-blur rounded-full text-primary shadow-lg">
                                        <span className="material-symbols-outlined filled-icon">favorite</span>
                                    </button>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">Decor</p>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Abstract
                                                Canvas Art</h3>
                                        </div>
                                        <p className="text-xl font-black text-primary">$150</p>
                                    </div>
                                    <div className="flex items-center gap-1 mb-6">
                                        <span className="material-symbols-outlined text-accent text-sm filled-icon">star</span>
                                        <span className="text-sm font-bold">4.6</span>
                                        <span className="text-xs text-slate-400 ml-1">(15 reviews)</span>
                                    </div>
                                    <div className="mt-auto grid grid-cols-5 gap-2">
                                        <button
                                            className="col-span-4 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                            Add to Cart
                                        </button>
                                        <button
                                            className="col-span-1 bg-slate-100 dark:bg-slate-700 flex items-center justify-center rounded-lg text-slate-500 hover:text-red-500 transition-all">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card 6 --> */}
                            <div
                                className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden ambient-shadow card-hover transition-all duration-300">
                                <div className="relative aspect-4/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        data-alt="Scented organic soy candle"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpvHd2oxu9sBEMivBdOEpGutus2vVwDKYr3EQaB7COcOkQbMrnBkaCvHbfjoo-XIyk4rOfjCIi_uaX-mpbXY-3F6Rx9EGH5wxtOmSGWynSQZytDgTmQGeMpLF9-EmzvumfeEK0015p6rd8j2Z2eYL3sSe3H9PMoIc22FhINwAWxnz6iKqAavmuYCpI2Q805Dl2cJYcCF95qixot-TZefmXXAj7aC33nA_gxVMj_jxs3KEKa0vorPrraACAFR3gFIYBM8oFh3U7jzpD');" }}>
                                    </div>
                                    <button
                                        className="absolute top-4 right-4 size-10 flex items-center justify-center bg-white/90 backdrop-blur rounded-full text-primary shadow-lg">
                                        <span className="material-symbols-outlined filled-icon">favorite</span>
                                    </button>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">Lifestyle
                                            </p>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Organic
                                                Soy Candle</h3>
                                        </div>
                                        <p className="text-xl font-black text-primary">$25</p>
                                    </div>
                                    <div className="flex items-center gap-1 mb-6">
                                        <span className="material-symbols-outlined text-accent text-sm filled-icon">star</span>
                                        <span className="text-sm font-bold">4.8</span>
                                        <span className="text-xs text-slate-400 ml-1">(90 reviews)</span>
                                    </div>
                                    <div className="mt-auto grid grid-cols-5 gap-2">
                                        <button
                                            className="col-span-4 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                            Add to Cart
                                        </button>
                                        <button
                                            className="col-span-1 bg-slate-100 dark:bg-slate-700 flex items-center justify-center rounded-lg text-slate-500 hover:text-red-500 transition-all">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Load More / Pagination --> */}
                        <div className="mt-16 flex justify-center">
                            <button
                                className="flex items-center gap-3 px-10 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-bold text-slate-700 dark:text-slate-200 hover:shadow-xl transition-all">
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                Load More Curated Items
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div >
    )
}

export default page