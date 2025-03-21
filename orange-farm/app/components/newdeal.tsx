import { newDealData } from "./newDealData"
import Image from "next/image"
import newdealicon from "../../public/icons/Newdeal.svg"

export default function NewDeal(){
    return(
        <div className="bg-white rounded-2xl p-4">
            <h1 className="font-bold text-lg mb-6">New Deal</h1>

            <div className="grid grid-cols-2 gap-2">
                {
                    newDealData.map((data) => {
                        return(
                            <div className="bg-lightorange flex gap-4 items-center rounded-xl p-2" key={data.key}>
                                <Image alt="new deal icon" width={30} height={30} src={newdealicon} />
                                <p className="text-sm text-darkorange font-medium">{data.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}