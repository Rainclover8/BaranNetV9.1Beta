"use client";

import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { AuroraBackground } from "@/components/aurora-background";
import ContactSection from "@/components/Contact";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { FlipWords } from "@/components/flip-words";
import { CardDemo } from "@/components/following-pointer";
import { LampDemo } from "@/components/lamp";
import { ShootingStars } from "@/components/shooting-stars";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Button from "@/const/Button";
import Socials from "@/const/Socials";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      document.documentElement.classList.toggle("dark", newDarkMode);
      return newDarkMode;
    });
  };

  if (darkMode === null) return null;

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} overflow-hidden`}>
        <AuroraBackground className="bg-white dark:bg-black">
          <div className="md:flex justify-evenly items-center w-full max-h-full mt-24">
            <div className="">
              <Image
                src={darkMode ? "/barandark.jpg" : "/barandarklogo.jpg"}
                className="border-2 rounded-full backdrop-blur-3xl mb-7 shadow-2xl shadow-black dark:shadow-purple-200 md:mx-0 mx-auto md:w-full w-1/2"
                width={300}
                height={100}
                layout="intrinsic"
                alt="Logo"
              />
            </div>

            <div className="">
              <TextGenerateEffect
                duration={3}
                words="BARAN ÇİÇEK"
                className="lg:text-7xl md:text-4xl text-xl text-center z-[99] text-black dark:text-white"
              />
              <FlipWords
                words={[
                  "Full Stack Web Developer . . .",
                  "UI/UX Enthusiast",
                  "Mobile Developer",
                ]}
                className="lg:text-3xl md:text-xl text-black dark:text-white block ms-4 lg:text-start text-center p-0 m-0 font-playwrite"
              />

              <div className="lg:flex lg:flex-row  md:flex-col md:flex justify-center items-center gap-2">
                <Button
                  title="About Me"
                  className="px-6 py-2 mt-3 bg-black text-white dark:text-black dark:bg-white rounded-lg z-[99999] cursor-pointer block relative mx-auto lg:mx-0 hover:scale-110 duration-200 font-mono font-semibold italic"
                  link="#about"
                />
                <div className="flex md:flex-1 items-center lg:justify-start justify-center mt-3">
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
          </div>
        </AuroraBackground>
        <ShootingStars minSpeed={2} maxSpeed={8} />
      </div>

      <div className="mt-9" id="about">
        {/* <LampDemo /> */}
        <AnimatedTestimonials
          testimonials={[
            {
              quote:
                "Born in Trabzon and currently living in Bursa, I’m passionate about crafting seamless web and mobile experiences. I specialize in UI/UX design and enjoy bringing ideas to life with innovative and user-friendly designs.",
              name: "Baran Çiçek",
              designation: "Web & Mobile Developer | UI/UX Designer",
              src: "/IMG_2287.jpg",
            },
          ]}
        />
      </div>

      <div className="container mx-auto mt-24">
        <h1 className="lg:text-4xl font-extrabold md:text-2xl text-xl text-black dark:text-white">
          Projects
        </h1>
        <div className="mt-12 flex items-center gap-4 flex-wrap lg:justify-start justify-center">
          <div className="flex gap-5 lg:justify-start flex-wrap justify-center items-center w-full lg:p-0 p-4">
            <CardDemo
              link="https://www.karasuacicikurtarici.com/"
              url="/karasuKurtarici.jpg"
              title="Karasu Oto Kurtacı"
              desc="Karasu Oto Kurtarma | 7/24 Hızlı ve Güvenilir Çekici Hizmeti. Karasu, Sakarya ve çevresinde araç kurtarma hizmetleri için hemen arayın!"
              sub_title="Oto Kurtarma"
              time="10.12.2024"
            />
            <CardDemo
              link="https://emojify-seven.vercel.app/"
              url="/emojify.png"
              title="Emojfy"
              desc="Bu emojiler hangi şarkıya ait? 🎵🤔 Tahmin edebilir misiniz?"
              sub_title="Emoji Questions"
              time="19.04.2024"
            />
          </div>
        </div>
      </div>

      <div>
        <FeaturesSectionDemo />
      </div>
      <div className="">
        {/* FORM */}
        <ContactSection />
      </div>
      <div className="fixed top-5 right-5 z-[999px]">
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full w-10 h-10 flex justify-center items-center duration-200"
        >
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </>
  );
}
