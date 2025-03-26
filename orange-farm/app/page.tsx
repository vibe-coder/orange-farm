import Sidebar from "./sidebar/sidebar";
import Dashboard from "./dashboard/page";




export default function Home() {
  return (
    <div className="bg-offwhite text-black w-full h-lvh overflow-hidden">
      <main className="h-full overflow-scroll no-scrollbar relative">
          <div className=" overflow-scroll h-full p-4 w-full flex-none fixed ">
            <Sidebar/>
          </div>

          <div className=" no-scrollbar w-[190%] flex">
            <div className="w-screen overflow-y-scroll no-scrollbar z-10 p-4 bg-offwhite">
              <Dashboard/>
            </div>
          </div>
      </main>
    </div>
  );
}
