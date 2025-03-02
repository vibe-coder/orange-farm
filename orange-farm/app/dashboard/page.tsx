import Image from "next/image"
import greenIcon from "../../public/icons/Vector.svg"


export default function Dashboard(){
    return(
        <div className="flex-none w-full">
            {/* Top */}
            <div className="flex">
                {/* Revenues */}
                <div className="bg-white flex-1">
                    <h1>Revenues</h1>
                    <div>
                        <div className="flex">
                            <h1>51%</h1>
                            <Image src={greenIcon} alt="arrow" width={50} />
                        </div>
                    </div>
                </div>

                {/* Lost deals */}
            </div>

            {/* Middele */}
            <div>
                This is for middle
            </div>

            {/* Bottom */}
            <div>
                This is for bottom
            </div>
        </div>
    )
}