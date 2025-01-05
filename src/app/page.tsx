"use client";

import { AuroraBackground } from "@/components/aurora-background";
import { LampDemo } from "@/components/lamp";
import { LinkPreview } from "@/components/link-preview";
import { ShootingStars } from "@/components/shooting-stars";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Button from "@/const/Button";
import Socials from "@/const/Socials";
import Image from "next/image";
import { useState } from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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

              <TextGenerateEffect
                duration={4}
                words="Full Stack Web Developer"
                className="lg:text-4xl md:text-xl font-mono text-black dark:text-white"
              />
              <div className="lg:flex lg:flex-row mt-4  md:flex-col md:flex justify-center items-center  gap-2 ">
              <Button
              title="About Me"
              className="text-start border px-6 py-2 bg-black text-white dark:text-black dark:bg-white rounded-full z-[99999] cursor-pointer block relative mx-auto lg:mx-0"
              onClick={() => alert("Hello World!")}
              />
             <div className="flex justify-center">
             <Socials link="https://primereact.org/dock/" type="button" icon={<FaGithub />} className="rounded-full border-none text-black dark:text-white flex items-center justify-center" classNameLink="relative z-[999] lg:text-[40px] text-2xl"/>
              <Socials link="https://primereact.org/dock/" type="button" icon={<BiLogoInstagramAlt />} className=" rounded-full border-none text-black dark:text-white flex items-center justify-center" classNameLink="relative z-[999] lg:text-[50px] text-3xl"/>
              <Socials link="https://primereact.org/dock/" type="button" icon={<FaSquareXTwitter />} className=" rounded-full border-none text-black dark:text-white flex items-center justify-center" classNameLink="relative z-[999] lg:text-[40px] text-2xl"/>
             </div>
              </div>
            </div>
            <Image
              src="/logo.png"
              className="border-2 rounded-full backdrop-blur-3xl mt-4 mb-7"
              width={500}
              height={100}
              layout="intrinsic"
              alt="Logo"
            />
          </div>
        </AuroraBackground>
        <ShootingStars />
       
      </div>
      <div className="mt-1">
        <LampDemo />
      </div>

      <LinkPreview url="https://www.tinkercad.com/things/22WbV3jeaKS-light">
        <span className="text-white font-extrabold text-center">
          Hover to Preview
        </span>
      </LinkPreview>
      <div className="fixed top-5 right-5 z-[50]">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
    </>
  );
}
