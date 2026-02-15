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
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
                // onClick={() => headToSearch()}
                type='submit'
            >
                <Search size={20} />
            </button>

            <input
                className="w-full bg-white dark:bg-gray-800 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all text-right"
                placeholder="أبحث عن المنتجات..."
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>
    )
}

export default SearchProduct