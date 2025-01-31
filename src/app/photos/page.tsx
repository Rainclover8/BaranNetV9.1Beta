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
      title: "Istanbul",
      src: "/image3.jpg",
    },
    {
      title: "Pablo",
      src: "/image4.jpg",
    },
    {
      title: "A Tree",
      src: "/image5.jpg",
    },
  ];
  return (
    <section className="dark:bg-black bg-white min-h-screen w-full">
      <FocusCards cards={cards} key="focus-card"/>
    </section>
  );
}

export default page;
