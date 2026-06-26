import React from "react"
const HomePageComponent = ({ children,componentTitle,componentPg }: { children: React.ReactNode,componentTitle:string,componentPg:string }) => {
    return (
        <div className="px-6 lg:px-10 py-20 bg-slate-50">
            <div dir="rtl" className="max-w-7xl mx-auto">
                <div className="mb-12 flex flex-col items-start">
                    <h3 className="text-4xl font-bold text-slate-900 mb-3">{componentTitle}</h3>
                    <p className="text-slate-600 text-lg">{componentPg}</p>
                    <div className="h-1.5 w-24 bg-linear-to-r from-green-600 to-green-400 rounded-full mt-4"></div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default HomePageComponent
