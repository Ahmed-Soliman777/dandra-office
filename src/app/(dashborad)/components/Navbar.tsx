import { DOMAIN } from "@/app/utils/constants"
import axios from "axios"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { LogOut } from "lucide-react"

const Navbar = () => {

  const router = useRouter()
  const pathname = usePathname()

  async function handleLogout() {
    try {
      await axios.get(`${DOMAIN}/api/users/logout`)
      router.replace("/dashboard/login")
    } catch (error) {
      console.error(error);
      toast.error("فشل تسجيل الخروج حاول مرة أخرى")
    }
  }

  const navLinks = [
    { label: "لوحة التحكم", href: "/dashboard" },
    { label: "المنتجات", href: "/dashboard/manage-products" },
    { label: "التصنيفات", href: "/dashboard/manage-categories" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/dashboard" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">د</span>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white hidden sm:block">دندرة أوفيس</h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors font-medium text-sm"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">تسجيل خروج</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar