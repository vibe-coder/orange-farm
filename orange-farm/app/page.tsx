import Sidebar from "./sidebar/sidebar";
import Dashboard from "./dashboard/page";
import SwipeSidebar from "./sidebar/swipesidebar";




export default function Home() {
  return (
    <div className="bg-offwhite text-black w-full h-lvh overflow-hidden">
      <main className="h-full overflow-scroll no-scrollbar relative">
          <SwipeSidebar/>

          <div className=" overflow-x-scroll  snap-center scroll-smooth snap-x 
          no-scrollbar snap-mandatory flex ">
            <div className=" flex justify-end">
              <div className="w-screen no-scrollbar z-20 p-0 bg-offwhite">
                <Dashboard/>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
