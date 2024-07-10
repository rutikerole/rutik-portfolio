import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experieance";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden overflow-clip mx-auto sm:px-10 px-5">
      <div className=" w-full max-w-7xl ">
        <FloatingNav navItems={navItems}/>
        <Hero /> 
        <Grid />
        <RecentProject />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
