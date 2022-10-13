import Dashboard from "@/layouts/Dashboard";
import { NextPage } from "next";
import Cards from "@/components/dashboard/Cards";
import Users from "@/components/dashboard/Users";

const dashboard: NextPage = () => {
    return(
        <Dashboard>
            <div className="dashboard">
                <h1 className="text-3xl pt-5 pb-10 font-medium">Users</h1>

                <Cards />

                <Users />
            </div>
        </Dashboard>
    )
}

export default dashboard;