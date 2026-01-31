"use client"
import React, { useState } from "react"
import axios, { AxiosError } from "axios"
import { User2 } from "lucide-react"
import { toast } from "react-toastify"
import { DOMAIN } from "@/app/utils/constants"

const LoginForm = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        if (email === "") { return toast.error("البريد الالكتروني مطلوب") }
        if (password === "") { return toast.error("كلمة المرور مطلوبة") }
        try {
            await axios.post(`${DOMAIN}/api/users/login`, { email, password })
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            toast.error(axiosError?.response?.data?.message)
        }
    }

    return (
        <div
            className="bg-white dark:bg-[#1a2131] rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-200 dark:border-slate-800">
            {/* <!-- Visual Header for Card --> */}
            <div className="h-48 bg-cover bg-center" data-alt="Dark abstract geometric pattern representing security"
                style={{ backgroundImage: "linear-gradient(135deg, #1152d4 0%, #062158 100%); position: relative;" }}>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span
                        className="material-symbols-outlined text-white text-6xl opacity-50"><User2 size={80} /></span>
                </div>
            </div>
            <div className="p-8 flex flex-col gap-6">
                {/* <!-- Form Fields --> */}
                <form className="flex flex-col gap-5" onSubmit={formSubmitHandler}>
                    {/* <!-- Admin Email --> */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">البريد الالكتروني</label>
                        <div className="flex items-stretch rounded-lg group transition-all">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 h-12 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-400"
                                placeholder="admin@company.com" type="email" />
                        </div>
                    </div>
                    {/* <!-- Security Key --> */}
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">كلمة المرور</label>
                        </div>
                        <div className="flex items-stretch rounded-lg group transition-all">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex-1 h-12 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-400"
                                placeholder="••••••••••••" type="password" />
                        </div>
                    </div>
                    {/* <!-- Sign In Button --> */}
                    <button
                        type="submit"
                        className="w-full h-12 bg-primary hover:bg-primary/90 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30 cursor-pointer">
                        دخول
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm