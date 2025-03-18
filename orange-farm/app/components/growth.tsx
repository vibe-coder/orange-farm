import BasicArea from "./linechart"
import TimeCustomizedMenus from "./timecustomizedmenu";
import Avatar from '@mui/material/Avatar';
import customerData from "./CustomerData"
import maggiePicture from "../../public/icons/Maggie.png"

export default function Growth(){
    return(
        <div className=" space-y-4">
            <div className="bg-white p-4 rounded-2xl">
                <div className="flex justify-between">
                    <h1 className="text-lg font-bold">Growth</h1>
                    <TimeCustomizedMenus/>
                </div>
            
                <div className="flex items-center justify-center m-0">
                    <BasicArea/>
                </div>
            </div>

            <div>
                <div className="grid gap-4 grid-cols-2 ">
                    <div className="bg-white rounded-2xl h-36 p-4 grid grid-row-3 flex-1">
                        <h2 className="text-sm font-bold text-midgray row-span-10">Top month</h2>
                        <h1 className="font-bold text-darkorange text-xl">November</h1>
                        <h3 className="font-semibold text-orange -mt-1">2019</h3>
                    </div>

                    <div className="bg-white rounded-2xl h-36 p-4 grid grid-row-3 flex-1">
                        <h2 className="text-sm font-bold text-midgray row-span-10">Top year</h2>
                        <h1 className="font-bold text-darkorange text-xl">2023</h1>
                        <h3 className="font-light text-textblack -mt-1">96K sold so far</h3>
                    </div>
                    {
                    <div className="bg-white rounded-2xl w-full col-span-2 h-40 p-4 grid grid-row-3 flex-1">
                        <h2 className="text-sm font-bold mb-4 text-midgray">Top buyer</h2>
                        <Avatar alt="Maggie Johnson" src={maggiePicture} />
                        <div className="mt-1">
                            <h3 className="font-medium text-textblack text-sm mt-1">Maggie Johnson</h3>    
                            <p className="text-xs mt-1 text-midgray">Oasis Organic Inc.</p>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}