import BarChart from "./barChart"




export default function TopStates(){
    return(
        <div className="bg-white p-4 rounded-2xl">
            <h1 className="text-lg font-bold">Top States</h1>
            <div>
                <BarChart/>
            </div>
        </div>
    )
}