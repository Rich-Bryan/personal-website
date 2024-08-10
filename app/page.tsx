"use client"
import { ThreeDCardDemo } from "@/components/Card";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CustomizedTimeline from "@/components/Timeline";
import { FloatingNav, } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome} from "react-icons/fa";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { navItems } from "@/lib/data";



export default function Home() {
  
  return (
   
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <Projects />
        <CustomizedTimeline />
        <Footer />
      </div>
    </main>
  );
}
