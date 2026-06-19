"use client";
import { LoginFormProps } from '@/utils/types';
import { Mail, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify'
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { DOMAIN } from '@/utils/constants';
import ButtonSpinner from '@/components/common/ButtonSpinner';

export default function LoginForm({ emailLabel, passwordLabel, forgetPassword, submitButton }: LoginFormProps) {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        if (email.length === 0) { return toast.error("email is required") }
        if (password.length === 0) { return toast.error("password is required") }

        try {
            setLoading(true)
            await axios.post(`${DOMAIN}/api/users/login`, { email, password })
            router.replace("/")
            setLoading(false)
            router.refresh()
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            toast.error(axiosError?.response?.data?.message)
            setLoading(false)
        }   
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <form className="space-y-6" onSubmit={formSubmitHandler}>

            {/* Email Input Field */}
            <div className="space-y-2.5">
                <label 
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors" 
                    htmlFor="email"
                >
                    {emailLabel}
                </label>
                <div className="relative group">
                    <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-500 transition-colors">
                        <Mail size={20} className="w-5 h-5" />
                    </span>
                    <input
                        className="block w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        name='email'
                        id="email"
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
                        className="block w-full pl-11 sm:pl-12 pr-2 sm:pr-4 py-3 sm:py-3.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        name='password'
                        id="password"
                        placeholder="••••••••"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    
                    {/* Show/Hide Password Button - Right Side (Inside Input) */}
                    <button 
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 active:scale-95 duration-200"
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

            {/* Forgot Password Link */}
            <div className="flex justify-start pt-2">
                <Link 
                    className="text-sm font-semibold text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors hover:underline" 
                    href={'/forget-password'}
                >
                    {forgetPassword}
                </Link>
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
                        <span className="ms-2">جاري التحميل</span>
                    </>
                ) : (
                    submitButton
                )}
            </button>
        </form>
    );
}