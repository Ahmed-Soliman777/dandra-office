import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary p-2 rounded-lg">
                                <span className="material-symbols-outlined text-xl">grid_view</span>
                            </div>
                            <h1 className="text-xl font-extrabold tracking-tight">Dandra Office</h1>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Connecting passionate collectors with master artisans worldwide. We believe in beauty that lasts
                            and stories that matter.
                        </p>
                        <div className="flex gap-4">
                            <Link className="size-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                                href="#">
                                <span className="material-symbols-outlined text-lg">public</span>
                            </Link>
                            <Link className="size-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                                href="#">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Shop</h5>
                        <ul className="flex flex-col gap-4 text-sm text-gray-500">
                            <li><Link className="hover:text-primary transition-colors" href="#">New Arrivals</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Best Sellers</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Artisan Stories</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Gift Cards</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Support</h5>
                        <ul className="flex flex-col gap-4 text-sm text-gray-500">
                            <li><Link className="hover:text-primary transition-colors" href="#">Shipping Policy</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Returns &amp; Exchanges</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Contact Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">FAQs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Newsletter</h5>
                        <p className="text-xs text-gray-500 mb-4">Join our community for exclusive early access and artisan
                            spotlights.</p>
                        <form className="flex gap-2">
                            <input
                                className="flex-1 bg-gray-50 dark:bg-gray-800 border-none rounded-lg py-2 px-4 text-sm focus:ring-primary"
                                placeholder="Your email" type="email" />
                            <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors">
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div
                    className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2024 Dandra Office. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link>
                        <Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer