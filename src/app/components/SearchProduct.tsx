"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SearchProduct = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    const route = useRouter()

    function headToSearch(e: React.FormEvent) {
        e.preventDefault()
        if (searchValue.length > 0) {
            route.push(`/shop/search?product=${searchValue}`)
        }
    }


    return (
        <form className="relative group" onSubmit={headToSearch}>
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
                type='submit'
            >
                <Search size={20} />
            </button>

            <input
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 text-sm placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right"
                placeholder="أبحث عن المنتجات..."
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>
    )
}

export default SearchProduct