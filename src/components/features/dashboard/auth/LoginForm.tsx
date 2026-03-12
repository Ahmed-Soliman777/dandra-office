"use client"
import React, { useState } from "react"
import axios, { AxiosError } from "axios"
import { User2 } from "lucide-react"
import { toast } from "react-toastify"
import { DOMAIN } from "@/utils/constants"
import { useRouter } from "next/navigation"

const LoginForm = () => {

    const router = useRouter()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        if (email === "") { return toast.error("البريد الالكتروني مطلوب") }
        if (password === "") { return toast.error("كلمة المرور مطلوبة") }
        try {
            await axios.post(`${DOMAIN}/api/users/login`, { email, password })
            router.replace("/dashboard")
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            toast.error(axiosError?.response?.data?.message)
        }
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-slate-700">
                {/* Header Section */}
                <div className="relative h-32 bg-linear-to-br from-green-500 to-green-700 dark:from-green-600 dark:to-green-800 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2720%27 height=%2720%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%23fff%27 fill-opacity=%270.1%27%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%271%27/%3E%3C/g%3E%3C/svg%3E')}" }} />
                    <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <User2 size={32} className="text-green-600" />
                        </div>
                        <h2 className="text-white text-xl font-bold">Dashboard Login</h2>
                    </div>
                </div>

                {/* Form Section */}
                <div className="p-8">
                    <form className="space-y-5" onSubmit={formSubmitHandler}>
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 block">البريد الإلكتروني</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="admin@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 block">كلمة المرور</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="••••••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2 mt-6"
                        >
                            <span>دخول</span>
                        </button>
                    </form>
                </div>

                {/* Footer Info */}
                <div className="bg-gray-50 dark:bg-slate-700/50 px-8 py-4 border-t border-gray-200 dark:border-slate-600">
                    <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                        تأكد من إدخال بيانات تسجيل الدخول الصحيحة
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm