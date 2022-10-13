import {MdMoreVert} from 'react-icons/md';
import { FunctionComponent, useEffect, useState } from 'react';
import FilterForm from '../FilterForm';
import Link from 'next/link';
import { Dropdown } from 'flowbite-react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import formatDate from '@/utils/dateFormatter';

const Users:FunctionComponent = () => {
    const [count, setCount] = useState(10);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser()
            .then(res => {
                console.log(res);
                setUsers(res)
                setLoading(false);
            })
    })

    async function fetchUser() {
        let res = await fetch("/api/users");
        let data = res.json();
        return data;
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-24">
                <AiOutlineLoading3Quarters className='animate-spin text-2xl' />
            </div>
        )
    }

    return (

        <div className="relative mt-10">
            <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope='col' className='py-3 px-6'>
                            <FilterForm label='Organization' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterForm label='Username' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterForm label='Email' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterForm label='phone number' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterForm label='date joined' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterForm label='status' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.email} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Link href={"/users/"+user.userName} className="hover:underline">{user.orgName}</Link>
                            </th>
                            <td className="py-4 px-6">
                                {user.userName}
                            </td>
                            <td className="py-4 px-6">
                                {user.email}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                {user.phoneNumber}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                {formatDate(user.createdAt)}
                            </td>
                            <td className="py-4 px-6">
                                <span className='px-3 py-2 text-xs rounded-full bg-warning/10 text-warning'>Pending</span>
                            </td>
                            <td className="py-4 px-6 relative">
                                <Menu userName={user.userName} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

function Menu({userName}: any){
    return (
        <Dropdown label={<MdMoreVert className='text-xl' />} inline arrowIcon={false}>
            
        </Dropdown>
    )
}

export default Users;