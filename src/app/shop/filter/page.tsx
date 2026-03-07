import FilterResult from './FilterResult'
import ProductFilters from '@/app/components/ProductFilters'
import { cookies } from 'next/headers'

const page = async () => {

    const token = (await cookies()).get("token")?.value

    return (
        <main dir='rtl' className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-8 h-screen">
            <div className="flex flex-col lg:flex-row gap-8 relative">
                {/* <!-- Sidebar Filters --> */}
                <ProductFilters />
                {/* <!-- Product Content --> */}
                <div className="flex-1 flex flex-col gap-6 my-7.5">
                    {/* <!-- Product Grid --> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        <FilterResult token={token ? token : undefined} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
