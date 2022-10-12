import DashboardSidebar from '@/components/dashboard/Sidebar';
import { Bell, Chevron, Search } from '@/components/Icons';
import {IoIosMenu} from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import {FunctionComponent } from 'react';

const Dashboard: FunctionComponent = ({children}: any) => {
    return (
        <section className="">

            <nav className='h-[80px] shadow flex items-center justify-between px-5 md:px-10'>
                <Link href="/dashboard">
                    <Image src="/images/logo.svg" width={180} height={30} alt="lendsqr logo" />
                </Link>

                 <form className="hidden flex rounded-lg h-10 overflow-hidden ring-2 ring-secondary">
                    <input type="search" placeholder="Search for anything" className="px-4 bg-transparent outline-none" />
                    <button className="px-5 bg-secondary text-white text-xl">
                        <Search />
                    </button>
                </form>

                <div className="flex items-center gap-8">
                    <Link href='#'>
                        <a className="underline">Docs</a>
                    </Link>
                    <button className="text-xl">
                        <Bell />
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-secondary/30" />
                        <p className='hidden sm-block'>Adedeji</p>
                        <Chevron />
                    </div>

                    <button>
                        <IoIosMenu />
                    </button>
                </div>
            </nav>

            <section className="md:grid grid-cols-[300px,auto]">
                <DashboardSidebar />
                <main className='p-5 md:p-10'>
                    {children}
                </main>
            </section>
        </section>
    )
}

export default Dashboard;