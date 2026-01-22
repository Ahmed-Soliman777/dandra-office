import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-120 flex flex-col gap-8">
        {/* <!-- Page Heading --> */}
        <div className="flex flex-col gap-2">
          <h2 className="text-slate-900 dark:text-white text-4xl font-black tracking-tight">Secure Sign In</h2>
          <p className="text-slate-500 dark:text-slate-400 text-base">Enter your administrative credentials to access
            the terminal.</p>
        </div>
        {/* <!-- Login Card --> */}
        <div
          className="bg-white dark:bg-[#1a2131] rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-200 dark:border-slate-800">
          {/* <!-- Visual Header for Card --> */}
          <div className="h-48 bg-cover bg-center" data-alt="Dark abstract geometric pattern representing security"
            style={{ backgroundImage: "linear-gradient(135deg, #1152d4 0%, #062158 100%); position: relative;" }}>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-white text-6xl opacity-50">admin_panel_settings</span>
            </div>
          </div>
          <div className="p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-slate-900 dark:text-white text-lg font-bold">Identity Verification</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Please provide your corporate identity
                details.</p>
            </div>
            {/* <!-- Form Fields --> */}
            <div className="flex flex-col gap-5">
              {/* <!-- Admin Email --> */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Admin Email</label>
                <div className="flex items-stretch rounded-lg group transition-all">
                  <input
                    className="flex-1 h-12 px-4 rounded-l-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary border-r-0 placeholder:text-slate-400"
                    placeholder="admin@company.com" type="email" />
                  <div
                    className="px-4 flex items-center justify-center bg-background-light dark:bg-slate-800 border border-slate-300 dark:border-slate-700 border-l-0 rounded-r-lg text-slate-400">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                </div>
              </div>
              {/* <!-- Security Key --> */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Security
                    Key</label>
                  <Link className="text-primary text-xs font-bold hover:underline" href="#">Request New Key</Link>
                </div>
                <div className="flex items-stretch rounded-lg group transition-all">
                  <input
                    className="flex-1 h-12 px-4 rounded-l-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary border-r-0 placeholder:text-slate-400"
                    placeholder="••••••••••••" type="password" />
                  <div
                    className="px-4 flex items-center justify-center bg-background-light dark:bg-slate-800 border border-slate-300 dark:border-slate-700 border-l-0 rounded-r-lg text-slate-400">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Sign In Button --> */}
            <button
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              Secure Sign In
            </button>
          </div>
        </div>
        {/* <!-- Bottom Support Info --> */}
        <div className="flex justify-center items-center gap-8">
          <Link className="text-slate-500 hover:text-primary text-sm flex items-center gap-2 transition-colors" href="#">
            <span className="material-symbols-outlined text-lg">help</span>
            Support Desk
          </Link>
          <Link className="text-slate-500 hover:text-primary text-sm flex items-center gap-2 transition-colors" href="#">
            <span className="material-symbols-outlined text-lg">policy</span>
            Security Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page