"use client";
import Image from "next/image";
import Link from "../../node_modules/next/link";

interface card {
  url?: string;
  title: string;
  desc: string;
  time: string;
  link:string;
  sub_title:string;
  textColor?:string;  
  // dark mode light mode için ektra bir belki bir şeyler || Hover olunca da bi düzenleme
}

export function CardDemo({ url, title, desc, time, link, sub_title, textColor }: card) {
  return (
    <div className="max-w-xs w-full group/card">
      <Link
      target={"_blank"}
      href={link || '/'}
      >
      <div
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition:"center" }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="deneme"
            src="/logo.png"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className={`font-normal text-base relative z-10 ${textColor? "text-black" : "text-white"} `}>
              {title}
            </p>
            <p className={`text-sm ${textColor? "text-black" : "text-white"} `}>{time}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className={`font-bold text-xl md:text-2xl relative z-10 ${textColor? "text-black" : "text-white"} `}>
            {sub_title}
          </h1>
          <p className={`font-normal text-sm  relative z-10 my-4 ${textColor ? "text-black" : "text-white"}`}>
            {desc}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
}