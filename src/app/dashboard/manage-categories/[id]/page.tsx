import CategoryDetails from '@/components/features/dashboard/manage-categories/id/CategoryDetails'

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params
    return (
        <div>
            <CategoryDetails id={id} />
        </div>
    )
}

export default page