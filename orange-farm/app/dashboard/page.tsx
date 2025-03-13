import Image from "next/image"
import greenIcon from "../../public/icons/Vector.svg"
import darkorangearrow from "../../public/icons/darkorangearrow.svg"


export default function Dashboard(){
    return(
        <div className="flex-none bg-white p-4 rounded-2xl w-full">

            {/* ------------ Top ------------ */}
            <div className="flex h-56">
                {/* Revenues */}
                <div className="flex-1 flex-col relative">
                    <h1 className="font-semibold text-lg text-textblack pb-8">Revenues</h1>

                    <div className="">
                        <div className="flex gap-4 pb-4">
                            <h1 className="text-5xl font-medium">15%</h1>
                            <Image src={greenIcon} alt="arrow" width={50} className="w-4"/>
                        </div>
                        <p className="text-sm">Increase compared to last week</p>
                    </div>

                    <button className="flex text-darkorange text-sm gap-2 absolute bottom-0">
                        Revenues report
                        <Image src={darkorangearrow} alt="forward-arrow" width={50} className="w-3"/>
                    </button>
                </div>

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