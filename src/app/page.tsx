"use client";

import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { AuroraBackground } from "@/components/aurora-background";
import ContactSection from "@/components/Contact";
// import DecryptedText from "@/components/DecryptedText";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { FlipWords } from "@/components/flip-words";
import { CardDemo } from "@/components/following-pointer";
import Loader from "@/components/Loader";
// import { LampDemo } from "@/components/lamp";
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
import { useRouter } from 'next/navigation';
import AiButton from "@/components/aiButton";

export default function Home() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [loader, setLoader] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Loader'ı 3 saniye boyunca göster
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timer); // Temizleme işlemi
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      document.documentElement.classList.toggle("dark", newDarkMode);
      return newDarkMode;
    });
  };
  const cards = [
    {
      link: "https://www.karasuacicikurtarici.com/",
      url: "/karasuKurtarici.jpg",
      title: "Karasu Oto Kurtacı",
      desc: "Karasu Oto Kurtarma | 7/24 Hızlı ve Güvenilir Çekici Hizmeti. Karasu, Sakarya ve çevresinde araç kurtarma hizmetleri için hemen arayın!",
      sub_title: "Oto Kurtarma",
      time: "10.12.2024",
    },
    // ! Back end patladı {
    //   link:"https://emojify-seven.vercel.app/",
    //   url:"/emojify.png",
    //   title:"Emojfy",
    //   desc:"Bu emojiler hangi şarkıya ait? 🎵🤔 Tahmin edebilir misiniz?",
    //   sub_title:"Emoji Questions",
    //   time:"19.04.2024",
    // },
    {
      link: "https://inspire-me-taupe.vercel.app/",
      url: "/inspire.png",
      title: "Inspire Me",
      desc: "İlham verici İngilizce sözler sunan modern ve minimalist bir uygulama. Günlük motivasyonunuzu alın!",
      sub_title: "Motivasyon Uygulaması",
      time: "19.01.2025",
    },
    {
      link: "https://planner-ai-eta.vercel.app/",
      url: "/planner.png",
      title: "Study Planner",
      desc: "Sınav hazırlıklarınız için kişiselleştirilmiş bir çalışma programı oluşturun. Planlayın, takip edin ve hedeflerinize ulaşın!",
      sub_title: "Çalışma Planlayıcı",
      time: "20.01.2025",
    },
    {
      link: "https://nurcancicek.com/",
      url: "/nurcanciceklogo.png",
      title: "Dr. Psikolojik Danışman Nurcan Çiçek",
      desc: "Psikolojik danışmanlık ve terapi hizmetleri ile çocuk, ergen, yetişkin ve evlilik terapileri hakkında bilgi alın.",
      sub_title: "Psikolojik Danışman",
      time: "07.02.2025",
      textColor: "black"
    },

  ];

  if (darkMode === null) return null;

  return (
    <>
      <div className="">


        {loader ? (
          <div className="flex justify-center items-center h-screen bg-red-50">
            <Loader />
          </div>
        ) : (
          <div className="">
            {
              isOpen?(
              <div className="fixed right-10 bottom-10 z-[99999]" onClick={() => setIsOpen(false)}>
                <AiButton name="Baran" />
              </div>
              ) :(
                 <div className="ai-agent relative z-[99999]">
              <div className="fixed right-10 bottom-10 z-[99999]">
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/pmXHR0lKLPDcbsMTxkD0_"
                  className="h-[500px] z-[99999] rounded-xl"
                  width="100%"
                  frameBorder="-1"
                ></iframe>
                <div className="mt-10 " onClick={() => setIsOpen(true)}>
                  <AiButton name="Kapat" />
                </div>
              </div>
            </div>
              )
            }
           
            <div className={`${darkMode ? "dark" : ""} overflow-hidden`}>
              <AuroraBackground className="bg-white dark:bg-black">
                <div className="md:flex justify-evenly items-center w-full max-h-full mt-24">
                  <div className="px-2">
                    <Image
                      src={darkMode ? "/barandark.jpg" : "/barandarklogo.jpg"}
                      className="border-2 rounded-full backdrop-blur-3xl mb-7 shadow-2xl shadow-black dark:shadow-purple-200 md:mx-0 mx-auto"
                      width={350}
                      height={100}
                      layout="intrinsic"
                      alt="Logo"
                      onLoad={() => setLoader(false)}
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
                        "Full Stack Web Developer...",
                        "UI/UX Enthusiast",
                        "Mobile Developer",
                      ]}
                      className="lg:text-3xl md:text-xl text-black dark:text-white block ms-4 lg:text-start text-center p-0 m-0 font-playwrite"
                    />

                    <div className="lg:flex lg:flex-row  md:flex-col md:flex justify-center items-center gap-2 mb-3">
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
                      "Born in Trabzon and currently living in Bursa, I'm passionate about crafting seamless web and mobile experiences. I specialize in UI/UX design and enjoy bringing ideas to life with innovative and user-friendly designs.",
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
                  {cards && cards.map((card, id) => {
                    return (
                      <span key={id}>
                        <CardDemo
                          link={card.link}
                          url={card.url}
                          title={card.title}
                          desc={card.desc}
                          sub_title={card.sub_title}
                          time={card.time}
                          textColor={card.textColor}
                        />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <FeaturesSectionDemo />
            </div>
            <div>
              {/* FORM */}
              <ContactSection />
            </div>
            <div className="fixed top-5 right-5 z-[999]">
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full w-10 h-10 flex justify-center items-center duration-200 "
              >
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
