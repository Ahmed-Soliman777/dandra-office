"use client"
import ButtonSpinner from "@/app/components/ButtonSpinner"
import { DOMAIN } from "@/app/utils/constants"
import { RegisterFormProps } from "@/app/utils/types"
import axios, { AxiosError } from "axios"
import { Lock, Mail, User2Icon, Verified } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { toast } from "react-toastify"

const RegisterForm = ({ usernameLabel, emailLabel, passwordLabel, confirmPasswordLabel, createAccountBtn }: RegisterFormProps) => {


    const router = useRouter()

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault()

        if (userName === "") {
            return toast.error("user name is required")
        }

        if (email === "") {
            return toast.error("email is required")
        }

        if (password === "") {
            return toast.error("password is required")
        }

        if (confirmPassword === "") {
            return toast.error("password is not confirmed")
        }

        try {
            setLoading(true)
            await axios.post(`${DOMAIN}/api/users/register`, { userName, email, password })
            router.replace("/")
            router.refresh()
            setLoading(false)
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            toast.error(axiosError?.response?.data?.message)
            setLoading(false)
        }

    }

    return (
        <form className="space-y-6" onSubmit={formSubmitHandler}>
            <div className="grid grid-cols-1 gap-6">
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300"
                        htmlFor="username">{usernameLabel}</label>
                    <div className="relative group">
                        <span
                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><User2Icon /></span>
                        <input
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                            id="username"
                            name="username"
                            placeholder="Craftsman_99"
                            type="text"
                            value={userName}
                            onChange={(e) => { setUserName(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300" htmlFor="email">{emailLabel}</label>
                    <div className="relative group">
                        <span
                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><Mail /></span>
                        <input
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                            id="email"
                            name="email"
                            placeholder="artisan@gallery.com"
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300"
                        htmlFor="password">{passwordLabel}</label>
                    <div className="relative group">
                        <span
                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><Lock /></span>
                        <input
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300"
                        htmlFor="confirm-password">{confirmPasswordLabel}</label>
                    <div className="relative group">
                        <span
                            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"><Verified /></span>
                        <input
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl focus:border-primary/20 focus:ring-0 transition-all text-sm"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="••••••••"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    </div>
                </div>
            </div>
            <button
                className="w-full py-4 bg-primary border border-[#2323233d] font-black rounded-xl hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all"
                type="submit">
                {loading ? <ButtonSpinner /> : <>{createAccountBtn}</>}
            </button>
        </form>
    )
}

export default RegisterForm