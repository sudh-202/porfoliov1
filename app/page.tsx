'use client';
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { profileData } from '@/constant';
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/Sidebar";
import About from "@/app/about/page";

export default function Home() {
  const { name, description } = profileData;
  const [text] = useTypewriter({
    words: [name],
    loop: 0, // loop indefinitely
    delaySpeed: 2000, // delay between each loop
    deleteSpeed: 50, // speed of deleting the text
  });

  return (
    <main className="my- lg:w-[92%] w-[82%] bottom-0 border-r-2 border-black flex flex-col justify-center items-center">
      <section className='text-center px-4 lg:py-48 py-20 justify-center items-center'>
        <h1 className=" lg:text-8xl text-[55px] font-bold flex-wrap lg:leading-[100px] leading-[60px] justify-center items-center">
          <span style={{opacity:0}}>1</span>
          {text}
        </h1>

        <p className="mt-8 text-base sm:text-lg lg:text-2xl flex-wrap px-4">{description}</p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button variant="default" className="bg-black text-white px-6 py-4 sm:px-10 sm:py-6 lg:px-10 lg:py-10 rounded-md text-lg sm:text-xl lg:text-2xl">GET IN TOUCH</Button>
          <Button variant="outline" className="border-2 border-black text-black px-6 py-4 sm:px-10 sm:py-6 lg:px-10 lg:py-10 rounded-md text-lg sm:text-xl lg:text-2xl">DOWNLOAD CV</Button>
        </div>

        <Sidebar />
      </section>
      <section className='lg:w-full w-full border-y-2 border-black'>
        <About />
      </section>
    </main>
  );
}
