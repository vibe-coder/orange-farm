import Image from "next/image";
import logo from "../../icons/Logo.svg"
import searchicon from "../../icons/search.svg"
import dashboardIcon from"../../icons/dashboard-icon.svg"


export default function Sidebar() {
  return (
    <div className="bg-white h-full w-72 rounded-2xl p-6">
      <div>
        <Image src={logo} alt="Orange-farm-logo" width={100} height={100} priority className="w-40" />

        {/* Search bar wrapper */}
        <div className="border flex px-4 py-2 mt-10 gap-2 rounded-full items-center">
          <Image src={searchicon} alt="search-icon" width={30} height={30} className="h-6 w-6" / >
          <input placeholder ="Search" className="w-full text-lg"/>
        </div>

        {/* Menu button wrapper */}
        <div className="mt-10">
          <button className="flex">
            <Image src={dashboardIcon} alt="dashvoard-icon" width={10} height={10} className="w-6"/>
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
} 