import Image from "next/image"
import greenIcon from "../../public/icons/Vector.svg"
import darkorangearrow from "../../public/icons/darkorangearrow.svg"
import { Luckiest_Guy } from "next/font/google"




export default function Revenues(){
    return(
        <div className="bg-white lg:grow p-4 flex-col rounded-2xl h-60 gap-4 relative ">
            <h1 className="font-semibold text-lg text-textblack pb-8">Revenues</h1>

            <div>
                 <div className="flex gap-4 pb-4">
                    <h1 className="text-5xl font-medium">15%</h1>
                    <Image src={greenIcon} alt="arrow" width={50} className="w-4"/>
                </div>
                <p className="text-sm pt-[-20px] text-darkgray">Increase compared to last week</p>
            </div>

            <button className="flex text-darkorange text-sm gap-2 absolute bottom-4">
                Revenues report
                <Image src={darkorangearrow} alt="forward-arrow" width={50} className="w-3"/>
            </button>
        </div>
    )
}