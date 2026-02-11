import React from 'react'
import ProductsTable from '../../components/ProductsTable'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة المنتجات</h1>
          <p className="text-gray-600 dark:text-gray-400">عرض وإدارة جميع منتجاتك</p>
        </div>
        <Link
          href={'/dashboard/manage-products/add-product'}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md">
          <span>+ إضافة منتج</span>
        </Link>
      </header>
      <ProductsTable />
    </>
  )
}

export default page