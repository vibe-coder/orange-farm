import Image from "next/image";
import logo from "../icons/Logo.svg"
import searchicon from "../icons/search.svg"
import dashboardIcon from"../icons/dashboard-icon.svg"
import Button from "../components/button";
import Data from "../components/ButtonData";
import gustavo from "../../public/icons/Gustavo.png"
import settings from "../../public/icons/settings.svg"
import logout from "../../public/icons/logout.svg"



export default function Sidebar() {
  return (
    <div className="bg-white w-full flex-none rounded-2xl p-6 flex-1">
      <div>
        
        {/* Brand logo */}
        <Image src={logo} alt="Orange-farm-logo" width={100} height={100} priority className="w-40" />

        {/* Search bar wrapper */}
        <div className="border flex px-4 py-2 mt-10 gap-2 rounded-full items-center">
          <Image src={searchicon} alt="search-icon" width={30} height={30} className="h-6 w-6" / >
          <input placeholder ="Search" className="w-full text-lg"/>
        </div>

        {/* Menu button wrapper */}
        <div className="mt-10 flex-col mb-32">
            {
              Data.map((data) =>{
                return(
                  <Button id={data.index} name={data.name} iconURL={data.url} key={data.index}/>
                )
              })
            }
        </div>

        {/* user wrapper */}
        <div className="">
          {/* user info */}
          <div className="flex gap-4 mb-4">
            <div className="rouded ">
              <Image src={gustavo} alt="user" width={50} />
            </div>
            <div>
              <p className="font-medium">Gustavo Xavier</p>
              <div className="bg-midorange rounded-full flex item-center justify-center">Admin</div>
            </div>
          </div>

          <button className="flex py-4 gap-2">
              <Image src={settings} alt="icon" width={30} height={30} className="w-6" />
              Settings
          </button>

          <button className="flex py-4 gap-2">
              <Image src={logout} alt="icon" width={30} height={30} className="w-6 fill-darkred" />
              Log out
          </button>
        </div>
      </div>
    </div>
  );
} 