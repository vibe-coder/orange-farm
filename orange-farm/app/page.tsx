import Sidebar from "./sidebar/sidebar";
import Dashboard from "./dashboard/page";




export default function Home() {
  return (
    <div className="bg-offwhite text-black w-full h-lvh overflow-hidden">
      <main className="pl-4 py-4 h-full overflow-scroll flex gap-4">
          <div className=" overflow-scroll w-92 flex-none">
            <Sidebar/>
          </div>

          <div className="overflow-scroll w-full flex-none pr-4">
            <Dashboard/>
          </div>
      </main>
    </div>
  );
}
