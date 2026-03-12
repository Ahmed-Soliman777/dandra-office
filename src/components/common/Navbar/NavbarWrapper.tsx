"use client"
import { usePathname } from "next/navigation"

const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    if (pathname === "/forget-password" || pathname === "/login" || pathname === "/register" || pathname.startsWith("/dashboard")) return null

    return <>{children}</>
}

export default NavbarWrapper