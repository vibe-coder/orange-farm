import Image from "next/image"
import darkorangearrow from "../../public/icons/darkorangearrow.svg"

export default function Lostdeals(){
    return(
        <div className="bg-white p-4 flex-col rounded-2xl h-60 gap-4 relative ">
            <h1 className="font-semibold text-lg text-textblack pb-8">Lost deals</h1>

            <div>
                 <div className="flex gap-4 pb-4">
                    <h1 className="text-5xl font-medium">5%</h1>
                    
                </div>
                <p className="text-sm pt-[-20px]  text-darkgray">You closed 96 out of 100 deals</p>
            </div>

            <button className="flex text-darkorange text-sm gap-2 absolute bottom-4">
                All deals
                <Image src={darkorangearrow} alt="forward-arrow" width={50} className="w-3"/>
            </button>
        </div>
    )
}