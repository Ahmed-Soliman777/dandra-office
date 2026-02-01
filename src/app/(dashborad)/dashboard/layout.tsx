import React from 'react'
import NavbarWrapper from '../components/NavbarWrapper'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div dir="rtl">
            <NavbarWrapper />
            {children}
        </div>
    )
}

export default DashboardLayout