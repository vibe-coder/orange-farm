import Sidebar from "./sidebar/sidebar";
import Dashboard from "./dashboard/page";




export default function Home() {
  return (
    <div className="bg-offwhite text-black w-full h-lvh overflow-hidden">
      <main className="h-full overflow-scroll no-scrollbar relative">
          <div className=" overflow-scroll h-full p-4 w-full flex-none fixed ">
            <Sidebar/>
          </div>

          <div className=" overflow-x-scroll  snap-center scroll-smooth snap-x 
          no-scrollbar snap-mandatory w-[190%] flex ">
            <div className=" z-30 w-[190%] flex justify-end">
              <div className="w-screen no-scrollbar z-20 p-4 bg-offwhite">
                <Dashboard/>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
