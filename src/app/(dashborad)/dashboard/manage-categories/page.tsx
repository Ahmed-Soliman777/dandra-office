const page = () => {
    return (
        <>
            <main className="flex-1 flex flex-col overflow-y-auto">
                <div className="p-8">
                    {/* <!-- Breadcrumbs & Heading --> */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                        <div>
                            <nav className="flex gap-2 text-sm font-medium text-primary/60 mb-2">
                                <a className="hover:text-primary transition-colors" href="#">Admin</a>
                                <span>/</span>
                                <span className="text-primary">Categories</span>
                            </nav>
                            <h2 className="text-4xl font-black tracking-tight leading-tight">Category Management</h2>
                            <p className="text-primary/70 mt-1">Organize your store structure and linked products.</p>
                        </div>
                        <button
                            className="flex items-center justify-center gap-2 bg-primary px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">
                            <span className="material-symbols-outlined">add_circle</span>
                            Add New Category
                        </button>
                    </div>
                    {/* <!-- Category Grid --> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* <!-- Category Card 1 --> */}
                        <div
                            className="group bg-white dark:bg-[#142d2d] rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-background-light dark:bg-background-dark">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Electronics category thumbnail image showing modern gadgets"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC9iaEuzlkoNef3_Ntm0OpbQDmFRZLzw0Esra9210EiHYGjylpouHWiqBbmE3Wih0PN4a_KZ13PD4oXDhDFeTvg3FTMt3boo6PYsSEEY10VfkXXPoj_Yt899MaelVuhnDi5Q64WJOPu4PvmGKKeqT6GWVqoKOgJ_1nf1rWUNMqsne8O6VQ3EuN8QVG0UzihS6NcotXU2V7lZ1Yz_b7Qfig8uNYSookd0Ysi4d5tRyKw0AF3YSyatpoh6l-78sV6rxoPEnhnh10UA8i')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-xs font-bold bg-primary px-2 py-1 rounded">124 Items</span>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold">Electronics</h3>
                                    <p className="text-primary text-sm font-medium" dir="rtl">إلكترونيات</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between gap-2">
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold text-primary/60 hover:text-primary transition-colors"
                                        title="View Products">
                                        <span className="material-symbols-outlined text-lg">link</span>
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Category Card 2 --> */}
                        <div
                            className="group bg-white dark:bg-[#142d2d] rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-background-light dark:bg-background-dark">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Fashion category thumbnail showing clothes on hangers"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLcAfdT8102QC7T7Akup5uKsUWTX3qqywhOgBUsK5T4CF4J72vUTX_y4nJ2vH6fXaAZQRyDt-n83lDyTiazkn-tO7xS6UJB4CnbtWwmznBhrolJ5Sf017vUsy89QAFGUqcJzSroiwo0-oQvl_6sPo0jOjC1Xa5d5qRhr3kiDJrhpUFtpMFpTBVqWJfaNsrwDlM53IK0XOaD-A50pTOtFe09su4y10OzTzJZFD7IMIrHchtC0ECIsjC_x1GcI6O1vc5vTNLKycVSX9E')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-xs font-bold bg-primary px-2 py-1 rounded">85 Items</span>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold">Fashion</h3>
                                    <p className="text-primary text-sm font-medium" dir="rtl">موضة</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between gap-2">
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold text-primary/60 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">link</span>
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Category Card 3 --> */}
                        <div
                            className="group bg-white dark:bg-[#142d2d] rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-background-light dark:bg-background-dark">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Home Decor thumbnail showing a minimalist living room"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1PL2rv0Ar0I9H9KDMZ7pgySh1he8GPT3NSqcDGbJsogvEbx5e6pi35OxypG_eJeLZdwlEQJDJcbAwxG7q-MxTn5ycxxj4YBr3yIUpfyntdN6VmHC6WvKKFg1iJ6adV-EfvpTxZoPpUc0p9a60TtHJjVRdVkjl4iNuuahQx_lndrI5OEKYtoKugE63nW-p7dW7Gmv6C2XQnNoYRJuYm4r8ASgc0WypfaBLHsUKgQLOmwFF7x_wwEYYs4yKQoMZXLVvvBIfPL37pL6_')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-xs font-bold bg-primary px-2 py-1 rounded">62 Items</span>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold">Home Decor</h3>
                                    <p className="text-primary text-sm font-medium" dir="rtl">ديكور المنزل</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between gap-2">
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold text-primary/60 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">link</span>
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Category Card 4 --> */}
                        <div
                            className="group bg-white dark:bg-[#142d2d] rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-background-light dark:bg-background-dark">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Beauty products thumbnail showing luxury cosmetics"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEucIXoUrC563689jJBCPSoCQoA73tI2uN9hyjNhMpHP5_VHlpIfJ9qtMjCr4iUeoUKNYWi3hSl7e4iLs59WxzOWdvIYUsLjse-qrDqiFT0hw3QrwoTTfx9WjEZiIJ2ZJFh568nHj7pgNya_lHnOFtdvg8NAckdbnI9_P1aARHJqp66qhhZSVw9cOilc7HE2s6V0MjyZPbfkeviirlYNxI7eCZKOSRuL9by3V4TqzXo1K1b91kysEykm6H3IfE048kHAFYR99LN5Ur')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-xs font-bold bg-primary px-2 py-1 rounded">45 Items</span>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold">Beauty</h3>
                                    <p className="text-primary text-sm font-medium" dir="rtl">جمال</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between gap-2">
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold text-primary/60 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">link</span>
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Category Card 5 --> */}
                        <div
                            className="group bg-white dark:bg-[#142d2d] rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-background-light dark:bg-background-dark">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Sports equipment thumbnail showing basketball and sneakers"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD-Zs4mDe4MSgfnaLW5TVKwWibL2NURE8t5LfkqgkLO8_teLt3_eBOsadITnHUNLFoZTiulkt-w9I7USt3q8g3_wYjYhU74fMOaO4bqMCeudOQFtJGW3dmPeVIq8qEWgb-cpYbyX94nh6IbNm1-Oz-q7tjMHO9ZFC59g5EeEsE-7Pde39nt8iIuPDoZK-P4uuYHhLaJIqAkuTaF349FIz9BlDUsp-2KSmhvLLDohjDMKqNmSlIUNGucd9RkNu-aw1Pj9OLjWO6OT59')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-xs font-bold bg-primary px-2 py-1 rounded">38 Items</span>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold">Sports</h3>
                                    <p className="text-primary text-sm font-medium" dir="rtl">رياضة</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between gap-2">
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold text-primary/60 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">link</span>
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Category Card 6 --> */}
                        <div
                            className="group bg-white dark:bg-[#142d2d] rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-background-light dark:bg-background-dark">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Groceries thumbnail showing fresh fruits and vegetables"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqV2JTrdxTABj05mYPBvBAZcSiDqTTfATTk43RhJ2fCj2rAlbFcrQS9PlQW2hDfRYNQ4uIkvgz59ShoklDfgZ_DUN7kGpzR-XFy9XtEf5MBM58KUbXniQbOC2fWKVciPm6uRRaY-NguQzPYp40EEXQ3Ivrhy6JIIsjfz_BawL8F6QROpMqhLK1ypjUuSd_CMEgUvw53-RMgFepoV8PbrMOKVUAcaJv20OIcxxyO4kWgo9bsK80Qtky3ucBagc6I0RzcPZRi39ndLax')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-xs font-bold bg-primary px-2 py-1 rounded">112 Items</span>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold">Groceries</h3>
                                    <p className="text-primary text-sm font-medium" dir="rtl">بقالة</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between gap-2">
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold text-primary/60 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">link</span>
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Category Card 7 --> */}
                        <div
                            className="group bg-white dark:bg-[#142d2d] rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-background-light dark:bg-background-dark">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Toys category thumbnail showing wooden toy blocks"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp0_I1WtAtqcY20qwryyxvCZra0i50AeqUZN8x3RIQsH0H1f-n6ThDV2svnbepNaHSkATato9LHZQIUK4zq6mDw6rqwfHrFd6UncwGxjPgggjFk1NuxZ11sQLBy58e_Fk7abgZcOcpRXmwCveWHRueu0IOspD222FGaJ2YTfadLqEcQ6gQQr2AQ0_MCNgGQiHkzWHMFk7TZb-jgQ0M6CqecXpF1ck7HgsINAtCbj0un1MY3jwHmqAdeY55t3bhkMScgMYOsJBO8G0v')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-xs font-bold bg-primary px-2 py-1 rounded">54 Items</span>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold">Toys</h3>
                                    <p className="text-primary text-sm font-medium" dir="rtl">ألعاب</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between gap-2">
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold text-primary/60 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">link</span>
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Category Card 8 --> */}
                        <div
                            className="group bg-white dark:bg-[#142d2d] rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-background-light dark:bg-background-dark">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Automotive parts category thumbnail showing car engine detail"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiUiESD0rn9q9n2kx6NbLP-PgNh9VZ5Imb6O-lglw9UC3fMFpcVqf6sNa2lswSRx7GCbluBL1cY-JPyp8bmYqPTmziMIucbjT4suXjeLv-wPTAWG5NPy2a2U0RwY2rRON94VUSdjwZJc8qFhg98vFMxWnW6Ns9JAjuWX4xhWXjw7himFXB43EQEUONNontGMD--bKVW9aDVIBW7VhwmGRE1aJlioN2QBpJaFGy3WwkYHVdOhSLh1jb4P3DdlBapuIJAB_GMEFXlj_4')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-xs font-bold bg-primary px-2 py-1 rounded">22 Items</span>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold">Automotive</h3>
                                    <p className="text-primary text-sm font-medium" dir="rtl">سيارات</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between gap-2">
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-bold text-primary/60 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">link</span>
                                        Products
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Empty State (Hidden by default) --> */}
                    <div className="hidden flex-col items-center justify-center py-20 text-center">
                        <div
                            className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                            <span className="material-symbols-outlined text-5xl">category</span>
                        </div>
                        <h3 className="text-xl font-bold">No Categories Found</h3>
                        <p className="text-primary/60 mb-6">Start by adding your first product category.</p>
                        <button
                            className="bg-primary text-white px-6 py-2 rounded-xl font-bold hover:bg-primary/90 transition-all">Add
                            Category</button>
                    </div>
                </div>
            </main>
            {/* modal */}
            <div className="fixed inset-0 z-50  items-center justify-center p-4 bg-black/50 backdrop-blur-sm hidden">
                <div className="bg-white dark:bg-[#142d2d] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-6 border-b border-primary/10 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Add New Category</h3>
                        <button className="text-primary/40 hover:text-primary">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        {/* <!-- Image Upload --> */}
                        <div>
                            <label className="block text-sm font-bold text-primary/80 mb-2">Category Thumbnail</label>
                            <div
                                className="border-2 border-dashed border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:border-primary/40 transition-colors cursor-pointer bg-background-light/50 dark:bg-background-dark/50">
                                <span className="material-symbols-outlined text-4xl text-primary/40">cloud_upload</span>
                                <div className="text-center">
                                    <p className="text-sm font-medium">Click to upload or drag &amp; drop</p>
                                    <p className="text-xs text-primary/40">PNG, JPG or WEBP (Max 2MB)</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Input Fields --> */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-primary/80 mb-1">Category Name (English)</label>
                                <input
                                    className="w-full bg-background-light dark:bg-primary/10 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all placeholder:text-primary/30"
                                    placeholder="e.g. Home Decor" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary/80 mb-1 text-right" dir="rtl">اسم الفئة
                                    (بالعربية)</label>
                                <input
                                    className="w-full bg-background-light dark:bg-primary/10 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all placeholder:text-primary/30 font-medium"
                                    dir="rtl" placeholder="مثال: ديكور المنزل" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-background-light/50 dark:bg-background-dark/50 flex gap-3">
                        <button
                            className="flex-1 px-4 py-3 text-sm font-bold text-primary/60 hover:text-primary transition-colors">Cancel</button>
                        <button
                            className="flex-2 bg-primary text-white px-4 py-3 rounded-xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 active:scale-95 transition-all">Create
                            Category</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page