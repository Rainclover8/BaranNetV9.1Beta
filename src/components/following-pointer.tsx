"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "../../node_modules/next/link";

interface card {
  url?: string;
  title: string;
  desc: string;
  time: string;
  link:string;
  sub_title:string;
}

export function CardDemo({ url, title, desc, time, link, sub_title }: card) {
  return (
    <div className="max-w-xs w-full group/card">
      <Link
      target={"_blank"}
      href={link || '/'}
      >
      <div
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}
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
            <p className="font-normal text-base text-gray-50 relative z-10">
              {title}
            </p>
            <p className="text-sm text-gray-400">{time}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {sub_title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {desc}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
}