import Sidebar from "./sidebar/sidebar";
import Dashboard from "./dashboard/page";
import SwipeSidebar from "./sidebar/swipesidebar";
import Header from "./components/header"
import ResponsiveAppBar from "./components/header";
import DesktopSidebar from "./sidebar/desktop-sidebar";




export default function Home() {
  return (
    <div className="bg-offwhite text-black w-screen md:p-4 h-lvh overflow-hidden">
          
      <main className="h-full overflow-scroll no-scrollbar md:flex relative">
          <SwipeSidebar/>

          <div className=" bg-white md:rounded-2xl">
            <DesktopSidebar/>
          </div>
          
          <div className="bg-white md:hidden py-2">
            <ResponsiveAppBar/>
          </div>

          <div className=" overflow-y-scroll  snap-center scroll-smooth snap-x 
          no-scrollbar snap-mandatory flex ">
            <div className=" flex justify-end">
              <div className=" no-scrollbar z-20 p-0 bg-offwhite">
                <Dashboard/>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
