import { FocusCards } from "@/components/focus-cards";
import React from "react";

function page() {
  const cards = [
    {
      title: "BAR123ANS12 ROOMS",
      src: "/barandark.jpg",
    },
    {
      title: "BARA123NS1 ROOMS1",
      src: "/barandarklogo.jpg",
    },
    {
      title: "BARA12312NS1 ROOMS1",
      src: "/barandarklogo.jpg",
    },
    {
      title: "BA22RANS2 ROOMS1",
      src: "/barandarklogo.jpg",
    },
    {
      title: "BARA11NS3 ROOMS1",
      src: "/barandarklogo.jpg",
    },
    {
      title: "BAR2ANS1 4ROOMS1",
      src: "/barandarklogo.jpg",
    },
  ];
  return (
    <section className="dark:bg-black bg-white min-h-screen w-full">
      <FocusCards cards={cards} key="focus-card"/>
    </section>
  );
}

export default page;
