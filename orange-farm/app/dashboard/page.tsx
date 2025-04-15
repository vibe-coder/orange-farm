import Image from "next/image"
import greenIcon from "../../public/icons/Vector.svg"
import darkorangearrow from "../../public/icons/darkorangearrow.svg"
import Revenues from "../components/revenues"
import Lostdeals from "../components/lost"
import Quartergoals from "../components/quarter"
import Customers from "../components/customer"
import Growth from "../components/growth"
import Chats from "../components/chats"
import TopStates from "../components/topStates"
import NewDeal from "../components/newdeal"
import Header from "../components/header"
import ResponsiveAppBar from "../components/header"


export default function Dashboard(){
    return(
        <div id="#" className="bg-offwhite">

            {/* Header */}
            <div className="mb-4 px-4 bg-white">
                {/* <Header/> */}
                {/* <ResponsiveAppBar/> */}
            </div>

            {/* ------------ Top ------------ */}
            <div className="grid px-4 grid-cols-2 grid-rows-2 gap-4">
                <Revenues/>
                <Lostdeals/>
                <Quartergoals/>
            </div>

            {/* ------------ Middele ------------ */}
            <div className="pt-4 px-4 grid grid-col-2 space-y-4">
                <Customers/>
                <Growth/>
            </div>

            {/* ------------ Bottom ------------ */}
            <div className="pt-4 px-4 grid gap-4 grid-col-3">
                <Chats/>
                <TopStates/>
                <NewDeal/>
            </div>
        </div>
    )
}