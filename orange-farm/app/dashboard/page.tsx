import Image from "next/image"
import greenIcon from "../../public/icons/Vector.svg"
import darkorangearrow from "../../public/icons/darkorangearrow.svg"
import Revenues from "../components/revenues"
import Lostdeals from "../components/lost"
import Quartergoals from "../components/quarter"


export default function Dashboard(){
    return(
        <div className="h-screen w-full">

            {/* ------------ Top ------------ */}
            <div className="grid grid-cols-2 grid-rows-2 h-screen space-y-4 gap-4">
                <Revenues/>
                <Lostdeals/>
                <Quartergoals/>
            </div>

            {/* ------------ Middele ------------ */}
            <div>
                {/* This is for middle */}
            </div>

            {/* ------------ Bottom ------------ */}
            <div>
                {/* This is for bottom */}
            </div>
        </div>
    )
}