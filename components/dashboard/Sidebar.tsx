import Link from "next/link";
import { FunctionComponent } from "react";
import { Badge, Bank, BriefCase, ChartBar, Chevron, ClipBoard, Coins, Galaxy, HandShake, Home, Loan, NairaSack, PiggyBank, Receipt, Scroll, Slider, UserCheck, Users, UsersAlt, UserSettings, UserTimes } from "../Icons";


const DashboardSidebar: FunctionComponent = ({show}: any) => {

  if(!show) return null;

    return (
      <aside className="shadow h-[calc(100vh_-_80px)] sticky top-[80px]">
          <ul className="py-5 h-full overflow-auto">
              <SidebarCollapse label="Switch Organization" icon={BriefCase} />
              <SidebarItem label="Dashboard" icon={Home} />

              <SidebarItems label="customers">
                <SidebarItem label="Users" icon={Users} />
                <SidebarItem label="Guarantors" icon={UsersAlt} />
                <SidebarItem label="Loans" icon={NairaSack} />
                <SidebarItem label="Decison Models" icon={HandShake} />
                <SidebarItem label="Savings" icon={PiggyBank} />
                <SidebarItem label="Loan Requests" icon={Loan} />
                <SidebarItem label="Whitelists" icon={UserCheck} />
                <SidebarItem label="Karma" icon={UserTimes} />
              </SidebarItems>

              <SidebarItems label="businesses">
                <SidebarItem label="Organizations" icon={BriefCase} />
                <SidebarItem label="Loan Products" icon={Loan} />
                <SidebarItem label="Savings Products" icon={Bank} />
                <SidebarItem label="Fees and Chanrges" icon={Coins} />
                <SidebarItem label="Transactions" icon={Receipt} />
                <SidebarItem label="Services" icon={Galaxy} />
                <SidebarItem label="Service Account" icon={UserSettings} />
                <SidebarItem label="Settlements" icon={UserTimes} />
                <SidebarItem label="Settlements" icon={Scroll} />
                <SidebarItem label="Reports" icon={ChartBar} />
              </SidebarItems>

              <SidebarItems label="settings">
                <SidebarItem label="Preferences" icon={Slider} />
                <SidebarItem label="Fees and Pricing" icon={Badge} />
                <SidebarItem label="Audit Logs" icon={ClipBoard} />
              </SidebarItems>
          </ul>
      </aside>
    )
}

const SidebarItem = ({label, icon:Icon}: any) => {
  return(
    <li>
      <a href="" className="flex items-center gap-3 text-lg p-5 py-3 hover:bg-secondary/10 hover:border-l-4 hover:border-l-primary">
        <Icon />
        <span>{label}</span>
      </a>
    </li>
  )
}

const SidebarItems = ({children, label}: any) => {
  return (
    <>
      <li className="px-5 pt-3 pb-1 uppercase">{label}</li>
      {children}
    </>
  )
}

const SidebarCollapse = ({label, icon: Icon}: any ) => {
  return (
   <li>
      <a href="" className="flex items-center gap-3 text-lg p-5 py-3 hover:bg-secondary/10 hover:border-l-4 hover:border-l-primary">
       { Icon && <Icon />}
        <span className="whitespace-nowrap">{label}</span>
        <Chevron />
      </a>
    </li>
  )
}

export default DashboardSidebar; 