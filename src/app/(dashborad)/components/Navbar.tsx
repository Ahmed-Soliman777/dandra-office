import Link from "next/link"

const Navbar = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-[#f5f5f5] dark:bg-surface-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-6 lg:px-20 py-3">
      <div className="max-w-350 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold tracking-tight text-green-700">دندرة أوفيس</h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-sm font-semibold text-primary" href="/dashboard">لوحة التحكم</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
              href="/manage-products">المنتجات</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
              href="/manage-categories">التصنيفات</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary transition-colors" href="/manage-users">المستخدمين</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar