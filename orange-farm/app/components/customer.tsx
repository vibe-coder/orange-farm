import CustomizedMenus from "./customizedmenu"



export default function Customers(){
    return(
        <div className="bg-white p-2 rounded-2xl h-60">
            <div className="p-2 flex justify-between">
                <h1 className="font-bold text-lg">Customers</h1>
                <CustomizedMenus/>
            </div>
        </div>
    )
}