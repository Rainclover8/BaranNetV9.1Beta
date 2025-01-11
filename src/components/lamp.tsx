"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-gray-950 to-gray-700 py-4 bg-clip-text text-center lg:text-4xl font-medium tracking-tight text-transparent dark:from-gray-200 dark:to-gray-500 md:text-xl font-mono container mx-auto dark:text-gray-100"
      >
        I'm a dedicated developer who thrives on solving complex problems and continuously learning new technologies. I’m a creative team player who enjoys collaborating with others and sharing knowledge.

        Born and raised in Bursa, Turkey, I have a deep passion for music, especially playing the guitar. In my free time, I explore new technologies, play volleyball, and immerse myself in coding projects. I also enjoy traveling, photography, and discovering innovative ways to bring ideas to life.

        Always ready for the next big challenge! 🌟
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-100 text-black dark:bg-gray-950 dark:text-white w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-pink-500 via-transparent to-transparent dark:from-[#4dd0e1] dark:via-transparent dark:to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-gray-100 dark:bg-gray-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-gray-100 dark:bg-gray-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-pink-500 dark:from-transparent dark:via-transparent dark:to-[#4dd0e1] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-gray-100 dark:bg-gray-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-gray-100 dark:bg-gray-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-pink-500 dark:bg-[#4dd0e1] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-pink-400 dark:bg-[#5eead4] blur-2xl"
        ></motion.div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
