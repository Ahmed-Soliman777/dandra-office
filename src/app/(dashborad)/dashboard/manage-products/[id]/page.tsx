import React from 'react'
import ProductDetails from './ProductDetails'

const page = async (props: { params: { id: string } }) => {

    const { id } = await props.params

    return (
        <div>
            <ProductDetails id={id} />
        </div>
    )
}

export default page