import Image from "next/image";
import logo from "../icons/Logo.svg"
import searchicon from "../icons/search.svg"
import dashboardIcon from"../icons/dashboard-icon.svg"
import Button from "../components/button";
import Data from "../components/ButtonData";
import gustavo from "../../public/icons/Gustavo.png"
import settings from "../../public/icons/settings.svg"
import logout from "../../public/icons/logout.svg"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';



export default function DesktopSidebar() {
  return (
    <div className=" h-full hidden md:block md:p-6 xl:visible rounded-2xl py-6 relative ">
        
        {/* Brand logo */}
        <div className="flex justify-between items-center md:ml-3">
          <Image src={logo} alt="Orange-farm-logo" width={100} height={100} priority className="w-40" />

          <div className="bg-offwhite hidden md:block rounded-l-xl absolute right-0 p-1 ">
            <NavigateBeforeIcon/>
          </div>
        </div>

        {/* Search bar wrapper */}
        <div className="border mx-6 md:mx-0 bg-transparent flex px-4 py-2 mt-5 gap-2 rounded-full items-center md:ml-3">
          <Image src={searchicon} alt="search-icon" width={30} height={30} className="h-6 w-6" / >
          <input placeholder ="Search" className="w-full md:w-48 text-lg bg-transparent"/>
        </div>

        {/* Menu button wrapper */}
        <div className="mt-5 flex-col">
            {
              Data.map((data) =>{
                return(
                  <Button id={data.index} name={data.name} iconURL={data.url} key={data.index}/>
                )
              })
            }
        </div>

        {/* user wrapper */}
        <div className="mt-20 mx-6 md:mx-0">
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
  );
} 