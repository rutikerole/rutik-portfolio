import React from 'react';
import { Spotlight } from './ui/Spotlight';
import Logo from '../public/rutik_logo.png'
import Image from 'next/image';

function Hero() {
  return (
    <div className='pb-20 pt-26'>
     
     <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
     </div>
     
     <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center "> {/* absolute top-0 left-0 */}
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

          
           <Image src={Logo} alt='logo' className='h-80 w-80 p-2 m-2' />
           <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Greetings! I&apos;m Rutik, a dedicated React.js Developer situated in India.</p>

           <a href='#about'>
            <button className="mt-2 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-60 md:mt-10">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
               Show My Work
              </span>
            </button>
           </a>

        </div>
       </div>
     </div>

     

    </div>
  );
}

export default Hero;
