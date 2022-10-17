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
        <div className="grid justify-center">

            <Navbar expand={expand} onOpen={() => setOpen(!open)} />

            <section className="grid justify-center grid-cols-1 md:grid-cols-[300px,auto]">
                <DashboardSidebar show={open} />
                <main className='p-3 md:p-5'>
                    {children}
                </main>
            </section>
        </div>
    )
}

export default Dashboard;