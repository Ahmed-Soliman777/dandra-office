"use client"
import axios from "axios"
import { DOMAIN } from "@/app/utils/constants"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

const LogoutButton = () => {

    const router = useRouter()
    const logoutHandler = async () => {
        try {
            await axios.get(`${DOMAIN}/api/users/logout`)
            router.push("/")
            router.refresh()
        } catch (error) {
            toast.warning("حدث خطأ")
        }
    }

    return (
        <button className="flex items-center gap-2 pl-2 cursor-pointer" onClick={logoutHandler}>
            <span className="material-symbols-outlined"><LogOut /></span>
            <span className="absolute top-1 right-1 size-2 bg-accent-bronze rounded-full"></span>
        </button>
    )
}

export default LogoutButton