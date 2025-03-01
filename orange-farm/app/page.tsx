import Footer from "./components/footer";
import Sidebar from "./sidebar/sidebar";




export default function Home() {
  return (
    <div className="bg-offwhite text-black h-lvh overflow-hidden">
      <main className="pl-4 py-4 h-full">
        
        <div className="h-full overflow-scroll">
          <Sidebar/>
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  );
}
