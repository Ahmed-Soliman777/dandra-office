import { cookies } from "next/headers"
import Category from "./Category"

const page = async (props: { params: { id: string } }) => {
    const { id } = await props.params
    const token = (await cookies()).get("token")?.value
    return (
        <div className="min-h-screen">
            <Category id={id} token={token || undefined} />
        </div>
    )
}

export default page