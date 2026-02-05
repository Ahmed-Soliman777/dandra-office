import UpdateProductForm from "./UpdateProductForm"

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params
    return (
        <>
            <UpdateProductForm id={id} />
        </>
    )
}

export default page