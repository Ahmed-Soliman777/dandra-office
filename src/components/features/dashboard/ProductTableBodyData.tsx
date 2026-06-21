import { product } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import CategoryName from './CategoryName';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';
import { useProducts } from '@/hooks/useProducts';
import { toast } from 'react-toastify';

const ProductTableBodyData = ({
    product
}: {
    product: product
}) => {

    const { setProducts } = useProducts()

    async function deleteProduct(id: string) {
        try {
            const deletePrd = await axios.delete(`${DOMAIN}/api/products/${id}`)
            if (deletePrd) {
                setProducts((prevProducts) => prevProducts.filter((p: product) => p.id !== id))
            }
            toast.success("تم حذف المنتج")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700 shrink-0 border border-gray-200 dark:border-slate-600">
                        {product.images &&
                            <Image
                                src={product.images[0] || "https://img.icons8.com/?size=100&id=53386&format=png&color=000000"}
                                alt={product.productNameAr || "product image"}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                            />
                        }
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{product.productNameAr}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4">
                {product.categoryId &&
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                        <CategoryName id={product?.categoryId} />
                    </span>
                }
            </td>
            <td className="px-6 py-4">
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{product.price} ج.م</p>
            </td>
            <td className="px-6 py-4 text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.quantity}</span>
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                    <Link
                        href={`/dashboard/manage-products/update-product/${product.id}`}
                        className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="تعديل">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </Link>
                    <button
                        className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        onClick={() => {
                            if (product?.id) {
                                deleteProduct(product.id);
                            }
                        }}
                        title="حذف">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                    <Link
                        href={`/dashboard/manage-products/${product.id}`}
                        className="p-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors" title="عرض المنتج">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </Link>
                </div>
            </td>
        </>
    )
}

export default ProductTableBodyData
