"use client"
import Loading from '../../app/loading'
import { product } from '../../utils/types'
import { usePathname } from 'next/navigation'
import { useProducts } from '@/hooks/useProducts'
import ProductCardFavoriteBtn from '@/components/common/ProductCardFavoriteBtn'
import ProductCardData from './ProductCardData'

const ProductCard = () => {

    const pathName = usePathname()

    const { products, productLoading } = useProducts()

    if (productLoading) {
        return <Loading />
    }

    return (
        <>
            {pathName === "/shop" ? products?.map((product: product) => (
                <div className="relative" key={product.id}>
                    <div className="absolute top-4 right-4 z-10">
                        <ProductCardFavoriteBtn
                            product={product}
                            productLoading={productLoading}
                        />
                    </div>
                    <ProductCardData
                        product={product}
                    />
                </div>
            )) :
                products?.slice(0, 10).map((product: product) => (
                    <div dir='rtl' key={product.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="relative">
                            <div className="absolute top-4 right-4 z-10">
                                <ProductCardFavoriteBtn
                                    product={product}
                                    productLoading={productLoading}
                                />
                            </div>
                            <ProductCardData
                                product={product}
                            />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ProductCard