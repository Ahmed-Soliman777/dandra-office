"use client"
import { usePathname } from "next/navigation";

const FooterWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    if (pathname.startsWith("/dashboard") || pathname === "/login" || pathname === "/register" || pathname === "/forget-password") return null

    return <>{children}</>
}

export default FooterWrapper