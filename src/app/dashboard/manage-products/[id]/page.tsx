import ProductDetails from '@/components/features/dashboard/manage-products/id/ProductDetails'

const page = async (props: { params: { id: string } }) => {

    const { id } = await props.params

    return (
        <div>
            <ProductDetails id={id} />
        </div>
    )
}

export default page