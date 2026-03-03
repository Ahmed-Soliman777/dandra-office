import { cookies } from 'next/headers'
import FavoriteCard from './FavoriteCard'

const page = async () => {
    const token = (await cookies()).get("token")?.value
    return (
        <div className='py-10 px-8 h-screen'>
            <FavoriteCard token={token ? token : ""} />
        </div >
    )
}

export default page