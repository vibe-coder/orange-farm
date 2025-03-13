import Image from "next/image"
import greenIcon from "../../public/icons/Vector.svg"
import darkorangearrow from "../../public/icons/darkorangearrow.svg"
import Revenues from "../components/revenues"
import Lostdeals from "../components/lost"


export default function Dashboard(){
    return(
        <div className="h-screen w-full">

            {/* ------------ Top ------------ */}
            <div className="flex-col h-screen space-y-4 gap-4">
                {/* Revenues */}
                <Revenues/>
                <Lostdeals/>
                

                {/* Lost deals */}
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