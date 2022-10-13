import DashboardSidebar from '@/components/dashboard/Sidebar';
import { Bell, Chevron, Search } from '@/components/Icons';
import {IoIosMenu} from 'react-icons/io';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '@/components/dashboard/Navbar';

const Dashboard = ({children}: any) => {

    const [open, setOpen] = useState(true);
    const [expand, setExpand] = useState(true);

    return (
        <section className="">

            <Navbar expand={expand} onOpen={() => setOpen(!open)} />

            <section className="md:grid grid-cols-[300px,auto]">
                <DashboardSidebar show={open} />
                <main className='p-5 md:p-10'>
                    {children}
                </main>
            </section>
        </section>
    )
}

export default Dashboard;