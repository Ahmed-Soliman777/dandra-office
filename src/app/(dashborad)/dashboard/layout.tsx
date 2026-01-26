import React from 'react'
import NavbarWrapper from '../components/NavbarWrapper'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavbarWrapper />
            {children}
        </div>
    )
}

export default DashboardLayout