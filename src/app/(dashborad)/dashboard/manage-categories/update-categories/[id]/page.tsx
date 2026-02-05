import UpdateCategoryForm from "./UpdateCategoryForm"

const Page = async (props: { params: { id: string } }) => {
    const { id } = await props.params
    return (
        <div>
            <UpdateCategoryForm id={id} />
        </div>
    )
}

export default Page
