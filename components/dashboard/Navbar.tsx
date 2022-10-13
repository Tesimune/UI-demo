import Image from "next/image"
import Link from "next/link"
import ClickAwayListener from "react-click-away-listener"
import { Bell, Chevron, Search } from "@/components/Icons"
import { IoIosMenu } from "react-icons/io"


const Navbar = ({expand, onOpen}:any) => {

    return (
        <nav className='navbar'>
            <Link href="/dashboard">
                <Image src="/images/logo.svg" width={180} height={30} alt="lendsqr logo" />
            </Link>

            <ClickAwayListener onClickAway={() => onOpen}>
                <div className={`navmenu ${expand ? 'active' : ''}`}>
                    <form className="search">
                        <input type="search" placeholder="Search for anything" />
                        <button>
                            <Search />
                        </button>
                    </form>

                    <Link href='#'>
                        <a className="link ml-auto">Docs</a>
                    </Link>
                    <button className="link">
                        <Bell /> <span>Notifications</span>
                    </button>

                    <button className='text-2xl md:hidden' onClick={() => onOpen}>
                        <IoIosMenu />
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-secondary/30" />
                        <p className=''>Adedeji</p>
                        <Chevron />
                    </div>
                </div>
            </ClickAwayListener>
        </nav>
    )
}


export default Navbar;