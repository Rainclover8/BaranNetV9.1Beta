"use client";

import { AuroraBackground } from "@/components/aurora-background";
import { FlipWords } from "@/components/flip-words";
import { CardDemo } from "@/components/following-pointer";
import { LampDemo } from "@/components/lamp";
import { ShootingStars } from "@/components/shooting-stars";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Button from "@/const/Button";
import Socials from "@/const/Socials";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const  words = ["Full Stack Web Developer", "UI/UX Enthusiast","Mobile Developer"]
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <AuroraBackground className=" bg-white dark:bg-black">
          <div className="md:flex justify-around items-center w-full h-full mt-24">
            <div className="text-center">
              <TextGenerateEffect
                duration={3}
                words="BARAN ÇİÇEK"
                className="lg:text-7xl md:text-4xl text-xl text-center z-[99] text-black dark:text-white"
              />
              <FlipWords words={words} className="lg:text-3xl md:text-xl font-mono text-black dark:text-white block ms-4 lg:text-start text-center p-0 m-0"/>
              
              <div className="lg:flex lg:flex-row mt-4 md:flex-col md:flex justify-center items-center gap-2">
                <Button
                  title="About Me"
                  className="px-6 py-2 mt-3 bg-black text-white dark:text-black dark:bg-white rounded-full z-[99999] cursor-pointer block relative mx-auto lg:mx-0 hover:scale-110 duration-200"
                  link="#about"
                />
                <div className="flex md:flex-1 items-center lg:justify-start justify-center mt-3 ">
                  <Socials
                    link="https://github.com/Rainclover8"
                    type="button"
                    icon={<FaGithub />}
                    className="rounded-full border-none text-black dark:text-white flex items-center justify-center"
                    classNameLink="relative hover:scale-110 duration-200 z-[999] lg:text-[40px] text-2xl"
                  />
                  <Socials
                    link="https://www.instagram.com/baranncicek19/"
                    type="button"
                    icon={<BiLogoInstagramAlt />}
                    className=" rounded-full border-none text-black dark:text-white flex items-center justify-center"
                    classNameLink="relative hover:scale-110 duration-200 z-[999] lg:text-[50px] text-3xl"
                  />
                  <Socials
                    link="https://x.com/baran08380241?s=21"
                    type="button"
                    icon={<FaSquareXTwitter />}
                    className=" rounded-full border-none text-black dark:text-white flex items-center justify-center"
                    classNameLink="relative hover:scale-110 duration-200 z-[999] lg:text-[40px] text-2xl"
                  />
                </div>
              </div>
            </div>
            <Image
              src="/logo.png"
              className="border-2 rounded-full backdrop-blur-3xl mt-4 mb-28"
              width={500}
              height={100}
              layout="intrinsic"
              alt="Logo"
            />
          </div>
        </AuroraBackground>
        <ShootingStars minSpeed={2} maxSpeed={8} />
      </div>
      <div className="mt-9" id="about">
        <LampDemo />
      </div>


      <div className="container mx-auto mt-24">
        <h1 className="lg:text-4xl font-extrabold md:text-2xl text-xl text-black dark:text-white">Project's</h1>
        <div className="mt-12">
        <CardDemo url="https://www.doganinsesiturkiye.com/resim/upload/sb1855.jpg" title="Merhaba" desc="Deneme" time="02.04.2025"/>
        </div>
      </div>



      <div className="fixed top-5 right-5 z-[50]">
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full w-10 h-10 flex justify-center items-center duration-200"
        >
          {darkMode ? <MdLightMode/> : <MdDarkMode/>}
        </button>
      </div>
    </>
  );
}
