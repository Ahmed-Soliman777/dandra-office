"use client";
import { LoginFormProps } from '@/app/utils/types';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify'
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { DOMAIN } from '@/app/utils/constants';
import ButtonSpinner from '@/app/components/ButtonSpinner';

export default function LoginForm({ emailLabel, passwordLabel, rememberLabel, forgetPassword, submitButton }: LoginFormProps) {


    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

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

    return (
        <form className="space-y-6" onSubmit={formSubmitHandler}>

            <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2" htmlFor="email">
                    {emailLabel}
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                        <Mail size={18} />
                    </span>
                    <input
                        className="block w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        name='email'
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2" htmlFor="password">
                    {passwordLabel}
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                        <Lock size={18} />
                    </span>
                    <input
                        className="block w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        name='password'
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 dark:border-slate-600 rounded" id="remember-me" name="remember-me" type="checkbox" />
                    <label className="mx-2 block text-sm text-slate-600 dark:text-slate-400" htmlFor="remember-me">
                        {rememberLabel}
                    </label>
                </div>
                <div className="text-sm">
                    <Link className="font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors" href={'/forget-password'}>
                        {forgetPassword}
                    </Link>
                </div>
            </div>

            <button
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all active:scale-[0.98] disabled:opacity-70"
                type="submit">
                {loading ? <ButtonSpinner /> : `${submitButton}`}
            </button>
        </form>
    );
}