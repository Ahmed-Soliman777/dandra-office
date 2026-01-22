"use client"
import { usePathname } from "next/navigation"
import Navbar from "./Navbar"

const NavbarWrapper = () => {
    const pathname = usePathname()

    if (pathname === "/forget-password" || pathname === "login" || pathname.startsWith("/dashboard")) return null

    return <Navbar />
}

export default NavbarWrapper