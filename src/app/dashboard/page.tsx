import { Box, Users2Icon } from 'lucide-react'
import Link from 'next/link'
import ProductsTable from '@/components/features/dashboard/ProductsTable'
import axios from 'axios'
import { DOMAIN } from '@/utils/constants'
import CategoryTable from '@/components/features/dashboard/CategoryTable'

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
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">لوحة التحكم</h1>
            <p className="text-gray-600 dark:text-gray-400">مرحبا بك، إدارة المنتجات والفئات من هنا</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href={'/dashboard/manage-products/add-product'}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md">
              <span>+ إضافة منتج</span>
            </Link>
            <Link
              href={'/dashboard/manage-categories/add-category'}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md">
              <span>+ إضافة فئة</span>
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">مجموع المنتجات</p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{ProductCount()}</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
              <Box className="text-green-600 dark:text-green-400" size={32} />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">مجموع المستخدمين</p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{UserCount()}</p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
              <Users2Icon className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="space-y-8">
        <ProductsTable />
        <CategoryTable />
      </div>
    </>
  )
}

export default page