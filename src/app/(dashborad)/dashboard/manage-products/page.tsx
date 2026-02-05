import React from 'react'
import ProductsTable from '../../components/ProductsTable'

const page = () => {
  return (
    <>
      <header className="mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة المنتجات</h1>
          <p className="text-gray-600 dark:text-gray-400">عرض وإدارة جميع منتجاتك</p>
        </div>
      </header>
      <ProductsTable />
    </>
  )
}

export default page