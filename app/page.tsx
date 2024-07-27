"use client"
import { ThreeDCardDemo } from "@/components/Card";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CustomizedTimeline from "@/components/Timeline";
import { FloatingNav, } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome} from "react-icons/fa";
import Title from "@/components/Title";


export default function Home() {
  
  return (
   
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Title title="Skills" />
        <Skills />
        <Title title="Projects" />
        <ThreeDCardDemo title="Temple Trading Hub" description="a place for temple students to trade stuff safely" image="/project_one.png"  />
        <Title title="Timeline"/>
        <CustomizedTimeline />
      </div>
    </main>
  );
}
