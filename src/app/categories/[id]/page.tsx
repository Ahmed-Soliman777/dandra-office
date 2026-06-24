import Category from "@/components/features/categories/Category"

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params
    return (
        <div>
            <Category id={id} />
        </div>
    )
}

export default page