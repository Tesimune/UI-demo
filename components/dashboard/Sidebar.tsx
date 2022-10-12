import { Sidebar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import  {HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards} from 'react-icons/hi';


const DashboardSidebar: FunctionComponent = () => {
    return (
      <aside className="w-72 bg-sky-50 h-screen">
          <div className="h-[100px] shadow flex items-center px-5">
            <Link href="/dashboard">
              <Image src="/images/logo.svg" width={200} height={40} alt="lendsqr logo" />
            </Link>
          </div>

          <ul className="mt-10">
              <SidebarCollapse label="Switch Organization" icon={BriefCase} />
          </ul>
      </aside>
    )
}

const SidebarItem = () => {
  return(
    <div className="">

    </div>
  )
}

const SidebarItems = () => {
  return (
    <ul>

    </ul>
  )
}

const SidebarCollapse = () => {
  return (
    <li>

      <ul>

      </ul>
    </li>
  )
}

export default DashboardSidebar; 