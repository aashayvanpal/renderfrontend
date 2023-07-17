import Link from "next/link"
const link = ({ url, name }) => {
    return <Link className='border rounded-lg bg-black text-white p-4 hover:bg-red-500' href={`${url}`}>{name}</Link>
}

export default link