import Image from "next/image";
import logo from "../../icons/Logo.svg"
import searchicon from "../../icons/search.svg"


export default function Sidebar() {
  return (
    <div className="bg-white h-full w-72 rounded-2xl p-6">
      <div>
        <Image src={logo} alt="Orange-farm-logo" width={100} height={100} priority className="w-40" />

        <div className="border flex p-4 gap-2 rounded-full items-center">
          <Image src={searchicon} alt="search-icon" width={30} height={30} className="h-6 w-6" / >
          <input placeholder ="Search" className="w-full text-lg"/>
        </div>
      </div>
    </div>
  );
}