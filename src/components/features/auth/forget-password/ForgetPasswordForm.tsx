"use client";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const ForgetPasswordForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (email.length === 0) { return toast.error("البريد الالكتروني مطلوب") }
        if (password.length === 0) { return toast.error("كلمة المرور مطلوبة") }

        try {
            setLoading(true)
            const {data} = await axios.put(`${DOMAIN}/api/users/forget-password`, { email, password })
            toast.success(data.message)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error);
            toast.error("حدث خطأ ما، حاول مرة أخرى")
        }
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div dir="rtl" className="space-y-2 ">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 m-1"
                    htmlFor="email">البريد الالكتروني</label>
                <div className="relative group">
                    <span
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"><Mail size={18} /></span>
                    <input
                        className="w-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-xl pl-12 pr-4 py-3.5 text-sm transition-all outline-none placeholder-slate-400"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="relative group">
                    <span
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"><Lock size={18} /></span>
                    <input
                        className="w-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-xl pl-12 pr-4 py-3.5 text-sm transition-all outline-none placeholder-slate-400"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <button
                className="w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                type="submit">
                <span>{loading ? "جاري تعديل كلمة المرور..." : "تعديل كلمة المرور"}</span>
                <span className="material-symbols-outlined text-lg"><ArrowRight size={18} /></span>
            </button>
        </form>
    )
}

export default ForgetPasswordForm
