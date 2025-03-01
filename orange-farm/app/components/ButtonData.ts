import dashboardIcon from "../icons/dashboard-icon.svg"
import newIcon from "../../public/icons/dashboard-icon.svg"



interface dataStructure {
    index: number,
    name: string,
    url: string
}

const Data:dataStructure[] = [
    {
        index: 1,
        name: "Dashboard",
        url: "../../public/icons/dashboard-icon.svg",
    },
    {
        index: 2,
        name: "Customers",
        url: "../../public/icons/customers.svg"
    },
    {
        index: 3,
        name: "All reports",
        url: "../../public/icons/reports.svg"
    },
    {
        index: 4,
        name: "Geography",
        url: "../../public/icons/geography.svg"
    },
    {
        index: 5,
        name: "Conversations",
        url: "../../public/icons/conversations.svg"
    },
    {
        index: 6,
        name: "Deals",
        url: "../../public/icons/deals.svg"
    },
    {
        index: 7,
        name: "Exports",
        url: "../../public/icons/exports.svg"
    }

]


export default Data;