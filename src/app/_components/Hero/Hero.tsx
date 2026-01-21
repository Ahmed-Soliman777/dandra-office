
const Hero = () => {
    return (
        <div>
            <section className="px-6 lg:px-10 py-10">
                <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl shadow-primary/5">
                    <div className="flex flex-col lg:flex-row min-h-125">
                        <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center items-start gap-6">
                            <span
                                className="px-3 py-1 bg-accent-peach/30 text-primary text-xs font-bold uppercase tracking-widest rounded-full">New
                                Collection 2024</span>
                            <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] text-[#0c1d1d] dark:text-white">
                                Curated Excellence <br />For Your Home
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                                Experience the fusion of traditional craftsmanship and modern minimalism. Each piece tells a
                                story of heritage and quality.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <button
                                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
                                    Shop Collection
                                </button>
                                <button
                                    className="px-8 py-4 bg-white dark:bg-gray-700 text-[#0c1d1d] dark:text-white font-bold rounded-xl border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all">
                                    View Lookbook
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative min-h-75 lg:min-h-full">
                            <div
                                className="absolute inset-0 bg-center bg-cover"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHyMJd3C0Qlb3B5akLB59KnC_F3d_GI5aYoEZ9Jo-dqcB1PcDm61TGqidZL623vZpJI-KFBVQkJNeI2X0Rj9lW1vjIWlCEfwiQdU6G_n1gUAjgnUW5C_1wauuN-YpGtjyLJiSR1BnQFszP30ojtdrdrJWnwF6kQ5oB5hwEvPb1e8GelkdpCvykNvteUYA9588xCN1bg1nw1G4ptfRC6lFBQZxNILf-xndt7UUAmZZ3PwnxZDmpf---qWecx7qkvGS5RB_0g2-7Sy8t')" }}
                            >
                            </div>
                            <div className="absolute inset-0 bg-linear-to-r from-white lg:from-transparent to-transparent">
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Hero