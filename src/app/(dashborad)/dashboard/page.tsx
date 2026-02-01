import { Box, Users2Icon } from 'lucide-react'
import Link from 'next/link'
import ProductsTable from '../components/ProductsTable'
import axios from 'axios'
import { DOMAIN } from '@/app/utils/constants'
import CategoryTable from '../components/CategoryTable'

const page = () => {

  let total: number = 0, userCount: number = 0

  async function ProductCount(): Promise<number | undefined> {
    try {
      const response = await axios.get(`${DOMAIN}/api/products`)
      total = response.data.products.length
      return total
    } catch (error) {
      console.log(error);
    }
  }

  async function UserCount(): Promise<number | undefined> {
    try {
      const response = await axios.get(`${DOMAIN}/api/users/count`)
      userCount = response.data
      return userCount
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main className="max-w-350 mx-auto px-6 lg:px-20 py-8">
        {/* <!-- Page Heading & CTA --> */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">جرد المنتجات</h1>
            <p className="text-gray-500 dark:text-gray-400">تنظيم وإدارة قوائم المنتجات الخاصة بك .</p>
          </div>
          <Link
            href={'/dashboard/manage-products'}
            className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
            إضافة منتج
            <span className="material-symbols-outlined text-lg">+</span>
          </Link>
        </div>
        {/* <!-- KPI Stats Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div
            className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">مجموع المنتجات</p>
              <p className="text-3xl font-bold">{ProductCount()}</p>
            </div>
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <span className="material-symbols-outlined"><Box /></span>
            </div>
          </div>
          <div
            className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">مجموع المستخدمين</p>
              <p className="text-3xl font-bold">{UserCount()}</p>
            </div>
            <div className="bg-accent-bronze/10 p-3 rounded-full text-accent-bronze">
              <span className="material-symbols-outlined"><Users2Icon /></span>
            </div>
          </div>
          {/* <div
            className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">New Reviews</p>
              <p className="text-3xl font-bold">24</p>
              <p className="text-xs font-bold text-primary mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">mark_chat_unread</span> Pending moderation
              </p>
            </div>
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <span className="material-symbols-outlined">reviews</span>
            </div>
          </div> */}
        </div>
        {/* <!-- Main Product Table Container --> */}
        <ProductsTable />
        {/* <!-- Table Container --> */}
        <CategoryTable />
      </main>
    </>
  )
}

export default page