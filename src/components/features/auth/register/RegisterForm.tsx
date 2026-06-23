"use client"
import ButtonSpinner from "@/components/common/ButtonSpinner"
import { DOMAIN } from "@/utils/constants"
import { RegisterFormProps } from "@/utils/types"
import axios, { AxiosError } from "axios"
import { Eye, EyeOff, Mail, User2Icon } from "lucide-react"
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
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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

        if (password !== confirmPassword) {
            return toast.error("passwords do not match")
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

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prev => !prev)
    }

    return (
        <form className="space-y-5 sm:space-y-6" onSubmit={formSubmitHandler}>
            
            {/* Username Input Field */}
            <div className="space-y-2.5">
                <label 
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors" 
                    htmlFor="username"
                >
                    {usernameLabel}
                </label>
                <div className="relative group">
                    <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-500 transition-colors pointer-events-none">
                        <User2Icon size={20} className="w-5 h-5" />
                    </span>
                    <input
                        className="focus:outline-none block w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        id="username"
                        name="username"
                        placeholder="your_username"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* Email Input Field */}
            <div className="space-y-2.5">
                <label 
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors" 
                    htmlFor="email"
                >
                    {emailLabel}
                </label>
                <div className="relative group">
                    <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-500 transition-colors pointer-events-none">
                        <Mail size={20} className="w-5 h-5" />
                    </span>
                    <input
                        className="focus:outline-none block w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* Password Input Field with Visibility Toggle */}
            <div className="space-y-2.5">
                <label 
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors" 
                    htmlFor="password"
                >
                    {passwordLabel}
                </label>
                <div className="relative group">
                    
                    {/* Password Input */}
                    <input
                        className="focus:outline-none block w-full pl-11 sm:pl-12 pr-2 sm:pr-4 py-3 sm:py-3.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        name='password'
                        id="password"
                        placeholder="••••••••"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button 
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 active:scale-95 duration-200"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        title={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <EyeOff size={20} className="w-5 h-5" />
                        ) : (
                            <Eye size={20} className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Confirm Password Input Field with Visibility Toggle */}
            <div className="space-y-2.5">
                <label 
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors" 
                    htmlFor="confirm-password"
                >
                    {confirmPasswordLabel}
                </label>
                <div className="relative group">
                    
                    {/* Confirm Password Input */}
                    <input
                        className="focus:outline-none block w-full pl-11 sm:pl-12 pr-2 sm:pr-4 py-3 sm:py-3.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="••••••••"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    {/* Show/Hide Password Button - left Side (Inside Input) */}
                    <button 
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 active:scale-95 duration-200"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        title={showConfirmPassword ? "Hide password" : "Show password"}
                    >
                        {showConfirmPassword ? (
                            <EyeOff size={20} className="w-5 h-5" />
                        ) : (
                            <Eye size={20} className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Submit Button */}
            <button
                disabled={loading}
                className="w-full flex justify-center items-center py-3 sm:py-3.5 px-4 mt-8 rounded-xl text-sm sm:text-base font-bold bg-green-600 text-white hover:bg-green-700 dark:hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-slate-900 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-green-500/30 dark:hover:shadow-green-500/20 duration-300"
                type="submit"
            >
                {loading ? (
                    <>
                        <ButtonSpinner />
                        <span className="ms-2">جاري المعالجة</span>
                    </>
                ) : (
                    createAccountBtn
                )}
            </button>
        </form>
    )
}

export default RegisterForm