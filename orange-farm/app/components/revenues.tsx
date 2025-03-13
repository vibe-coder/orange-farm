import Image from "next/image"
import greenIcon from "../../public/icons/Vector.svg"
import darkorangearrow from "../../public/icons/darkorangearrow.svg"




export default function Revenues(){
    return(
        <div className=" bg-darkorange p-4 rounded-2xl h-60 gap-4 grid-row-3 relative ">
            <h1 className="font-semibold text-lg text-textblack pb-8">Revenues</h1>

            <div>
                 <div className="flex gap-4 pb-4">
                    <h1 className="text-5xl font-medium">15%</h1>
                    <Image src={greenIcon} alt="arrow" width={50} className="w-4"/>
                </div>
                <p className="text-sm">Increase compared to last week</p>
            </div>

            <button className="flex absolute bottom-3 place-self-end bg-red text-darkorange text-sm gap-2">
                Revenues report
                <Image src={darkorangearrow} alt="forward-arrow" width={50} className="w-3"/>
            </button>
        </div>
    )
}