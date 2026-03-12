import Category from "@/components/features/categories/Category"

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params
    return (
        <div className="min-h-screen">
            <Category id={id} />
        </div>
    )
}

export default page