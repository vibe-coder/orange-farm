"use client"

import darkorangearrow from "../../public/icons/darkorangearrow.svg"
import Image from "next/image"
import BasicGauges from "./gauge"



export default function Quartergoals(){
    return(
        <div className="bg-white col-span-2 flex-col p-4 p-4 rounded-2xl h-60 gap-4 relative">
            <h1 className="font-semibold text-lg text-textblack text-center">Quarter goal</h1>

            <div className="h-40 flex justify-center items-center">
                <BasicGauges/>
            </div>

            <div className="justify-self-center">
                <button className="flex place-self-center text-darkorange text-sm gap-2">
                    All goals
                    <Image src={darkorangearrow} alt="forward-arrow" width={50} className="w-3"/>
                </button>
            </div>
        </div>
    )
}