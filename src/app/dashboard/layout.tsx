import React from 'react'
import NavbarWrapper from '@/components/features/dashboard/NavbarWrapper'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-slate-950">
            <NavbarWrapper />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout