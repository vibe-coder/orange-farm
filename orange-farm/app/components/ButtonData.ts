import dashboardIcon from "../icons/dashboard-icon.svg"
import newIcon from "../../public/icons/dashboard-icon.svg"
import icon from "../../public/conversations.svg" 



interface dataStructure {
    index: number,
    name: string,
    url: string
}

const Data:dataStructure[] = [
    {
        index: 1,
        name: "Dashboard",
        url: "/icons/dashboard-icon.svg",
    },
    {
        index: 2,
        name: "Customers",
        url: "/icons/customers.svg"
    },
    {
        index: 3,
        name: "All reports",
        url: "/icons/reports.svg"
    },
    {
        index: 4,
        name: "Geography",
        url: "/icons/geography.svg"
    },
    {
        index: 5,
        name: "Conversations",
        url: "/icons/conversations.svg"
    },
    {
        index: 6,
        name: "Deals",
        url: "/icons/deals.svg"
    },
    {
        index: 7,
        name: "Exports",
        url: "/icons/exports.svg"
    }

]


export default Data;