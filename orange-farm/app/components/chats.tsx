"use client"

import BadgeAvatars from "./avatarbadge"
import { customerWithMessage } from "./chatData"
import Image from "next/image"
import darkorangearrow from "../../public/icons/darkorangearrow.svg"

export default function Chats(){
    return(
        <div className="bg-white p-4 rounded-2xl">
            <h1 className="text-textblack font-bold text-lg">Chats</h1>
            {<p className="text-darkgray text-sm"> {customerWithMessage.length} unread messages</p>}

            <div className="pt-8 mb-8">
                <BadgeAvatars/>
            </div>

            <button className="flex text-darkorange text-sm gap-2 p-2">
                All Customers
                <Image src={darkorangearrow} alt="forward-arrow" width={50} className="w-3"/>
            </button>
        </div>
    )
}