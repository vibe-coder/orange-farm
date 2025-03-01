import Footer from "./components/footer";
import Sidebar from "./sidebar/sidebar";




export default function Home() {
  return (
    <div className="bg-offwhite text-black">
      <main className="h-lvh pl-4 pt-4 bg-lightgreen  bg-red">
        
        <div className="bg-darkorange mb-2">
          <Sidebar/>
        </div>

        <Footer/>
      </main>
    </div>
  );
}
