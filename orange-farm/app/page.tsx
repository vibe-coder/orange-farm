import Sidebar from "./sidebar/sidebar";
import Dashboard from "./dashboard/page";
import SwipeSidebar from "./sidebar/swipesidebar";
import Header from "./components/header"
import ResponsiveAppBar from "./components/header";




export default function Home() {
  return (
    <div className="bg-offwhite text-black w-screen h-lvh overflow-hidden">
      <main className="h-full overflow-scroll no-scrollbar relative">
          <SwipeSidebar/>
          
          <div className="bg-white py-2">
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
