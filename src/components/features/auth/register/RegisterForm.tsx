"use client"
import ButtonSpinner from "@/components/common/ButtonSpinner"
import { DOMAIN } from "@/utils/constants"
import { RegisterFormProps } from "@/utils/types"
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
                    <label className="text-sm font-bold text-slate-900 dark:text-white"
                        htmlFor="username">{usernameLabel}</label>
                    <div className="relative group">
                        <span
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 dark:group-focus-within:text-green-400 transition-colors"><User2Icon size={18} /></span>
                        <input
                            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm placeholder-slate-400"
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
                    <label className="text-sm font-bold text-slate-900 dark:text-white" htmlFor="email">{emailLabel}</label>
                    <div className="relative group">
                        <span
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 dark:group-focus-within:text-green-400 transition-colors"><Mail size={18} /></span>
                        <input
                            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm placeholder-slate-400"
                            id="email"
                            name="email"
                            placeholder="artisan@gallery.com"
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-900 dark:text-white"
                        htmlFor="password">{passwordLabel}</label>
                    <div className="relative group">
                        <span
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 dark:group-focus-within:text-green-400 transition-colors"><Lock size={18} /></span>
                        <input
                            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm placeholder-slate-400"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-900 dark:text-white"
                        htmlFor="confirm-password">{confirmPasswordLabel}</label>
                    <div className="relative group">
                        <span
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 dark:group-focus-within:text-green-400 transition-colors"><Verified size={18} /></span>
                        <input
                            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm placeholder-slate-400"
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
                className="w-full py-3 bg-green-600 text-white border border-slate-200 dark:border-slate-700 font-bold rounded-2xl hover:bg-green-700 dark:hover:bg-green-500 active:scale-[0.98] transition-all hover:shadow-lg hover:scale-[1.02] duration-300"
                type="submit">
                {loading ? <ButtonSpinner /> : <>{createAccountBtn}</>}
            </button>
        </form>
    )
}

export default RegisterForm