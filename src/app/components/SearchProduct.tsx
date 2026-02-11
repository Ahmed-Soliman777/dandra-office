"use client"
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { DOMAIN } from '../utils/constants'
import { Search } from 'lucide-react'

const SearchProduct = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    async function handleSearchData() {
        try {
            setLoading(false)
            const { data } = await axios.get(`${DOMAIN}/api/products/search?product=${searchValue}`)
            console.log(data);
        } catch (error) {
            setLoading(false)
            console.error(error);
            toast.error("حدث خطأ، حاول مجدداً")
        }
    }

    return (
        <div className="relative group">
            <button
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
                onClick={() => handleSearchData()}
            >
                {loading ? <span className="animate-spin size-4 border-2 border-primary border-t-transparent rounded-full block"></span> : <Search size={20} />}
            </button>

            <input
                className="w-full bg-white dark:bg-gray-800 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all text-right"
                placeholder="أبحث عن المنتجات..."
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    )
}

export default SearchProduct