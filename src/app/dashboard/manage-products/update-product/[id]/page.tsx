import UpdateProductForm from "@/components/features/dashboard/manage-products/update-product/UpdateProductForm"

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params
    return (
        <>
            <UpdateProductForm id={id} />
        </>
    )
}

export default page