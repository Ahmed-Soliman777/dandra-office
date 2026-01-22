const Navbar = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-6 lg:px-20 py-3">
      <div className="max-w-350 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg text-white">
              <span className="material-symbols-outlined">brush</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight">Artisan Gallery Admin</h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-sm font-semibold text-primary" href="#">Dashboard</a>
            <a className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
              href="#">Products</a>
            <a className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
              href="#">Categories</a>
            <a className="text-sm font-medium text-gray-500 hover:text-primary transition-colors" href="#">Users</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
            <input
              className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary w-64"
              placeholder="Search inventory..." type="text" />
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-cover bg-center ring-2 ring-primary/20" data-alt="Admin user avatar"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrCeqAprtp-BG5gkN0YCqsS79d1YF5fYJwZNB2355rPLNGnG6TnkIaFhMiWS_7YiSPLSAisDV6eklsR66v7UwNrJjkcFfdiw-amFuMxm6XZ4Q4hubJgmhnnC3TGAURsXKhNZYtMcDYwPDl6vFy5vvwI7QCWBz9OZGV7WLZgyyIChVOiahNn2SBuCM0eXhQE4C6R9hZEDastEY7OUyjpxHsPe5NbcNDFYS_LJcoIO3t4q9fMoHFEGQzYhuknDf3P-LkZ-jnmJHaCDDZ')" }}>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar