import CustomizedMenus from "./customizedmenu"
import customerData from "./CustomerData"
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { EdgesensorHigh, Mode } from "@mui/icons-material";
import darkorangearrow from "../../public/icons/darkorangearrow.svg"
import Image from "next/image";


export default function Customers(){
    return(
        <div className="bg-white p-2 rounded-2xl">
            <div className="p-2 flex justify-between">
                <h1 className="font-bold text-lg">Customers</h1>
                <CustomizedMenus/>
            </div>
            
            <div className="flex-cols space-y-2 mb-6">
                {
                    customerData.map(data => {
                        return(
                            <div key={data.key} className="flex items-center rounded-xl justify-between p-2 active:bg-lightorange">
                                <div className="flex items-center gap-2"> 
                                    <Avatar alt={data.name} src={data.profilePictureURL} />
                                    <div>
                                        <p className="font-medium">{data.name}</p>
                                        <p className="text-darkgray text-sm">{data.company}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="hidden">
                                        <ChatBubbleOutlineOutlinedIcon sx={{color: '#734a00'}}/>
                                        <StarBorderRoundedIcon sx={{color: '#734a00'}}/>
                                        <ModeEditOutlineOutlinedIcon sx={{color: '#734a00'}}/>
                                    </div>

                                    <MoreVertIcon sx={{color: '#734a00'}}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <button className="flex text-darkorange text-sm gap-2 p-2">
                All Customers
                <Image src={darkorangearrow} alt="forward-arrow" width={50} className="w-3"/>
            </button>
        </div>
    )
}