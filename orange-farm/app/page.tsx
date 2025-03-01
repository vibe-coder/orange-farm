import Footer from "./components/footer";
import Sidebar from "./sidebar/sidebar";




export default function Home() {
  return (
    <div className="bg-offwhite text-black">
      <main className="h pl-4 pt-4">
        
        <div className="mb-2">
          <Sidebar/>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
