import Image from "next/image"
import Link from "next/link"
import ClickAwayListener from "react-click-away-listener"
import { Bell, Chevron, Search } from "@/components/Icons"
import { IoIosMenu } from "react-icons/io"


const Navbar = ({expand, onOpen}:any) => {

    return (
        <nav className='navbar'>

            <div className="flex justify-center items-center">
                <button className='text-2xl md:hidden' onClick={() => onOpen}>
                    <IoIosMenu />
                </button>
                <Link href="/dashboard">
                    <Image src="/images/logo.svg" width={180} height={30} alt="lendsqr logo" />
                </Link>
            </div>

            <ClickAwayListener onClickAway={() => onOpen}>
                <div className={`navmenu ${expand ? 'active' : ''}`}>
                    <div className="hidden md:block">
                        <form className="search">
                            <input type="search" placeholder="Search for anything" />
                            <button>
                                <Search />
                            </button>
                        </form>
                    </div>

                    <Link href='#'>
                        <a className="hidden md:block link ml-auto">Docs</a>
                    </Link>
                    <button className="hidden md:block link">
                        <Bell /> <span>Notifications</span>
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-secondary/30" />
                        <p className='hidden md:block'>Adedeji</p>
                        <Chevron />
                    </div>
                </div>
            </ClickAwayListener>
        </nav>
    )
}


export default Navbar;