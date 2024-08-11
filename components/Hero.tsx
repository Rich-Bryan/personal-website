import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './MagicButton';
import Link from 'next/link';
import { FaGithubSquare, FaLocationArrow } from "react-icons/fa";
import { BsArrowRight, BsLinkedin} from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='relative pb-20 pt-36' id="#about">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 pointer-events-none">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className='uppercase tracking-widest text-center text-blue-100 max-w-80'>
            Bryan Portfolio
          </h1>
          <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl ls:text-6xl'
            words="I am a Software Engineer"
          />
          <a href="#projects">
            <MagicButton title="Show My Work" icon={<FaLocationArrow />} position="right" />
          </a>
          <div className='flex flex-row items-center justify-center gap-5 mt-12'>
            <a className='bg-white text-black p-7 py-3 flex item-center dark:bg-white/10 dark:text-white/80 gap-2 rounded-full focus:scale-100 hover:scale-105 active:scale-100 transition'
             href="/BryanResume_Fultime_2025.pdf" download>
              Download CV <HiDownload className='relative top-1'/>
            </a>
            <a className='bg-white text-black p-5 py-4 flex item-center dark:bg-white/10 dark:text-white/80 gap-2 rounded-full focus:scale-100 hover:scale-105 active:scale-100 transition'
              href="https://www.linkedin.com/in/bryanli0820/" target="_blank" >
              <BsLinkedin />
            </a>
            <a className='bg-white text-black p-5 py-4 flex item-center dark:bg-white/10 dark:text-white/80 gap-2 rounded-full focus:scale-100 hover:scale-105 active:scale-100 transition'
            href="https://github.com/Rich-Bryan" target="_blank" >
            <FaGithub />
            </a>
          </div>
          
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
